"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { APP_SIGNIN_URL, APP_BILLING_URL } from "@/lib/app-urls";
import { BILLING_VISIBLE, MIND_MATRIX_VISIBLE } from "@/lib/feature-flags";

interface NavigationProps {
    currentPath?: string;
}

export default function Navigation({ currentPath = "/" }: NavigationProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide/Show logic
            if (currentScrollY <= 0) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling down
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY.current) {
                // Scrolling up
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActivePath = (path: string) => currentPath === path;
    const isMindMatrixSection =
        currentPath === "/mind-matrix" || currentPath.startsWith("/mind-matrix/");

    return (
        <>
            <header
                className={`sticky top-0 w-full z-[60] bg-white shadow-md border-b border-gray-100 transition-transform duration-300 ease-in-out will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
                suppressHydrationWarning
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 w-full">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center">
                                <div className="relative h-9 w-auto">
                                    <img
                                        src="https://res.cloudinary.com/dbjv95prc/image/upload/v1784004218/Group_16_t94j4m.png"
                                        alt="Attrangi Private Limited"
                                        className="h-full w-auto object-contain"
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation - Split Layout */}
                        <div className="hidden md:flex items-center flex-grow mx-6">
                            {/* Left Group */}
                            <nav aria-label="Main Navigation" className="flex items-center flex-grow space-x-6">
                                <ul className="flex items-center space-x-6 list-none m-0 p-0">
                                    <li>
                                        <Link
                                            href="/"
                                            className={`text-sm font-medium transition-colors duration-200 ${isActivePath('/') ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-600'}`}
                                        >
                                            Home
                                        </Link>
                                    </li>

                                    {/* Services Dropdown */}
                                    <li className="relative group" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
                                        <button aria-haspopup="true" aria-expanded={activeDropdown === 'services'} className={`text-sm font-medium transition-colors duration-200 flex items-center ${isActivePath('/services') || activeDropdown === 'services' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
                                            Services
                                            <svg className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {activeDropdown === 'services' && (
                                            <div className="absolute top-full left-0 pt-2 w-52 z-50">
                                                <ul className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 list-none m-0">
                                                    <li><span className="block px-4 py-2 text-sm text-gray-300 cursor-default select-none">Therapy Services</span></li>
                                                    <li><span className="block px-4 py-2 text-sm text-gray-300 cursor-default select-none">Assessment & Diagnosis</span></li>
                                                    <li><span className="block px-4 py-2 text-sm text-gray-300 cursor-default select-none">Online Consultations</span></li>
                                                    <li><span className="block px-4 py-2 text-sm text-gray-300 cursor-default select-none">Group Sessions</span></li>
                                                    <li className="border-t border-gray-100 mt-1 pt-1"><Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Resources</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>

                                    <li>
                                        <Link
                                            href="/#connect-with-us"
                                            className={`text-sm font-medium transition-colors duration-200 ${currentPath === '/#connect-with-us' ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-600'}`}
                                        >
                                            Connect With Us
                                        </Link>
                                    </li>

                                    {MIND_MATRIX_VISIBLE ? (
                                        <li>
                                            <Link
                                                href="/mind-matrix"
                                                className={`text-sm font-medium transition-colors duration-200 ${isMindMatrixSection ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-600'}`}
                                            >
                                                Mind Matrix
                                            </Link>
                                        </li>
                                    ) : null}
                                </ul>

                                {/* Spacer */}
                                <div className="flex-grow"></div>

                                {/* Right Group */}
                                <ul className="flex items-center space-x-6 list-none m-0 p-0">
                                    {BILLING_VISIBLE ? (
                                        <li>
                                            <Link
                                                href="/billing"
                                                className={`text-sm font-medium transition-colors duration-200 ${isActivePath('/billing') ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-600'}`}
                                            >
                                                Billing
                                            </Link>
                                        </li>
                                    ) : null}

                                    {/* Resources Dropdown */}
                                    <li className="relative group" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
                                        <button aria-haspopup="true" aria-expanded={activeDropdown === 'resources'} className={`text-sm font-medium transition-colors duration-200 flex items-center ${activeDropdown === 'resources' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
                                            Resources
                                            <svg className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {activeDropdown === 'resources' && (
                                            <div className="absolute top-full left-0 pt-2 w-52 z-50">
                                                <ul className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 list-none m-0">
                                                    <li><Link href="/resources" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">All Resources</Link></li>
                                                    <li><Link href="/resources#self-help" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Self-Help Guides</Link></li>
                                                    <li><Link href="/resources#tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Mental Health Tools</Link></li>
                                                    <li><Link href="/resources#worksheets" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Worksheets & Activities</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>

                                    {/* WhatsApp Icon — removed from here, placed between About Us and Hey Attrangi button */}

                                    {/* About Us Dropdown */}
                                    <li className="relative group" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                                        <button aria-haspopup="true" aria-expanded={activeDropdown === 'about'} className={`text-sm font-medium transition-colors duration-200 flex items-center ${activeDropdown === 'about' ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'}`}>
                                            About Us
                                            <svg className={`w-4 h-4 ml-0.5 transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {activeDropdown === 'about' && (
                                            <div className="absolute top-full right-0 pt-2 w-52 z-50">
                                                <ul className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 list-none m-0">
                                                    <li><Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">About Attrangi</Link></li>
                                                    <li><Link href="/about#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Our Team</Link></li>
                                                    <li><Link href="/about#mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Our Mission</Link></li>
                                                    <li><Link href="/about#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Contact Us</Link></li>
                                                    <li><Link href="/terms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Terms & Conditions</Link></li>
                                                </ul>
                                            </div>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden md:flex items-center space-x-3">
                            {/* WhatsApp Button */}
                            <a
                                href="https://chat.whatsapp.com/LIiaT1gAO256bI4DrMEX0z?mode=gi_t"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Join WhatsApp Community"
                                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] transition-colors shadow-sm"
                            >
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>

                            <div className="relative">
                                <Link
                                    href="https://app-heyattrangi.vercel.app/patient/ai-bot"
                                    className="bg-orange-500 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-orange-600 transition-colors whitespace-nowrap inline-block relative z-10"
                                >
                                    Hey Attrangi
                                </Link>
                                {/* Clicking Animation / Cursor — hidden for now
                                <div className="absolute -bottom-4 -right-3 z-20 pointer-events-none animate-bounce" style={{ animationDuration: '2s' }}>
                                    <svg className="w-7 h-7 text-orange-600 drop-shadow-md transform -rotate-12" fill="currentColor" stroke="white" strokeWidth="1" viewBox="0 0 24 24">
                                        <path d="M6 3l14 9-6 2 4 7-3 2-4-7-5 4z" />
                                    </svg>
                                </div>
                                */}
                            </div>
                        </div>

                        {/* Hamburger Menu Button - Mobile Only */}
                        <div className="flex-shrink-0 md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {
                mobileMenuOpen && (
                    <nav aria-label="Mobile Navigation" className="md:hidden fixed inset-0 z-[70] top-20 bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
                        <ul className="px-4 py-6 space-y-4 list-none m-0">
                            <li>
                                <Link
                                    href="/"
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>

                            {/* About Us Mobile Dropdown */}
                            <li>
                                <button
                                    aria-haspopup="true"
                                    aria-expanded={mobileDropdown === 'about'}
                                    onClick={() => setMobileDropdown(mobileDropdown === 'about' ? null : 'about')}
                                    className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors flex items-center justify-between"
                                >
                                    About Us
                                    <svg className={`w-4 h-4 transition-transform ${mobileDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {mobileDropdown === 'about' && (
                                    <ul className="mt-2 ml-4 space-y-2 list-none m-0">
                                        <li><Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>About Attrangi</Link></li>
                                        <li><Link href="/about#team" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Our Team</Link></li>
                                        <li><Link href="/about#mission" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Our Mission</Link></li>
                                        <li><Link href="/about#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Contact Us</Link></li>
                                        <li><Link href="/terms" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Terms & Conditions</Link></li>
                                    </ul>
                                )}
                            </li>

                            {/* Services Mobile Dropdown */}
                            <li>
                                <button
                                    aria-haspopup="true"
                                    aria-expanded={mobileDropdown === 'services'}
                                    onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                                    className="w-full px-4 py-3 text-orange-600 hover:bg-orange-50 rounded-lg font-semibold transition-colors flex items-center justify-between"
                                >
                                    Services
                                    <svg className={`w-4 h-4 transition-transform ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {mobileDropdown === 'services' && (
                                    <ul className="mt-2 ml-4 space-y-2 list-none m-0">
                                        <li><span className="block px-4 py-2 text-gray-300 cursor-default select-none text-sm">Therapy Services</span></li>
                                        <li><span className="block px-4 py-2 text-gray-300 cursor-default select-none text-sm">Assessment & Diagnosis</span></li>
                                        <li><span className="block px-4 py-2 text-gray-300 cursor-default select-none text-sm">Online Consultations</span></li>
                                        <li><span className="block px-4 py-2 text-gray-300 cursor-default select-none text-sm">Group Sessions</span></li>
                                        <li className="border-t border-gray-100 pt-1"><Link href="/resources" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Resources</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link
                                    href="/#connect-with-us"
                                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Connect With Us
                                </Link>
                            </li>

                            {BILLING_VISIBLE ? (
                                <li>
                                    <Link
                                        href="/billing"
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Billing
                                    </Link>
                                </li>
                            ) : null}

                            {/* Resources Mobile Dropdown */}
                            <li>
                                <button
                                    aria-haspopup="true"
                                    aria-expanded={mobileDropdown === 'resources'}
                                    onClick={() => setMobileDropdown(mobileDropdown === 'resources' ? null : 'resources')}
                                    className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors flex items-center justify-between"
                                >
                                    Resources
                                    <svg className={`w-4 h-4 transition-transform ${mobileDropdown === 'resources' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {mobileDropdown === 'resources' && (
                                    <ul className="mt-2 ml-4 space-y-2 list-none m-0">
                                        <li><Link href="/resources" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>All Resources</Link></li>
                                        <li><Link href="/resources#self-help" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Self-Help Guides</Link></li>
                                        <li><Link href="/resources#tools" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Mental Health Tools</Link></li>
                                        <li><Link href="/resources#worksheets" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" onClick={() => { setMobileMenuOpen(false); setMobileDropdown(null); }}>Worksheets & Activities</Link></li>
                                    </ul>
                                )}
                            </li>

                            {MIND_MATRIX_VISIBLE ? (
                                <li>
                                    <Link
                                        href="/mind-matrix"
                                        className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Mind Matrix
                                    </Link>
                                </li>
                            ) : null}

                            <li>
                                <div className="relative mb-3">
                                    <Link
                                        href="https://app-heyattrangi.vercel.app/patient/ai-bot"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="w-full block bg-orange-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg text-center relative z-10 hover:bg-orange-600 transition-colors"
                                    >
                                        Hey Attrangi
                                    </Link>
                                    {/* Clicking Animation / Cursor — hidden for now
                  <div className="absolute -bottom-4 -right-2 z-20 pointer-events-none animate-bounce" style={{ animationDuration: '2s' }}>
                    <svg className="w-7 h-7 text-orange-600 drop-shadow-md transform -rotate-12" fill="currentColor" stroke="white" strokeWidth="1" viewBox="0 0 24 24">
                      <path d="M6 3l14 9-6 2 4 7-3 2-4-7-5 4z" />
                    </svg>
                  </div>
                  */}
                                </div>
                            </li>

                            <li>
                                <a
                                    href="https://chat.whatsapp.com/LIiaT1gAO256bI4DrMEX0z?mode=gi_t"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
                                >
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366]">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </span>
                                    Chat on WhatsApp
                                </a>
                            </li>
                        </ul>
                    </nav >
                )
            }
        </>
    );
}
