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
  Briefcase,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Download,
  Users,
  Inbox,
  ArrowUpDown,
  Filter,
  Trash2,
} from "lucide-react";

interface Submission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string | null;
  organization: string;
  role?: string | null;
  message?: string | null;
  hearAboutUs?: string | null;
  termsAccepted: boolean;
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

  const [deletingId, setDeletingId] = useState<string | null>(null);

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

  // Client-side filtered list
  const filteredSubmissions = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return submissions;
    return submissions.filter((item) => {
      const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
      const email = (item.email || "").toLowerCase();
      const org = (item.organization || "").toLowerCase();
      const role = (item.role || "").toLowerCase();
      const phone = (item.phoneNumber || "").toLowerCase();
      const hear = (item.hearAboutUs || "").toLowerCase();
      return (
        fullName.includes(q) ||
        email.includes(q) ||
        org.includes(q) ||
        role.includes(q) ||
        phone.includes(q) ||
        hear.includes(q)
      );
    });
  }, [submissions, searchQuery]);

  // Statistics
  const stats = useMemo(() => {
    const total = submissions.length;
    const uniqueOrgs = new Set(submissions.map((s) => s.organization.trim().toLowerCase())).size;
    const now = new Date();
    const last7Days = submissions.filter((s) => {
      const d = new Date(s.createdAt);
      return (now.getTime() - d.getTime()) / (1000 * 3600 * 24) <= 7;
    }).length;
    return { total, uniqueOrgs, last7Days };
  }, [submissions]);

  // Export to CSV
  const handleExportCSV = () => {
    if (!filteredSubmissions.length) return;
    const headers = [
      "ID",
      "First Name",
      "Last Name",
      "Email",
      "Phone Number",
      "Organization",
      "Role",
      "Message",
      "Heard About Us",
      "Terms Accepted",
      "Submitted At",
    ];

    const rows = filteredSubmissions.map((s) => [
      `"${s.id}"`,
      `"${s.firstName.replace(/"/g, '""')}"`,
      `"${s.lastName.replace(/"/g, '""')}"`,
      `"${s.email.replace(/"/g, '""')}"`,
      `"${(s.phoneNumber || "").replace(/"/g, '""')}"`,
      `"${s.organization.replace(/"/g, '""')}"`,
      `"${(s.role || "").replace(/"/g, '""')}"`,
      `"${(s.message || "").replace(/"/g, '""')}"`,
      `"${(s.hearAboutUs || "").replace(/"/g, '""')}"`,
      s.termsAccepted ? "Yes" : "No",
      `"${new Date(s.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `heyattrangi-contact-submissions-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 group cursor-pointer">
              <Image
                src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                alt="Hey Attrangi logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                Hey Attrangi
              </span>
            </Link>
            <span className="text-slate-300 font-light">|</span>
            <div className="flex items-center gap-2">
              <span className="bg-orange-100 text-[#FF6B00] text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Admin
              </span>
              <h1 className="text-sm sm:text-base font-bold text-slate-800 hidden sm:inline-block">
                Contact Submissions
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-95 rounded-lg transition-all cursor-pointer disabled:opacity-60"
              title="Refresh submissions"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin text-[#FF6B00]" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
            {filteredSubmissions.length > 0 && (
              <button
                onClick={handleExportCSV}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#FF6B00] hover:bg-orange-600 active:scale-95 rounded-lg shadow-xs transition-all cursor-pointer"
                title="Export submissions to CSV"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Export CSV</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center shrink-0">
              <Inbox className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Submissions</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{stats.total}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Organizations</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{stats.uniqueOrgs}</h3>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Past 7 Days</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-0.5">{stats.last7Days}</h3>
            </div>
          </div>
        </div>

        {/* Search & Sort Filter Bar */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, org..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-sm text-slate-900 placeholder-slate-400 rounded-xl border border-slate-200 focus:outline-none focus:border-[#FF6B00] transition-colors"
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

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>Sort:</span>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                className="bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#FF6B00] cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>
        </div>

        {/* Content Section: Table / Loading / Error / Empty */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          {loading ? (
            <div className="p-12 space-y-4">
              <div className="flex items-center justify-center gap-3 text-slate-500 text-sm">
                <span className="w-5 h-5 border-2 border-[#FF6B00] border-t-transparent rounded-full animate-spin"></span>
                <span>Loading submissions from MongoDB...</span>
              </div>
              <div className="space-y-3 max-w-2xl mx-auto pt-4">
                <div className="h-8 bg-slate-100 rounded-lg animate-pulse"></div>
                <div className="h-8 bg-slate-100 rounded-lg animate-pulse"></div>
                <div className="h-8 bg-slate-100 rounded-lg animate-pulse"></div>
              </div>
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
                  ? `No submissions matched your search query "${searchQuery}". Try searching for another name or organization.`
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
                    <th className="py-3.5 px-4 font-bold">Name</th>
                    <th className="py-3.5 px-4 font-bold">Email</th>
                    <th className="py-3.5 px-4 font-bold hidden md:table-cell">Phone</th>
                    <th className="py-3.5 px-4 font-bold">Organization</th>
                    <th className="py-3.5 px-4 font-bold hidden lg:table-cell">Role</th>
                    <th className="py-3.5 px-4 font-bold hidden xl:table-cell">Heard About Us</th>
                    <th className="py-3.5 px-4 font-bold">Submitted Date</th>
                    <th className="py-3.5 px-4 text-right font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                  {filteredSubmissions.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-orange-50/40 transition-colors duration-150 group"
                    >
                      <td className="py-3.5 px-4 font-semibold text-slate-900 whitespace-nowrap">
                        {item.firstName} {item.lastName}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <a
                          href={`mailto:${item.email}`}
                          className="text-slate-700 hover:text-[#FF6B00] transition-colors"
                        >
                          {item.email}
                        </a>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 hidden md:table-cell">
                        {item.phoneNumber ? (
                          <a href={`tel:${item.phoneNumber}`} className="hover:text-[#FF6B00]">
                            {item.phoneNumber}
                          </a>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-800">
                        {item.organization}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 hidden lg:table-cell">
                        {item.role || <span className="text-slate-400">—</span>}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap hidden xl:table-cell">
                        {item.hearAboutUs ? (
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                            {item.hearAboutUs}
                          </span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-xs text-slate-500">
                        {formatDate(item.createdAt)}
                      </td>
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

      {/* View Details Modal / Drawer */}
      {selectedSubmission && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-[#FF6B00] text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full tracking-wider">
                    Inquiry Details
                  </span>
                  <span className="text-xs text-slate-300">
                    ID: {selectedSubmission.id}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {selectedSubmission.firstName} {selectedSubmission.lastName}
                </h2>
                <p className="text-xs text-slate-300 mt-0.5">
                  {selectedSubmission.organization}
                  {selectedSubmission.role ? ` • ${selectedSubmission.role}` : ""}
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
                {selectedSubmission.phoneNumber && (
                  <a
                    href={`tel:${selectedSubmission.phoneNumber}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call ({selectedSubmission.phoneNumber})</span>
                  </a>
                )}
              </div>

              {/* Information Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50/80 p-4 rounded-xl border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Full Name</span>
                  <span className="text-slate-900 font-bold text-sm">
                    {selectedSubmission.firstName} {selectedSubmission.lastName}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Email Address</span>
                  <a href={`mailto:${selectedSubmission.email}`} className="text-[#FF6B00] font-medium text-sm hover:underline">
                    {selectedSubmission.email}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Phone Number</span>
                  <span className="text-slate-800 font-medium text-sm">
                    {selectedSubmission.phoneNumber || "Not provided"}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Organization</span>
                  <span className="text-slate-900 font-bold text-sm">
                    {selectedSubmission.organization}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Role / Position</span>
                  <span className="text-slate-800 font-medium text-sm">
                    {selectedSubmission.role || "Not provided"}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">How Heard About Us</span>
                  <span className="text-slate-800 font-medium text-sm">
                    {selectedSubmission.hearAboutUs || "Not specified"}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Terms Acceptance</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Accepted
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 font-semibold block uppercase tracking-wider text-[10px]">Submitted Date & Time</span>
                  <span className="text-slate-800 font-medium text-xs mt-0.5 block">
                    {formatDate(selectedSubmission.createdAt)}
                  </span>
                </div>
              </div>

              {/* Message Block */}
              <div>
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                  Message / Details
                </span>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-slate-800 text-sm leading-relaxed whitespace-pre-wrap font-normal">
                  {selectedSubmission.message ? (
                    selectedSubmission.message
                  ) : (
                    <span className="text-slate-400 italic">No additional message provided.</span>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 flex items-center justify-end">
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
