import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions governing access to and use of the Hey Attrangi platform and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation currentPath="/terms-and-conditions" />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-[32px] shadow-sm shadow-orange-500/5 border border-gray-100 p-8 md:p-12 lg:p-16">
            
            {/* Header Section */}
            <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block">
                Legal Document
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b3c] tracking-tight mb-4">
                Terms & Conditions
              </h1>
              <div className="text-sm text-gray-500 space-y-1 font-medium">
                <p>Effective Date: 23 JUL 2026</p>
                <p>Last Updated: 23 JUL 2026</p>
              </div>
            </div>

            {/* Terms Content */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              
              {/* INTRODUCTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Introduction
                </h2>
                <p>
                  Welcome to Hey Attrangi. These Terms &amp; Conditions (&quot;Terms&quot;) form a legally binding agreement between you (&quot;you&quot;, &quot;your&quot;, or &quot;User&quot;) and Aatrangi Private Limited (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) regarding your access to and use of the Hey Attrangi platform (the &quot;Platform&quot;).
                </p>
                <p>
                  The Platform includes all websites, web applications, mobile applications, therapist portals, administrative dashboards, institutional dashboards, application programming interfaces (APIs), and any future products, modules, and official services we develop.
                </p>
                <p>
                  By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Platform.
                </p>
                <p>
                  These Terms are published in compliance with the Information Technology Act, 2000, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and other applicable laws of the Republic of India.
                </p>
              </section>

              {/* SCOPE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Scope
                </h2>
                <p>These Terms apply to all Users of the Platform, including:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>Users who access AI-assisted wellness features</li>
                  <li>Patients who receive therapist-led clinical or therapeutic services</li>
                  <li>Caregivers who create and manage accounts for Minor Users</li>
                  <li>Licensed Therapists who provide Services through the Platform</li>
                  <li>Institutional Administrators representing partner institutions</li>
                  <li>Any other individual or entity accessing or using the Platform</li>
                </ul>
                <p>These Terms apply to all products, services, websites, applications, and platforms operated under the Hey Attrangi brand, including all current and future offerings.</p>
              </section>

              {/* RELATIONSHIP WITH OTHER DOCUMENTS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Relationship with Other Documents
                </h2>
                <p>
                  These Terms should be read together with the following documents, which together form the complete legal framework governing your use of the Platform:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>General Treatment Consent</strong> - Governs your consent to receive mental wellness and therapeutic services</li>
                  <li><Link href="/ai-assistance-consent" className="text-orange-600 hover:underline"><strong>AI Assistance Consent</strong></Link> - Governs your consent to use artificial intelligence features</li>
                  <li><strong>Teletherapy Consent</strong> - Governs your consent to receive therapist-led teletherapy services</li>
                  <li><strong>Session Recording Consent</strong> - Governs the recording of therapy sessions</li>
                  <li><strong>Emergency Contact Authorization</strong> - Authorizes the Company to contact designated Emergency Contacts</li>
                  <li><strong>Crisis Intervention Consent</strong> - Governs crisis detection and intervention</li>
                  <li><Link href="/data-processing-consent" className="text-orange-600 hover:underline"><strong>Data Processing Consent</strong></Link> - Governs the processing of your data</li>
                  <li><strong>Electronic Communication Consent</strong> - Governs electronic communications</li>
                  <li><strong>Privacy Policy</strong> - Governs the collection, processing, storage, and disclosure of your personal data</li>
                  <li><strong>Data Retention &amp; Deletion Policy</strong> - Governs the retention and deletion of your data</li>
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p className="font-semibold text-gray-800">Document Hierarchy:</p>
                  <p>In the event of any conflict between these Terms and any other document:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Applicable law shall prevail over all documents</li>
                    <li>The General Treatment Consent shall prevail over these Terms with respect to therapist-led clinical services</li>
                    <li>The <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent</Link> shall prevail over these Terms with respect to AI-specific provisions</li>
                    <li>These Terms shall prevail over the Privacy Policy and Data Retention &amp; Deletion Policy with respect to contractual terms</li>
                  </ul>
                </div>
              </section>

              {/* DEFINITIONS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Definitions
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>&quot;Platform&quot;</strong> means the digital mental health platform operated by the Company under the brand name &quot;Hey Attrangi&quot;, including all websites, web applications, mobile applications, therapist portals, administrative dashboards, institutional dashboards, APIs, and future products, modules, and official services developed by the Company.</li>
                  <li><strong>&quot;Services&quot;</strong> means the mental wellness and therapeutic services provided through the Platform, including AI-assisted wellness features, therapist consultations, video consultations, mood tracking, journaling, assessments, medication reminders, wellness activities, and related services.</li>
                  <li><strong>&quot;User&quot;</strong> means any individual who registers on, accesses, or uses any feature of the Platform.</li>
                  <li><strong>&quot;Patient&quot;</strong> means a User who receives therapist-led clinical or therapeutic services through the Platform.</li>
                  <li><strong>&quot;Minor&quot;</strong> or <strong>&quot;Minor User&quot;</strong> means a User who is below the age of eighteen (18) years.</li>
                  <li><strong>&quot;Caregiver&quot;</strong> means a parent or legal guardian who creates and manages an account for a Minor User.</li>
                  <li><strong>&quot;Licensed Therapist&quot;</strong> means a mental health professional who holds a valid license to practice mental healthcare and provides Services through the Platform.</li>
                  <li><strong>&quot;AI System&quot;</strong> means the artificial intelligence-powered components of the Platform, including the conversational chatbot, mood analysis algorithms, AI-generated recommendations, wellness plans, psychological screening tools, medication reminders, crisis detection algorithms, and report generation tools.</li>
                  <li><strong>&quot;User Content&quot;</strong> means any content, information, data, text, graphics, images, audio, or other materials that you submit, post, upload, or otherwise make available on or through the Platform.</li>
                  <li><strong>&quot;Output&quot;</strong> means any content, information, data, text, graphics, images, or other materials generated by the AI System in response to your inputs.</li>
                  <li><strong>&quot;Order Form&quot;</strong> means any ordering document, invoice, or other record that specifies the Services you have subscribed to and the applicable fees.</li>
                  <li><strong>&quot;Subscription Term&quot;</strong> means the period during which you have subscribed to access the Services, as specified in the applicable Order Form.</li>
                  <li><strong>&quot;Voice Input&quot;</strong> means the functionality that allows you to speak to the AI Companion using your device&apos;s microphone, with your speech being converted into text by a trusted speech recognition service.</li>
                  <li><strong>&quot;Transcript&quot;</strong> means the text generated from your speech through the speech recognition process.</li>
                </ul>
              </section>

              {/* AMENDMENTS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Amendments
                </h2>
                <p>
                  We reserve the right to amend these Terms at any time, in our sole discretion, subject to applicable law.
                </p>
                <p>When we make material changes to these Terms, we will notify you through:</p>
                <ul className="space-y-1 pl-5 list-disc text-gray-600">
                  <li>The Platform</li>
                  <li>Email to your registered email address</li>
                  <li>In-app notifications</li>
                  <li>A notice on our website</li>
                  <li>Any other appropriate means</li>
                </ul>
                <p>
                  The &quot;Effective Date&quot; at the top of these Terms indicates when they were last revised.
                </p>
                <p>
                  Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated Terms, subject to any additional consent requirements under applicable law.
                </p>
                <p>
                  If you do not agree to any amendment, your sole remedy is to cease using the Platform and terminate your account.
                </p>
              </section>

              {/* INTERPRETATION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Interpretation
                </h2>
                <p>The following rules apply to the interpretation of these Terms:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>Headings are for convenience only and shall not affect interpretation</li>
                  <li>Words importing the singular include the plural, and vice versa</li>
                  <li>Words importing the masculine gender include the feminine and neuter genders</li>
                  <li>&quot;Include&quot; or &quot;including&quot; means &quot;including without limitation&quot;</li>
                  <li>&quot;Shall&quot; indicates a mandatory requirement; &quot;may&quot; indicates a permissive or discretionary action</li>
                  <li>References to laws include any amendments, re-enactments, or substitutions</li>
                  <li>References to documents include any amendments or replacements</li>
                </ul>
              </section>

              {/* PART II — ELIGIBILITY AND ACCOUNTS */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part II — Eligibility and Accounts
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Eligibility</h3>
                  <p>The Platform is available to individuals who are at least three (3) years of age.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Minor Users (Under 18):</p>
                    <p>Individuals below the age of eighteen (18) years may only access the Platform under the following conditions:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>A Caregiver must create and manage the Minor User&apos;s account</li>
                      <li>The Caregiver must provide verifiable consent for the processing of the Minor User&apos;s personal data in accordance with the Digital Personal Data Protection Act, 2023</li>
                      <li>Therapy sessions with Licensed Therapists must always be managed by the Caregiver</li>
                      <li>The Minor User may independently access only the AI conversational companion, mood tracking, guided journaling, and wellness activities</li>
                      <li>The Caregiver shall be responsible for supervising the Minor User&apos;s use of the Platform, including any optional features such as voice input</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Your Representations:</p>
                    <p>By using the Platform, you represent and warrant that:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You are lawfully able to enter into a binding contract</li>
                      <li>You are not prohibited from using the Platform under applicable law</li>
                      <li>If you are accepting these Terms on behalf of an entity, you have the legal authority to bind that entity</li>
                      <li>All information you provide is accurate, complete, and truthful</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Account Creation and Authentication</h3>
                  <p>To access the Services, you must create an account on the Platform.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Authentication Methods: You may create an account using one of the following methods:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Google Sign-In:</strong> Sign in using your Google account. By doing so, you authorize us to receive your name, email address, and profile information from Google. We do not receive your Google password.</li>
                      <li><strong>Phone OTP:</strong> Sign in using your phone number. We will send a one-time password (OTP) to your phone for verification.</li>
                      <li><strong>Institutional Single Sign-On (SSO):</strong> If you access the Platform through a partner institution, you may sign in using your institutional credentials.</li>
                      <li><strong>Future Authentication Methods:</strong> We may introduce additional authentication methods from time to time.</li>
                    </ul>
                  </div>
                  <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
                  <p>You must notify us immediately of any unauthorized use of your account or any other breach of security.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Caregiver Accounts</h3>
                  <p>Caregiver accounts are created and managed by the Caregiver on behalf of a Minor User.</p>
                  <p>The Caregiver is the legal account owner for every Minor User account.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Caregiver Responsibilities: The Caregiver is responsible for:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All activities carried out on behalf of the Minor User</li>
                      <li>All therapy-related decisions involving the Minor User</li>
                      <li>Providing accurate and complete information about the Minor User</li>
                      <li>Supervising the Minor User&apos;s use of the Platform</li>
                      <li>Ensuring that the Minor User accesses only age-appropriate Services</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Account Security</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Your Responsibilities: You are responsible for:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Maintaining the security of your account credentials</li>
                      <li>Not sharing your account credentials with unauthorized individuals</li>
                      <li>Using strong, unique passwords</li>
                      <li>Enabling multi-factor authentication where available</li>
                      <li>Logging out of your account after each session</li>
                    </ul>
                  </div>
                  <p>We are not liable for any loss or damage arising from your failure to comply with these security obligations.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Account Verification</h3>
                  <p>We may require you to verify your identity at any time, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>During account creation</li>
                    <li>Before accessing therapist-led services</li>
                    <li>Before updating sensitive account information</li>
                    <li>In response to security concerns</li>
                    <li>As required by applicable law</li>
                  </ul>
                  <p>Verification may include providing government-issued identification, confirming contact information, or other reasonable verification methods.</p>
                </div>
              </section>

              {/* PART III — PLATFORM SERVICES */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part III — Platform Services
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Services Overview</h3>
                  <p>The Platform provides the following Services:</p>
                  <ul className="space-y-3 pl-5 list-disc text-gray-600">
                    <li><strong>AI Wellness:</strong> AI-powered conversational wellness support, personalized recommendations, wellness plans, and related features. You may interact with the AI Companion either by typing text or by using voice input, as described in these Terms.</li>
                    <li><strong>Therapy:</strong> Therapist-led consultations conducted through secure video consultations.</li>
                    <li><strong>Mood Tracking:</strong> Tools to record, monitor, and track emotional states.</li>
                    <li><strong>Journaling:</strong> Guided and free-form journaling exercises.</li>
                    <li><strong>Assessments:</strong> Psychological screening assessments.</li>
                    <li><strong>Medication Reminders:</strong> Notifications to support medication adherence.</li>
                    <li><strong>Wellness Activities:</strong> Exercises and activities to promote mental health.</li>
                    <li><strong>Institutional Services:</strong> Services for partner institutions, including aggregated analytics and institutional dashboards.</li>
                    <li><strong>Administrative Dashboards:</strong> Dashboards for administrative management of the Platform.</li>
                    <li><strong>Future Products:</strong> Any additional products, modules, or services developed by the Company.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">What the Platform Does Not Provide:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Emergency medical services</li>
                    <li>Psychiatric diagnosis through AI</li>
                    <li>Voice calling or AI-generated spoken responses</li>
                    <li>Direct messaging between Users</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Service Availability</h3>
                  <p>We aim to provide continuous availability of the Platform but do not guarantee uninterrupted, error-free, or always-available services.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">The Platform may be unavailable due to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Scheduled maintenance</li>
                      <li>Unscheduled maintenance or emergency repairs</li>
                      <li>Technical failures or system upgrades</li>
                      <li>Third-party service provider outages</li>
                      <li>Force Majeure events</li>
                      <li>Any other circumstances beyond our reasonable control</li>
                    </ul>
                  </div>
                  <p>We will make reasonable efforts to provide advance notice of scheduled maintenance.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Beta Features</h3>
                  <p>We may offer beta or experimental features (&quot;Beta Features&quot;) from time to time.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                    <p className="font-semibold text-gray-800">Beta Features:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>May change at any time without notice</li>
                      <li>May contain defects, errors, or bugs</li>
                      <li>May be discontinued at any time</li>
                      <li>May not be fully supported</li>
                      <li>Are provided &quot;as is&quot; without warranties of any kind</li>
                      <li>Your use of Beta Features is at your own risk.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Modifications to Services</h3>
                  <p>We reserve the right to modify, suspend, or discontinue any Service at any time, with or without notice.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                    <p className="font-semibold text-gray-800">We May:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Add new features or functionalities</li>
                      <li>Remove existing features or functionalities</li>
                      <li>Change the pricing of Services</li>
                      <li>Change the availability of Services in different geographic regions</li>
                      <li>Make any other changes to the Services in our sole discretion</li>
                    </ul>
                  </div>
                  <p>We shall not be liable for any modifications, suspensions, or discontinuations of Services.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Third-Party Services</h3>
                  <p>The Platform may integrate with or provide access to third-party services, applications, or content (&quot;Third-Party Services&quot;).</p>
                  <p>Third-Party Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.</p>
                  <p>We do not endorse, control, or assume responsibility for any Third-Party Services.</p>
                  <p>Your use of Third-Party Services is governed by the terms and conditions of the applicable third-party provider.</p>
                </div>
              </section>

              {/* PART IV — AI SERVICES */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part IV — AI Services
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">AI Services</h3>
                  <p>The Platform incorporates artificial intelligence technologies to provide AI-assisted mental wellness services.</p>
                  <p>The AI System may utilize AI technologies developed internally by the Company and/or provided by trusted third-party service providers operating under appropriate contractual, privacy, confidentiality, and security obligations.</p>
                  <p>The specific AI technologies utilized by the Platform may change over time without requiring amendment of these Terms, provided that the overall purposes and material characteristics of the AI System remain substantially similar.</p>
                  <p>For more information on AI services, please refer to our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent</Link> document.</p>
                </div>

                {/* AI LIMITATIONS */}
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-900 uppercase">AI Limitations</h3>
                  <p className="font-semibold text-orange-950">You acknowledge and understand that the AI System:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-900">
                    <li>Is not a psychologist, psychiatrist, therapist, physician, or healthcare practitioner</li>
                    <li>Does not independently diagnose any medical or psychological condition</li>
                    <li>Does not prescribe medication</li>
                    <li>Does not replace licensed mental healthcare professionals, clinical judgment, or therapeutic intervention</li>
                    <li>Does not make clinical decisions, which remain solely with Licensed Therapists and other qualified mental health professionals</li>
                    <li>Is a supportive tool designed to complement, not replace, professional mental healthcare</li>
                    <li>The AI System may generate responses that are inaccurate, incomplete, or inappropriate. You should exercise independent judgment and not rely exclusively on the AI System.</li>
                  </ul>
                  <p className="text-xs text-orange-950/80">For more information on AI limitations, please refer to our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline font-semibold text-orange-950">AI Assistance Consent</Link> document.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">AI Memory</h3>
                  <p>The AI System maintains memory of previous conversations and interactions to provide continuity of care and personalized experiences.</p>
                  <p>You may request deletion of AI memory where legally and operationally feasible.</p>
                  <p>For more information on AI memory, please refer to our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent</Link> and <Link href="/privacy-policy" className="text-orange-600 hover:underline">Privacy Policy</Link>.</p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-900 uppercase">AI Crisis Detection</h3>
                  <p>The AI System includes crisis detection capabilities designed to identify potential indicators of crisis situations.</p>
                  <p className="font-bold text-orange-950 bg-orange-100 p-4 rounded-xl border border-orange-200">
                    IMPORTANT: The AI System is not an emergency service and must never be relied upon as the sole source of crisis intervention.
                  </p>
                  <p className="text-xs text-orange-900">For more information on crisis detection, please refer to our Crisis Intervention Consent document.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Voice Input</h3>
                  <p>The Platform offers you the option to provide input to the AI Companion through voice, in addition to typed text.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <ol className="list-decimal pl-5 space-y-4">
                      <li>
                        <strong>Optional Nature:</strong> Voice input is entirely optional. You may continue to interact with the AI Companion exclusively through typed text if you so choose. Typing remains fully supported at all times.
                      </li>
                      <li>
                        <strong>How Voice Input Works:</strong> When you choose to use voice input:
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Microphone Permission:</strong> The application requests permission to access your device&apos;s microphone only when you choose to use voice input. You may grant or withdraw this permission at any time through your device settings.</li>
                          <li><strong>Speech-to-Text Conversion:</strong> Your speech is converted into text using a trusted third-party speech recognition service operating under appropriate contractual confidentiality, privacy, and security obligations.</li>
                          <li><strong>Text-Only Responses:</strong> The AI always responds in text. The AI does not generate spoken responses.</li>
                          <li><strong>Transcript Processing:</strong> The generated transcript is processed by the AI Companion in the same manner as a typed message and becomes part of your conversation history.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Data Retention and Privacy:</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                          <li><strong>Raw Audio Discarded:</strong> Raw audio recordings are not retained after successful transcription. Immediately after your speech has been converted into text, the raw audio is securely discarded.</li>
                          <li><strong>Transcript Retention:</strong> Only the generated transcript is retained as part of your conversation history and is subject to the same privacy policies, retention policies, and AI safeguards as typed messages.</li>
                          <li><strong>No Voice Identification:</strong> The AI does not use your voice to identify you. The platform does not perform speaker identification, voice authentication, voice biometrics, voice profiling, voice cloning, or voiceprint creation.</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Speech Recognition Limitations:</strong> Speech recognition technology may occasionally generate inaccurate words, punctuation, names, accents, or interpretations. You remain responsible for reviewing important information before relying upon AI responses.
                      </li>
                      <li>
                        <strong>Voice Interactions and AI Safeguards:</strong> Voice conversations are subject to the same AI limitations, safety mechanisms, content moderation, crisis detection, and disclaimers that apply to typed conversations.
                      </li>
                      <li>
                        <strong>User Control:</strong> You may grant or withdraw microphone permission at any time through your device&apos;s operating system settings. If microphone permission is denied, voice input becomes unavailable while text input continues to function normally.
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* PART V — THERAPIST SERVICES */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part V — Therapist Services
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Therapist Services</h3>
                  <p>Therapy and counselling services on the Platform are delivered exclusively by Licensed Therapists who hold valid professional licenses and qualifications.</p>
                  <p>The Platform facilitates consultations between Users and Licensed Therapists through secure video conferencing but does not itself provide therapeutic services.</p>
                  <p>The Licensed Therapist, not the Company, is responsible for all clinical decisions, including diagnosis, treatment planning, and therapeutic interventions.</p>
                  <p>The therapeutic relationship is between the User and the Licensed Therapist. The Company is not a party to that therapeutic relationship.</p>
                  <p>For more information on therapist services, please refer to our Teletherapy Consent document.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">Therapist Relationship</h3>
                  <p className="font-semibold text-gray-700">We Do Not:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Control, direct, or influence the clinical decisions of Licensed Therapists</li>
                    <li>Guarantee the availability of any specific Licensed Therapist</li>
                    <li>Guarantee any specific therapeutic outcome or result</li>
                    <li>Assume responsibility for the quality of therapeutic services provided by Licensed Therapists</li>
                  </ul>
                  <p className="text-sm font-semibold text-gray-700 mt-3">Licensed Therapists are independent professionals and are not employees or agents of the Company.</p>
                  <p>We shall not be liable for any acts or omissions of Licensed Therapists.</p>
                </div>

                {/* EMERGENCY SERVICES DISCLAIMER */}
                <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-3">
                  <h3 className="text-xl font-bold text-red-900 uppercase">Emergency Services Disclaimer</h3>
                  <p className="font-bold text-red-950">
                    The Platform is not an emergency response service and does not provide emergency medical or psychiatric care.
                  </p>
                  <p className="text-red-950">
                    In the event of a mental health emergency, including but not limited to suicidal thoughts, self-harm intentions, thoughts of violence, or any medical emergency, you shall immediately contact local emergency services by dialing the appropriate emergency number or proceed to the nearest hospital emergency department.
                  </p>
                  <p className="text-xs text-red-900">
                    For more information on emergencies, please refer to our Crisis Intervention Consent and Emergency Contact Authorization documents.
                  </p>
                </div>
              </section>

              {/* PART VI — INSTITUTIONAL SERVICES */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part VI — Institutional Services
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Institutional Services</h3>
                  <p>We offer Services to partner institutions, including schools, colleges, universities, and other organizations.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Institutional Services may include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Institutional dashboards</li>
                      <li>Aggregated analytics and reports</li>
                      <li>Institutional Single Sign-On (SSO) integration</li>
                      <li>Institutional administrative tools</li>
                      <li>Other services as agreed between the Company and the institution</li>
                    </ul>
                  </div>
                  <p>Institutional Services are governed by separate agreements between the Company and the institution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-2">
                    <h4 className="font-bold text-red-900">Institutions DO NOT receive:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-red-950/80">
                      <li>Therapy conversations or session content</li>
                      <li>AI conversation history with the AI Companion</li>
                      <li>Journal entries or personal reflections</li>
                      <li>Individual clinical records or therapist notes</li>
                      <li>Mood logs or assessment responses at an individual level</li>
                      <li>Any information that could reasonably identify you as an individual</li>
                    </ul>
                  </div>

                  <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 space-y-2">
                    <h4 className="font-bold text-green-900">Institutions may receive only:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-green-950/80">
                      <li>Aggregated analytics and statistical summaries</li>
                      <li>Anonymous wellbeing insights</li>
                      <li>De-identified institutional dashboard information</li>
                    </ul>
                  </div>
                </div>
                <p>For more information on institutional privacy, please refer to our Privacy Policy.</p>
              </section>

              {/* PART VII — SUBSCRIPTIONS AND PAYMENTS */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part VII — Subscriptions and Payments
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Subscriptions</h3>
                  <p>Certain Services may be offered on a subscription basis.</p>
                  <p>The fees, billing frequency, and subscription terms shall be specified in the applicable Order Form.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Subscriptions may be:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Monthly or annual</li>
                      <li>Individual or institutional</li>
                      <li>Auto-renewing or non-renewing, as specified in the Order Form</li>
                    </ul>
                  </div>
                  <p>We reserve the right to change subscription fees upon reasonable notice.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Payment Processing</h3>
                  <p>Payments for Services are processed through secure, third-party payment gateways.</p>
                  <p>We do not store complete card or banking credentials on our servers.</p>
                  <p>Payment methods may include credit/debit cards, UPI, net banking, and digital wallets, subject to availability.</p>
                  <p>All payments are processed in Indian Rupees (INR) unless otherwise specified.</p>
                  <p>You are responsible for providing accurate and complete payment information.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Refunds and Cancellations</h3>
                  <p>Refunds, cancellations, and billing adjustments are governed by a separate Refund &amp; Cancellation Policy and applicable law.</p>
                  <p>Except as required by applicable law or as set forth in the Refund &amp; Cancellation Policy, all fees are non-refundable.</p>
                  <p>You may cancel your subscription at any time through the Platform or by contacting us.</p>
                  <p>Cancellation will take effect at the end of the current billing cycle.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Taxes</h3>
                  <p>All fees are exclusive of applicable taxes, including but not limited to Goods and Services Tax (GST).</p>
                  <p>You are responsible for all taxes applicable to your subscription and use of the Services.</p>
                  <p>We shall issue invoices in accordance with applicable tax laws.</p>
                </div>
              </section>

              {/* PART VIII — USER CONTENT */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part VIII — User Content
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">User Content</h3>
                  <p>
                    &quot;User Content&quot; means any content, information, data, text, graphics, images, audio, or other materials that you submit, post, upload, or otherwise make available on or through the Platform.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">User Content includes, but is not limited to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Journal entries</li>
                      <li>Mood logs and tracking data</li>
                      <li>Assessment responses</li>
                      <li>Uploaded images</li>
                      <li>AI conversation inputs, including both typed messages and transcripts from voice input</li>
                      <li>Any other content you create or submit</li>
                    </ul>
                  </div>
                  <p>You retain ownership of your User Content.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">License to User Content</h3>
                  <p>
                    By submitting User Content to the Platform, you grant us a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, store, and distribute your User Content solely for the following purposes:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Providing Services through the Platform</li>
                    <li>Operating the Platform</li>
                    <li>Clinical care and therapy</li>
                    <li>AI assistance, including training and improving AI models</li>
                    <li>Research, subject to applicable law and consent</li>
                    <li>Platform improvement and development</li>
                    <li>Any other purposes set forth in our <Link href="/privacy-policy" className="text-orange-600 hover:underline">Privacy Policy</Link> and <Link href="/data-processing-consent" className="text-orange-600 hover:underline">Data Processing Consent</Link></li>
                  </ul>
                  <p>
                    This license is limited to the purposes set forth above and does not grant us the right to sell or commercially exploit your User Content outside the scope of the Platform and its Services.
                  </p>
                  <p>
                    We shall apply appropriate safeguards to User Content, including de-identification, anonymization, aggregation, or pseudonymization where feasible and appropriate.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">User Content Representations</h3>
                  <p className="font-semibold text-gray-700">You represent and warrant that:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You own or have the necessary licenses, rights, consents, and permissions to submit your User Content</li>
                    <li>Your User Content does not infringe the intellectual property rights, privacy rights, or other rights of any third party</li>
                    <li>Your User Content is accurate, complete, and truthful to the best of your knowledge</li>
                  </ul>
                  <p className="text-sm text-gray-500 mt-3">We do not endorse and are not responsible for any User Content.</p>
                  <p className="text-sm text-gray-500">We reserve the right to remove or disable access to any User Content that violates these Terms or applicable law.</p>
                </div>
              </section>

              {/* PART IX — INTELLECTUAL PROPERTY */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part IX — Intellectual Property
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Company Intellectual Property</h3>
                  <p>We own all right, title, and interest in and to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The Platform and its software, applications, and interfaces</li>
                    <li>Source code, algorithms, and AI models</li>
                    <li>AI Systems and related technologies</li>
                    <li>Reports generated by the Platform (subject to your rights in your User Content)</li>
                    <li>The &quot;Hey Attrangi&quot; brand, trademarks, logos, and designs</li>
                    <li>Documentation, workflows, and databases</li>
                    <li>APIs and related technologies</li>
                    <li>Future improvements and derivative works</li>
                    <li>All other intellectual property rights in and to the Platform and its Services</li>
                  </ul>
                  <p>
                    All content on the Platform, including text, graphics, logos, icons, images, audio, video, and software, is our property or the property of our licensors and is protected by intellectual property laws.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">User License</h3>
                  <p>
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform and its Services for personal, non-commercial purposes.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">This License Does Not Include the Right To:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reproduce, distribute, modify, or create derivative works of the Platform or its content</li>
                      <li>Use the Platform for commercial purposes without our prior written consent</li>
                      <li>Reverse engineer, decompile, or disassemble the Platform</li>
                      <li>Remove or alter any proprietary notices</li>
                      <li>Use the Platform in any manner that violates these Terms or applicable law</li>
                    </ul>
                  </div>
                  <p>This license is effective until terminated. The license terminates automatically upon termination of your account or violation of these Terms.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Trademarks</h3>
                  <p>&quot;Hey Attrangi&quot; and our logos, product names, and service names are trademarks of the Company.</p>
                  <p>You may not use any of our trademarks without our prior written consent.</p>
                  <p>All other trademarks, service marks, and trade names appearing on the Platform are the property of their respective owners.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Open Source</h3>
                  <p>Certain software components used in the Platform may be distributed under applicable open-source licenses.</p>
                  <p>Such components remain governed by their respective open-source license terms.</p>
                  <p>We shall comply with the terms of all applicable open-source licenses.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Feedback</h3>
                  <p>You may provide feedback, suggestions, or improvements regarding the Platform (&quot;Feedback&quot;).</p>
                  <p>All Feedback shall be our exclusive property.</p>
                  <p>By providing Feedback, you assign all right, title, and interest in and to the Feedback to us.</p>
                  <p>We may use Feedback without any obligation to you.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">API Terms</h3>
                  <p>We may provide APIs for integration with the Platform.</p>
                  <p>Use of APIs is subject to these Terms and any additional API-specific terms.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                    <p className="font-semibold text-gray-800">We Reserve the Right To:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Rate limit API usage</li>
                      <li>Authenticate and authorize API access</li>
                      <li>Suspend API access for violations of these Terms</li>
                      <li>Modify APIs at any time</li>
                      <li>Introduce API pricing</li>
                      <li>Version APIs</li>
                      <li>Retire APIs</li>
                      <li>Monitor API usage</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* PART X — PLATFORM SECURITY */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part X — Platform Security
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Security</h3>
                  <p>We implement and maintain reasonable security safeguards to protect the Platform and User data, in compliance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">Security Safeguards Include, But Are Not Limited To:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Encryption of data at rest and in transit</li>
                      <li>Role-based access controls</li>
                      <li>Multi-factor authentication</li>
                      <li>Audit logging</li>
                      <li>Continuous monitoring</li>
                      <li>Secure cloud infrastructure</li>
                      <li>Incident response procedures</li>
                      <li>Business continuity and disaster recovery</li>
                    </ul>
                  </div>
                  <p>You are responsible for maintaining the security of your account and for notifying us of any security concerns.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <h3 className="font-bold text-gray-800">Security Incident Reporting</h3>
                  <p>If you become aware of any security incident or vulnerability affecting the Platform, you must report it to us immediately.</p>
                  <p>Please report security incidents to: <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a></p>
                </div>
              </section>

              {/* PART XI — ACCEPTABLE USE */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XI — Acceptable Use
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Acceptable Use</h3>
                  <p>You agree to use the Platform in accordance with these Terms and all applicable laws.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">You Shall Not Use the Platform in Any Manner That:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Violates any applicable law, regulation, or guideline</li>
                      <li>Infringes the rights of any third party</li>
                      <li>Interferes with or disrupts the Platform or its services</li>
                      <li>Harms or threatens the safety of any individual</li>
                      <li>Is fraudulent, deceptive, or misleading</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Prohibited Conduct</h3>
                  <p>You Shall Not Engage in Any of the Following Prohibited Conduct:</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <ul className="space-y-2 list-none pl-0">
                      <li><strong>Illegal Activities:</strong> Using the Platform for any illegal purpose or in violation of any applicable law</li>
                      <li><strong>Harassment:</strong> Harassing, threatening, intimidating, or abusing any individual</li>
                      <li><strong>Hate Speech:</strong> Posting or transmitting content that is defamatory, hateful, discriminatory, or promotes violence</li>
                      <li><strong>Prompt Injection:</strong> Attempting to manipulate the AI System through prompt injection, jailbreaking, or other techniques</li>
                      <li><strong>Reverse Engineering:</strong> Reverse engineering, decompiling, disassembling, or otherwise attempting to derive the source code or algorithms of the Platform</li>
                      <li><strong>Misuse of AI:</strong> Using the AI System in a manner inconsistent with its intended purpose</li>
                      <li><strong>Data Mining:</strong> Using automated means to extract data from the Platform without authorization</li>
                      <li><strong>Security Testing:</strong> Attempting to probe, scan, or test the vulnerability of the Platform without authorization</li>
                      <li><strong>Interference:</strong> Interfering with or disrupting the Platform or its services</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Content Restrictions</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">You Shall Not Post, Transmit, or Share Any Content That:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Is unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, or hateful</li>
                      <li>Infringes the intellectual property rights of any third party</li>
                      <li>Violates the privacy or publicity rights of any third party</li>
                      <li>Contains viruses, malware, or other harmful code</li>
                      <li>Is false, misleading, or deceptive</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <h3 className="font-bold text-gray-800">Reporting Violations</h3>
                  <p>If you become aware of any violation of these Terms, please report it to us at <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a>.</p>
                  <p>We will investigate reported violations and take appropriate action, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Warning the violator</li>
                    <li>Removing content</li>
                    <li>Suspending or terminating accounts</li>
                    <li>Reporting to law enforcement authorities</li>
                  </ul>
                </div>
              </section>

              {/* PART XII — ACCOUNT SUSPENSION AND TERMINATION */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XII — Account Suspension and Termination
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Suspension</h3>
                  <p>We may suspend your access to the Platform immediately, with or without notice, if:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You violate these Terms or any applicable policy</li>
                    <li>You engage in prohibited conduct</li>
                    <li>You pose a security risk to the Platform or other Users</li>
                    <li>You provide false or misleading information</li>
                    <li>Required by court order or applicable law</li>
                    <li>We reasonably believe suspension is necessary to protect the safety of you, other Users, or the public</li>
                  </ul>
                  <p>During suspension, you will not be able to access the Platform or its Services.</p>
                  <p>We will make reasonable efforts to notify you of the suspension and the reasons therefor.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Termination by User</h3>
                  <p>You may terminate your account at any time by:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Following the account deletion procedures on the Platform</li>
                    <li>Contacting us at <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a></li>
                    <li>Ceasing to use the Platform</li>
                  </ul>
                  <p>Upon termination, your access to the Platform and its Services will cease.</p>
                  <p>For information on data retention after termination, please refer to our Data Retention &amp; Deletion Policy.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Termination by Company</h3>
                  <p>We may terminate your account and these Terms immediately, with or without notice, if:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>You materially breach these Terms</li>
                    <li>You engage in prohibited conduct</li>
                    <li>You pose a risk to the Platform or other Users</li>
                    <li>Required by court order or applicable law</li>
                    <li>You fail to pay fees when due</li>
                    <li>We discontinue the Platform or Services</li>
                  </ul>
                  <p>We may also terminate your account for any reason, with or without cause, upon reasonable notice.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">Effect of Termination</h3>
                  <p className="font-semibold text-gray-700">Upon termination of your account:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your access to the Platform and Services shall cease</li>
                    <li>Your license to use the Platform shall terminate</li>
                    <li>User Content may be retained in accordance with our Data Retention &amp; Deletion Policy and applicable law</li>
                    <li>You shall remain liable for any fees or charges incurred prior to termination</li>
                    <li>Provisions that by their nature should survive termination shall survive</li>
                  </ul>
                </div>
              </section>

              {/* PART XIII — DISCLAIMERS */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XIII — Disclaimers
                </h2>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-950 uppercase">General Disclaimer</h3>
                  <p className="font-bold text-orange-900 uppercase">
                    THE PLATFORM AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
                  </p>
                  <p className="font-semibold text-orange-950">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>Implied warranties of merchantability, fitness for a particular purpose, and non-infringement</li>
                    <li>Warranties that the Platform will be uninterrupted, error-free, or secure</li>
                    <li>Warranties that the Services will meet your specific needs or expectations</li>
                    <li>Warranties regarding the accuracy, completeness, or reliability of any content</li>
                  </ul>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-900 uppercase">AI Services Disclaimer</h3>
                  <p className="font-semibold text-orange-950">The AI System is not a substitute for professional mental healthcare.</p>
                  <p>We do not warrant or guarantee the accuracy, completeness, timeliness, or appropriateness of any AI-generated content.</p>
                  <p>
                    You should not rely exclusively on the AI System for mental health support, clinical guidance, or emergency response. The availability of voice input does not change the nature of the service; the AI Companion provides emotional wellness support only and does not provide medical diagnosis, treatment, therapy, or emergency services.
                  </p>
                  <p className="text-xs text-orange-900/80">For more information on AI disclaimers, please refer to our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline font-semibold text-orange-900">AI Assistance Consent</Link> document.</p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-900 uppercase">Therapist Services Disclaimer</h3>
                  <p>The Platform facilitates consultations with Licensed Therapists but does not itself provide therapeutic services.</p>
                  <p>We do not guarantee any specific therapeutic outcome or result.</p>
                  <p>Licensed Therapists are independent professionals and are not employees or agents of the Company.</p>
                  <p>We shall not be liable for any acts or omissions of Licensed Therapists.</p>
                  <p className="text-xs text-orange-900/80">For more information on therapist services disclaimers, please refer to our Teletherapy Consent document.</p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-2">
                  <h3 className="font-bold text-orange-900">Platform Availability Disclaimer</h3>
                  <p>We do not guarantee uninterrupted, error-free, or always-available access to the Platform.</p>
                  <p>The Platform may be unavailable due to maintenance, technical failures, third-party outages, or other circumstances beyond our reasonable control.</p>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="font-bold text-orange-900">No Guarantee of Outcomes</h3>
                  <p className="font-semibold text-orange-950">We do not guarantee that:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>The Services will improve your mental health or wellbeing</li>
                    <li>The Services will prevent or cure any mental health condition</li>
                    <li>The Services will achieve any specific outcome</li>
                    <li>The Services will meet your specific needs or expectations</li>
                  </ul>
                </div>
              </section>

              {/* PART XIV — LIMITATION OF LIABILITY */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XIV — Limitation of Liability
                </h2>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-950 uppercase">Limitation of Liability</h3>
                  <p className="font-bold text-orange-900 uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>Loss of profits, revenue, or business</li>
                    <li>Loss of data or goodwill</li>
                    <li>Loss of use or opportunity</li>
                    <li>Emotional distress or psychological harm</li>
                    <li>Any other intangible losses</li>
                  </ul>
                  <p className="text-xs text-orange-950/80">This limitation applies regardless of the legal theory on which the claim is based, including contract, tort, negligence, or strict liability.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">Exclusions</h3>
                  <p className="font-semibold text-gray-700">Nothing in these Terms excludes or limits our liability:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>For death or personal injury caused by our negligence</li>
                    <li>For fraud or fraudulent misrepresentation</li>
                    <li>For any liability that cannot be excluded or limited under applicable law</li>
                  </ul>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <h3 className="text-xl font-bold text-orange-950 uppercase">Liability Cap</h3>
                  <p className="font-bold text-orange-900 uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL LIABILITY TO YOU ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE PLATFORM SHALL NOT EXCEED:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>The total amount paid by you to us for the Services in the twelve (12) months preceding the claim; or</li>
                    <li>Five Thousand Indian Rupees (INR 5,000), whichever is greater</li>
                  </ul>
                  <p className="text-xs text-orange-950/85">This liability cap applies to all claims, whether in contract, tort, negligence, or otherwise.</p>
                </div>
              </section>

              {/* PART XV — INDEMNIFICATION */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XV — Indemnification
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Indemnification by User</h3>
                  <p>
                    You agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Your use of the Platform or Services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your User Content</li>
                    <li>Your violation of any applicable law</li>
                    <li>Your infringement of any third-party rights</li>
                    <li>Your negligent or wrongful conduct</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Indemnification by Company</h3>
                  <p>
                    We agree to indemnify, defend, and hold harmless you from and against any claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Our violation of these Terms</li>
                    <li>Our violation of any applicable law</li>
                    <li>Our infringement of any third-party intellectual property rights</li>
                    <li>Our gross negligence or willful misconduct</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2 mt-4">
                    <p className="font-semibold text-gray-800">Our indemnification obligations shall not apply to claims arising from:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>Your User Content</li>
                      <li>Your misuse of the Platform</li>
                      <li>Your violation of these Terms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">Indemnification Procedure</h3>
                  <p className="font-semibold text-gray-700">The indemnified party shall:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Promptly notify the indemnifying party of any claim</li>
                    <li>Give the indemnifying party sole control of the defense and settlement of the claim</li>
                    <li>Cooperate with the indemnifying party in the defense of the claim</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">
                    The indemnifying party shall not settle any claim without the indemnified party&apos;s prior written consent if the settlement:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-500">
                    <li>Does not include a full release of the indemnified party</li>
                    <li>Requires the indemnified party to admit liability or take any action</li>
                  </ul>
                </div>
              </section>

              {/* PART XVI — DISPUTE RESOLUTION */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XVI — Dispute Resolution
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Governing Law</h3>
                  <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of India.</p>
                  <p>The courts of Dharwad, Karnataka, India shall have exclusive jurisdiction over any disputes arising out of or in connection with these Terms, subject to the arbitration provisions set forth below.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Dispute Resolution</h3>
                  <p>We and you shall make reasonable efforts to resolve any disputes arising out of or in connection with these Terms through good-faith negotiations.</p>
                  <p>If the dispute cannot be resolved through negotiations within thirty (30) days of the date on which either party notifies the other of the dispute, the dispute shall be referred to mediation in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Arbitration</h3>
                  <p>If mediation is unsuccessful, the dispute shall be finally settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996.</p>
                  <p>The arbitration shall be conducted in English at Dharwad, Karnataka, India.</p>
                  <p>The arbitration shall be conducted by a sole arbitrator appointed by mutual agreement of the parties or, failing such agreement, by the Company.</p>
                  <p>The arbitrator&apos;s decision shall be final and binding on both parties.</p>
                  <p>The parties agree that the arbitration shall be conducted on a confidential basis.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Class Action Waiver</h3>
                  <p>To the maximum extent permitted by applicable law, you agree that any dispute shall be resolved on an individual basis and not as a class action, collective action, representative action, or private attorney general action.</p>
                  <p>You waive any right to participate in class or collective proceedings against the Company.</p>
                </div>
              </section>

              {/* PART XVII — GENERAL LEGAL PROVISIONS */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Part XVII — General Legal Provisions
                </h2>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Force Majeure</h3>
                  <p>Neither party shall be liable for any failure or delay in performing its obligations under these Terms to the extent that such failure or delay is caused by a Force Majeure Event.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">&quot;Force Majeure Event&quot; means any event or circumstance beyond the reasonable control of a party, including but not limited to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Acts of God, natural disasters, or severe weather</li>
                      <li>War, terrorism, civil unrest, or riots</li>
                      <li>Pandemics, epidemics, or public health emergencies</li>
                      <li>Government actions, regulations, or orders</li>
                      <li>Internet outages, telecommunications failures, or power failures</li>
                      <li>Cloud provider failures or third-party service provider outages</li>
                      <li>Cyberattacks, malware, or security incidents</li>
                      <li>Any other event that could not reasonably have been foreseen or prevented</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <p className="font-semibold text-gray-800">The Affected Party Shall:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Promptly notify the other party of the Force Majeure Event</li>
                      <li>Take reasonable steps to mitigate the impact of the Force Majeure Event</li>
                      <li>Resume performance as soon as reasonably practicable</li>
                    </ul>
                  </div>
                  <p>If a Force Majeure Event continues for more than thirty (30) days, either party may terminate these Terms upon written notice.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Severability</h3>
                  <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired.</p>
                  <p>The invalid, illegal, or unenforceable provision shall be replaced by a valid, legal, and enforceable provision that most closely reflects the original intent.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Waiver</h3>
                  <p>No failure or delay by either party in exercising any right under these Terms shall operate as a waiver of that right.</p>
                  <p>No waiver of any breach of these Terms shall be deemed a waiver of any subsequent breach.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Assignment</h3>
                  <p>You may not assign, transfer, or sublicense these Terms or any rights or obligations hereunder without our prior written consent.</p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2 text-sm">
                    <p className="font-semibold text-gray-800">We may assign, transfer, or sublicense these Terms without your consent:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>To an affiliate</li>
                      <li>In connection with a merger, acquisition, or sale of all or substantially all of our assets</li>
                    </ul>
                  </div>
                  <p>Any assignment in violation of this provision shall be void.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Notices</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                    <p><strong>Notices to Us:</strong></p>
                    <p>Address: Aatrangi Private Limited, Jai Jinendra Banglow, Hubli-Dharwad Road, KHB Colony, Narayanpura, Dharwad, Karnataka - 580009, India</p>
                    <p>Email: <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a></p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2 mt-4">
                    <p><strong>Notices to You:</strong></p>
                    <p>Notices to you shall be sent to your registered email address or through the Platform.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-2 mt-4">
                    <p><strong>Notices Shall Be Deemed Received:</strong></p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>If by email, upon confirmation of delivery</li>
                      <li>If through the Platform, upon posting</li>
                      <li>If by post, five (5) Business Days after posting</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Entire Agreement</h3>
                  <p>These Terms, together with the documents referenced herein, constitute the entire agreement between you and us regarding the Platform and Services.</p>
                  <p>These Terms supersede all prior agreements, understandings, and communications, whether written or oral, regarding the Platform and Services.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Survival</h3>
                  <p>The following provisions shall survive the termination of these Terms:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Intellectual Property</li>
                    <li>Disclaimers</li>
                    <li>Limitation of Liability</li>
                    <li>Indemnification</li>
                    <li>Dispute Resolution</li>
                    <li>Any other provisions that by their nature should survive termination</li>
                  </ul>
                </div>
              </section>

              {/* CONTACT US */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or complaints about these Terms or the Platform, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a></p>
                  <p><strong>Website:</strong> <a href="https://www.heyattrangi.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">www.heyattrangi.com</a></p>
                  <p><strong>Address:</strong> Aatrangi Private Limited, Jai Jinendra Banglow, Hubli-Dharwad Road, KHB Colony, Narayanpura, Dharwad, Karnataka - 580009, India</p>
                </div>
                <p className="text-sm font-semibold mt-4">
                  END OF DOCUMENT
                </p>
              </section>

            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
