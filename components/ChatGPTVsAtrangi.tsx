"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Smile, ArrowRight, Play, AlertCircle, Bot, User } from "lucide-react";

export default function ChatGPTVsAtrangi() {
  const [chatGptStep, setChatGptStep] = useState(0);
  const [atrangiStep, setAtrangiStep] = useState(0);
  const [isBreathingActive, setIsBreathingActive] = useState(false);

  // ChatGPT animation cycle
  useEffect(() => {
    const chatGptInterval = setInterval(() => {
      setChatGptStep((prev) => {
        if (prev >= 4) {
          return 0; // Reset loop
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(chatGptInterval);
  }, []);

  // Hey Atrangi animation cycle
  useEffect(() => {
    const atrangiInterval = setInterval(() => {
      setAtrangiStep((prev) => {
        if (prev >= 4) {
          // If breathing is active, don't reset immediately to let users see it
          return 0;
        }
        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(atrangiInterval);
  }, []);

  // Auto toggle breathing animation in mockup when it renders
  useEffect(() => {
    if (atrangiStep >= 3) {
      setIsBreathingActive(true);
    } else {
      setIsBreathingActive(false);
    }
  }, [atrangiStep]);

  return (
    <section className="relative w-full bg-[#FAF9F6] py-16 sm:py-24 border-b border-gray-100 overflow-hidden select-text">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-[-10%] w-[40%] aspect-square bg-[#BFE3F4]/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[40%] aspect-square bg-orange-100/30 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-slate-800 tracking-tight leading-tight select-text">
            <span className="text-slate-500 font-semibold">ChatGPT</span>{" "}
            <span className="text-slate-400 font-serif italic text-2xl sm:text-3xl px-1">vs</span>{" "}
            <span className="text-[#111827] font-extrabold">Hey Attrangi</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 font-medium max-w-xl mx-auto">
            Traditional AI gives you walls of text. Atrangi guides you through interactive, clinically-validated exercises when you need support the most.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT COLUMN: ChatGPT Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col bg-slate-50/60 rounded-[32px] border border-slate-200/50 p-5 sm:p-6 shadow-sm relative overflow-hidden"
          >
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200/60 mb-5 select-none">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <span className="text-xs font-bold text-slate-600">ChatGPT</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-red-500/80 tracking-wider uppercase bg-red-50 px-2 py-0.5 rounded-md">
                  Prompt Fatigue
                </span>
                <div className="w-16 h-1.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-400 rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>

            {/* ChatGPT Message Thread Area */}
            <div className="flex-1 flex flex-col gap-4 min-h-[380px] justify-start text-left select-text">
              
              {/* ChatGPT Static First Message */}
              <div className="flex items-start gap-2.5 max-w-[85%] select-text">
                <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-slate-500" />
                </div>
                <div className="bg-slate-100/90 text-slate-600 px-3.5 py-2.5 rounded-2xl rounded-tl-none text-xs font-medium leading-relaxed">
                  I can suggest some breathing exercises or give you text instructions on how to calm down. Let me know if you would like me to write a list of steps.
                </div>
              </div>

              {/* Step 1: User message */}
              <AnimatePresence>
                {chatGptStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2.5 max-w-[85%] ml-auto select-text"
                  >
                    <div className="bg-slate-700 text-white px-3.5 py-2.5 rounded-2xl rounded-tr-none text-xs font-medium leading-relaxed shadow-sm">
                      Make it interactive so I can actually try it.
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-600 flex-shrink-0 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 2: ChatGPT response line */}
              <AnimatePresence>
                {chatGptStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2.5 max-w-[85%] select-text"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="bg-slate-100/90 text-slate-500 px-3.5 py-2.5 rounded-2xl rounded-tl-none text-xs font-medium leading-relaxed border border-slate-200/30">
                      Problems with no worked solutions and no feedback. You check yourself.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 3: ChatGPT limitations warning */}
              <AnimatePresence>
                {chatGptStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2.5 max-w-[85%] select-text"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-slate-500" />
                    </div>
                    <div className="bg-white border border-red-100 rounded-2xl rounded-tl-none p-3 flex flex-col gap-1 select-text shadow-sm">
                      <span className="text-[11px] font-bold text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        ChatGPT Limitations
                      </span>
                      <p className="text-[11px] text-red-700/80 leading-relaxed font-medium italic">
                        I can&apos;t create interactive exercises, but here&apos;s how you might set one up yourself...
                      </p>
                      <span className="text-[9px] text-slate-400 mt-1 font-semibold">
                        And there it is — it can&apos;t build the thing you actually wanted.
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 4: Summary Highlight Card */}
              <AnimatePresence>
                {chatGptStep >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 bg-[#f1f3f5] rounded-2xl border border-slate-200/80 p-4 select-text"
                  >
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      <span className="text-red-500 font-extrabold">Four prompts, three minutes, ~700 words.</span> And you still have no structured course, no feedback, and nothing you can actually <span className="italic">do</span> – just a transcript to organize yourself.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Input Bar Mockup */}
            <div className="mt-6 bg-white border border-slate-200/80 rounded-2xl p-2 flex items-center justify-between shadow-sm select-none">
              <span className="text-xs text-slate-400 ml-2 font-medium">Message ChatGPT...</span>
              <div className="w-7 h-7 rounded-xl bg-slate-100 flex items-center justify-center">
                <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Hey Atrangi Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col bg-white rounded-[32px] border border-orange-100/60 p-5 sm:p-6 shadow-[0_15px_40px_rgba(255,107,0,0.02)] relative overflow-hidden"
          >
            {/* Top Mockup Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5 select-none">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-2xs overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                    alt="Hey Attrangi logo"
                    width={20}
                    height={20}
                    className="w-4.5 h-4.5 object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-slate-800">Hey Attrangi</span>
              </div>
              <div className="flex items-center gap-1 bg-[#E6F7FF] text-[#1188C0] px-2.5 py-0.5 rounded-full text-[9px] font-bold">
                <Sparkles className="w-2.5 h-2.5 animate-pulse" />
                Actionable Care
              </div>
            </div>

            {/* Atrangi Message Thread Area */}
            <div className="flex-1 flex flex-col gap-4 min-h-[380px] justify-start text-left select-text">
              
              {/* Step 1: User message */}
              <AnimatePresence>
                {atrangiStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2.5 max-w-[85%] ml-auto select-text"
                  >
                    <div className="bg-[#FF6B00] text-white px-4 py-2.5 rounded-2xl rounded-tr-none text-xs font-bold leading-relaxed shadow-[0_4px_12px_rgba(255,107,0,0.2)]">
                      I&apos;m panicking. I can&apos;t catch my breath.
                    </div>
                    <div className="w-7 h-7 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center border border-orange-400 shadow-sm text-[10px] font-bold text-white select-none">
                      S
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 2: Atrangi response text */}
              <AnimatePresence>
                {atrangiStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-2.5 max-w-[85%] select-text"
                  >
                    <div className="w-7 h-7 rounded-full bg-white border border-slate-100 flex-shrink-0 flex items-center justify-center p-1 shadow-2xs overflow-hidden">
                      <Image
                        src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                        alt="Hey Attrangi"
                        width={20}
                        height={20}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="bg-slate-50 text-slate-800 px-4 py-3 rounded-2xl rounded-tl-none text-xs font-semibold leading-relaxed border border-slate-100 select-text">
                      Let&apos;s slow things down together. I&apos;m right here with you. <br />
                      <span className="text-[#FF6B00] font-bold">Follow the circle below.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Step 3: Interactive breathing card */}
              <AnimatePresence>
                {atrangiStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="bg-[#fffdfa] rounded-2xl border border-orange-100 p-4 shadow-sm hover:shadow-md transition-all select-text"
                  >
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      {/* Pulsing Breathing Circle */}
                      <div className="relative flex items-center justify-center flex-shrink-0">
                        {/* Outer slow breathing pulse wave */}
                        <motion.div
                          animate={isBreathingActive ? {
                            scale: [1, 1.35, 1],
                            opacity: [0.3, 0.6, 0.3],
                          } : { scale: 1, opacity: 0.3 }}
                          transition={{
                            duration: 4, // 4-second breathing cycle
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute w-12 h-12 rounded-full bg-emerald-300"
                        />
                        {/* Middle slow breathing pulse wave */}
                        <motion.div
                          animate={isBreathingActive ? {
                            scale: [1, 1.18, 1],
                          } : { scale: 1 }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute w-12 h-12 rounded-full bg-emerald-100 border border-emerald-200"
                        />
                        {/* Centered inner core */}
                        <div className="relative w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center z-10 shadow-sm select-none">
                          <Smile className="w-5 h-5 text-emerald-500 animate-pulse" />
                        </div>
                      </div>

                      {/* Card Texts */}
                      <div className="flex-1 text-center sm:text-left select-text">
                        <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 tracking-wider uppercase">
                          Interactive Check-in
                        </span>
                        <h4 className="text-xs font-extrabold text-slate-800 mt-1 select-text">
                          2-Minute Breathing Exercise
                        </h4>
                        <p className="text-[10px] text-slate-500 mt-0.5 leading-normal select-text">
                          Box breathing to regulate your nervous system. Breathe in for 4s, hold, then release.
                        </p>
                      </div>
                    </div>

                    {/* Step 4: Pulsing Button */}
                    <AnimatePresence>
                      {atrangiStep >= 4 && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-3.5"
                        >
                          <motion.button
                            animate={{
                              boxShadow: ["0 0 0 0 rgba(255, 107, 0, 0.2)", "0 0 0 8px rgba(255, 107, 0, 0)", "0 0 0 0 rgba(255, 107, 0, 0.2)"],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.99] text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            Begin Breathing
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Input Bar Mockup */}
            <div className="mt-6 bg-slate-50 border border-slate-100 rounded-2xl p-2 flex items-center justify-between shadow-inner select-none">
              <span className="text-xs text-slate-400 ml-2 font-medium">Tell me what&apos;s on your mind?</span>
              <div className="w-7 h-7 rounded-xl bg-slate-900 flex items-center justify-center shadow-sm">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
