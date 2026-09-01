"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { MIND_MATRIX_VISIBLE } from "@/lib/mind-matrix/feature-flag";

// Scalable Testimonial Data (6 Real Student Experience Themes)
const TESTIMONIALS_DATA = [
  {
    id: 1,
    category: "Always there when you need it",
    question: "What was it like having Hey Aatrangi available when you wanted to talk?",
    quote: "I liked that I could just open it and talk whenever I wanted. I didn't have to wait for a particular time or feel like I was bothering someone."
  },
  {
    id: 2,
    category: "Understanding yourself",
    question: "Did using Hey Aatrangi make you notice or understand anything about yourself?",
    quote: "I started noticing patterns in what was bothering me. Things that I usually just ignored became easier to understand."
  },
  {
    id: 3,
    category: "Reflect and understand",
    question: "What did you find most useful about the reflection or journaling experience?",
    quote: "Normally I forget how I was feeling a few days ago. Having those reflections made it easier to look back and understand what was actually going on."
  },
  {
    id: 4,
    category: "Support for everyday moments",
    question: "Was there a moment when having Hey Aatrangi available during your normal day was useful?",
    quote: "Sometimes I didn't need a therapy session. I just needed somewhere to put my thoughts into words. Having Aatrangi there was useful for those moments."
  },
  {
    id: 5,
    category: "A space without judgment",
    question: "How did you feel while talking to Hey Aatrangi?",
    quote: "I didn't feel judged while talking. I could say things that I probably wouldn't immediately say to someone else, and that made it easier to think about them."
  },
  {
    id: 6,
    category: "A companion for your wellbeing",
    question: "If you had to explain Hey Aatrangi to another student, what would you say?",
    quote: "I'd say it's something you can keep with you for your wellbeing. It's not just something you use once; you can come back, reflect, and continue from where you left off."
  }
];

// Scalable FAQ Data
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
    answer: "In Mind Matrix, each Mind Check takes about three minutes. A quiet space helps you settle in without rushing.",
    isMindCheck: true
  },
  {
    question: "Can I take a Mind Check more than once?",
    answer: "Yes. You can start another Mind Check in Mind Matrix whenever it feels helpful. If you’re noticing patterns over time, spacing visits by a few weeks can make shifts easier to see. That’s a personal rhythm, not a requirement.",
    isMindCheck: true
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

export default function ReviewsAndFAQ() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  
  // Filter FAQs based on Mind Matrix visibility
  const visibleFaqs = MIND_MATRIX_VISIBLE
    ? FAQS_DATA
    : FAQS_DATA.filter(faq => !faq.isMindCheck);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  return (
    <section 
      style={{
        background: "linear-gradient(180deg, #FEEAAD 0%, #FFF3CF 30%, #FFFFFF 75%)"
      }}
      className="w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-text border-t border-orange-100/30"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* PART 1: REVIEWS / TESTIMONIALS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20 relative">
          
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left select-text shrink-0 z-10">
            <span className="text-xs font-bold text-amber-700/80 uppercase tracking-[0.18em] mb-3">
              Real Experiences
            </span>
            <h3 
              className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#020618] tracking-tight mb-4 leading-tight select-text"
            >
              What they say
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-sm select-text">
              Authentic stories and reflections from students using Hey Attrangi for their continuous wellbeing.
            </p>
          </div>

          {/* Right Column: Seamless Infinite Auto-scrolling Testimonial Cards (Right -> Left) */}
          <div className="lg:col-span-8 relative overflow-hidden testimonial-mask-gradient py-2">
            <div className="flex gap-6 testimonial-marquee-track py-6 px-2 select-text">
              {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((test, index) => (
                <div
                  key={`${test.id}-${index}`}
                  className="w-[330px] sm:w-[370px] shrink-0 bg-white/95 backdrop-blur-md rounded-[28px] p-7 sm:p-8 border border-white shadow-[0_20px_50px_rgba(200,150,40,0.07)] hover:shadow-[0_24px_55px_rgba(200,150,40,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[250px] select-text"
                >
                  <div>
                    {/* Category Label */}
                    <span className="inline-block text-[11px] font-bold text-amber-600 uppercase tracking-[0.14em] mb-3 select-text">
                      {test.category}
                    </span>

                    {/* Question / Theme */}
                    <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug mb-3.5 select-text">
                      {test.question}
                    </h4>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-[13.5px] font-normal text-slate-600 leading-relaxed italic select-text">
                      "{test.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Seamless CSS Infinite Marquee Fallback Inlined */}
            <style>{`
              @keyframes testimonialMarquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }

              .testimonial-marquee-track {
                display: flex !important;
                flex-direction: row !important;
                flex-wrap: nowrap !important;
                width: max-content !important;
                animation: testimonialMarquee 36s linear infinite !important;
                will-change: transform;
              }

              .testimonial-marquee-track:hover {
                animation-play-state: paused !important;
              }

              .testimonial-mask-gradient {
                mask-image: linear-gradient(to right, transparent, white 4%, white 96%, transparent);
                -webkit-mask-image: linear-gradient(to right, transparent, white 4%, white 96%, transparent);
              }
            `}</style>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* PART 2: FAQ SECTION */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-slate-200/60">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left select-text">
            <h3 
              style={{
                width: "360px",
                height: "72px",
                fontFamily: "'Inter', sans-serif",
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "36px",
                color: "#020618"
              }}
              className="mb-8 select-text text-center lg:text-left flex flex-col justify-center lg:justify-start"
            >
              <span>Managing Your</span>
              <span>Account FAQs</span>
            </h3>

            <Link
              href="/resources/faqs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 hover:border-slate-800 text-slate-800 font-bold text-xs transition-all duration-200 group shadow-xs hover:shadow-sm"
            >
              <span>View All FAQs</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-8 divide-y divide-slate-200/80">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div key={index} className="py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors select-text">
                      {faq.question}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200/60 group-hover:border-orange-200 transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 group-hover:text-orange-600 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 text-sm sm:text-[15px] font-normal text-slate-600 leading-relaxed pr-6 select-text">
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
  );
}
