"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  currentPath?: string;
}

export default function Navbar({ currentPath = "/" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => currentPath === path;

  return (
    <header className="w-full flex justify-center pt-4 sm:pt-6 px-4 relative z-50">
      <div className="flex items-center justify-between w-full max-w-4xl bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.03)] px-3.5 sm:px-6 py-2 sm:py-2.5">
        
        {/* Left: Desktop Logo & Mobile Menu Toggle */}
        <div className="flex items-center">
          {/* Desktop Logo (hidden on mobile) */}
          <Link href="/" className="hidden sm:flex items-center gap-2 ml-1 sm:ml-2 group shrink-0">
            <Image
              src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
              alt="Hey Attrangi Logo"
              width={34}
              height={34}
              className="w-8.5 h-8.5 object-contain group-hover:scale-105 transition-transform"
              priority
            />
            <span
              style={{
                fontFamily: "var(--font-nunito), 'Nunito', sans-serif",
                fontStyle: "normal",
                fontWeight: 800,
                fontSize: "16.8276px",
                lineHeight: "26px",
                textAlign: "center",
                letterSpacing: "-0.34496px",
                color: "#1E1E1E",
              }}
            >
              Hey Attrangi
            </span>
          </Link>

          {/* Mobile 3-Lines Menu Button (visible on mobile only, in place of logo) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex sm:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Center: Desktop Navigation Links (hidden on mobile) */}
        <nav aria-label="Main Navigation" className="hidden sm:flex items-center space-x-8">
          <Link
            href="/about"
            className={`text-sm transition-colors duration-200 relative py-1 ${
              isActive("/about")
                ? "text-[#FF6B00] font-bold"
                : "text-slate-700 font-semibold hover:text-[#FF6B00]"
            }`}
          >
            About
            {isActive("/about") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6B00] rounded-full"></span>
            )}
          </Link>
          <Link
            href="/institutions"
            className={`text-sm transition-colors duration-200 relative py-1 ${
              isActive("/institutions")
                ? "text-[#FF6B00] font-bold"
                : "text-slate-700 font-semibold hover:text-[#FF6B00]"
            }`}
          >
            For Institutions
            {isActive("/institutions") && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6B00] rounded-full"></span>
            )}
          </Link>
        </nav>

        {/* Right: WhatsApp & Get Started Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          {/* WhatsApp Community Button */}
          <a
            href="https://chat.whatsapp.com/LIiaT1gAO256bI4DrMEX0z?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join WhatsApp Community"
            className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#25D366] hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-sm flex-none shrink-0"
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Orange CTA Button */}
          <Link
            href="https://app-heyattrangi.vercel.app/auth"
            className="flex flex-row justify-center items-center px-3 py-2 w-[102px] h-[36px] bg-[#F97316] hover:bg-orange-600 active:scale-[0.98] text-white rounded-[9999px] font-bold text-xs sm:text-sm flex-none shrink-0 transition-all duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full mt-2 left-4 right-4 sm:hidden bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/80 p-4 shadow-xl space-y-3 z-50">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
              isActive("/")
                ? "bg-orange-50 text-[#FF6B00] font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-[#FF6B00]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
              isActive("/about")
                ? "bg-orange-50 text-[#FF6B00] font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-[#FF6B00]"
            }`}
          >
            About
          </Link>
          <Link
            href="/institutions"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 text-sm font-semibold rounded-xl transition-colors ${
              isActive("/institutions")
                ? "bg-orange-50 text-[#FF6B00] font-bold"
                : "text-slate-700 hover:bg-slate-50 hover:text-[#FF6B00]"
            }`}
          >
            For Institutions
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="https://app-heyattrangi.vercel.app/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full bg-[#F97316] hover:bg-orange-600 text-white py-2.5 rounded-full font-bold text-sm shadow-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
