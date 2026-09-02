"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type BillingCycle = "monthly" | "semester" | "annual";

export default function PricingPlan() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annual");

  const pricingData = {
    monthly: {
      originalPrice: null,
      price: 149,
      period: "/month",
      billingNote: "Billed monthly",
    },
    semester: {
      originalPrice: 149,
      price: 134,
      period: "/month",
      billingNote: "Billed ₹805 every 6 months",
    },
    annual: {
      originalPrice: 149,
      price: 119,
      period: "/month",
      billingNote: "Billed ₹1,430 every year",
    },
  };

  const currentPlan = pricingData[billingCycle];

  return (
    <section className="w-full py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden select-text">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex justify-center items-center mb-12 sm:mb-16">
          <h2 
            style={{
              height: "36px",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#020618",
              flex: "none",
              order: 0,
              flexGrow: 0
            }}
            className="select-text"
          >
            Pricing plan
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
          {/* LEFT CARD — FREE PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[32px] p-8 sm:p-10 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.07)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-1"
          >
            <div>
              <h3 style={{ width: '100%', height: 'auto', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 900, fontSize: '24px', lineHeight: '28px', color: '#111111', flex: 'none', order: 0, flexGrow: 0 }} className="mb-3">
                Start checking in
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "17.2345px",
                  lineHeight: "140%",
                  color: "#444444",
                }}
                className="select-text"
              >
                Free limited access to AI Companion
              </p>
            </div>

            <div className="mt-12 sm:mt-16 pt-4">
              <div className="mb-8">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontStyle: "normal",
                    fontWeight: 800,
                    fontSize: "54.5758px",
                    lineHeight: "66px",
                    color: "#111111",
                    display: "inline-block",
                  }}
                  className="select-text tracking-tight"
                >
                  Free
                </span>
              </div>

              <div>
                <Link
                  href="https://app-heyattrangi.vercel.app/auth"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full border border-slate-900 text-slate-900 font-bold text-sm hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-sm active:scale-95"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CARD — PREMIUM PLAN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dxoiluua8/image/upload/v1786789037/Banner_bg_rrixld.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-[32px] p-8 sm:p-10 shadow-[0_15px_45px_-15px_rgba(255,107,0,0.15)] flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:shadow-[0_25px_55px_-15px_rgba(255,107,0,0.25)] hover:-translate-y-1 bg-gradient-to-br from-pink-100/60 via-purple-100/50 to-blue-100/60"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <h3 style={{ width: '100%', height: 'auto', fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 900, fontSize: '24px', lineHeight: '28px', color: '#111111', flex: 'none', order: 0, flexGrow: 0 }}>
                  Go deeper and build continuity
                </h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Full access to all wellness features
              </p>

              {/* Billing Cycle Toggle Pills */}
              <div className="inline-flex items-center p-1 bg-white/70 backdrop-blur-md rounded-full border border-white/80 shadow-inner max-w-full overflow-x-auto">
                {(["monthly", "semester", "annual"] as const).map((cycle) => {
                  const label =
                    cycle === "monthly"
                      ? "Monthly"
                      : cycle === "semester"
                      ? "Semester"
                      : "Annual";
                  const isSelected = billingCycle === cycle;
                  return (
                    <button
                      key={cycle}
                      type="button"
                      onClick={() => setBillingCycle(cycle)}
                      className={`relative px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-700 hover:text-slate-900"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-4">
              <div className="mb-6">
                {currentPlan.originalPrice && (
                  <div className="text-base font-semibold text-slate-400 line-through mb-0.5">
                    ₹{currentPlan.originalPrice}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#020618] tracking-tight">
                    ₹{currentPlan.price}
                  </span>
                  <span className="text-sm font-medium text-slate-600 ml-1">
                    {currentPlan.period}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-1">
                  {currentPlan.billingNote}
                </div>
              </div>

              <div>
                <Link
                  href="https://app-heyattrangi.vercel.app/auth"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
                >
                  Get Premium
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
