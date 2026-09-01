import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function InstitutionalFooter({ className = "" }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full bg-white border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8 select-text ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-flex items-center gap-2.5 group cursor-pointer mb-3">
                <Image
                  src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                  alt="Hey Attrangi logo"
                  width={34}
                  height={34}
                  className="w-8.5 h-8.5 object-contain group-hover:scale-105 transition-transform duration-200"
                />
                <span className="text-xl font-extrabold text-[#020618] tracking-tight">
                  Hey Attrangi
                </span>
              </Link>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-normal">
                Continuous mental wellbeing support, professional guidance, and proactive infrastructure for educational institutions.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/hey_attrangi" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.5a1 1 0 11-.002 2 1 1 0 01.002-2zM12 7a5 5 0 015 5 5 5 0 11-5-5zm0 2a3 3 0 100 6 3 3 0 000-6z" /></svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/heyattrangi/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.902 1.636-1.852 3.369-1.852 3.603 0 4.271 2.37 4.271 5.456v6.287z" /></svg>
              </a>
              {/* WhatsApp */}
              <a 
                href="https://chat.whatsapp.com/LIiaT1gAO256bI4DrMEX0z?mode=gi_t" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-orange-50 flex items-center justify-center text-slate-600 hover:text-[#FF6B00] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* About Us Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              About Us
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <Link href="/about" className="hover:text-[#FF6B00] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/institutions#sales-contact" className="hover:text-[#FF6B00] transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <a href="mailto:support@heyattrangi.com" className="hover:text-[#FF6B00] transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#FF6B00] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#FF6B00] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/terms?section=refund" className="hover:text-[#FF6B00] transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} Atrangi Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-800 transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-800 transition-colors">
              Terms
            </Link>
            <Link href="/terms?section=refund" className="hover:text-slate-800 transition-colors">
              Refund
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

