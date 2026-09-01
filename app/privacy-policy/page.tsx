import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hey Attrangi, operated by Aatrangi Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation currentPath="/privacy-policy" />

      {/* Main Content */}
      <main className="flex-grow pt-8 sm:pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-[32px] shadow-sm shadow-orange-500/5 border border-gray-100 p-8 md:p-12 lg:p-16">
            
            {/* Header Section */}
            <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block">
                Legal Document
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b3c] tracking-tight mb-4">
                Privacy Policy
              </h1>
              <div className="text-sm text-gray-500 space-y-1 font-medium">
                <p>Effective Date: 23 JUL 2026</p>
                <p>Last Updated: 23 JUL 2026</p>
              </div>
            </div>

            {/* Privacy Policy Content */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              
              {/* 1. Introduction */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">1</span>
                  Introduction
                </h2>
                <p>
                  Aatrangi Private Limited (the &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the Hey Attrangi platform (the &quot;Platform&quot;), an AI-assisted mental wellness platform providing emotional wellbeing support, therapist consultations, and related services.
                </p>
                <p>
                  This Privacy Policy (this &quot;Policy&quot;) describes how we collect, use, process, store, share, and protect the personal information of individuals who visit our website, use our web application, mobile applications (Android and iOS), or otherwise interact with our Platform and Services.
                </p>
                <p>
                  This Policy is designed to comply with the Digital Personal Data Protection Act, 2023 (the &quot;DPDP Act&quot;), the Information Technology Act, 2000, the Mental Healthcare Act, 2017, the Telemedicine Practice Guidelines, 2020, and other applicable laws of the Republic of India.
                </p>
                <p>
                  We are committed to protecting your privacy and handling your personal information with transparency, fairness, and accountability. We process personal data only for lawful, specific, and necessary purposes, and we implement appropriate safeguards to protect your information.
                </p>
              </section>

              {/* 2. Scope */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">2</span>
                  Scope
                </h2>
                <p>This Policy applies to all individuals who interact with the Platform, including:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>Users:</strong> Individuals who register on, access, or use any feature of the Platform.</li>
                  <li><strong>Patients:</strong> Users who receive therapist-led clinical or therapeutic services through the Platform.</li>
                  <li><strong>Caregivers:</strong> Parents or legal guardians who create and manage accounts for Minor Users.</li>
                  <li><strong>Therapists:</strong> Licensed mental health professionals who provide Services through the Platform.</li>
                  <li><strong>Institutional Administrators:</strong> Representatives of schools, colleges, universities, or other institutions that partner with the Company.</li>
                  <li><strong>Support Personnel:</strong> Individuals who provide technical, administrative, or clinical support services.</li>
                </ul>
                <p>This Policy covers all products, services, websites, applications, and platforms operated under the Hey Attrangi brand, including:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>The website located at <a href="https://www.heyattrangi.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">https://www.heyattrangi.com/</a></li>
                  <li>The web application</li>
                  <li>The Android mobile application</li>
                  <li>The iOS mobile application</li>
                  <li>The Therapist Portal</li>
                  <li>The Administrative Dashboard</li>
                  <li>The Institutional Dashboard</li>
                  <li>All application programming interfaces (APIs)</li>
                  <li>Any future products, modules, and official services developed by the Company</li>
                </ul>
                <p>
                  This Policy does not apply to third-party websites, applications, or services that may be linked to or integrated with the Platform. We are not responsible for the privacy practices of such third practices.
                </p>
              </section>

              {/* 3. Definitions */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">3</span>
                  Definitions
                </h2>
                <p>For the purposes of this Policy, the following terms shall have the meanings set forth below:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>&quot;Personal Data&quot;</strong> means any data about an individual who is identifiable by or in relation to such data, as defined under the DPDP Act.</li>
                  <li><strong>&quot;Sensitive Personal Data&quot;</strong> means personal data that may pose a higher risk of harm to the Data Principal if compromised, including but not limited to health data, as may be defined under the DPDP Act and the rules thereunder.</li>
                  <li><strong>&quot;Health Information&quot;</strong> means any information relating to the physical or mental health of a User.</li>
                  <li><strong>&quot;Data Fiduciary&quot;</strong> means the Company as the entity that determines the purpose and means of processing personal data, as defined under the DPDP Act.</li>
                  <li><strong>&quot;Data Processor&quot;</strong> means any entity that processes personal data on behalf of the Data Fiduciary.</li>
                  <li><strong>&quot;Data Principal&quot;</strong> means the individual to whom the personal data relates, as defined under the DPDP Act.</li>
                  <li><strong>&quot;Processing&quot;</strong> means any operation or set of operations performed on personal data, whether or not by automated means, as defined under the DPDP Act.</li>
                  <li><strong>&quot;Minor&quot;</strong> means an individual below the age of eighteen (18) years.</li>
                  <li><strong>&quot;Caregiver&quot;</strong> means a parent or legal guardian who is legally authorized to make decisions on behalf of a Minor User.</li>
                </ul>
              </section>

              {/* 4. Information We Collect */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">4</span>
                  Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us, information that is automatically collected through your use of the Platform, and information that we receive from third parties.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Information You Provide</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Account Creation Information: When you create an account on the Platform, we collect:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your name and date of birth</li>
                      <li>Your email address and phone number</li>
                      <li>Your gender and other demographic information (optional)</li>
                      <li>Your password and security credentials</li>
                      <li>Your preferences and communication settings</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Account Creation Methods: Accounts may be created using:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Google Sign-In:</strong> If you choose to sign in using Google, we receive your name, email address, and profile information from Google. We do not receive your Google password.</li>
                      <li><strong>Phone OTP:</strong> If you choose to sign in using a phone number, we send a one-time password to your phone for verification.</li>
                      <li><strong>Institutional Single Sign-On (SSO):</strong> If you access the Platform through an institution, we receive information from your institution to authenticate your identity.</li>
                    </ul>
                  </div>

                  <p><strong>Age Verification:</strong> Age verification currently relies upon self-declaration. Additional verification mechanisms may be introduced where appropriate.</p>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Caregiver Information: If you are a Caregiver of a Minor User, we collect:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your name, email address, and phone number</li>
                      <li>Your relationship to the Minor User</li>
                      <li>Your government-issued identification information, where required</li>
                      <li>Your consent records for the processing of the Minor User&apos;s personal data</li>
                    </ul>
                  </div>

                  <p><strong>Emergency Contact Information:</strong> We collect the names, contact numbers, and relationships of your designated Emergency Contacts.</p>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Profile Information: We collect information that you choose to add to your profile, including but not limited to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Profile picture</li>
                      <li>Bio or description</li>
                      <li>Wellness goals and preferences</li>
                      <li>Communication preferences</li>
                      <li>Any other information you choose to provide</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Health Information: We collect health information that you provide through the Platform, including but not limited to:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Mood Logs:</strong> Records of your mood tracking activities, including mood ratings, notes, and patterns</li>
                      <li><strong>Journal Entries:</strong> Content created through the guided journaling feature</li>
                      <li><strong>Assessment Responses:</strong> Responses to psychological screening assessments and other questionnaires</li>
                      <li><strong>Medication Information:</strong> Information regarding medications, including names, dosages, schedules, and adherence data</li>
                      <li><strong>Audio Recordings:</strong> Audio recordings of therapy sessions</li>
                      <li><strong>Therapy Transcripts:</strong> Transcripts of therapy sessions generated from audio recordings</li>
                      <li><strong>AI Conversations:</strong> Records of your interactions with the AI conversational companion</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Clinical Information: If you receive therapist-led services, we collect clinical information documented by your Licensed Therapist, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Clinical notes and observations</li>
                      <li>Treatment plans and therapeutic objectives</li>
                      <li>Diagnostic impressions</li>
                      <li>Progress notes</li>
                    </ul>
                  </div>

                  <p><strong>Images:</strong> We collect images that you upload to the Platform.</p>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Support Requests: We collect information that you provide when you contact our support team, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your contact information</li>
                      <li>The nature of your inquiry or concern</li>
                      <li>Any attachments or supporting information</li>
                      <li>Records of our communications with you</li>
                    </ul>
                  </div>

                  <p><strong>Feedback:</strong> We collect feedback that you provide regarding the Platform, Services, or AI System.</p>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Institution Information: If you access the Platform through an institution, we collect information provided by your institution, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your name and contact information</li>
                      <li>Your student or employee identification number</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Information Automatically Collected</h3>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Usage Analytics: We collect information about how you use the Platform, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Pages and features you access</li>
                      <li>Time spent on the Platform</li>
                      <li>Features you engage with</li>
                      <li>Navigation patterns</li>
                      <li>Interaction history</li>
                    </ul>
                  </div>

                  <p><strong>Behavioural Interaction Data:</strong> We collect data regarding your interactions with the Platform, including click patterns and taps, scroll behavior, session duration and frequency, and feature usage patterns.</p>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Device Information: We collect information about the device you use to access the Platform, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Device type and model</li>
                      <li>Operating system and version</li>
                      <li>Browser type and version</li>
                      <li>Screen resolution and orientation</li>
                      <li>Device identifiers (e.g., IP address, device ID)</li>
                      <li>Network information</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Technical Information: We collect technical information, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>IP addresses</li>
                      <li>Geographic location (approximate)</li>
                      <li>Timestamps and time zones</li>
                      <li>Page load times and performance metrics</li>
                      <li>Error logs and crash reports</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="font-semibold text-gray-800">Security Logs: We collect logs of security-related events, including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Authentication attempts and login history</li>
                      <li>Access logs for sensitive systems and data</li>
                      <li>Security incident records</li>
                      <li>System activity and audit trails</li>
                    </ul>
                  </div>

                  <p><strong>System Logs:</strong> We collect technical logs regarding your use of the Platform, including timestamps, system performance data, and technical diagnostics.</p>
                  <p><strong>Cookies:</strong> We collect information through cookies and similar tracking technologies. Please see the Cookies section of this Policy for more information.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Information from Third Parties</h3>
                  <p><strong>Payment Information:</strong> We collect payment-related information necessary for processing payments, including billing address and transaction details, collected only to the extent necessary for payment processing through our trusted payment providers.</p>
                  <p><strong>Third-Party Authentication:</strong> If you sign in using Google Sign-In or institutional SSO, we receive information from these third parties to authenticate your identity.</p>
                </div>
              </section>

              {/* 5. How We Use Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">5</span>
                  How We Use Information
                </h2>
                <p>We process your information for the following purposes:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Providing Services:</strong> To provide, maintain, and improve the Platform and its Services, including AI-assisted wellness support, therapist consultations, mood tracking, journaling, and wellness activities.</li>
                  <li><strong>AI Assistance:</strong> To power AI features, including the conversational companion, personalized recommendations, wellness plans, and crisis detection.</li>
                  <li><strong>Therapy:</strong> To facilitate therapist-led consultations and therapeutic interventions.</li>
                  <li><strong>Clinical Documentation:</strong> To maintain accurate, complete, and timely clinical records in accordance with Section 25 of the Mental Healthcare Act, 2017 and professional standards.</li>
                  <li><strong>Conversation Continuity:</strong> To maintain memory and context across conversations to support continuity of care.</li>
                  <li><strong>Mood Analysis:</strong> To analyze your mood based on inputs, assessments, and interaction patterns to provide insights and recommendations.</li>
                  <li><strong>Personalization:</strong> To tailor your experience, recommendations, and content to your preferences and needs.</li>
                  <li><strong>Medication Reminders:</strong> To provide notifications to support adherence to prescribed medication regimens.</li>
                  <li><strong>Wellness Activities:</strong> To recommend and facilitate engagement with wellness activities.</li>
                  <li><strong>Appointment Management:</strong> To schedule, confirm, and remind you of appointments with Licensed Therapists.</li>
                  <li><strong>Safety Monitoring:</strong> To monitor for potential safety concerns, including crisis situations.</li>
                  <li><strong>Crisis Intervention:</strong> To identify and respond to mental health crises.</li>
                  <li><strong>Identity Verification:</strong> To verify your identity and prevent fraud.</li>
                  <li><strong>Fraud Prevention:</strong> To detect and prevent fraudulent or improper use of the Platform.</li>
                  <li><strong>Security:</strong> To protect the Platform and your information from unauthorized access, disclosure, alteration, or destruction.</li>
                  <li><strong>Customer Support:</strong> To respond to your inquiries, requests, and concerns.</li>
                  <li><strong>Research:</strong> To conduct clinical research to improve understanding of mental health, wellbeing, and therapeutic outcomes, subject to appropriate safeguards.</li>
                  <li><strong>Academic Publications:</strong> To publish research findings in academic journals and conferences, with appropriate safeguards to prevent identification of individual Users.</li>
                  <li><strong>Institutional Research:</strong> To conduct research in collaboration with institutional partners.</li>
                  <li><strong>AI Benchmarking:</strong> To measure and benchmark the performance of the AI System.</li>
                  <li><strong>AI Validation:</strong> To validate the performance, accuracy, and safety of the AI System.</li>
                  <li><strong>Future AI Improvement:</strong> To train, fine-tune, and improve future versions of the AI System.</li>
                  <li><strong>Product Development:</strong> To develop and enhance the Platform&apos;s functionality, security, and user experience.</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal obligations, including the DPDP Act, the Information Technology Act, 2000, and the Mental Healthcare Act, 2017.</li>
                </ul>
                <p className="bg-orange-50/50 border-l-4 border-orange-500 p-4 rounded-r-xl">
                  We process your personal data only for the purposes for which consent has been obtained, or on the basis of legitimate uses as set forth in Section 7 of the DPDP Act.
                </p>
              </section>

              {/* 6. AI Processing */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">6</span>
                  AI Processing
                </h2>
                <p>
                  The Platform may utilize one or more artificial intelligence models and technologies to provide AI-assisted mental wellness services.
                </p>
                <p>
                  The Platform may utilize AI technologies developed internally by the Company and/or provided by trusted third-party service providers operating under appropriate contractual, privacy, confidentiality, and security obligations.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">The AI System assists with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Providing conversational emotional wellbeing support</li>
                    <li>Generating personalized recommendations and wellness plans</li>
                    <li>Analyzing mood and behavioral patterns</li>
                    <li>Identifying potential safety concerns and crisis indicators</li>
                    <li>Generating summaries and reports</li>
                    <li>Supporting clinical decision-making</li>
                    <li>Enhancing the user experience</li>
                  </ul>
                </div>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-900">Important Notes About AI:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-950">
                    <li>The AI System is not a psychologist, psychiatrist, therapist, physician, or healthcare practitioner</li>
                    <li>The AI System does not independently diagnose any medical or psychological condition</li>
                    <li>The AI System does not prescribe medication</li>
                    <li>The AI System does not replace licensed mental healthcare professionals, clinical judgment, or therapeutic intervention</li>
                    <li>The AI System does not make clinical decisions, which remain solely with Licensed Therapists and other qualified mental health professionals</li>
                    <li>The AI System is a supportive tool designed to complement, not replace, professional mental healthcare</li>
                    <li>The AI System should not be relied upon as the sole source of mental health support, clinical guidance, or emergency response</li>
                    <li>Final clinical decisions remain with qualified mental health professionals whenever therapist-led care is involved.</li>
                  </ul>
                </div>
                <p>
                  For more information on AI processing, please refer to our <Link href="/ai-transparency-safety-responsible-ai" className="text-orange-600 hover:underline">AI Transparency Statement</Link>.
                </p>
              </section>

              {/* 7. Information Sharing */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">7</span>
                  Information Sharing
                </h2>
                <p>
                  We share your information only as described in this Policy and in accordance with applicable law.
                </p>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Therapists</h3>
                    <p>If you are a Patient receiving therapist-led services, we share your information with your assigned Licensed Therapist to facilitate clinical care. This includes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Health Information, including mood logs, journal entries, assessment responses, and medication information</li>
                      <li>Clinical Information, including therapist notes, treatment plans, and progress notes</li>
                      <li>AI-generated reports and summaries</li>
                      <li>Audio recordings and therapy transcripts</li>
                      <li>Any other information necessary for the provision of clinical care</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Caregivers</h3>
                    <p>If you are a Minor User, we share information with your Caregiver in accordance with the General Treatment Consent and the Teletherapy Consent. This includes:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Appointment reminders and therapy-related communications</li>
                      <li>Crisis and emergency notifications</li>
                      <li>Progress summaries (subject to the Licensed Therapist&apos;s clinical judgment)</li>
                      <li>Safety updates</li>
                      <li>Any other information necessary for the Caregiver to manage the Minor User&apos;s care</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Emergency Contacts</h3>
                    <p>We share information with your designated Emergency Contacts in accordance with the Emergency Contact Authorization. This includes only information reasonably necessary to protect your health or safety, such as:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your identity and name</li>
                      <li>The nature of the emergency or crisis</li>
                      <li>Your current known location (where available)</li>
                      <li>Relevant safety concerns</li>
                      <li>Recommended immediate actions</li>
                      <li>Contact instructions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Authorized Clinical Personnel</h3>
                    <p>We share information with authorized clinical personnel, including clinical supervisors, clinical governance personnel, and crisis response staff, for purposes including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Clinical supervision and quality assurance</li>
                      <li>Crisis intervention and safety monitoring</li>
                      <li>Clinical documentation and record maintenance</li>
                      <li>Clinical governance and risk management</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Authorized Support Personnel</h3>
                    <p>We share information with authorized support personnel, including technical support, customer support, and administrative staff, for purposes including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Technical support and troubleshooting</li>
                      <li>Customer service and inquiry resolution</li>
                      <li>Platform maintenance and improvement</li>
                      <li>Administrative functions</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Trusted Service Providers</h3>
                    <p>We share information with trusted third-party service providers who perform services on our behalf, including:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Cloud Infrastructure Providers:</strong> For secure data storage and processing</li>
                      <li><strong>AI Providers:</strong> For AI models and technologies</li>
                      <li><strong>Communication Providers:</strong> For email delivery, SMS delivery, and push notifications</li>
                      <li><strong>Payment Providers:</strong> For payment processing</li>
                      <li><strong>Video Consultation Providers:</strong> For secure video consultation infrastructure</li>
                      <li><strong>Analytics Providers:</strong> For usage analytics and performance monitoring</li>
                      <li><strong>Authentication Providers:</strong> For identity verification and authentication</li>
                      <li><strong>Other Essential Service Providers:</strong> For any other services necessary for the operation of the Platform</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2">All third-party service providers are bound by contractual obligations to protect your information, including confidentiality, privacy, security, and data protection obligations.</p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h3 className="font-bold text-gray-800">Sharing with Regulatory Authorities and Law Enforcement</h3>
                    <p>We share information with regulatory authorities, law enforcement, and competent authorities where:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Required by applicable law, including the DPDP Act, the Information Technology Act, 2000, and the Mental Healthcare Act, 2017</li>
                      <li>Necessary to comply with a court order or legal process</li>
                      <li>Necessary to protect the rights, property, or safety of the Company, its Users, or others</li>
                      <li>Necessary to investigate or prevent fraud, security incidents, or illegal activities</li>
                    </ul>
                  </div>

                  <p><strong>Sharing with Emergency Services:</strong> We share information with emergency services, crisis intervention services, or competent authorities where necessary to protect the health or safety of a User or others.</p>
                  <p>We share information with our legal advisors where necessary for legal advice, dispute resolution, or the establishment, exercise, or defense of legal claims.</p>
                  <p><strong>Sharing with Institutional Clients:</strong> If you access the Platform through a school, college, university, or other institution, we may share information with your institution as set forth in the Institutional Privacy section of this Policy.</p>
                  <p><strong>Sharing with Successors:</strong> In the event of a merger, acquisition, or sale of all or substantially all of our assets, your information may be transferred to the successor entity, subject to appropriate notice and consent requirements under applicable law.</p>
                  <p><strong>No Sale of Information:</strong> We do not sell your personal information to third parties for marketing or advertising purposes. We never sell your individual data or share it without your clear consent.</p>
                </div>
              </section>

              {/* 8. Institutional Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">8</span>
                  Institutional Privacy
                </h2>
                <p>
                  If you access the Platform through a school, college, university, or other institution, the following privacy protections apply.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 space-y-3">
                    <h3 className="font-bold text-red-900">Information Institutions Do Not Receive</h3>
                    <p className="text-xs text-red-950">Institutions DO NOT receive:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-red-950/80">
                      <li>Therapy conversations or session content</li>
                      <li>AI conversation history with the AI Companion</li>
                      <li>Journal entries or personal reflections</li>
                      <li>Individual clinical records or therapist notes</li>
                      <li>Mood logs or assessment responses at an individual level</li>
                      <li>Any information that could reasonably identify you as an individual in the context of your mental health</li>
                      <li>Any information that would constitute Health Information or Sensitive Personal Data at an individual level</li>
                    </ul>
                  </div>

                  <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 space-y-3">
                    <h3 className="font-bold text-green-900">Information Institutions May Receive</h3>
                    <p className="text-xs text-green-950">Institutions may receive only:</p>
                    <ul className="list-disc pl-5 space-y-1 text-xs text-green-950/80">
                      <li><strong>Aggregated Analytics:</strong> Statistical summaries of Platform usage at the institutional level, which do not identify individual Users</li>
                      <li><strong>Anonymous Wellbeing Insights:</strong> Aggregated and anonymized insights regarding the wellbeing of the institutional population</li>
                      <li><strong>Institutional Dashboard Information:</strong> Information displayed on the institutional dashboard, which is aggregated and de-identified</li>
                      <li><strong>Statistical Reports:</strong> Reports that summarize usage patterns, engagement metrics, and outcomes at an institutional level</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Information shared with institutions is de-identified and aggregated such that individual Users cannot be identified.
                </p>
                <p>
                  Institutions are bound by contractual obligations to maintain the confidentiality of any information shared and to use such information only for the purposes specified in their agreement with the Company.
                </p>
              </section>

              {/* 9. Cookies */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">9</span>
                  Cookies
                </h2>
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on the Platform, analyze usage, and provide personalized content.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Types of Cookies We Use</h3>
                  <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <ul className="space-y-2 list-none pl-0">
                      <li><strong>Essential Cookies:</strong> These cookies are necessary for the Platform to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of essential cookies.</li>
                      <li><strong>Functional Cookies:</strong> These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.</li>
                      <li><strong>Performance Cookies:</strong> These cookies collect information about how you use the Platform, such as which pages you visit and if you experience any errors. This information is used to improve the Platform&apos;s performance.</li>
                      <li><strong>Analytics Cookies:</strong> These cookies help us understand how Users interact with the Platform, including usage patterns, engagement metrics, and feature adoption.</li>
                      <li><strong>Marketing Cookies:</strong> These cookies are used to deliver relevant advertisements and marketing communications. Marketing cookies require your separate consent.</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Your Cookie Choices</h3>
                  <p>You can manage your cookie preferences through your browser settings. Most browsers allow you to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>View and delete cookies</li>
                    <li>Block cookies from specific websites</li>
                  </ul>
                  <p>Please note that blocking essential cookies may affect the functionality of the Platform.</p>
                  <p>For more information about our use of cookies, please refer to our Cookie Policy.</p>
                </div>
              </section>

              {/* 10. User Rights */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">10</span>
                  User Rights
                </h2>
                <p>As a Data Principal, you have the following rights under the DPDP Act:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>Right to Access Information:</strong> The right to access information about your personal data, including what data is being collected and how it is being used.</li>
                  <li><strong>Right to Correction:</strong> The right to request correction of inaccurate or incomplete personal data.</li>
                  <li><strong>Right to Updating:</strong> The right to request updating of personal data.</li>
                  <li><strong>Right to Erasure:</strong> The right to request erasure of personal data when the processing purpose is fulfilled or consent is withdrawn, subject to reasonable exceptions.</li>
                  <li><strong>Right to Data Portability:</strong> The right to request the transfer of your personal data to another Data Fiduciary, where technically feasible.</li>
                  <li><strong>Right to Withdraw Consent:</strong> The right to withdraw consent at any time, with the process for withdrawal being as easy as giving consent.</li>
                  <li><strong>Right to Grievance Redressal:</strong> The right to file a complaint with the Data Protection Board of India.</li>
                  <li><strong>Right to Nominate:</strong> The right to nominate an individual to exercise rights posthumously or in cases of incapacity.</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">How to Exercise Your Rights</h3>
                  <p>You may exercise your rights by:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Contacting us at <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a></li>
                    <li>Using the account management features available on the Platform</li>
                    <li>Following the instructions provided in relevant communications</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-gray-800">Limitations on Rights</h3>
                  <p>We may limit the exercise of these rights where:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Required by applicable law</li>
                    <li>Necessary for the establishment, exercise, or defense of legal claims</li>
                    <li>Necessary for compliance with a legal obligation, including clinical documentation requirements under the Mental Healthcare Act, 2017</li>
                    <li>Necessary for regulatory record retention obligations</li>
                    <li>Otherwise permitted under the DPDP Act</li>
                  </ul>
                </div>
                <p>
                  Requests for access, correction, updating, or erasure shall be processed in accordance with this Privacy Policy, our Data Retention & Deletion Policy, and applicable law.
                </p>
              </section>

              {/* 11. Account Deletion */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">11</span>
                  Account Deletion
                </h2>
                <p>
                  You may request deletion of your account at any time through the Platform&apos;s account settings or by contacting us at <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a>.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">When You Request Account Deletion:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Your account will be deactivated and you will no longer be able to access the Platform</li>
                    <li>Information required by applicable law or clinical documentation obligations may continue to be retained in accordance with our Data Retention & Deletion Policy and applicable law</li>
                    <li>Information that has been de-identified, anonymized, or aggregated may continue to be used for research and analytics purposes</li>
                    <li>Information that is necessary for the establishment, exercise, or defense of legal claims may be retained</li>
                    <li>Other information shall be handled in accordance with our Data Retention & Deletion Policy</li>
                    <li>Clinical records shall be retained in accordance with Section 25 of the Mental Healthcare Act, 2017 and applicable record retention requirements.</li>
                  </ul>
                </div>
                <p>
                  For Minor Users, account deletion requests must be made by the Caregiver.
                </p>
              </section>

              {/* 12. AI Memory */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">12</span>
                  AI Memory
                </h2>
                <p>
                  The AI System maintains memory of previous conversations and interactions to provide continuity of care and personalized experiences.
                </p>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">You May Request Deletion Of:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>AI Memory:</strong> Information that the AI System remembers from previous conversations</li>
                    <li><strong>AI Conversation History:</strong> Records of your interactions with the AI conversational companion</li>
                    <li><strong>AI Generated Summaries:</strong> Summaries generated by the AI System based on your data</li>
                  </ul>
                </div>
                <p>
                  Deletion requests shall be processed in accordance with applicable legal obligations and clinical record retention requirements.
                </p>
                <p>
                  The Company reserves the right to retain certain information where required by law, for the establishment, exercise, or defense of legal claims, or for legitimate business purposes.
                </p>
                <p>
                  For more information on AI memory, please refer to our <Link href="/ai-transparency-safety-responsible-ai" className="text-orange-600 hover:underline">AI Transparency Statement</Link>.
                </p>
              </section>

              {/* 13. Security */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">13</span>
                  Security
                </h2>
                <p>
                  We implement and maintain reasonable security safeguards to protect your information from unauthorized access, disclosure, alteration, or destruction, in compliance with the DPDP Act and the Information Technology Act, 2000.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Security Safeguards Include:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Encryption:</strong> Encryption of data at rest and in transit using industry-standard encryption protocols</li>
                    <li><strong>Access Controls:</strong> Role-based access controls restricting access to authorized personnel on a need-to-know basis</li>
                    <li><strong>Authentication:</strong> Multi-factor authentication for access to sensitive systems and data</li>
                    <li><strong>Audit Logging:</strong> Comprehensive audit logs of all access to and modifications of your information</li>
                    <li><strong>Monitoring:</strong> Continuous monitoring of systems for security incidents and unauthorized access</li>
                    <li><strong>Secure Cloud Infrastructure:</strong> Information stored in secure cloud infrastructure managed by or on behalf of Aatrangi Private Limited</li>
                    <li><strong>Incident Response:</strong> Procedures for investigating and responding to security incidents</li>
                  </ul>
                </div>
                <p>
                  We comply with the reasonable security practices and procedures required under the Information Technology Act, 2000 and the DPDP Act.
                </p>
              </section>

              {/* 14. Data Breach Response */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">14</span>
                  Data Breach Response
                </h2>
                <p>In the event of a personal data breach, we are committed to:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>Investigate:</strong> Promptly investigate the breach to determine its nature, scope, and impact</li>
                  <li><strong>Contain:</strong> Take immediate steps to contain the breach and prevent further unauthorized access</li>
                  <li><strong>Mitigate:</strong> Take reasonable steps to mitigate any harm to affected Data Principals</li>
                  <li><strong>Notify Affected Users:</strong> Notify all affected Data Principals promptly upon becoming aware of a personal data breach, where required by law</li>
                  <li><strong>Notify Competent Authorities:</strong> Notify the Data Protection Board of India and other competent authorities where required by law</li>
                  <li><strong>Maintain Incident Records:</strong> Maintain accurate and complete records of the breach and our response</li>
                  <li><strong>Review Security Controls:</strong> Review and enhance our security controls to prevent future breaches</li>
                </ul>
                <p>
                  We shall notify affected Data Principals of a personal data breach in the manner prescribed under the DPDP Act and the rules thereunder.
                </p>
              </section>

              {/* 15. International Processing */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">15</span>
                  International Processing
                </h2>
                <p>
                  Your information is primarily processed within the Republic of India.
                </p>
                <p>
                  Where trusted third-party service providers process your information outside India, appropriate contractual, organizational, and technical safeguards shall be implemented in accordance with applicable law.
                </p>
                <p>
                  Cross-border data transfers are permitted under the DPDP Act unless the Central Government notifies a country or territory as restricted. We shall comply with any such restrictions notified by the Central Government.
                </p>
                <p>
                  We shall ensure that any cross-border transfer of personal data is lawful, secure, and transparent, aligning with the data protection standards required under the DPDP Act.
                </p>
              </section>

              {/* 16. Retention */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">16</span>
                  Retention
                </h2>
                <p>
                  We retain your information only for as long as necessary for the purposes for which it was processed, subject to legal, regulatory, and clinical documentation obligations.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Retention Periods Are Determined By:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Applicable legal and regulatory requirements, including the DPDP Act, the Information Technology Act, 2000, and the Mental Healthcare Act, 2017</li>
                    <li>Clinical documentation requirements under Section 25 of the Mental Healthcare Act, 2017</li>
                    <li>Applicable statutes of limitations</li>
                    <li>Business and operational needs</li>
                    <li>The Company&apos;s legitimate business purposes</li>
                  </ul>
                </div>
                <p>
                  For specific retention periods for different categories of data, please refer to our Data Retention & Deletion Policy.
                </p>
              </section>

              {/* 17. Children's Privacy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">17</span>
                  Children&apos;s Privacy
                </h2>
                <p>
                  The Platform is available to individuals who are at least three (3) years of age.
                </p>
                <p>
                  Individuals below the age of eighteen (18) years are considered Minor Users and may only access the Platform under the following conditions:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>A Caregiver must create and manage the Minor User&apos;s account</li>
                  <li>The Caregiver must provide verifiable consent for the processing of the Minor User&apos;s personal data in accordance with Section 9 of the DPDP Act</li>
                  <li>Therapy sessions with Licensed Therapists must always be managed by the Caregiver</li>
                  <li>The Minor User may independently access only the AI conversational companion, mood tracking, guided journaling, and wellness activities</li>
                  <li>The Caregiver shall be responsible for supervising the Minor User&apos;s use of the Platform</li>
                </ul>
                <p>
                  We do not knowingly collect personal data from Minor Users without verifiable parental consent.
                </p>
                <p>
                  If we become aware that we have collected personal data from a Minor User without verifiable parental consent, we will take steps to delete such information promptly, subject to legal and clinical documentation obligations.
                </p>
              </section>

              {/* 18. Changes to This Policy */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">18</span>
                  Changes to This Policy
                </h2>
                <p>
                  We may update this Policy from time to time to reflect changes in our practices, legal requirements, or operational needs.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">When we make material changes to this Policy, we will notify you through:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The Platform</li>
                    <li>Email to your registered email address</li>
                    <li>In-app notifications</li>
                    <li>A notice on our website</li>
                    <li>Any other appropriate means</li>
                  </ul>
                </div>
                <p>
                  The &quot;Effective Date&quot; at the top of this Policy indicates when it was last revised.
                </p>
                <p>
                  Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated Policy, subject to any additional consent requirements under applicable law.
                </p>
              </section>

              {/* 19. Contact Information */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">19</span>
                  Contact Information
                </h2>
                <p>
                  If you have any questions, concerns, or complaints about this Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a></p>
                  <p><strong>Website:</strong> <a href="https://www.heyattrangi.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">https://www.heyattrangi.com/</a></p>
                </div>
                <p>
                  If you are not satisfied with our response, you have the right to file a complaint with the Data Protection Board of India in accordance with the DPDP Act.
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
