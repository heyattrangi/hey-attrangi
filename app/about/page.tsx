"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import ConnectWithUs from "@/components/ConnectWithUs";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Sandesh Sanjeev Phalke",
    role: "Founder",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783957638/sandesh_rggxgs.png",
    linkedin: "https://www.linkedin.com/in/sandesh-phalke-ph-d-63658b137/",
  },
  {
    id: 2,
    name: "Bharath",
    role: "Cofounder & CEO",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783953011/bharath_dex2af.png",
    linkedin: "https://www.linkedin.com/in/bharath-reddy-medasani-839b8b327/",
  },
  {
    id: 3,
    name: "Charan",
    role: "Cofounder & CFO",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783953271/charan_cbhkss.png",
    linkedin: "https://www.linkedin.com/in/charan-dusary-6023172a1/",
  },
  {
    id: 4,
    name: "Lakshmi Prasad",
    role: "Cofounder & CPO",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783953460/lakshmi_prasad_u3axbm.png",
    linkedin: "https://www.linkedin.com/in/lakshmi-prasad-doddi-26a30029a/",
  },
  {
    id: 5,
    name: "Harshith",
    role: "Cofounder & CTO",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783953345/harshit_zamcqo.png",
    linkedin: "https://www.linkedin.com/in/harshith-daraboina-14105a2b2/",
  },
  {
    id: 6,
    name: "Kalyan Jakkoju",
    role: "Cofounder & CMO",
    image: "https://res.cloudinary.com/dbjv95prc/image/upload/v1783953398/kalyan_mel0dq.png",
    linkedin: "https://www.linkedin.com/in/kalyan-jakkoju-5b6694312/",
  },
];

export default function AboutPage() {
  const [activeMemberId, setActiveMemberId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-orange-50/50 relative">
      {/* Navigation Component */}
      <Navigation currentPath="/about" />

      {/* About Us Hero Card */}
      <div className="relative pt-6 sm:pt-8 pb-16 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100 relative overflow-hidden">
            <div className="text-center relative z-20">
              {/* Main Title */}
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-none text-orange-600">
                ABOUT US
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-700 mb-6 font-medium">
                Empowering Mental Health Through Innovation
              </p>

              {/* Enhanced Description */}
              <div className="text-base text-gray-600 text-left leading-relaxed max-w-3xl mx-auto">
                <p className="mb-4">
                  We're dedicated to revolutionizing mental health support by creating an inclusive,
                  accessible, and empowering platform. Our mission is to
                  provide evidence-based therapy and resources tailored specifically for individuals seeking support.
                </p>
                <p>
                  Through innovative technology and compassionate care, we're building a community where
                  everyone can access the mental health support they need to thrive and be their authentic selves.
                </p>
              </div>

              {/* Orange Line */}
              <div className="mt-6 flex justify-center">
                <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>




      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Our Story */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Our Story
                  </h2>
                  <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto lg:mx-0"></div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      individuals navigate the challenges of traditional mental health services.
                      Hey Attrangi supports you as your mental health companion.
                      It soon became obvious that it would make sense to help our clients see beyond their
                      diagnoses and limitations, and be there with them from the very beginning of their
                      mental health journey.
                    </p>

                    <p className="text-lg text-gray-700 leading-relaxed">
                      Currently, we offer therapy services, mental health resources, and
                      community support in order to help our clients find their path to
                      mental wellness as seamlessly and effectively as possible. We value our clients
                      above everything else, meaning that we won't take 'OK' as an answer when it comes to their
                      mental health and wellbeing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Why Choose Us */}
              <div className="space-y-8 mt-28">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Why Choose Us
                  </h3>
                  <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto lg:mx-0"></div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mt-8">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-semibold">Evidence-Based Therapy</span>
                        <p className="text-sm text-gray-600 mt-1">Scientifically proven methods tailored to your unique needs</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-semibold">Inclusive & Accessible</span>
                        <p className="text-sm text-gray-600 mt-1">Welcoming environment for all individuals seeking care</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-semibold">Personalized Care</span>
                        <p className="text-sm text-gray-600 mt-1">Individualized treatment plans for unique needs</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <div>
                        <span className="font-semibold">Community Support</span>
                        <p className="text-sm text-gray-600 mt-1">Strong network of peers and professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Talk With Our Team Section */}
      <ConnectWithUs />

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              We've got an <span className="relative inline-block">

                <span className="relative text-orange-600">entire</span>
              </span> team dedicated to supporting you
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mt-4">
              Get help 24/7, with our award-winning support network of mental health experts.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="relative w-full max-w-5xl mx-auto px-4 mt-12">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
              {teamMembers.map((member) => {
                const isActive = activeMemberId === member.id;
                return (
                  <div
                    key={member.id}
                    onClick={() => setActiveMemberId(isActive ? null : member.id)}
                    className="relative group cursor-pointer flex flex-col items-center select-none"
                  >
                    {/* Outer Circle with light-green border/background */}
                    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full bg-[#e2edd9] p-1 flex items-center justify-center relative overflow-hidden transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg">
                      {/* Inner Profile Image container */}
                      <div className="w-full h-full rounded-full overflow-hidden relative bg-white">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover transition-all duration-300"
                        />
                      </div>

                      {/* Dark overlay showing name and designation on Click or Hover */}
                      <div
                        className={`absolute inset-0 bg-[#2d2d2d]/90 rounded-full flex flex-col items-center justify-center p-4 text-center transition-all duration-300 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        <h3 className="text-white font-bold text-[13px] sm:text-sm md:text-base mb-1 px-1 leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-[#e2edd9] text-[10px] sm:text-[11px] md:text-xs font-semibold leading-tight mb-2">
                          {member.role}
                          {member.description && (
                            <span className="block text-[9px] sm:text-[10px] opacity-80 mt-0.5 font-normal">
                              {member.description}
                            </span>
                          )}
                        </p>
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-white hover:text-orange-400 transition-colors p-1"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.902 1.636-1.852 3.369-1.852 3.603 0 4.271 2.37 4.271 5.456v6.287z" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-100/50 to-orange-50/70 border-t border-orange-100/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
              <a href="mailto:support@heyattrangi.com" className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                support@heyattrangi.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
              <a href="tel:+919552324069" className="text-sm font-semibold text-gray-600 hover:text-orange-600 transition-colors">
                +91 95523 24069
              </a>
            </div>

            {/* LinkedIn */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.902 1.636-1.852 3.369-1.852 3.603 0 4.271 2.37 4.271 5.456v6.287z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/company/heyattrangi/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors break-all"
              >
                linkedin.com/company/heyattrangi
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 flex flex-col items-start">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.5a1 1 0 11-.002 2 1 1 0 01.002-2zM12 7a5 5 0 015 5 5 5 0 11-5-5zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Instagram</h3>
              <a
                href="https://www.instagram.com/hey_attrangi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors break-all"
              >
                instagram.com/hey_attrangi
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100 flex flex-col items-start md:col-span-2 lg:col-span-2">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">Office Location</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                1344, Jai Jitendra Bunglow, Vanasiri Nagar, Sattur, Dharwad, Karnataka, India – 580009
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
