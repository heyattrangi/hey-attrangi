"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  RefreshCw,
  Eye,
  X,
  Mail,
  Phone,
  Building2,
  Calendar,
  AlertCircle,
  Download,
  Inbox,
  ArrowUpDown,
  Trash2,
} from "lucide-react";

interface Submission {
  id: string;
  instituteName?: string | null;
  instituteType?: string | null;
  otherInstituteType?: string | null;
  mobileNumber?: string | null;
  email: string;
  // Legacy fields
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  organization?: string | null;
  role?: string | null;
  message?: string | null;
  hearAboutUs?: string | null;
  termsAccepted?: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AdminHeyAttrangiPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin/contact-submissions?sort=${sortOrder}`);
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissions(data.data || []);
      } else {
        setError(data.message || "Failed to load contact submissions.");
      }
    } catch {
      setError("Network error while connecting to the database. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSubmission = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this submission? This cannot be undone.")) {
      return;
    }
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/contact-submissions?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmissions((prev) => prev.filter((s) => s.id !== id));
        if (selectedSubmission?.id === id) {
          setSelectedSubmission(null);
        }
      } else {
        alert(data.message || "Failed to delete submission.");
      }
    } catch {
      alert("Error deleting submission. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, [sortOrder]);

  // Helpers to resolve unified institute data
  const getInstituteName = (s: Submission) => {
    return s.instituteName || s.organization || `${s.firstName || ""} ${s.lastName || ""}`.trim() || "N/A";
  };

  const getInstituteTypeDisplay = (s: Submission) => {
    if (s.instituteType === "Other" && s.otherInstituteType) {
      return `Other — ${s.otherInstituteType}`;
    }
    return s.instituteType || s.role || "N/A";
  };

  const getMobileNumber = (s: Submission) => {
    return s.mobileNumber || s.phoneNumber || "";
  };

  // Client-side filtered list
  const filteredSubmissions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return submissions;
    return submissions.filter((item) => {
      const name = getInstituteName(item).toLowerCase();
      const type = getInstituteTypeDisplay(item).toLowerCase();
      const email = (item.email || "").toLowerCase();
      const phone = getMobileNumber(item).toLowerCase();
      return (
        name.includes(q) ||
        type.includes(q) ||
        email.includes(q) ||
        phone.includes(q)
      );
    });
  }, [submissions, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = submissions.length;
    const uniqueInstitutes = new Set(submissions.map((s) => getInstituteName(s).toLowerCase())).size;
    const now = new Date();
    const last7Days = submissions.filter((s) => {
      const d = new Date(s.createdAt);
      return (now.getTime() - d.getTime()) / (1000 * 3600 * 24) <= 7;
    }).length;
    return { total, uniqueInstitutes, last7Days };
  }, [submissions]);

  // Export to CSV
  const handleExportCSV = () => {
    if (!filteredSubmissions.length) return;
    const headers = [
      "ID",
      "Institute Name",
      "Type of Institute",
      "Other Institute Type",
      "Mobile Number",
      "Email Address",
      "Submitted At",
    ];

    const rows = filteredSubmissions.map((s) => [
      `"${s.id}"`,
      `"${getInstituteName(s).replace(/"/g, '""')}"`,
      `"${(s.instituteType || s.role || "").replace(/"/g, '""')}"`,
      `"${(s.otherInstituteType || "").replace(/"/g, '""')}"`,
      `"${getMobileNumber(s).replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${new Date(s.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `hey_attrangi_institution_inquiries_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-800 antialiased font-sans">
      {/* Top Admin Navbar */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                alt="Hey Attrangi Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                Hey Attrangi
              </span>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-orange-100 text-[#FF6B00]">
              ADMIN
            </span>
            <span className="text-slate-400 font-light hidden sm:inline">|</span>
            <span className="text-sm font-semibold text-slate-700 hidden sm:inline">
              Institution Contact Submissions
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors cursor-pointer disabled:opacity-50"
              title="Refresh submissions"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#FF6B00]" : "text-slate-500"}`} />
              <span className="hidden xs:inline">Refresh</span>
            </button>

            <button
              onClick={handleExportCSV}
              disabled={filteredSubmissions.length === 0}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#FF6B00] hover:bg-orange-600 text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer disabled:opacity-40 disabled:pointer-events-none"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* KPI / Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
          {/* Card 1: Total Submissions */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Total Submissions
              </span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {loading ? "—" : stats.total}
              </span>
            </div>
          </div>

          {/* Card 2: Unique Institutes */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Institutes
              </span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {loading ? "—" : stats.uniqueInstitutes}
              </span>
            </div>
          </div>

          {/* Card 3: Past 7 Days */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Past 7 Days
              </span>
              <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {loading ? "—" : stats.last7Days}
              </span>
            </div>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by institute, type, email, mobile..."
              className="w-full pl-9.5 pr-4 py-2 text-xs sm:text-sm bg-slate-50/80 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF6B00] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-500">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
              className="text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-[#FF6B00] cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Submissions Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
          {loading ? (
            <div className="p-16 text-center space-y-3">
              <div className="w-10 h-10 border-3 border-[#FF6B00] border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="text-xs font-semibold text-slate-500">Loading submissions from MongoDB...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mx-auto">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Unable to load submissions</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">{error}</p>
              <button
                onClick={fetchSubmissions}
                className="px-4 py-2 bg-[#FF6B00] hover:bg-orange-600 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                Try Again
              </button>
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="p-16 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mx-auto border border-slate-100">
                <Inbox className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-slate-800">
                {searchQuery ? "No matching submissions found" : "No contact submissions yet"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                {searchQuery
                  ? `No submissions matched your search query "${searchQuery}". Try searching for another name or keyword.`
                  : "When potential clients submit the Contact Us form on your website, their inquiries will automatically appear here."}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-bold text-[#FF6B00] underline cursor-pointer"
                >
                  Clear search query
                </button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200/80 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3.5 px-4 font-bold">Institute Name</th>
                    <th className="py-3.5 px-4 font-bold">Type of Institute</th>
                    <th className="py-3.5 px-4 font-bold">Mobile Number</th>
                    <th className="py-3.5 px-4 font-bold">Email Address</th>
                    <th className="py-3.5 px-4 font-bold">Submitted Date & Time</th>
                    <th className="py-3.5 px-4 text-right font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  {filteredSubmissions.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-orange-50/40 transition-colors duration-150 group"
                    >
                      {/* Institute Name */}
                      <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span>{getInstituteName(item)}</span>
                        </div>
                      </td>

                      {/* Institute Type */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                          {getInstituteTypeDisplay(item)}
                        </span>
                      </td>

                      {/* Mobile Number */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-700 font-medium">
                        {getMobileNumber(item) ? (
                          <a
                            href={`tel:${getMobileNumber(item)}`}
                            className="hover:text-[#FF6B00] transition-colors"
                          >
                            {getMobileNumber(item)}
                          </a>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      {/* Email Address */}
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <a
                          href={`mailto:${item.email}`}
                          className="text-slate-700 hover:text-[#FF6B00] transition-colors"
                        >
                          {item.email}
                        </a>
                      </td>

                      {/* Submitted Date */}
                      <td className="py-3.5 px-4 whitespace-nowrap text-xs text-slate-500">
                        {formatDate(item.createdAt)}
                      </td>

                      {/* Actions */}
                      <td className="py-3.5 px-4 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedSubmission(item)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-[#FF6B00] hover:text-white border border-slate-200 hover:border-[#FF6B00] rounded-lg shadow-2xs transition-all cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>View Details</span>
                          </button>
                          <button
                            onClick={() => handleDeleteSubmission(item.id)}
                            disabled={deletingId === item.id}
                            className="inline-flex items-center justify-center p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                            title="Delete submission"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Footer count indicator */}
          {!loading && !error && filteredSubmissions.length > 0 && (
            <div className="py-3 px-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>
                Showing <strong>{filteredSubmissions.length}</strong> of <strong>{submissions.length}</strong> total submissions
              </span>
              {searchQuery && (
                <span>Filtered by search: &ldquo;{searchQuery}&rdquo;</span>
              )}
            </div>
          )}
        </div>
      </main>

      {/* View Details Modal */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#FF6B00] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                    Institution Inquiry
                  </span>
                  <span className="text-xs text-slate-300">
                    ID: {selectedSubmission.id}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {getInstituteName(selectedSubmission)}
                </h2>
                <p className="text-xs text-slate-300 mt-0.5">
                  {getInstituteTypeDisplay(selectedSubmission)}
                </p>
              </div>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Quick Action Contact Bar */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${selectedSubmission.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-50 hover:bg-orange-100 text-[#FF6B00] text-xs font-bold transition-colors cursor-pointer border border-orange-200/60"
                >
                  <Mail className="w-4 h-4" />
                  <span>Reply via Email ({selectedSubmission.email})</span>
                </a>
                {getMobileNumber(selectedSubmission) && (
                  <a
                    href={`tel:${getMobileNumber(selectedSubmission)}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call ({getMobileNumber(selectedSubmission)})</span>
                  </a>
                )}
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/80 p-4 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Institute Name</span>
                  <span className="text-slate-900 font-bold text-sm">
                    {getInstituteName(selectedSubmission)}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Type of Institute</span>
                  <span className="text-slate-900 font-bold text-sm">
                    {getInstituteTypeDisplay(selectedSubmission)}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Mobile Number</span>
                  <span className="text-slate-800 font-medium text-sm">
                    {getMobileNumber(selectedSubmission) || "Not provided"}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Email Address</span>
                  <a href={`mailto:${selectedSubmission.email}`} className="text-[#FF6B00] font-medium text-sm hover:underline">
                    {selectedSubmission.email}
                  </a>
                </div>

                <div className="sm:col-span-2">
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Submitted Date & Time</span>
                  <span className="text-slate-800 font-medium text-xs mt-0.5 block">
                    {formatDate(selectedSubmission.createdAt)}
                  </span>
                </div>
              </div>

              {/* Legacy message if present */}
              {selectedSubmission.message && (
                <div>
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                    Additional Message
                  </span>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-slate-800 text-sm leading-relaxed whitespace-pre-wrap font-normal">
                    {selectedSubmission.message}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-between">
              <button
                onClick={() => handleDeleteSubmission(selectedSubmission.id)}
                disabled={deletingId === selectedSubmission.id}
                className="px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Submission</span>
              </button>

              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
