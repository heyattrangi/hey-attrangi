"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import InstitutionalFooter from "@/components/InstitutionalFooter";

// Scalable FAQ Data (Matching Image 1 / Homepage FAQs)
const FAQS_DATA = [
  {
    question: "What if I'm not satisfied with the support?",
    answer: (
      <>
        We're committed to your mental wellness journey. If you feel your current specialist isn't the right fit, or if you're experiencing technical issues, please contact our support team. See our{" "}
        <Link href="/terms?section=refund" className="underline font-medium hover:text-orange-600 transition-colors">
          Refund Policy
        </Link>{" "}
        for more details.
      </>
    )
  },
  {
    question: "How do I book a session with a therapist?",
    answer: "Booking is simple through our platform. You can browse our network of licensed professionals, view their availability, and schedule a session that fits your calendar. It all stays in your Hey Attrangi account."
  },
  {
    question: "How long does a Mind Check take?",
    answer: "In Mind Matrix, each Mind Check takes about three minutes. A quiet space helps you settle in without rushing."
  },
  {
    question: "Can I take a Mind Check more than once?",
    answer: "Yes. You can start another Mind Check in Mind Matrix whenever it feels helpful. If you’re noticing patterns over time, spacing visits by a few weeks can make shifts easier to see. That’s a personal rhythm, not a requirement."
  },
  {
    question: "Can I access Hey Attrangi on multiple devices?",
    answer: "Absolutely. Hey Attrangi is a web-based platform accessible from any modern browser on your computer, tablet, or smartphone. Your progress and session notes are securely synced across all your devices."
  },
  {
    question: "Is my mental health data private and secure?",
    answer: "Your privacy is our highest priority. Personal information, session notes, and anything you share in a check-in are protected with strong encryption. We never sell your individual data or share it without your clear consent."
  }
];

export default function InstitutionsPage() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    role: "",
    message: "",
    hearAbout: "",
    acceptTerms: false
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setContactForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setContactForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!contactForm.firstName.trim() || !contactForm.lastName.trim() || !contactForm.email.trim() || !contactForm.organization.trim()) {
      setFormStatus("error");
      setFormMessage("Please fill out all required fields marked with *.");
      return;
    }

    if (!emailRegex.test(contactForm.email.trim())) {
      setFormStatus("error");
      setFormMessage("Please enter a valid email address.");
      return;
    }

    if (!contactForm.acceptTerms) {
      setFormStatus("error");
      setFormMessage("Please accept the Terms to continue.");
      return;
    }

    setFormStatus("submitting");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: contactForm.firstName.trim(),
          lastName: contactForm.lastName.trim(),
          email: contactForm.email.trim(),
          phoneNumber: contactForm.phoneNumber.trim(),
          organization: contactForm.organization.trim(),
          role: contactForm.role.trim(),
          message: contactForm.message.trim(),
          hearAboutUs: contactForm.hearAbout,
          termsAccepted: contactForm.acceptTerms,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormMessage(data.message || "Thank you! Our friendly team has received your message and will get back to you shortly.");
        setContactForm({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          organization: "",
          role: "",
          message: "",
          hearAbout: "",
          acceptTerms: false
        });
      } else {
        setFormStatus("error");
        setFormMessage(data.message || "Failed to submit your message. Please try again.");
      }
    } catch {
      setFormStatus("error");
      setFormMessage("Network error. Please check your connection or email us directly at support@heyattrangi.com.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden font-sans selection:bg-[#FF6B00]/20 selection:text-[#FF6B00]">
      {/* ========================================================================= */}
      {/* 1️⃣ TOP HERO SECTION (Two-Column Layout Matching Image 2) */}
      {/* ========================================================================= */}
      <section className="relative bg-[#FAFAFA] pt-6 pb-16 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Universal Floating Top Navbar */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <Navbar currentPath="/institutions" />
          </div>

          {/* Two-Column Hero Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Left-Aligned Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 flex flex-col items-start text-left"
            >
              {/* Main Heading */}
              <h1 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "40px",
                  color: "#020618"
                }}
                className="w-full max-w-[608px] tracking-tight mb-5"
              >
                A stronger wellbeing system around every student.
              </h1>

              {/* Description */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="w-full max-w-[608px] mb-8"
              >
                Continuous digital support, professional care, and meaningful insights—all designed to work with your existing ecosystem.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center w-full sm:w-auto">
                <a
                  href="#sales-contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B00] hover:bg-orange-600 active:scale-[0.98] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Talk to Our Team
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Large Rounded Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 w-full"
            >
              <div className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.08)] border border-slate-100 bg-slate-100 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3]">
                <img
                  src="https://res.cloudinary.com/dxoiluua8/image/upload/v1788173537/Logo_1_geqovc.png"
                  alt="Students on campus studying with books and laptop"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2️⃣ THE INSTITUTIONAL REALITY SECTION (Matching Image 2) */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white select-text selection:bg-slate-900/15 selection:text-inherit">
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="flex items-center justify-center text-center mb-12 sm:mb-16">
            <h2 
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: "#020618"
              }}
              className="text-3xl sm:text-[40px] sm:leading-[48px] max-w-[605px] w-full flex items-center justify-center text-center"
            >
              The institutional reality
            </h2>
          </div>

          {/* 3 Statistic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
            
            {/* Card 1: Green */}
            <div 
              style={{ backgroundColor: "#9dd4a6" }}
              className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)] min-h-[220px] sm:min-h-[240px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-4xl sm:text-[44px] font-extrabold text-[#32673a] tracking-tight leading-none">
                  1:500
                </span>
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000000"
                }}
                className="w-full max-w-[210px] min-h-[40px] flex items-center justify-center text-center mt-auto"
              >
                Policy benchmark /<br />resource requirement
              </p>
            </div>

            {/* Card 2: Blue */}
            <div 
              style={{ backgroundColor: "#a0d2e8" }}
              className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)] min-h-[220px] sm:min-h-[240px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-4xl sm:text-[44px] font-extrabold text-[#32637a] tracking-tight leading-none">
                  34.34
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#4e829a] mt-1.5">
                  lakh+ calls
                </span>
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000000"
                }}
                className="w-full max-w-[210px] min-h-[40px] flex items-center justify-center text-center mt-auto"
              >
                Massive demand for<br />accessible support
              </p>
            </div>

            {/* Card 3: Purple */}
            <div 
              style={{ backgroundColor: "#d8bcf7" }}
              className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between items-center text-center shadow-[0_12px_32px_rgba(0,0,0,0.06)] min-h-[220px] sm:min-h-[240px] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex-1 flex flex-col justify-center items-center">
                <span className="text-4xl sm:text-[44px] font-extrabold text-[#6a3f91] tracking-tight leading-none">
                  86.4%
                </span>
                <span className="text-sm sm:text-base font-semibold text-[#8b63b2] mt-1.5 lowercase">
                  unaware
                </span>
              </div>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "20px",
                  color: "#000000"
                }}
                className="w-full max-w-[210px] min-h-[40px] flex items-center justify-center text-center mt-auto"
              >
                Low awareness of available<br />crisis support
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3️⃣ WHY INSTITUTES CHOOSE US SECTION */}
      {/* ========================================================================= */}
      <section id="why-institutes-choose-us" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <div className="mb-14 sm:mb-16 text-left">
            <h2 
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#020618] tracking-tight leading-[1.12]"
            >
              Why institutes<br />
              choose us
            </h2>
          </div>

          {/* 5-Column Feature Row (Horizontal Grid on Desktop, Centered in each column) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8 items-start">
            
            {/* Feature 01 (Orange-to-White Vertical Gradient) */}
            <div className="flex flex-col items-center text-center">
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 7.5vw, 108px)",
                  lineHeight: "1",
                  background: "linear-gradient(180deg, #E87726 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
                className="select-none tracking-tight block mb-3"
              >
                01
              </span>
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000"
                }}
                className="mb-2 text-center"
              >
                Always-on support
              </h3>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="max-w-[190.4px] text-center"
              >
                Support that continues beyond counselling sessions and college hours.
              </p>
            </div>

            {/* Feature 02 (Gray-to-White Vertical Gradient) */}
            <div className="flex flex-col items-center text-center">
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 7.5vw, 108px)",
                  lineHeight: "1",
                  background: "linear-gradient(180deg, #BFC3C5 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
                className="select-none tracking-tight block mb-3"
              >
                02
              </span>
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000"
                }}
                className="mb-2 text-center"
              >
                Student Privacy
              </h3>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="max-w-[190.4px] text-center"
              >
                Students' personal conversations and wellbeing data stay private from your institution.
              </p>
            </div>

            {/* Feature 03 (Gray-to-White Vertical Gradient) */}
            <div className="flex flex-col items-center text-center">
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 7.5vw, 108px)",
                  lineHeight: "1",
                  background: "linear-gradient(180deg, #BFC3C5 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
                className="select-none tracking-tight block mb-3"
              >
                03
              </span>
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000"
                }}
                className="mb-2 text-center"
              >
                Built for Student Wellbeing
              </h3>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="max-w-[190.4px] text-center"
              >
                Complements your existing counselling and student-support services.
              </p>
            </div>

            {/* Feature 04 (Gray-to-White Vertical Gradient) */}
            <div className="flex flex-col items-center text-center">
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 7.5vw, 108px)",
                  lineHeight: "1",
                  background: "linear-gradient(180deg, #BFC3C5 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
                className="select-none tracking-tight block mb-3"
              >
                04
              </span>
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000"
                }}
                className="mb-2 text-center"
              >
                Affordable at Scale
              </h3>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="max-w-[190.4px] text-center"
              >
                Customizable plans starting at ₹4,000 per student per year.
              </p>
            </div>

            {/* Feature 05 (Gray-to-White Vertical Gradient) */}
            <div className="flex flex-col items-center text-center">
              <span 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(80px, 7.5vw, 108px)",
                  lineHeight: "1",
                  background: "linear-gradient(180deg, #BFC3C5 0%, #FFFFFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
                className="select-none tracking-tight block mb-3"
              >
                05
              </span>
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000"
                }}
                className="mb-2 text-center"
              >
                Track Wellbeing Over Time
              </h3>
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "24px",
                  color: "#62748E"
                }}
                className="max-w-[190.4px] text-center"
              >
                Understand campus-wide wellbeing trends across semesters and academic years.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4️⃣ WHAT'S INCLUDED SECTION */}
      {/* ========================================================================= */}
      <section id="whats-included" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-semibold text-slate-500 uppercase tracking-[0.18em] mb-5 shadow-sm">
              ONE CONNECTED ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-tight mb-4">
              What&apos;s Included
            </h2>
            <p className="text-[16px] text-slate-500 font-normal leading-relaxed">
              Everything included across the Atrangi ecosystem.
            </p>
          </div>

          {/* Unified Container — 4 Columns with vertical dividers (matching Figma reference) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              
              {/* Student Column */}
              <div className="p-8 lg:p-10 flex flex-col">
                <h3 className="font-semibold text-slate-900 text-[22px] tracking-tight mb-8">Student</h3>
                <ul className="space-y-5 text-[15px] text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                    <span>AI Companion</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                    <span>Voice Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                    <span>Assessments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-emerald-500 shrink-0" />
                    <span>Wellbeing Activities</span>
                  </li>
                </ul>
              </div>

              {/* Professional Column */}
              <div className="p-8 lg:p-10 flex flex-col">
                <h3 className="font-semibold text-slate-900 text-[22px] tracking-tight mb-8">Professional</h3>
                <ul className="space-y-5 text-[15px] text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-orange-500 shrink-0" />
                    <span>4 Counselling Sessions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-orange-500 shrink-0" />
                    <span>Professional Support</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-orange-500 shrink-0" />
                    <span>Safety & Escalation</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="w-[18px] text-center shrink-0">—</span>
                  </li>
                </ul>
              </div>

              {/* Institution Column */}
              <div className="p-8 lg:p-10 flex flex-col">
                <h3 className="font-semibold text-slate-900 text-[22px] tracking-tight mb-8">Institution</h3>
                <ul className="space-y-5 text-[15px] text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 shrink-0" />
                    <span>Institutional Dashboard</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 shrink-0" />
                    <span>Anonymous Insights</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 shrink-0" />
                    <span>Privacy Controls</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-blue-500 shrink-0" />
                    <span>Custom Programme</span>
                  </li>
                </ul>
              </div>

              {/* Community Column */}
              <div className="p-8 lg:p-10 flex flex-col">
                <h3 className="font-semibold text-slate-900 text-[22px] tracking-tight mb-8">Community</h3>
                <ul className="space-y-5 text-[15px] text-slate-600 flex-1">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-purple-500 shrink-0" />
                    <span>Student Workshops</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-purple-500 shrink-0" />
                    <span>Faculty Training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-[18px] h-[18px] text-purple-500 shrink-0" />
                    <span>Parent Sessions</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="w-[18px] text-center shrink-0">—</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Single Unified Contact Sales Button */}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              onClick={() => document.getElementById('sales-contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Contact Sales</span>
              <span className="text-base leading-none">→</span>
            </button>
          </div>

          {/* Institutional Per Student Cost & Contract Terms Card */}
          <div className="mt-8 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              
              {/* Left Column: Per Student Cost */}
              <div className="md:col-span-5 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-3">
                  Per Student Cost
                </span>
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm sm:text-base font-semibold text-slate-600">
                    Optimized up from
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] tracking-tight">
                    ₹3,996
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-2">
                  for fully-loaded support
                </p>
              </div>

              {/* Right Column: Contract Terms */}
              <div className="md:col-span-7 pt-6 md:pt-0 md:pl-8 lg:pl-12 flex flex-col justify-center">
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-4">
                  Contract Terms
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Engagement Period */}
                  <div className="bg-[#FAF9F6] rounded-xl p-4 border border-slate-100/80">
                    <p className="text-xs font-semibold text-slate-500 mb-1">
                      Engagement Period
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      Yearly contract, renewable
                    </p>
                  </div>

                  {/* Payment Structure */}
                  <div className="bg-[#FAF9F6] rounded-xl p-4 border border-slate-100/80">
                    <p className="text-xs font-semibold text-slate-500 mb-1">
                      Payment Structure
                    </p>
                    <p className="text-sm font-bold text-slate-900">
                      70% upfront payment
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5️⃣ CONTACT US SECTION (Matching Image 1) */}
      {/* ========================================================================= */}
      <section id="sales-contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact info */}
            <div className="lg:col-span-5 space-y-6">
              <h2 
                style={{
                  fontFamily: "'Roboto', sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  lineHeight: "120%",
                  color: "#000000"
                }}
                className="max-w-[564px] tracking-tight"
              >
                Contact us
              </h2>
              
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                Our friendly team would love to hear from you.
              </p>

              {/* Direct Contact Links */}
              <div className="pt-4 space-y-5 text-sm font-medium text-slate-700">
                <a 
                  href="mailto:support@heyattrangi.com" 
                  className="flex items-center gap-3.5 hover:text-[#FF6B00] transition-colors"
                >
                  <Mail className="w-5 h-5 text-slate-700 shrink-0" strokeWidth={1.75} />
                  <span>support@heyattrangi.com</span>
                </a>
                <a 
                  href="tel:+919552324069" 
                  className="flex items-center gap-3.5 hover:text-[#FF6B00] transition-colors"
                >
                  <Phone className="w-5 h-5 text-slate-700 shrink-0" strokeWidth={1.75} />
                  <span>+91 95523 24069</span>
                </a>
                <div className="flex items-start gap-3.5 text-slate-700">
                  <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" strokeWidth={1.75} />
                  <span className="leading-snug">1344, Jai Jitendra Bunglow, Vanasiri Nagar, Sattur, Dharwad, Karnataka, India – 580009</span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Form */}
            <div className="lg:col-span-7">
              {formStatus === "success" ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-emerald-900">Message Received!</h3>
                  <p className="text-sm text-emerald-700 leading-relaxed">{formMessage}</p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="text-xs font-bold text-emerald-800 underline mt-2 inline-block cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-5">
                  {formStatus === "error" && (
                    <div className="p-3.5 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 font-medium">
                      {formMessage}
                    </div>
                  )}

                  {/* Row 1: First name & Last name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">First name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">Last name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">Phone number</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={contactForm.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Your Organization & Your Role */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">Your Organization *</label>
                      <input
                        type="text"
                        name="organization"
                        value={contactForm.organization}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1.5">Your Role</label>
                      <input
                        type="text"
                        name="role"
                        value={contactForm.role}
                        onChange={handleInputChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-800 mb-1.5">How can we help you? (optional )</label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Type your message..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:border-[#FF6B00] resize-none transition-colors"
                    ></textarea>
                  </div>

                  {/* Row 5: Radio Options (2 Columns) */}
                  <div className="pt-1">
                    <label className="block text-xs font-semibold text-slate-800 mb-2.5">How did you hear about us?</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6">
                      {[
                        { id: "first-choice", label: "First choice" },
                        { id: "second-choice", label: "Second choice" },
                        { id: "third-choice", label: "Third choice" },
                        { id: "fourth-choice", label: "Fourth choice" },
                        { id: "fifth-choice", label: "Fifth choice" },
                        { id: "other", label: "Other" }
                      ].map((item) => (
                        <label key={item.id} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none">
                          <input
                            type="radio"
                            name="hearAbout"
                            value={item.label}
                            checked={contactForm.hearAbout === item.label}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00] border-slate-300"
                          />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Row 6: Terms Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={contactForm.acceptTerms}
                        onChange={handleInputChange}
                        className="w-4 h-4 rounded text-[#FF6B00] focus:ring-[#FF6B00] border-slate-300"
                      />
                      <span>
                        I accept the{" "}
                        <Link href="/terms" className="underline hover:text-[#FF6B00]">
                          Terms
                        </Link>
                      </span>
                    </label>
                  </div>

                  {/* Row 7: Compact Orange Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="px-8 py-2.5 rounded-lg bg-[#E65C00] hover:bg-orange-600 active:scale-[0.98] text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6️⃣ FAQ SECTION (Matching Image 1 / Homepage FAQs) */}
      {/* ========================================================================= */}
      <section 
        id="faqs"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FFFDF9 60%, #FFF8EF 100%)"
        }}
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-100 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            
            {/* Left Column: Heading and View All FAQs button */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left select-text">
              <h2 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "40px",
                  color: "#020618"
                }}
                className="text-center lg:text-left select-text mb-8"
              >
                Managing Your<br />Account FAQs
              </h2>

              <Link
                href="/terms"
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-50 border border-slate-300 hover:border-slate-800 text-slate-800 px-6 py-2.5 rounded-full font-bold text-xs transition-all duration-200"
              >
                View All FAQs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right Column: Clean Accordion Rows with Divider Lines */}
            <div className="lg:col-span-8 divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {FAQS_DATA.map((faq, index) => {
                const isOpen = openFAQIndex === index;
                return (
                  <div 
                    key={index} 
                    className="transition-colors duration-200 hover:bg-slate-50/30"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full py-5 px-1 flex items-center justify-between text-left transition-colors duration-200 cursor-pointer"
                    >
                      <span className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex-shrink-0 text-slate-400 group-hover:text-orange-500 transition-colors duration-200">
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
                            isOpen ? "rotate-180 text-[#FF6B00]" : "text-slate-400"
                          }`} 
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-1 pb-5 pt-1 text-slate-500 text-xs sm:text-sm leading-relaxed select-text">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7️⃣ INSTITUTIONAL FOOTER SECTION */}
      {/* ========================================================================= */}
      <InstitutionalFooter />
    </div>
  );
}
