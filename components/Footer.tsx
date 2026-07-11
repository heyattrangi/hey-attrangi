import Image from "next/image";
import Link from "next/link";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className={`bg-gradient-to-b from-white via-[#fff8f0] to-[#fcebd5] pt-8 pb-16 md:pt-12 md:pb-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-stretch mb-16">
          
          {/* Left Column: Logo & Socials & Details */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left pr-0 lg:pr-8">
            <div className="flex justify-center lg:justify-start items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Hey Attrangi logo"
                width={56}
                height={56}
                className="w-14 h-14 rounded-xl object-contain bg-white p-1 shadow-md"
              />
              <h2 className="text-3xl font-extrabold text-[#1a2b3c] tracking-tight" style={{ fontFamily: "Poppins, sans-serif" }}>
                Hey Attrangi!
              </h2>
            </div>
            
            <p className="text-[#1a2b3c]/70 text-sm md:text-base mb-6 max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium">
              Supporting individuals with comprehensive psychological resources and community support in one shared place.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/hey_attrangi" target="_blank" rel="noopener noreferrer" className="text-[#1a2b3c] hover:text-[#ea7e3b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.5a1 1 0 11-.002 2 1 1 0 01.002-2zM12 7a5 5 0 015 5 5 5 0 11-5-5zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/heyattrangi/" target="_blank" rel="noopener noreferrer" className="text-[#1a2b3c] hover:text-[#ea7e3b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.902 1.636-1.852 3.369-1.852 3.603 0 4.271 2.37 4.271 5.456v6.287z" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://chat.whatsapp.com/LIiaT1gAO256bI4DrMEX0z?mode=gi_t" target="_blank" rel="noopener noreferrer" className="text-[#1a2b3c] hover:text-[#ea7e3b] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>

            {/* Contact Details */}
            <div className="text-sm text-[#1a2b3c]/60 space-y-1.5 font-medium">
              <p><a href="mailto:contact@heyattrangi.com" className="hover:text-[#ea7e3b] transition-colors">contact@heyattrangi.com</a></p>
              <p><a href="tel:+919552324069" className="hover:text-[#ea7e3b] transition-colors">+91 95523 24069</a></p>
              <p className="mt-3 leading-relaxed text-xs">
                Jai Jinendra Banglow, 580009<br />
                Hubli - Dharwad Rd, KHB Colony<br />
                Narayanpura, Dharwad, Karnataka
              </p>
            </div>
          </div>

          {/* Right Column: Orange Banner */}
          <div className="w-full lg:w-2/3 bg-[#ea7e3b] rounded-[32px] overflow-hidden relative flex flex-col sm:flex-row items-center sm:items-stretch shadow-lg">
            
            {/* Banner Text Content */}
            <div className="p-8 sm:p-12 z-10 w-full sm:w-3/5 lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                Your Mental Health Manager
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-8 leading-relaxed">
                Send a text, join a session, or request support. Hey Attrangi turns it into clear paths to wellness, resources, and care.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button disabled className="bg-white/90 text-[#ea7e3b] px-5 py-2 rounded-full font-bold flex items-center justify-center sm:justify-start gap-3 shadow-sm cursor-not-allowed whitespace-nowrap">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.82 3.59-.8 1.48.06 2.65.62 3.4 1.54-3.01 1.63-2.51 5.37.44 6.64-1.01 2.39-1.92 4.19-2.51 4.79zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-sm">Download for iOS</span>
                    <span className="text-[10px] opacity-70 font-medium">Coming Soon</span>
                  </div>
                </button>
                <button disabled className="bg-transparent border border-white/70 text-white/90 px-5 py-2 rounded-full font-bold flex items-center justify-center sm:justify-start gap-3 cursor-not-allowed whitespace-nowrap">
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l1.834-3.176a.2.2 0 0 0-.072-.27.195.195 0 0 0-.265.07l-1.875 3.248a8.318 8.318 0 0 0-10.29 0L5.05 11.965a.195.195 0 0 0-.265-.07.2.2 0 0 0-.072.27l1.834 3.176C3.992 16.737 2.193 19.345 2 22.428h20c-.193-3.083-1.992-5.691-4.477-7.087zM8.196 19.043c-.496 0-.898-.401-.898-.898s.402-.898.898-.898.898.401.898.898-.402.898-.898.898zm7.608 0c-.496 0-.898-.401-.898-.898s.402-.898.898-.898.898.401.898.898-.402.898-.898.898z"/></svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-sm">Download for Android</span>
                    <span className="text-[10px] opacity-70 font-medium">Coming Soon</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Banner Mockup Image */}
            <div className="w-full sm:w-2/5 lg:w-1/2 relative h-64 sm:h-auto overflow-hidden sm:absolute sm:right-0 sm:top-0 sm:bottom-0 mt-8 sm:mt-0 flex justify-center sm:justify-end items-end sm:items-center px-8 sm:px-0 sm:pr-8 lg:pr-12">
              {/* CSS Phone Mockup representing the app */}
              <div className="w-[200px] h-[400px] bg-[#fdfaf6] rounded-t-[40px] sm:rounded-[40px] shadow-2xl relative border-[7px] border-black overflow-hidden translate-y-12 sm:translate-y-0 sm:rotate-[8deg] sm:translate-x-4">
                {/* Dynamic island notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[70px] h-5 bg-black rounded-full z-20"></div>

                {/* App content */}
                <div className="bg-[#fdfaf6] pt-10 h-full flex flex-col">

                  {/* App header */}
                  <div className="px-4 pt-2 pb-3 flex items-center justify-between border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                      <div className="grid grid-cols-2 gap-[2px] w-4 h-4">
                        <div className="bg-red-400 rounded-[2px]"></div>
                        <div className="bg-orange-400 rounded-[2px]"></div>
                        <div className="bg-yellow-400 rounded-[2px]"></div>
                        <div className="bg-orange-300 rounded-[2px]"></div>
                      </div>
                      <span className="text-[9px] font-extrabold text-[#111827]">Hey Attrangi</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      <span className="text-[7px] text-gray-400">Online</span>
                    </div>
                  </div>

                  {/* AI message bubble */}
                  <div className="px-3 pt-3 pb-1">
                    <div className="bg-white rounded-xl rounded-tl-sm px-2.5 py-2 shadow-sm border border-gray-100">
                      <p className="text-[8px] text-gray-700 leading-relaxed">Hi! 👋 How are you feeling today? I'm here to listen and support you.</p>
                    </div>
                  </div>

                  {/* Options label */}
                  <div className="px-3 pt-2.5 pb-1.5">
                    <p className="text-[8px] font-bold text-[#111827]">How can I help you today?</p>
                  </div>

                  {/* Option cards */}
                  <div className="px-3 flex flex-col gap-2 flex-1 overflow-hidden">
                    <div className="bg-white rounded-xl px-2.5 py-2 border border-gray-100 shadow-sm flex items-center gap-1.5">
                      <span className="text-[10px]">🎧</span>
                      <div>
                        <p className="text-[8px] font-bold text-[#111827]">Just Listen</p>
                        <p className="text-[7px] text-gray-400 leading-tight">I'll validate your feelings.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl px-2.5 py-2 border border-gray-100 shadow-sm flex items-center gap-1.5">
                      <span className="text-[10px]">💡</span>
                      <div>
                        <p className="text-[8px] font-bold text-[#111827]">Help Me Think</p>
                        <p className="text-[7px] text-gray-400 leading-tight">Untangle a problem together.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl px-2.5 py-2 border border-gray-100 shadow-sm flex items-center gap-1.5">
                      <span className="text-[10px]">⚡</span>
                      <div>
                        <p className="text-[8px] font-bold text-[#111827]">Answer Directly</p>
                        <p className="text-[7px] text-gray-400 leading-tight">No fluff, straight answers.</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="px-3 py-2.5">
                    <div className="w-full bg-[#FF6B00] rounded-xl py-2 flex items-center justify-center gap-1">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                      <span className="text-[8px] font-bold text-white">Start Chatting</span>
                    </div>
                  </div>

                  {/* Bottom nav */}
                  <div className="h-[52px] bg-white border-t border-gray-100 flex justify-center items-center gap-5 px-4 rounded-b-[33px] shrink-0">
                    <div className="w-7 h-7 bg-[#FF6B00] rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    </div>
                    <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </div>
                    <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom Links Area */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center border-t border-[#1a2b3c]/5">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 text-[#1a2b3c]/80 text-sm font-medium mb-6 md:mb-0">
            <Link href="/#services" className="hover:text-[#ea7e3b] transition-colors">Features</Link>
            <Link href="/about" className="hover:text-[#ea7e3b] transition-colors">How it works</Link>
            <Link href="/about" className="hover:text-[#ea7e3b] transition-colors">About us</Link>
            <Link href="/blogs" className="hover:text-[#ea7e3b] transition-colors">Explore</Link>
            <Link href="/blogs" className="hover:text-[#ea7e3b] transition-colors">Blog</Link>
            <Link href="/terms?section=privacy" className="hover:text-[#ea7e3b] transition-colors">Cookies</Link>
            <Link href="/terms?section=privacy" className="hover:text-[#ea7e3b] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#ea7e3b] transition-colors">Terms</Link>
            <Link href="/terms?section=refund" className="hover:text-[#ea7e3b] transition-colors">Refund</Link>
          </div>
          
          <p className="text-[#1a2b3c]/50 text-sm font-medium whitespace-nowrap">
            © {new Date().getFullYear()}, All Rights Reserved
          </p>
        </div>
        
      </div>
    </footer>
  );
}

