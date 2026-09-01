"use client";

import { useEffect, useMemo, useState, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Send, Mic, Sparkles, Smile, Activity, Calendar, Heart, 
  MessageSquare, ChevronRight, Menu, X, ArrowRight, Home as HomeIcon, 
  BookOpen, AlertCircle, Info 
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Navigation from "@/components/Navigation";
import ReviewsAndFAQ from "@/components/ReviewsAndFAQ";
import HowWeCanHelp from "@/components/HowWeCanHelp";
import ScrollingTextMarqueeComponent from "@/components/ScrollingTextMarquee";
import ChatGPTVsAtrangi from "@/components/ChatGPTVsAtrangi";
import AtrangiFeatures from "@/components/AtrangiFeatures";
import PricingPlan from "@/components/PricingPlan";
import { APP_SIGNIN_URL } from "@/lib/app-urls";
import { MIND_MATRIX_VISIBLE } from "@/lib/mind-matrix/feature-flag";



const formatDate = (dateString: string) => {
  if (!dateString) return "";
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      timeZone: "UTC",
    }).format(new Date(dateString));
  } catch {
    return dateString;
  }
};



const TRUSTED_INSTITUTIONS = [
  {
    name: "IIIT Dharwad",
    logo: "/images/iiit-dharwad.png",
  }
];

export default function Home() {
  const router = useRouter();
  const [guestChatMsg, setGuestChatMsg] = useState("");
  const [showMicTooltip, setShowMicTooltip] = useState(false);

  const handleGuestChatSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const message = guestChatMsg.trim();
    if (message) {
      try {
        sessionStorage.setItem("pending_guest_chat_msg", message);
        localStorage.setItem("pending_guest_chat_msg", message);
        localStorage.setItem("guest_initial_prompt", message);
      } catch (_) {}
      window.location.href = `https://app-heyattrangi.vercel.app/patient/ai-bot?message=${encodeURIComponent(message)}`;
    } else {
      window.location.href = "https://app-heyattrangi.vercel.app/patient/ai-bot";
    }
  };


  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAnimatingRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Need these definitions for the bento layout
  const getCategories = (blog: any) => {
    if (blog.category) {
      return [blog.category];
    }
    if (blog.tumblineQuestion) {
      return ["Mental Health", "Wellness"];
    }
    return ["Mental Health", "Wellness"];
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Personality disorders":
        return "text-[#4e6b5a] bg-[#ecf4f0]";
      case "General well-being":
        return "text-[#6b654a] bg-[#f5f4ee]";
      case "Anxiety disorders":
        return "text-[#4a646b] bg-[#eef4f5]";
      default:
        return "text-orange-600 bg-orange-50";
    }
  };

  const calculateReadingTime = (content: string) => {
    if (!content) return "5 min read";
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
  };

  const FeaturedArticleCard = memo(({ blog }: { blog: any }) => (
    <Link href={`/blogs/${blog.slug || blog.id}`} className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 h-full flex flex-col">
      <div className="relative w-full h-[280px] md:h-[340px] overflow-hidden bg-gray-50/50 shrink-0 p-4 sm:p-5">
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-gray-100/50">
          {blog.image ? (
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className={`absolute inset-0 flex items-center justify-center ${blog.isPlaceholder ? 'bg-orange-100' : 'bg-orange-100/50'}`}>
              <span className="text-gray-400 text-5xl">📝</span>
            </div>
          )}
          {blog.isPlaceholder && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-block px-3 py-1.5 text-white text-xs font-bold rounded-full shadow-sm bg-orange-500">
                Coming Soon
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{blog.type || "Article"}</span>
          {blog.category && (
            <>
              <span className="text-gray-300">•</span>
              <span className={`px-2.5 py-1 text-[11px] font-semibold rounded-md tracking-wide uppercase shadow-sm border border-transparent transition-all duration-300 hover:shadow-md get-category-styles-helper get-category-styles-color-badge ${getCategoryStyles(blog.category)}`} style={{ fontStyle: "normal" }}>{blog.category}</span>
            </>
          )}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-[#1a2b3c] mb-3 group-hover:text-orange-600 transition-colors leading-[1.25]">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-base line-clamp-2 leading-relaxed">
          {blog.excerpt || "Explore insights and practical strategies to understand and manage mental health concerns effectively..."}
        </p>
      </div>
    </Link>
  ));

  FeaturedArticleCard.displayName = 'FeaturedArticleCard';

  const CompactHorizontalCard = memo(({ blog, showReadingTime = false }: { blog: any, showReadingTime?: boolean }) => (
    <Link href={`/blogs/${blog.slug || blog.id}`} className="group relative flex bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 p-4 sm:p-5 items-center gap-5">
      <div className="relative w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-2xl overflow-hidden bg-gray-50/50 shrink-0 border border-gray-100/50 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="150px"
          />
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center ${blog.isPlaceholder ? 'bg-orange-100' : ''}`}>
            <span className="text-gray-400 text-3xl">📝</span>
          </div>
        )}
        {blog.isPlaceholder && (
          <div className="absolute top-2 left-2 z-10">
            <span className="inline-block px-2 py-0.5 text-white text-[9px] font-bold rounded-full shadow-sm bg-orange-500">
              Soon
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 py-1">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{blog.type || "Article"}</span>
          {blog.category && (
            <>
              <span className="text-gray-300">•</span>
              <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-md tracking-wide uppercase get-category-styles-helper get-category-styles-color-badge ${getCategoryStyles(blog.category)}`}>{blog.category}</span>
            </>
          )}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#1a2b3c] group-hover:text-orange-600 transition-colors leading-snug line-clamp-3 pb-1">
          {blog.title}
        </h3>
      </div>
    </Link>
  ));

  CompactHorizontalCard.displayName = 'CompactHorizontalCard';

  const TextOnlyCard = memo(({ blog, type = "Video" }: { blog: any; type?: string }) => (
    <Link href={`/blogs/${blog.slug || blog.id}`} className="group relative bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 py-4 px-6 md:py-5 md:px-8 flex flex-col justify-center shrink-0">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">{blog.type || "Video"}</span>
        {blog.category && (
          <>
            <span className="text-gray-300">•</span>
            <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-md tracking-wide uppercase get-category-styles-helper get-category-styles-color-badge ${getCategoryStyles(blog.category)}`}>{blog.category}</span>
          </>
        )}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-[#1a2b3c] group-hover:text-orange-600 transition-colors leading-snug">
        {blog.title}
      </h3>
    </Link>
  ));

  TextOnlyCard.displayName = 'TextOnlyCard';

  const quotes = [
    "We've just launched our new mental health platform",
    "Supporting individuals with their mental health companion",
    "Evidence-based therapy for better mental health outcomes",
    "A little space to understand yourself"
  ];



  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const quoteInterval = setInterval(() => {
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        setIsAnimating(true);
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          isAnimatingRef.current = false;
          setIsAnimating(false);
        }, 600);
      }
    }, 4000); // Change quote every 4 seconds
    return () => {
      clearInterval(quoteInterval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);



  const nextQuote = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 600);
  };

  const prevQuoteFunc = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
      setIsAnimating(false);
    }, 600);
  };



  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Redesigned Hero Section */}
        <div className="relative w-full bg-white px-2 sm:px-4 md:px-5 pt-2 sm:pt-4 md:pt-5 pb-8 overflow-hidden">
          <div className="w-full">
            {/* Soft blue gradient hero card container */}
            <div className="relative w-full rounded-[24px] sm:rounded-[32px] md:rounded-[40px] border border-[#FCF9F7] bg-gradient-to-br from-[#96D1ED] via-[#BFE3F4] to-[#E6F7FF] shadow-[0_20px_50px_rgba(150,209,237,0.18)] pt-6 pb-0 px-4 sm:px-8 lg:px-16 overflow-hidden">
              
              {/* Background soft glowing animation blobs */}
              <div className="absolute top-[-20%] left-[-10%] w-[50%] aspect-square bg-[#BFE3F4]/40 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] aspect-square bg-[#96D1ED]/30 rounded-full blur-[100px] pointer-events-none animate-blob" style={{ animationDelay: "3s" }}></div>

              {/* Universal Floating Pill Navigation */}
              <div className="mb-16 sm:mb-20 md:mb-24">
                <Navbar currentPath="/" />
              </div>

              {/* Hero content area */}
              <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-8 sm:mb-10 select-text"
                >
                  A little space to <br className="hidden sm:inline" />
                  understand yourself.
                </motion.h1>

                {/* Primary CTA - Guest Chat Input */}
                <motion.div
                  id="ai-input-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full max-w-xl mx-auto mb-16 sm:mb-20 px-2 sm:px-0 relative z-30"
                >
                  <form onSubmit={handleGuestChatSubmit} className="flex items-center gap-3 w-full">
                    <div 
                      onClick={() => handleGuestChatSubmit()}
                      className="relative flex-1 flex items-center bg-white rounded-full border border-white/80 shadow-md hover:shadow-lg focus-within:shadow-lg focus-within:border-orange-200 transition-all duration-300 px-2 py-1.5 sm:py-2 cursor-pointer"
                    >
                      <input
                        id="hero-ai-input"
                        type="text"
                        placeholder="Tell me what's on your mind..."
                        value={guestChatMsg}
                        onChange={(e) => setGuestChatMsg(e.target.value)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGuestChatSubmit();
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            handleGuestChatSubmit();
                          }
                        }}
                        className="w-full pl-4 pr-12 py-2 text-slate-800 placeholder-slate-400 bg-transparent border-none outline-none text-sm sm:text-base cursor-pointer"
                      />
                      <button
                        id="hero-ai-send-btn"
                        type="submit"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleGuestChatSubmit();
                        }}
                        className="absolute right-2 sm:right-3 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 active:scale-95 shadow-sm cursor-pointer"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4 ml-0.5" />
                      </button>
                    </div>

                    {/* Microphone Button */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => {
                          window.location.href = "https://app-heyattrangi.vercel.app/patient/ai-bot";
                        }}
                        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 hover:scale-105 cursor-pointer"
                        aria-label="Voice Input"
                      >
                        <Mic className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>

              {/* Product wellness dashboard mockup preview */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex justify-center"
              >
                <div className="relative w-full max-w-6xl rounded-t-2xl sm:rounded-t-3xl border border-white/70 shadow-[0_-15px_30px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-500 hover:translate-y-[-6px] bg-white/95">
                  <Image
                    src="https://res.cloudinary.com/dxoiluua8/image/upload/v1788297342/Landing_screen_bb9waq.png"
                    alt="Hey Attrangi Platform Interface"
                    width={1920}
                    height={1080}
                    className="w-full h-auto block"
                    priority
                  />
                </div>
              </motion.div>
              
            </div>
          </div>
        </div>

        {/* Loved by Students Section */}
        <div className="w-full flex flex-col items-center justify-center text-center py-10 md:py-14 select-text">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mb-4 select-text">
            Loved by Students from
          </p>
          <div className="flex items-center justify-center gap-8 mt-2 flex-wrap">
            {TRUSTED_INSTITUTIONS.map((inst, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="relative w-[75px] h-[75px] sm:w-[85px] sm:h-[85px] md:w-[95px] md:h-[95px] transition-all duration-300 hover:scale-105 select-none">
                  <Image
                    src={inst.logo}
                    alt={`${inst.name} Logo`}
                    fill
                    className="object-contain"
                    sizes="(max-w-768px) 75px, (max-w-1024px) 85px, 95px"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ChatGPT vs Hey Atrangi Section */}
        <ChatGPTVsAtrangi />

        {/* Features Section (with Integrated Heading) */}
        <AtrangiFeatures />

        {/* Pricing Plan Section */}
        <PricingPlan />

        {/* Reviews and FAQ Section */}
        <ReviewsAndFAQ />

        {/* Testimonials Section Commented Out */}
        {false && (
          <section className="bg-white py-24 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Section Header */}
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
                <h2
                  className="text-4xl md:text-5xl font-extrabold text-[#1a2b3c] mb-6 tracking-tight leading-tight"
                >
                  Trusted by Experts in <br className="hidden md:block" /> Mental Health & Tech
                </h2>
              </div>

              {/* Peer Reviews Grid */}
              <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {/* Card 1 - Ram Subramanyam */}
                <div className="relative bg-white rounded-[32px] p-8 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-8 text-9xl leading-none text-orange-50/50 font-serif select-none pointer-events-none group-hover:text-orange-100/50 transition-colors">
                    "
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-[#1a2b3c] text-lg font-medium leading-relaxed mb-8 flex-grow">
                      “The fusion of AI with mental health expertise at Attrangi is truly innovative. They've built a platform that scales empathy without losing the personal touch.”
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm shadow-inner">
                        RS
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2b3c] text-sm">Ram Subramanyam</h4>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">Tech & Strategy Advisor</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Dr. Abhisheik */}
                <div className="relative bg-white rounded-[32px] p-8 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-8 text-9xl leading-none text-blue-50/50 font-serif select-none pointer-events-none group-hover:text-blue-100/50 transition-colors">
                    "
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-[#1a2b3c] text-lg font-medium leading-relaxed mb-8 flex-grow">
                      “Attrangi’s commitment to evidence-based care and modern mental health care is exemplary. It’s a vital resource for anyone seeking comprehensive, modern support.”
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm shadow-inner">
                        DA
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2b3c] text-sm">Dr. Abhisheik</h4>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">Clinical Psychiatrist</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Dr. Sandesh */}
                <div className="relative bg-white rounded-[32px] p-8 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col h-full group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)]">
                  {/* Decorative Quote */}
                  <div className="absolute top-6 right-8 text-9xl leading-none text-purple-50/50 font-serif select-none pointer-events-none group-hover:text-purple-100/50 transition-colors">
                    "
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-[#1a2b3c] text-lg font-medium leading-relaxed mb-8 flex-grow">
                      “Building this ecosystem has been a journey of passion. Our goal is to ensure that technology serves the human spirit, making care accessible to all.”
                    </blockquote>

                    <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative shadow-inner">
                        <Image src="https://res.cloudinary.com/dbjv95prc/image/upload/v1783957638/sandesh_rggxgs.png" alt="Dr. Sandesh" fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2b3c] text-sm">Dr. Sandesh</h4>
                        <p className="text-xs text-gray-500 font-medium tracking-wide">Founder & Researcher</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <Footer className="pt-8" />
      </div>
    </>
  );
}