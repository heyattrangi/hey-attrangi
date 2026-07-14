"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

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
  const [isMuted, setIsMuted] = useState(true);
  const [activeMemberId, setActiveMemberId] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playCountRef = useRef(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.3; // Reduce volume to 30% so it's not too loud
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const willBeMuted = !isMuted;
      videoRef.current.muted = willBeMuted;
      
      if (!willBeMuted) {
        videoRef.current.volume = 0.3; // Ensure moderate volume
        playCountRef.current = 0; // Reset count on explicit unmute
        videoRef.current.currentTime = 0; // Start from beginning to hear full voice
        videoRef.current.play().catch(err => console.log("Video play failed:", err));
      } else {
        playCountRef.current = 0;
      }
      
      setIsMuted(willBeMuted);
    }
  };

  const handleVideoEnded = () => {
    if (isMuted) {
      // Loop infinitely while muted
      if (videoRef.current) {
        videoRef.current.play().catch(err => console.log("Video loop failed:", err));
      }
    } else {
      // Play 2 times with sound and then stop
      playCountRef.current += 1;
      if (playCountRef.current >= 2) {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          setIsMuted(true);
          videoRef.current.muted = true;
        }
      } else {
        if (videoRef.current) {
          videoRef.current.play().catch(err => console.log("Video repeat failed:", err));
        }
      }
    }
  };

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("error");
      setFormError("All fields are required.");
      return;
    }

    setFormStatus("submitting");
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
        setFormError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setFormStatus("error");
      setFormError("Failed to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 relative">
      {/* Navigation Component */}
      <Navigation currentPath="/about" />

      {/* About Us Section - 70% Height Video with Floating Card */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Video with 70% Height */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          playsInline
          preload="none"
          onEnded={handleVideoEnded}
        >
          <source src="/videos/doc1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Mute/Unmute Toggle Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-20 right-6 z-40 p-3 bg-white/80 hover:bg-white/95 backdrop-blur-md rounded-full shadow-lg border border-orange-200 transition-all duration-300 group flex items-center justify-center cursor-pointer"
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform" />
          ) : (
            <Volume2 className="w-6 h-6 text-orange-600 group-hover:scale-110 transition-transform animate-pulse" />
          )}
        </button>
      </section>

      {/* Floating Card - Following Home Page Pattern */}
      <div className="relative -mt-16 mb-20 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-orange-200 relative overflow-hidden">
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

      {/* Quote Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 shadow-lg relative">
            {/* Large opening quote mark */}
            <div className="absolute left-4 top-4 text-8xl md:text-9xl font-bold text-orange-600 opacity-20 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              "
            </div>

            {/* Large closing quote mark */}
            <div className="absolute right-4 bottom-4 text-8xl md:text-9xl font-bold text-orange-600 opacity-20 leading-none" style={{ fontFamily: 'Georgia, serif' }}>
              "
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-800 leading-relaxed relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              "Every individual deserves access to mental health support that understands their unique needs.
              At Attrangi, we're not just providing services – we're building a community where
              individuals can thrive and be their authentic selves."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-6 py-3 rounded-full text-sm font-semibold mb-6">
  
              Our Bold Mission
            </div> */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Our Mission <span className="text-orange-600">| We Won't Take 'OK' as an Answer</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="relative w-full h-[800px] lg:h-[900px]">
              <Image
                src="/images/src12.jpg"
                alt="Our Bold Mission - We Won't Take 'OK' as an Answer"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Right Side - Mission Text */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-orange-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  Attrangi started as a small mental health support initiative, aiming to help individuals navigate the challenges of traditional mental health services. Hey Attrangi supports you as your mental health companion. It soon became obvious that it would make sense to help our clients see beyond their diagnoses and limitations, and be there with them from the very beginning of their mental health journey.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  Currently, we offer therapy services, mental health resources, and community support in order to help our clients find their path to mental wellness as seamlessly and effectively as possible. We value our clients above everything else, meaning that we won't take 'OK' as an answer when it comes to their mental health and wellbeing.
                </p>

                <div className="text-center mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xl font-bold text-gray-800 italic">
                    "So amy bold words"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Contact Us Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-orange-100/50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch with us. We're here to help and answer any questions you may have.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@heyattrangi.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+91 95523 24069</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">Jai Jinendra Banglow, 580009<br />Hubli - Dharwad Rd, KHB Colony<br />Narayanpura, Dharwad, Karnataka 580009<br />Sattur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.34 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM20.452 20.452h-3.558v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.047c.476-.902 1.636-1.852 3.369-1.852 3.603 0 4.271 2.37 4.271 5.456v6.287z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/company/heyattrangi/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors break-all"
                    >
                      linkedin.com/company/heyattrangi
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm9.75 1.5a1 1 0 11-.002 2 1 1 0 01.002-2zM12 7a5 5 0 015 5 5 5 0 11-5-5zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instagram</h4>
                    <a
                      href="https://www.instagram.com/hey_attrangi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 transition-colors break-all"
                    >
                      instagram.com/hey_attrangi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              {formStatus === "success" ? (
                <div className="text-center py-8 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-2">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">Message Sent!</h4>
                  <p className="text-gray-600 max-w-sm mx-auto">
                    Thank you for reaching out. We have received your message and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="mt-4 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {formStatus === "error" && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm font-medium">
                      {formError}
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      disabled={formStatus === "submitting"}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      disabled={formStatus === "submitting"}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      required
                      disabled={formStatus === "submitting"}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 bg-white resize-none disabled:opacity-50"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-semibold disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

