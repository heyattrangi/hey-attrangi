"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MIND_MATRIX_VISIBLE } from '@/lib/mind-matrix/feature-flag';

const faqs = [
    {
        question: "What if I'm not satisfied with the support?",
        answer: <>We're committed to your mental wellness journey. If you feel your current specialist isn't the right fit, or if you're experiencing technical issues, please contact our support team. See our <Link href="/terms?section=refund" className="underline font-medium hover:text-orange-600 transition-colors">Refund Policy</Link> for more details.</>
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

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const visibleFaqs = MIND_MATRIX_VISIBLE
        ? faqs
        : faqs.filter(
              (faq) =>
                  !faq.question.includes("Mind Check")
          );

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
            {/* FAQ Section */}
            <div className="py-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Centered heading */}
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a2b3c] text-center mb-12 tracking-tight">
                        Frequently asked questions
                    </h2>

                    {/* Accordion list */}
                    <div>
                        {visibleFaqs.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-5 flex items-center justify-between text-left group"
                                >
                                    <span className="text-base font-medium text-[#1a2b3c] group-hover:text-orange-500 transition-colors duration-200">
                                        {faq.question}
                                    </span>
                                    <span className="ml-6 flex-shrink-0 text-gray-400 group-hover:text-orange-500 transition-colors duration-200">
                                        {openIndex === index ? (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                        openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="text-gray-500 text-sm leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
