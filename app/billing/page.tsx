"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { APP_SIGNIN_URL } from "@/lib/app-urls";

export default function BillingPage() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF7F5] font-sans text-gray-800">
      <div className="z-20 bg-white border-b border-gray-100 shadow-sm relative">
        <Navigation currentPath="/billing" />
      </div>

      <main className="flex-1 flex justify-center pt-16 pb-24 px-4 sm:px-6">
        <div className="w-full max-w-[1000px] bg-white rounded-[32px] shadow-[0_8px_40px_rgba(255,107,0,0.08)] border border-orange-100/50 overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 pb-8 border-b border-gray-50 flex flex-col items-center text-center">
            <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0c1421] tracking-tight mb-4">
              Compare plans
            </h1>
            <p className="text-gray-500 font-medium mb-8">
              Need more details before choosing?{" "}
              <button className="text-[#0c1421] font-bold hover:underline">
                See feature breakdown ↓
              </button>
            </p>
            
            {/* Toggle Switch */}
            <div className="inline-flex items-center gap-2 bg-gray-100 p-1.5 rounded-full border border-gray-200">
              <button 
                onClick={() => setIsMonthly(true)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${isMonthly ? 'bg-white text-[#0c1421] shadow-sm' : 'text-gray-500 hover:text-[#0c1421]'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsMonthly(false)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${!isMonthly ? 'bg-white text-[#0c1421] shadow-sm' : 'text-gray-500 hover:text-[#0c1421]'}`}
              >
                6 Months (Save 20%)
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 p-4 gap-4 md:gap-0 md:p-0">
            
            {/* Listener Plan */}
            <div className="p-8 md:p-10 flex flex-col h-full md:border-r border-gray-100">
              <h2 className="text-2xl font-bold text-[#0c1421] mb-2">🎧 Listener</h2>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-medium text-gray-400 line-through decoration-1">
                  {isMonthly ? '₹149' : '₹899'}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wide">Save 67%</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[2.5rem] font-bold text-[#0c1421] leading-none">
                  {isMonthly ? '₹49' : '₹299'}
                </span>
                <span className="text-gray-500 font-medium">
                  {isMonthly ? '/mo' : '/6mo'}
                </span>
              </div>
              <p className="text-[#FF6B00] font-bold text-sm mb-6">
                {isMonthly ? 'or ₹299/6 months' : 'or ₹49/month'}
              </p>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                Daily check-ins, basic mood tracking, and limited voice conversations.
              </p>

              <div className="space-y-4 mb-10 w-full">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">CHATS</span>
                  <span className="text-[#0c1421] font-bold">100 / day</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">VOICE</span>
                  <span className="text-[#0c1421] font-bold">30 min / day</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">MEMORY</span>
                  <span className="text-[#0c1421] font-bold">7-Day</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button className="w-full text-center bg-gray-100 text-gray-400 cursor-not-allowed font-bold py-3.5 rounded-full transition-all block">
                  Already Bought
                </button>
                <span className="text-[#FF6B00] font-bold text-sm">
                  Exclusive Offers Inside
                </span>
              </div>
            </div>

            {/* Companion Plan (Recommended) */}
            <div className="p-8 md:p-10 flex flex-col h-full relative border-2 border-[#FF6B00] rounded-[32px] md:-my-2 bg-white z-10 shadow-sm">
              {/* Highlight Border and Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                <span className="bg-white text-[#FF6B00] border border-[#FF6B00] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]"></span> RECOMMENDED
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#0c1421] mb-2">🤝 Companion</h2>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg font-medium text-gray-400 line-through decoration-1">
                  {isMonthly ? '₹599' : '₹2799'}
                </span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wide">Save 75%</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[2.5rem] font-bold text-[#0c1421] leading-none">
                  {isMonthly ? '₹149' : '₹699'}
                </span>
                <span className="text-gray-500 font-medium">
                  {isMonthly ? '/mo' : '/6mo'}
                </span>
              </div>
              <p className="text-gray-500 font-medium text-sm mb-6">
                {isMonthly ? 'or ₹699/6 months' : 'or ₹149/month'}
              </p>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                Unlimited AI support, real-time insights, and long-term memory.
              </p>

              <div className="space-y-4 mb-10 w-full">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">CHATS</span>
                  <span className="text-[#0c1421] font-bold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">VOICE</span>
                  <span className="text-[#0c1421] font-bold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">MEMORY</span>
                  <span className="text-[#0c1421] font-bold">Long-Term</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <button className="w-full text-center block bg-[#0a192f] hover:bg-black text-white font-bold py-3.5 rounded-full transition-all shadow-md">
                  Current Plan
                </button>
                <button className="text-[#0c1421] font-bold text-sm hover:underline">
                  View Premium pricing ›
                </button>
              </div>
            </div>

            {/* Organization Plan */}
            <div className="p-8 md:p-10 flex flex-col h-full md:border-l border-gray-100">
              <h2 className="text-2xl font-bold text-[#0c1421] mb-4">🏢 Organization</h2>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-[2.5rem] font-bold text-[#0c1421] leading-none">Custom</span>
              </div>
              <p className="text-gray-500 font-bold text-sm mb-6 mt-1">Billed by institution</p>
              
              <p className="text-gray-500 text-[15px] leading-relaxed mb-8 flex-1">
                College or corporate plan with organization-managed billing.
              </p>

              <div className="space-y-4 mb-10 w-full">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">USERS</span>
                  <span className="text-[#0c1421] font-bold">Managed</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">ADMIN</span>
                  <span className="text-[#0c1421] font-bold">Portal</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-bold text-xs uppercase tracking-wider">BILLING</span>
                  <span className="text-[#0c1421] font-bold">Centralized</span>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <Link href={APP_SIGNIN_URL} className="w-full text-center block bg-[#0a192f] hover:bg-black text-white font-bold py-3.5 rounded-full transition-all shadow-sm">
                  Contact Sales
                </Link>
                <button className="text-[#0c1421] font-bold text-sm hover:underline">
                  View Org pricing ›
                </button>
              </div>
            </div>

          </div>

          {/* Feature Breakdown Table */}
          <div className="border-t border-gray-100 bg-[#fbf9f8] p-8 md:p-12 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#0c1421] mb-8">Feature Breakdown</h3>
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-4 font-bold text-gray-500 text-xs tracking-wider uppercase w-1/4">Feature</th>
                  <th className="py-4 px-4 font-bold text-[#0c1421] text-sm w-1/4">🌱 Free</th>
                  <th className="py-4 px-4 font-bold text-[#0c1421] text-sm w-1/4">🎧 Listener</th>
                  <th className="py-4 px-4 font-bold text-[#FF6B00] text-sm w-1/4">🤝 Companion</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Price</td>
                  <td className="py-4 px-4 text-gray-600">₹0</td>
                  <td className="py-4 px-4 text-gray-600">₹49/mo or ₹299/6mo</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">₹149/mo or ₹699/6mo</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">AI Conversations</td>
                  <td className="py-4 px-4 text-gray-600">10 / day</td>
                  <td className="py-4 px-4 text-gray-600">100 / day</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Unlimited</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Voice Conversations</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 text-gray-600">30 min / day</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Unlimited</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">AI Journal</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                  <td className="py-4 px-4 text-gray-600">Unlimited</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Unlimited + AI Insights</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Mood Tracking</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                  <td className="py-4 px-4 text-gray-600">Advanced</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Advanced + Trends</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Daily Reflection</td>
                  <td className="py-4 px-4 text-gray-600">Limited</td>
                  <td className="py-4 px-4 text-gray-600">Unlimited</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Unlimited</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">AI Memory</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 text-gray-600">7-Day Memory</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Long-Term Memory</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Personalized Insights</td>
                  <td className="py-4 px-4 text-gray-600">Weekly</td>
                  <td className="py-4 px-4 text-gray-600">Daily</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Real-Time AI Insights</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Wellness Analytics</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                  <td className="py-4 px-4 text-gray-600">Advanced</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Predictive Analytics</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Guided Exercises</td>
                  <td className="py-4 px-4 text-gray-600">Limited</td>
                  <td className="py-4 px-4 text-gray-600">Full Library</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Premium Library</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Meditation & Breathing</td>
                  <td className="py-4 px-4 text-gray-600">Basic</td>
                  <td className="py-4 px-4 text-gray-600">Full Access</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Premium Collection</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Therapist Booking</td>
                  <td className="py-4 px-4 text-green-500 font-bold">✓</td>
                  <td className="py-4 px-4 text-green-500 font-bold">✓</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Priority Booking</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Session Summaries</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">AI Session Summaries</td>
                </tr>
                <tr className="hover:bg-white transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-700">Community Access</td>
                  <td className="py-4 px-4 text-gray-600">Public</td>
                  <td className="py-4 px-4 text-gray-600">Public</td>
                  <td className="py-4 px-4 font-semibold text-[#FF6B00]">Premium Community</td>
                </tr>
                <tr className="hover:bg-white transition-colors border-b border-gray-100">
                  <td className="py-4 px-4 font-medium text-gray-700">Priority Support</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 text-gray-400">❌</td>
                  <td className="py-4 px-4 font-semibold text-green-500">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
