import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund, Cancellation, Rescheduling & Billing Policy | Hey Attrangi",
  description:
    "Refund, Cancellation, Rescheduling & Billing Policy governing commercial transactions, subscriptions, therapy appointments, and refunds on the Hey Attrangi platform.",
};

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "purpose", label: "1. Purpose" },
  { id: "scope", label: "2. Scope" },
  { id: "subscription-plans", label: "3. Subscription Plans" },
  { id: "billing-cycle", label: "4. Billing Cycle" },
  { id: "payment-methods", label: "5. Payment Methods" },
  { id: "automatic-renewal", label: "6. Automatic Renewal" },
  { id: "price-changes", label: "7. Price Changes" },
  { id: "taxes", label: "8. Taxes" },
  { id: "cancellation-by-user", label: "9. Cancellation by User" },
  { id: "cancellation-by-company", label: "10. Cancellation by the Company" },
  { id: "effect-of-cancellation", label: "11. Effect of Cancellation" },
  { id: "appointment-booking", label: "12. Appointment Booking" },
  { id: "patient-cancellations", label: "13. Patient Cancellations" },
  { id: "rescheduling-by-patient", label: "14. Rescheduling by Patient" },
  { id: "therapist-cancellations", label: "15. Therapist Cancellations" },
  { id: "rescheduling-by-therapist", label: "16. Rescheduling by Therapist" },
  { id: "patient-no-show", label: "17. Patient No-Show" },
  { id: "partial-sessions", label: "18. Partial Sessions" },
  { id: "technical-failures", label: "19. Technical Failures" },
  { id: "general-refund-policy", label: "20. General Refund Policy" },
  { id: "refunds-for-subscriptions", label: "21. Refunds for Subscriptions" },
  { id: "refunds-for-therapy-appointments", label: "22. Refunds for Therapy Appointments" },
  { id: "refunds-for-technical-failures", label: "23. Refunds for Technical Failures" },
  { id: "refunds-for-payment-errors", label: "24. Refunds for Payment Errors" },
  { id: "promotional-offers", label: "25. Promotional Offers" },
  { id: "exceptional-circumstances", label: "26. Exceptional Circumstances" },
  { id: "payment-processing", label: "27. Payment Processing" },
  { id: "payment-failures", label: "28. Payment Failures" },
  { id: "duplicate-payments", label: "29. Duplicate Payments" },
  { id: "disputed-transactions", label: "30. Disputed Transactions" },
  { id: "fraud-prevention", label: "31. Fraud Prevention" },
  { id: "billing-communications", label: "32. Billing Communications" },
  { id: "institutional-customers", label: "33. Institutional Customers" },
  { id: "complaints", label: "34. Complaints" },
  { id: "changes-to-this-policy", label: "35. Changes to This Policy" },
  { id: "contact-us", label: "Contact Us" },
];

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans scroll-smooth">
      <Navigation currentPath="/refund-policy" />

      {/* Main Content Area */}
      <main className="flex-grow pt-8 sm:pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Desktop Sticky Table of Contents (Left Sidebar) */}
            <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-24 bg-white rounded-2xl border border-gray-200/80 shadow-xs p-5 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 pb-2 border-b border-slate-100">
                On This Page
              </h3>
              <nav className="space-y-1 text-xs">
                {SECTIONS.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block py-1 px-2 rounded-lg text-slate-600 hover:text-[#FF6B00] hover:bg-orange-50/60 transition-colors truncate"
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Main Policy Document Article */}
            <article className="lg:col-span-8 xl:col-span-9 bg-white rounded-[28px] sm:rounded-[32px] shadow-xs border border-gray-100 p-6 sm:p-10 md:p-14 lg:p-16">
              
              {/* Header Section */}
              <div className="mb-10 border-b border-gray-100 pb-8 text-center md:text-left">
                <span className="text-orange-500 font-bold tracking-widest text-xs sm:text-sm uppercase mb-3 block">
                  Legal Document
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#1a2b3c] tracking-tight leading-tight mb-4 uppercase">
                  REFUND, CANCELLATION, RESCHEDULING &amp; BILLING POLICY
                </h1>
                <div className="text-xs sm:text-sm text-gray-500 space-y-1 font-medium">
                  <p>Effective Date: 23 July 2026</p>
                  <p>Last Updated: 23 July 2026</p>
                </div>
              </div>

              {/* Mobile Quick Table of Contents (Collapsible Details) */}
              <div className="lg:hidden mb-10 bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                <details className="group">
                  <summary className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center justify-between cursor-pointer list-none select-none">
                    <span>Table of Contents ({SECTIONS.length} Sections)</span>
                    <span className="text-[#FF6B00] text-xs font-semibold group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
                    {SECTIONS.map((sec) => (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className="py-1 px-2 text-slate-600 hover:text-[#FF6B00] truncate block"
                      >
                        {sec.label}
                      </a>
                    ))}
                  </div>
                </details>
              </div>

              {/* Policy Body */}
              <div className="prose prose-slate max-w-none text-gray-600 space-y-10 leading-relaxed text-sm sm:text-base">
                
                {/* INTRODUCTION */}
                <section id="introduction" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    Introduction
                  </h2>
                  <p>
                    This Refund, Cancellation, Rescheduling &amp; Billing Policy governs all commercial transactions across the Hey Attrangi platform, including subscriptions, therapy bookings, appointment cancellations, rescheduling, billing, payment failures, refunds, credits, institutional billing, and payment disputes.
                  </p>
                  <p>
                    This policy is published in compliance with the Consumer Protection Act, 2019, the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and other applicable laws of the Republic of India.
                  </p>
                  <p>
                    This policy forms an integral part of our Terms of Service and should be read alongside that document.
                  </p>
                  <p>
                    If you have any questions, please contact us using the details at the end.
                  </p>
                </section>

                {/* 1. PURPOSE */}
                <section id="purpose" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    1. Purpose
                  </h2>
                  <p>The purpose of this policy is to:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Establish clear and transparent standards for refunds, cancellations, rescheduling, and billing across all Platform services.</li>
                    <li>Protect your rights in accordance with the Consumer Protection Act, 2019.</li>
                    <li>Ensure fairness and consistency in the treatment of commercial transactions.</li>
                    <li>Provide clarity regarding the allocation of therapist time, platform resources, and service availability.</li>
                    <li>Establish procedures for handling payment disputes and billing inquiries.</li>
                    <li>Provide a framework for exceptional circumstances.</li>
                  </ul>
                </section>

                {/* 2. SCOPE */}
                <section id="scope" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    2. Scope
                  </h2>
                  <p>This policy applies to all commercial transactions conducted through the Platform, including:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Subscription plans for AI wellness services.</li>
                    <li>Individual therapy appointments.</li>
                    <li>Therapy session packages.</li>
                    <li>Institutional subscriptions and enterprise agreements.</li>
                    <li>Promotional offers and discounted services.</li>
                    <li>Any other paid services offered through the Platform.</li>
                  </ul>
                  <p>
                    This policy applies to all users, patients, and caregivers who make payments through the Platform.
                  </p>
                  <p className="font-semibold text-slate-800">This policy does not apply to:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Services provided free of charge.</li>
                    <li>Services provided under institutional agreements where separate terms apply.</li>
                    <li>Transactions governed by separate contractual agreements that expressly supersede this policy.</li>
                  </ul>
                </section>

                {/* 3. SUBSCRIPTION PLANS */}
                <section id="subscription-plans" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    3. Subscription Plans
                  </h2>
                  <p>
                    The Platform offers various subscription plans for AI wellness services, therapy sessions, and other paid features.
                  </p>
                  <p>
                    Subscription plans, pricing, and features are described on the Platform and may be updated from time to time.
                  </p>
                  <p>
                    By subscribing to a plan, you agree to pay the applicable fees for the subscription period.
                  </p>
                  <p>
                    The specific terms of your subscription, including fees, billing frequency, and features, will be specified at the time of purchase.
                  </p>
                </section>

                {/* 4. BILLING CYCLE */}
                <section id="billing-cycle" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    4. Billing Cycle
                  </h2>
                  <p>
                    Subscriptions are billed in advance on a recurring basis, typically monthly or annually.
                  </p>
                  <p>
                    The billing date is the date on which the subscription was activated, unless otherwise specified.
                  </p>
                  <p>
                    The billing cycle continues until the subscription is cancelled in accordance with this policy.
                  </p>
                  <p>
                    Invoices are issued at the beginning of each billing cycle and are payable immediately.
                  </p>
                </section>

                {/* 5. PAYMENT METHODS */}
                <section id="payment-methods" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    5. Payment Methods
                  </h2>
                  <p>Payments may be made using the following methods:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Credit cards and debit cards (Visa, Mastercard, RuPay, and other supported networks).</li>
                    <li>UPI (Unified Payments Interface).</li>
                    <li>Net banking.</li>
                    <li>Digital wallets.</li>
                    <li>Any other payment methods supported by the Platform.</li>
                  </ul>
                  <p>
                    We may add or remove payment methods from time to time.
                  </p>
                  <p>
                    You are responsible for ensuring that your payment information is accurate and up to date. We are not liable for payment failures caused by inaccurate or outdated payment information.
                  </p>
                </section>

                {/* 6. AUTOMATIC RENEWAL */}
                <section id="automatic-renewal" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    6. Automatic Renewal
                  </h2>
                  <p>
                    Subscriptions automatically renew by default at the end of each billing cycle.
                  </p>
                  <p>
                    We will charge the payment method on file at the beginning of each billing cycle.
                  </p>
                  <p>
                    You may cancel automatic renewal at any time through the Platform&apos;s account settings.
                  </p>
                  <p>
                    Cancellation of automatic renewal prevents future renewals but does not entitle you to a refund for the current subscription period.
                  </p>
                  <p>
                    We will provide reasonable notice of upcoming renewals, including the applicable fees.
                  </p>
                </section>

                {/* 7. PRICE CHANGES */}
                <section id="price-changes" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    7. Price Changes
                  </h2>
                  <p>
                    We may change subscription fees upon reasonable notice.
                  </p>
                  <p>
                    Notice of price changes will be provided at least thirty (30) days before the change takes effect.
                  </p>
                  <p>
                    Price changes apply to subsequent billing cycles and do not affect the current subscription period.
                  </p>
                  <p>
                    If you do not agree to a price change, you may cancel your subscription before the change takes effect.
                  </p>
                </section>

                {/* 8. TAXES */}
                <section id="taxes" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    8. Taxes
                  </h2>
                  <p>
                    All fees are exclusive of applicable taxes, including but not limited to Goods and Services Tax (GST).
                  </p>
                  <p>
                    Applicable taxes will be added to the invoice at the prevailing rate.
                  </p>
                  <p>
                    You are responsible for all taxes applicable to your subscription and use of the Services.
                  </p>
                  <p>
                    Tax invoices will be issued in accordance with applicable tax laws.
                  </p>
                </section>

                {/* 9. CANCELLATION BY USER */}
                <section id="cancellation-by-user" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    9. Cancellation by User
                  </h2>
                  <p>
                    You may cancel your subscription at any time through the Platform&apos;s account settings.
                  </p>
                  <p>
                    Cancellation takes effect at the end of the current billing cycle.
                  </p>
                  <p className="font-semibold text-slate-800">Upon cancellation:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>You continue to have access to the Services for the remainder of the current subscription period.</li>
                    <li>You will not be charged for subsequent billing cycles.</li>
                    <li>No refund will ordinarily be issued for the current subscription period.</li>
                    <li>Your data will be retained in accordance with our Data Retention &amp; Deletion Policy.</li>
                  </ul>
                </section>

                {/* 10. CANCELLATION BY THE COMPANY */}
                <section id="cancellation-by-company" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    10. Cancellation by the Company
                  </h2>
                  <p>We may cancel your subscription immediately, with or without notice, if:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>You violate our Terms of Service or any applicable policy.</li>
                    <li>You engage in prohibited conduct.</li>
                    <li>You fail to pay fees when due.</li>
                    <li>Required by court order or applicable law.</li>
                    <li>You pose a risk to the Platform or other users.</li>
                    <li>We discontinue the Platform or Services.</li>
                  </ul>
                  <p>
                    We may also cancel a subscription for any reason upon reasonable notice.
                  </p>
                </section>

                {/* 11. EFFECT OF CANCELLATION */}
                <section id="effect-of-cancellation" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    11. Effect of Cancellation
                  </h2>
                  <p className="font-semibold text-slate-800">Upon cancellation of a subscription:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Your access to paid features ceases at the end of the current billing cycle.</li>
                    <li>You remain liable for any fees or charges incurred prior to cancellation.</li>
                    <li>Your data is retained in accordance with our Data Retention &amp; Deletion Policy.</li>
                    <li>Provisions that by their nature should survive termination shall survive.</li>
                  </ul>
                </section>

                {/* 12. APPOINTMENT BOOKING */}
                <section id="appointment-booking" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    12. Appointment Booking
                  </h2>
                  <p>
                    You may book therapy appointments through the Platform.
                  </p>
                  <p>
                    Appointment booking is subject to the availability of licensed therapists.
                  </p>
                  <p>
                    We do not guarantee that any specific therapist or time slot will be available.
                  </p>
                </section>

                {/* 13. PATIENT CANCELLATIONS */}
                <section id="patient-cancellations" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    13. Patient Cancellations
                  </h2>
                  <p>
                    You may cancel a therapy appointment at any time through the Platform&apos;s appointment management features.
                  </p>
                  <p>
                    <strong>Cancellation Without Penalty:</strong> You may cancel appointments at least twenty-four (24) hours before the scheduled session without penalty.
                  </p>
                  <p>
                    <strong>Late Cancellation:</strong> Cancellation requests made less than twenty-four (24) hours before the scheduled session may be treated according to this policy and operational requirements. We may, in our sole discretion, decide to impose a cancellation fee or charge the full session fee.
                  </p>
                  <p>
                    The twenty-four (24) hour cancellation window is designed to respect the therapist&apos;s time and allow for rescheduling with other patients.
                  </p>
                </section>

                {/* 14. RESCHEDULING BY PATIENT */}
                <section id="rescheduling-by-patient" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    14. Rescheduling by Patient
                  </h2>
                  <p>
                    You may reschedule a therapy appointment through the Platform&apos;s appointment management features.
                  </p>
                  <p>
                    Rescheduling requests made at least twenty-four (24) hours before the scheduled session will be accommodated subject to therapist availability.
                  </p>
                  <p>
                    Rescheduling requests made less than twenty-four (24) hours before the scheduled session may be treated as a cancellation and rebooking, subject to the cancellation terms above.
                  </p>
                </section>

                {/* 15. THERAPIST CANCELLATIONS */}
                <section id="therapist-cancellations" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    15. Therapist Cancellations
                  </h2>
                  <p>
                    If a licensed therapist cancels a confirmed appointment, you will have the option to choose either:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>A full refund of the session fee; or</li>
                    <li>A rescheduled appointment at no additional cost.</li>
                  </ul>
                  <p>
                    We will make reasonable efforts to notify you of therapist cancellations as soon as practicable.
                  </p>
                  <p>
                    You will be notified of your options and given a reasonable period to respond.
                  </p>
                </section>

                {/* 16. RESCHEDULING BY THERAPIST */}
                <section id="rescheduling-by-therapist" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    16. Rescheduling by Therapist
                  </h2>
                  <p>
                    If a licensed therapist reschedules a confirmed appointment, you will be offered:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Alternative time slots with the same therapist; or</li>
                    <li>A full refund if you are unable to attend the alternative time slots.</li>
                  </ul>
                  <p>
                    We will make reasonable efforts to accommodate your preferences.
                  </p>
                </section>

                {/* 17. PATIENT NO-SHOW */}
                <section id="patient-no-show" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    17. Patient No‑Show
                  </h2>
                  <p>
                    If you fail to join a scheduled therapy session within fifteen (15) minutes of the scheduled start time, you will be considered a No‑Show.
                  </p>
                  <p>
                    We will make reasonable attempts to reconnect you during the fifteen‑minute period.
                  </p>
                  <p>
                    If reconnection is unsuccessful after fifteen (15) minutes, the appointment may be treated as completed.
                  </p>
                  <p>
                    No refund will ordinarily be issued for patient No‑Shows.
                  </p>
                  <p>
                    Repeated No‑Shows may result in restrictions on your ability to book future appointments.
                  </p>
                </section>

                {/* 18. PARTIAL SESSIONS */}
                <section id="partial-sessions" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    18. Partial Sessions
                  </h2>
                  <p className="font-semibold text-slate-800">If you voluntarily leave a session before completion:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Reasonable attempts will be made to reconnect you.</li>
                    <li>If reconnection is unsuccessful after fifteen (15) minutes, the therapist may mark the session as completed based on professional judgement.</li>
                    <li>No refund will ordinarily be issued.</li>
                  </ul>
                  <p>
                    The licensed therapist will exercise professional judgement in determining whether the session has been completed for clinical purposes.
                  </p>
                </section>

                {/* 19. TECHNICAL FAILURES */}
                <section id="technical-failures" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    19. Technical Failures
                  </h2>
                  <p>
                    Where a confirmed therapy appointment cannot proceed due to verified Platform or infrastructure failures:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>We will make reasonable efforts to automatically reschedule the appointment.</li>
                    <li>You will be notified of the technical failure and offered alternative time slots.</li>
                    <li>Refunds are not the default remedy unless otherwise required by applicable law or expressly approved under this policy.</li>
                  </ul>
                  <p>
                    Technical failures that are attributable to your own equipment or internet connection will not be considered Platform failures. In such cases, the standard cancellation and no‑show policies apply.
                  </p>
                </section>

                {/* 20. GENERAL REFUND POLICY */}
                <section id="general-refund-policy" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    20. General Refund Policy
                  </h2>
                  <p>
                    Except where required by applicable law or expressly approved by us, payments made for subscriptions, therapy sessions, and other paid services are generally non‑refundable after successful purchase or activation.
                  </p>
                  <p className="font-semibold text-slate-800">The rationale for this policy includes:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li><strong>Allocation of Therapist Time:</strong> Therapists allocate time based on confirmed appointments; cancellations after a certain time may prevent alternative booking.</li>
                    <li><strong>Platform Resources:</strong> We incur costs for platform infrastructure, support, and operations.</li>
                    <li><strong>Service Availability:</strong> Once a service is activated or scheduled, we have incurred costs in making it available.</li>
                  </ul>
                  <p>
                    Nothing in this policy limits your rights as a consumer under the Consumer Protection Act, 2019.
                  </p>
                </section>

                {/* 21. REFUNDS FOR SUBSCRIPTIONS */}
                <section id="refunds-for-subscriptions" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    21. Refunds for Subscriptions
                  </h2>
                  <p>
                    No refund will ordinarily be issued for subscription fees after the subscription has been activated.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Refunds for subscriptions will be considered only in the following circumstances:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>The subscription was purchased in error and you provide satisfactory evidence.</li>
                    <li>The subscription service was not available for a significant period due to Platform failures.</li>
                    <li>You have not used the subscription at all during the subscription period.</li>
                    <li>Exceptional circumstances as set forth below.</li>
                  </ul>
                  <p>
                    Refund decisions will be made in our sole discretion, acting reasonably.
                  </p>
                </section>

                {/* 22. REFUNDS FOR THERAPY APPOINTMENTS */}
                <section id="refunds-for-therapy-appointments" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    22. Refunds for Therapy Appointments
                  </h2>
                  <p className="font-semibold text-slate-800">
                    Refunds for therapy appointments will be issued in the following circumstances:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>The therapist cancels the appointment (full refund).</li>
                    <li>The therapist reschedules the appointment and you are unable to attend the alternative time slots (full refund).</li>
                    <li>The confirmed appointment cannot proceed due to Platform technical failures (full refund).</li>
                    <li>Payment processing errors result in duplicate or overcharging (full refund of the erroneous amount).</li>
                  </ul>
                  <p className="font-semibold text-slate-800">
                    Refunds will not ordinarily be issued in the following circumstances:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Patient cancellation less than twenty‑four (24) hours before the scheduled session.</li>
                    <li>Patient No‑Show.</li>
                    <li>Partial sessions where you voluntarily leave before completion.</li>
                    <li>Technical failures attributable to your equipment or internet connection.</li>
                  </ul>
                </section>

                {/* 23. REFUNDS FOR TECHNICAL FAILURES */}
                <section id="refunds-for-technical-failures" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    23. Refunds for Technical Failures
                  </h2>
                  <p>
                    Where a confirmed therapy appointment cannot proceed due to verified Platform technical failures:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>You will be offered a rescheduled appointment at no additional cost; or</li>
                    <li>A full refund will be issued if you are unable to attend a rescheduled appointment.</li>
                  </ul>
                  <p>
                    We will document all technical failures and their resolution.
                  </p>
                </section>

                {/* 24. REFUNDS FOR PAYMENT ERRORS */}
                <section id="refunds-for-payment-errors" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    24. Refunds for Payment Errors
                  </h2>
                  <p className="font-semibold text-slate-800">In the event of a verified payment processing error:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Duplicate payments will be refunded in full.</li>
                    <li>Overpayments will be refunded in the amount of the overpayment.</li>
                    <li>Incorrect charges will be corrected.</li>
                  </ul>
                  <p>
                    We will process refunds for payment errors within a reasonable time after verification of the error.
                  </p>
                </section>

                {/* 25. PROMOTIONAL OFFERS */}
                <section id="promotional-offers" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    25. Promotional Offers
                  </h2>
                  <p>
                    Promotional pricing, coupons, discounts, and special offers do not create additional refund rights.
                  </p>
                  <p>
                    Refund eligibility will be determined under this policy rather than promotional pricing.
                  </p>
                  <p>
                    In the event of a refund, the refund amount will be based on the actual amount paid, not the full undiscounted price.
                  </p>
                </section>

                {/* 26. EXCEPTIONAL CIRCUMSTANCES */}
                <section id="exceptional-circumstances" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    26. Exceptional Circumstances
                  </h2>
                  <p>
                    We may, at our sole discretion and acting reasonably, consider refunds, credits, or alternative remedies in exceptional circumstances, including but not limited to:
                  </p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Verified platform failures affecting a significant number of users.</li>
                    <li>Bereavement or critical illness of you or an immediate family member.</li>
                    <li>Medical emergencies.</li>
                    <li>Natural disasters.</li>
                    <li>Payment processing errors.</li>
                    <li>Other extraordinary circumstances.</li>
                  </ul>
                  <p>
                    Requests for exceptional refunds must be submitted to us in writing and include supporting documentation.
                  </p>
                  <p>
                    Refund decisions made under exceptional circumstances will be documented and will not establish precedent.
                  </p>
                </section>

                {/* 27. PAYMENT PROCESSING */}
                <section id="payment-processing" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    27. Payment Processing
                  </h2>
                  <p>
                    Payments are processed through secure, third‑party payment gateways.
                  </p>
                  <p>
                    We do not store complete card or banking credentials on our servers.
                  </p>
                  <p>
                    Payment processing is subject to the terms and conditions of the applicable payment gateway.
                  </p>
                  <p>
                    We make reasonable efforts to ensure payment processing is secure and reliable.
                  </p>
                </section>

                {/* 28. PAYMENT FAILURES */}
                <section id="payment-failures" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    28. Payment Failures
                  </h2>
                  <p className="font-semibold text-slate-800">In the event of a payment failure:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>We may attempt to retry the payment using the same payment method.</li>
                    <li>You may be notified of the failure and asked to update your payment information.</li>
                    <li>We may suspend access to Services until the payment is successfully processed.</li>
                    <li>Access may be terminated if payment failures persist.</li>
                  </ul>
                  <p className="font-semibold text-slate-800">We are not liable for payment failures caused by:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Insufficient funds.</li>
                    <li>Expired or invalid payment methods.</li>
                    <li>Payment gateway or bank errors.</li>
                    <li>Any other circumstances beyond our reasonable control.</li>
                  </ul>
                </section>

                {/* 29. DUPLICATE PAYMENTS */}
                <section id="duplicate-payments" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    29. Duplicate Payments
                  </h2>
                  <p className="font-semibold text-slate-800">In the event of a duplicate payment:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>We will investigate the duplicate payment.</li>
                    <li>Upon verification, a full refund of the duplicate amount will be processed.</li>
                    <li>The refund will be processed through the original payment method.</li>
                    <li>You must cooperate with our investigation of duplicate payments.</li>
                  </ul>
                </section>

                {/* 30. DISPUTED TRANSACTIONS */}
                <section id="disputed-transactions" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    30. Disputed Transactions
                  </h2>
                  <p className="font-semibold text-slate-800">If you dispute a transaction:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>You must provide written notice of the dispute to us.</li>
                    <li>We will investigate the dispute.</li>
                    <li>You must cooperate with our investigation.</li>
                    <li>We will communicate the outcome of the investigation to you.</li>
                  </ul>
                  <p>
                    We reserve the right to suspend access to Services during the pendency of a dispute investigation.
                  </p>
                </section>

                {/* 31. FRAUD PREVENTION */}
                <section id="fraud-prevention" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    31. Fraud Prevention
                  </h2>
                  <p className="font-semibold text-slate-800">We may:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>Suspend services if fraudulent activity is suspected.</li>
                    <li>Reverse improperly obtained benefits.</li>
                    <li>Cooperate with payment providers and law enforcement.</li>
                    <li>Investigate suspicious transactions.</li>
                    <li>Report fraudulent activity where legally appropriate.</li>
                    <li>Delay refunds while investigations are pending.</li>
                  </ul>
                  <p>
                    We are not liable for losses arising from fraudulent use of your payment method if you have failed to maintain the security of your account.
                  </p>
                </section>

                {/* 32. BILLING COMMUNICATIONS */}
                <section id="billing-communications" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    32. Billing Communications
                  </h2>
                  <p>
                    Billing communications, including invoices, receipts, and payment confirmations, will be sent to your registered email address.
                  </p>
                  <p>
                    You are responsible for monitoring your billing communications.
                  </p>
                  <p>
                    We may send billing communications through the Platform and other authorised channels as set forth in our Electronic Communication Consent.
                  </p>
                </section>

                {/* 33. INSTITUTIONAL CUSTOMERS */}
                <section id="institutional-customers" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    33. Institutional Customers
                  </h2>
                  <p>
                    <strong>Institutional Agreements:</strong> Institutional subscriptions, enterprise agreements, and educational contracts are governed exclusively by their respective contractual agreements. This policy applies only where those agreements expressly provide. In the event of any conflict between this policy and an institutional agreement, the institutional agreement prevails.
                  </p>
                  <p>
                    <strong>Institutional Billing:</strong> Institutional billing is governed by the applicable institutional agreement. Billing cycles, payment terms, and invoicing procedures for institutional customers are as set forth in that agreement. Institutional customers are responsible for ensuring accurate and timely payment.
                  </p>
                  <p>
                    <strong>Institutional Cancellations:</strong> Cancellations and modifications of institutional subscriptions are governed by the applicable institutional agreement. Notice periods, termination fees, and refunds for institutional subscriptions are as set forth in that agreement.
                  </p>
                </section>

                {/* 34. COMPLAINTS */}
                <section id="complaints" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    34. Complaints
                  </h2>
                  <p>
                    If you have a complaint regarding billing, payments, refunds, or cancellations, please contact us.
                  </p>
                  <p>
                    We will acknowledge your complaint within seven (7) business days and will endeavour to resolve it within thirty (30) days.
                  </p>
                  <p>
                    If you are not satisfied with our resolution, you have the right to file a complaint with the appropriate consumer forum under the Consumer Protection Act, 2019.
                  </p>
                </section>

                {/* 35. CHANGES TO THIS POLICY */}
                <section id="changes-to-this-policy" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] border-b border-slate-100 pb-3 uppercase">
                    35. Changes to This Policy
                  </h2>
                  <p>
                    We may update this policy from time to time to reflect changes in practices, legal requirements, or operational needs.
                  </p>
                  <p className="font-semibold text-slate-800">When material changes are made, we will notify you through:</p>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600">
                    <li>The Platform.</li>
                    <li>Email to your registered email address.</li>
                    <li>In‑app notifications.</li>
                    <li>Other appropriate means.</li>
                  </ul>
                  <p>
                    The &quot;Effective Date&quot; at the top of this policy indicates when it was last revised.
                  </p>
                  <p>
                    Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated policy, subject to any additional consent requirements under applicable law.
                  </p>
                </section>

                {/* CONTACT US */}
                <section id="contact-us" className="space-y-4 pt-4 border-t border-slate-100 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1a2b3c] uppercase">
                    Contact Us
                  </h2>
                  <p>
                    If you have any questions, concerns, or complaints about this Refund, Cancellation, Rescheduling &amp; Billing Policy, please contact us:
                  </p>
                  <div className="bg-orange-50/60 border border-orange-100 rounded-2xl p-5 sm:p-6 space-y-2 text-sm text-slate-800">
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:support@heyattrangi.com"
                        className="text-[#FF6B00] hover:underline font-medium"
                      >
                        support@heyattrangi.com
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.heyattrangi.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B00] hover:underline font-medium"
                      >
                        https://www.heyattrangi.com/
                      </a>
                    </p>
                  </div>
                </section>

              </div>
            </article>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
