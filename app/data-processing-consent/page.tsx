import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Data Processing Consent | Hey Attrangi",
  description: "Data Processing Consent for Hey Attrangi, operated by Aatrangi Private Limited.",
};

export default function DataProcessingConsentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation currentPath="/data-processing-consent" />

      {/* Main Content */}
      <main className="flex-grow pt-8 sm:pt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-[32px] shadow-sm shadow-orange-500/5 border border-gray-100 p-8 md:p-12 lg:p-16">
            
            {/* Header Section */}
            <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block">
                Consent Document
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b3c] tracking-tight mb-2">
                Data Processing Consent
              </h1>
              <p className="text-lg font-bold text-gray-700 mb-2">
                HEY ATTRANGI
              </p>
              <p className="text-sm text-gray-500 font-semibold italic">
                (A Digital Mental Health Platform operated by Aatrangi Private Limited)
              </p>
            </div>

            {/* Document Content */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              
              {/* 1. INTRODUCTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">1</span>
                  Introduction
                </h2>
                <p>
                  This Data Processing Consent governs how we collect, process, store, analyze, share, and protect your Personal Data, Sensitive Personal Data, and Health Information when you use the Hey Attrangi platform.
                </p>
                <p>
                  We process your data in compliance with the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, the Mental Healthcare Act, 2017, and other applicable laws of the Republic of India.
                </p>
                <p>
                  This Consent supplements our other policies, including our Privacy Policy, General Treatment Consent, AI Assistance Consent, Teletherapy Consent, Session Recording Consent, Emergency Contact Authorization, and Crisis Intervention Consent.
                </p>
              </section>

              {/* 2. SCOPE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">2</span>
                  Scope
                </h2>
                <p>
                  This Consent applies to all users of the Platform, including adult users and minor users (through their caregivers), who access any feature of the Platform, including AI-assisted services, therapist-led services, or any other Platform features.
                </p>
                <p>
                  This Consent governs the processing of all Personal Data, Sensitive Personal Data, and Health Information collected, processed, stored, analyzed, shared, or protected by us in connection with the Platform and our Services.
                </p>
                <p>
                  This Consent does not govern processing activities that are exempt from consent requirements under applicable law (legitimate uses), which shall be governed by applicable law.
                </p>
              </section>

              {/* 3. RELATIONSHIP WITH OTHER DOCUMENTS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">3</span>
                  Relationship with Other Documents
                </h2>
                <p>This Consent should be read together with the following documents:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>
                    <Link href="/privacy-policy" className="text-orange-600 hover:underline"><strong>Privacy Policy</strong></Link> - Governs the collection, processing, storage, and disclosure of your personal data.
                  </li>
                  <li>
                    <strong>General Treatment Consent</strong> - Governs your consent to receive mental wellness and therapeutic services.
                  </li>
                  <li>
                    <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline"><strong>AI Assistance Consent</strong></Link> - Governs your consent to use artificial intelligence features.
                  </li>
                  <li>
                    <strong>Teletherapy Consent</strong> - Governs your consent to receive therapist-led teletherapy services.
                  </li>
                  <li>
                    <strong>Session Recording Consent</strong> - Governs the recording of therapy sessions.
                  </li>
                  <li>
                    <strong>Emergency Contact Authorization</strong> - Authorizes us to contact your designated emergency contacts.
                  </li>
                  <li>
                    <strong>Crisis Intervention Consent</strong> - Governs crisis detection and intervention.
                  </li>
                  <li>
                    <strong>Data Retention &amp; Deletion Policy</strong> - Governs the retention and deletion of your data.
                  </li>
                  <li>
                    <Link href="/terms-and-conditions" className="text-orange-600 hover:underline"><strong>Terms and Conditions</strong></Link> - Governs your general use of the Platform.
                  </li>
                </ul>
                <p className="italic">
                  In the event of any conflict between this Consent and any other document, the hierarchy established in our General Treatment Consent shall apply.
                </p>
              </section>

              {/* 4. DEFINITIONS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">4</span>
                  Definitions
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>&quot;Personal Data&quot;</strong> - Any data about an individual who is identifiable by or in relation to such data, as defined under the Digital Personal Data Protection Act, 2023.</li>
                  <li><strong>&quot;Sensitive Personal Data&quot;</strong> - Personal data that may pose a higher risk of harm if compromised, including but not limited to health data, as defined under the Digital Personal Data Protection Act, 2023.</li>
                  <li><strong>&quot;Health Information&quot;</strong> - Any information relating to your physical or mental health.</li>
                  <li><strong>&quot;Data Fiduciary&quot;</strong> - The entity that determines the purpose and means of processing personal data.</li>
                  <li><strong>&quot;Data Processor&quot;</strong> - Any entity that processes personal data on behalf of the Data Fiduciary.</li>
                  <li><strong>&quot;Data Principal&quot;</strong> - The individual to whom the personal data relates.</li>
                  <li><strong>&quot;Processing&quot;</strong> - Any operation performed on personal data, whether or not by automated means.</li>
                  <li><strong>&quot;De-identification&quot;</strong> - Removing or modifying personal identifiers so the data cannot reasonably be linked to an identifiable individual.</li>
                  <li><strong>&quot;Anonymization&quot;</strong> - Rendering data irreversible so it cannot be linked to an identifiable individual by any means.</li>
                  <li><strong>&quot;Aggregation&quot;</strong> - Combining data from multiple individuals into summary form so individual-level data cannot be identified.</li>
                  <li><strong>&quot;Pseudonymization&quot;</strong> - Replacing identifying information with pseudonyms so the data cannot be attributed to a specific individual without additional information.</li>
                  <li><strong>&quot;Voice Input&quot;</strong> - The functionality that allows you to speak to the AI companion using your device&apos;s microphone, with your speech being converted into text by a trusted speech recognition service.</li>
                  <li><strong>&quot;Transcript&quot;</strong> - The text generated from your speech through the speech recognition process.</li>
                </ul>
              </section>

              {/* 5. DATA PROCESSING PRINCIPLES */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">5</span>
                  Data Processing Principles
                </h2>
                <p>We adopt and adhere to the following data processing principles:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Lawfulness</strong> - We process personal data only on the basis of valid consent obtained in accordance with applicable law, or on the basis of legitimate uses as set forth in the law.</li>
                  <li><strong>Fairness</strong> - We process personal data in a manner that is fair and not prejudicial to your rights and interests.</li>
                  <li><strong>Transparency</strong> - We provide clear and transparent information regarding the collection, processing, storage, and sharing of your personal data through this Consent, our Privacy Policy, and other applicable notices.</li>
                  <li><strong>Purpose Limitation</strong> - We process personal data only for the purposes for which consent has been obtained and that are specified in this Consent and our Privacy Policy.</li>
                  <li><strong>Data Minimization</strong> - We collect and process only such personal data as is reasonably necessary for the specified purposes.</li>
                  <li><strong>Accuracy</strong> - We make reasonable efforts to ensure that personal data is accurate and, where necessary, kept up to date.</li>
                  <li><strong>Storage Limitation</strong> - We do not retain personal data longer than is necessary for the purposes for which it was processed, subject to legal, regulatory, and clinical documentation obligations.</li>
                  <li><strong>Integrity and Confidentiality</strong> - We implement and maintain appropriate technical and organizational measures to ensure the integrity and confidentiality of personal data.</li>
                  <li><strong>Accountability</strong> - We are accountable for our processing activities and demonstrate compliance with applicable data protection laws.</li>
                  <li><strong>Privacy by Design</strong> - We integrate data protection principles into the design and development of the Platform and our Services.</li>
                  <li><strong>Security by Design</strong> - We incorporate security measures into the design and development of the Platform and our Services.</li>
                </ul>
              </section>

              {/* 6. CATEGORIES OF DATA */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">6</span>
                  Categories of Data
                </h2>
                <p>We collect, process, and store the following categories of data:</p>
                
                <div className="bg-gray-50 p-6 rounded-2xl space-y-4 text-sm">
                  <ul className="space-y-3 list-none pl-0">
                    <li><strong>Identity Information</strong> - Name, date of birth, gender, government-issued identification information, and other information that identifies you.</li>
                    <li><strong>Profile Information</strong> - Username, profile preferences, communication preferences, and other information related to your profile on the Platform.</li>
                    <li><strong>Contact Information</strong> - Email address, phone number, postal address, and other contact details.</li>
                    <li><strong>Caregiver Information</strong> - Information regarding the caregiver of a minor user, including identity, contact information, and relationship to the user.</li>
                    <li><strong>Emergency Contact Information</strong> - Names, contact numbers, and relationships of designated emergency contacts.</li>
                    <li><strong>Health Information</strong> - Information relating to your mental and physical health, including but not limited to mood logs, journal entries, assessment responses, audio recordings, therapy transcripts, clinical notes, AI reports, and medication information.</li>
                    <li><strong>Mood Logs</strong> - Records of your mood tracking activities, including mood ratings, notes, and patterns.</li>
                    <li><strong>Journal Entries</strong> - Content you create through the guided journaling feature.</li>
                    <li><strong>Assessment Responses</strong> - Responses to psychological screening assessments and other questionnaires.</li>
                    <li><strong>Audio Recordings</strong> - Audio recordings of therapy sessions, as governed by the Session Recording Consent.</li>
                    <li><strong>Therapy Transcripts</strong> - Transcripts of therapy sessions generated from audio recordings.</li>
                    <li><strong>Clinical Notes</strong> - Clinical notes prepared by licensed therapists.</li>
                    <li><strong>AI Reports</strong> - Reports and summaries generated by the AI System.</li>
                    <li><strong>Medication Information</strong> - Information regarding medications, including names, dosages, schedules, and adherence data.</li>
                    <li><strong>Images</strong> - Images you upload to the Platform.</li>
                    <li><strong>Usage Analytics</strong> - Analytical data regarding your use of the Platform and its features.</li>
                    <li><strong>Behavioural Interaction Data</strong> - Data regarding your interactions with the Platform, including usage patterns, feature engagement, and navigation.</li>
                    <li><strong>Technical Information</strong> - Device information, browser information, IP addresses, and other technical data.</li>
                    <li><strong>Device Information</strong> - Information about the device used to access the Platform, including device type, operating system, and hardware specifications.</li>
                    <li><strong>Security Logs</strong> - Logs of security-related events, including authentication attempts, access logs, and security incidents.</li>
                    <li><strong>System Logs</strong> - Technical logs regarding your use of the Platform, including timestamps and system performance data.</li>
                    <li><strong>Payment-Related Information</strong> - Information necessary for payment processing, including billing address and transaction details, collected only to the extent necessary for payment processing.</li>
                    <li><strong>Voice Input</strong> - Audio captured from your device&apos;s microphone when you choose to use voice input, processed solely for speech-to-text conversion. Raw audio is not retained after successful transcription. Only the generated transcript becomes part of your conversation history. No speaker identification, voice authentication, voice biometrics, voice profiling, voice cloning, or voiceprint creation is performed.</li>
                  </ul>
                </div>
              </section>

              {/* 7. PURPOSES OF PROCESSING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">7</span>
                  Purposes of Processing
                </h2>
                <p>We process your data for the following purposes:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Account Creation</strong> - Creating and managing your account on the Platform.</li>
                  <li><strong>Identity Verification</strong> - Verifying your identity and, where applicable, the identity of caregivers.</li>
                  <li><strong>Clinical Care</strong> - Providing mental healthcare services through the Platform, including therapy, counselling, and clinical assessment.</li>
                  <li><strong>Therapy</strong> - Facilitating therapist-led consultations and therapeutic interventions.</li>
                  <li><strong>AI Assistance</strong> - Providing AI-powered features, including the AI conversational companion, personalized recommendations, and wellness plans.</li>
                  <li><strong>Voice Input Processing</strong> - Converting spoken input into text for AI interaction when you choose to use voice input, as described in Clause 6. Raw audio is not retained after successful transcription.</li>
                  <li><strong>Personalization</strong> - Tailoring your experience, recommendations, and content to your preferences and needs.</li>
                  <li><strong>Conversation Continuity</strong> - Maintaining memory and context across conversations.</li>
                  <li><strong>Mood Tracking</strong> - Enabling you to record, monitor, and track your emotional states.</li>
                  <li><strong>Journaling</strong> - Enabling you to record your thoughts, feelings, and experiences.</li>
                  <li><strong>Medication Reminders</strong> - Providing notifications to support adherence to prescribed medication regimens.</li>
                  <li><strong>Psychological Screening</strong> - Administering screening tools to assess aspects of your mental health.</li>
                  <li><strong>Clinical Documentation</strong> - Maintaining accurate, complete, and timely clinical records.</li>
                  <li><strong>Safety Monitoring</strong> - Monitoring for potential safety concerns, including crisis situations.</li>
                  <li><strong>Crisis Intervention</strong> - Identifying and responding to mental health crises.</li>
                  <li><strong>Quality Assurance</strong> - Monitoring and evaluating the quality of our Services.</li>
                  <li><strong>Research</strong> - Conducting clinical research to improve understanding of mental health and therapeutic outcomes.</li>
                  <li><strong>Academic Collaborations</strong> - Collaborating with academic institutions on research projects.</li>
                  <li><strong>Institutional Research</strong> - Conducting research in collaboration with institutional partners.</li>
                  <li><strong>Internal Analytics</strong> - Analyzing usage patterns, trends, and outcomes.</li>
                  <li><strong>AI Benchmarking</strong> - Measuring and benchmarking the performance of the AI System.</li>
                  <li><strong>AI Validation</strong> - Validating the performance, accuracy, and safety of the AI System.</li>
                  <li><strong>AI Evaluation</strong> - Evaluating the AI System&apos;s performance, safety, and effectiveness.</li>
                  <li><strong>AI Model Improvement</strong> - Training, fine-tune, and improving future versions of the AI System.</li>
                  <li><strong>Platform Improvement</strong> - Enhancing the Platform&apos;s functionality, security, and user experience.</li>
                  <li><strong>Fraud Prevention</strong> - Detecting and preventing fraudulent or improper use of the Platform.</li>
                  <li><strong>Security</strong> - Protecting the Platform and your data from unauthorized access, disclosure, alteration, or destruction.</li>
                  <li><strong>Legal Compliance</strong> - Complying with applicable laws, regulations, and legal obligations.</li>
                  <li><strong>Regulatory Compliance</strong> - Complying with regulatory requirements, including those under the Digital Personal Data Protection Act, 2023 and the Mental Healthcare Act, 2017.</li>
                </ul>
              </section>

              {/* 8. THIRD-PARTY PROCESSING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">8</span>
                  Third-Party Processing
                </h2>
                <p>
                  We engage trusted third-party service providers to process data on behalf of the Platform for the following purposes:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 text-sm">
                  <ul className="space-y-2 list-none pl-0">
                    <li><strong>Cloud Hosting</strong> - Secure cloud infrastructure for data storage and processing.</li>
                    <li><strong>AI Technologies</strong> - AI models and technologies provided by third-party providers.</li>
                    <li><strong>Email Delivery</strong> - Sending notifications, reminders, and communications to you.</li>
                    <li><strong>Authentication</strong> - Identity verification and authentication services.</li>
                    <li><strong>Analytics</strong> - Usage analytics and performance monitoring.</li>
                    <li><strong>Crash Reporting</strong> - Monitoring and reporting of technical crashes and errors.</li>
                    <li><strong>Payment Processing</strong> - Processing of payments for Services.</li>
                    <li><strong>Video Consultation Infrastructure</strong> - Infrastructure supporting secure video consultations.</li>
                    <li><strong>Push Notifications</strong> - Sending push notifications to you.</li>
                    <li><strong>Speech-to-Text Processing</strong> - Converting voice input into text when you choose to use this feature. Trusted third-party speech recognition providers may temporarily process voice input solely for the purpose of transcription, operating under contractual confidentiality and security obligations. Raw audio is not retained after successful transcription.</li>
                    <li><strong>Other Essential Platform Services</strong> - Any other services necessary for the operation of the Platform.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2 mt-4 text-sm font-semibold">
                  <p>All third-party service providers we engage must operate under appropriate contractual arrangements that include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Confidentiality Obligations</strong> - Contractual obligations to maintain the confidentiality of your data.</li>
                    <li><strong>Privacy Obligations</strong> - Obligations to protect your data in accordance with applicable law.</li>
                    <li><strong>Security Obligations</strong> - Obligations to implement and maintain appropriate security measures.</li>
                    <li><strong>Data Protection Obligations</strong> - Obligations to comply with the Digital Personal Data Protection Act, 2023 and other applicable data protection laws.</li>
                    <li><strong>Audit Rights</strong> - Rights for us to audit the provider&apos;s data protection and security practices.</li>
                  </ul>
                </div>
              </section>

              {/* 9. CROSS-BORDER PROCESSING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">9</span>
                  Cross-Border Processing
                </h2>
                <p>Your data is primarily processed within the Republic of India.</p>
                <p>
                  Where processing by trusted third-party service providers involves another jurisdiction, appropriate contractual, technical, and legal safeguards shall be implemented in accordance with applicable law.
                </p>
                <p>
                  Cross-border data transfers are permitted under the Digital Personal Data Protection Act, 2023 unless the Central Government notifies a country or territory as restricted. We shall comply with any such restrictions notified by the Central Government.
                </p>
              </section>

              {/* 10. AUTOMATED PROCESSING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">10</span>
                  Automated Processing
                </h2>
                <p>The AI System may assist with automated processing of your data for the following purposes:</p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>Recommendations</strong> - Generating personalized recommendations for wellness activities, coping strategies, and self-care practices.</li>
                  <li><strong>Prioritization</strong> - Prioritizing clinical concerns and safety alerts.</li>
                  <li><strong>Risk Identification</strong> - Identifying potential clinical risks, including crisis situations.</li>
                  <li><strong>Summaries</strong> - Generating summaries of your interactions and clinical data.</li>
                  <li><strong>Clinical Support</strong> - Providing insights and information to support clinical decision-making.</li>
                  <li><strong>Workflow Assistance</strong> - Assisting licensed therapists with documentation and workflow management.</li>
                </ul>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-2 text-sm text-orange-950 font-medium">
                  <p>You acknowledge and understand that:</p>
                  <ul className="list-disc pl-5 space-y-1 text-orange-900">
                    <li>Final clinical decisions remain with qualified mental health professionals whenever therapist-led care is involved;</li>
                    <li>Automated processing does not replace clinical judgement;</li>
                    <li>The AI System is a supportive tool that complements, not replaces, professional clinical decision-making; and</li>
                    <li>We maintain human oversight of automated processing activities.</li>
                  </ul>
                </div>
              </section>

              {/* 11. RESEARCH AND AI DEVELOPMENT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">11</span>
                  Research and AI Development
                </h2>
                <p>
                  Subject to applicable law and this Consent, appropriately de-identified, anonymized, aggregated, or pseudonymized information may be used for the following purposes:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li><strong>Clinical Research</strong> - Conducting research to improve understanding of mental health, wellbeing, and therapeutic outcomes.</li>
                  <li><strong>Academic Publications</strong> - Publishing research findings in academic journals and conferences, with appropriate safeguards to prevent identification of individual users.</li>
                  <li><strong>Institutional Collaborations</strong> - Collaborating with academic and research institutions on research projects.</li>
                  <li><strong>Product Research</strong> - Conducting research to inform product development and improvement.</li>
                  <li><strong>AI Benchmarking</strong> - Measuring and benchmarking the performance of the AI System.</li>
                  <li><strong>AI Evaluation</strong> - Evaluating the AI System&apos;s performance, safety, and effectiveness.</li>
                  <li><strong>AI Validation</strong> - Validating the performance, accuracy, and safety of the AI System.</li>
                  <li><strong>Future AI Model Improvement</strong> - Training, fine-tuning, and improving future versions of the AI System.</li>
                  <li><strong>Internal Analytics</strong> - Analyzing usage patterns, trends, and outcomes to inform service improvement.</li>
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 mt-4">
                  <p className="font-semibold text-gray-800">We shall apply appropriate safeguards to research and AI development activities, including:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>De-identification:</strong> Removing or modifying personal identifiers from data used for research or AI improvement;</li>
                    <li><strong>Anonymization:</strong> Rendering data irreversible such that it cannot be linked to an identifiable individual, where feasible and appropriate;</li>
                    <li><strong>Aggregation:</strong> Combining data from multiple individuals into summary form; and</li>
                    <li><strong>Pseudonymization:</strong> Replacing identifying information with pseudonyms.</li>
                  </ul>
                </div>
                <p className="italic">
                  No research shall intentionally identify individual users. Any publications or presentations resulting from research shall not include information that could reasonably identify individual users.
                </p>
              </section>

              {/* 12. YOUR RIGHTS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">12</span>
                  Your Rights
                </h2>
                <p>As a Data Principal, you have the following rights under the Digital Personal Data Protection Act, 2023:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Right to Access Information</strong> - The right to access information about your personal data, including what data is being collected and how it is being used.</li>
                  <li><strong>Right to Correction</strong> - The right to request correction of inaccurate or incomplete personal data.</li>
                  <li><strong>Right to Updating</strong> - The right to request updating of personal data.</li>
                  <li><strong>Right to Erasure</strong> - The right to request erasure of personal data when the processing purpose is fulfilled or consent is withdrawn, subject to reasonable exceptions. Under the DPDP Act, we must erase personal data upon withdrawal of consent or when the purpose is no longer being served, unless retention is mandated by law.</li>
                  <li><strong>Right to Grievance Redressal</strong> - The right to file a complaint with the Data Protection Board of India.</li>
                  <li><strong>Right to Withdraw Consent</strong> - The right to withdraw consent at any time, with the process for withdrawal being as easy as giving consent.</li>
                  <li><strong>Right to Nominate</strong> - The right to nominate an individual to exercise rights posthumously or in cases of incapacity.</li>
                </ul>
                <p>
                  Requests for access, correction, updating, or erasure shall be processed in accordance with our Privacy Policy, our Data Retention &amp; Deletion Policy, and applicable law.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">We may limit the exercise of your rights where:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Required by applicable law;</li>
                    <li>Necessary for the establishment, exercise, or defense of legal claims;</li>
                    <li>Necessary for compliance with a legal obligation, including clinical documentation requirements under the Mental Healthcare Act, 2017;</li>
                    <li>Necessary for regulatory record retention obligations; or</li>
                    <li>Otherwise permitted under the Digital Personal Data Protection Act, 2023.</li>
                  </ul>
                </div>
              </section>

              {/* 13. WITHDRAWAL OF CONSENT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">13</span>
                  Withdrawal of Consent
                </h2>
                <p>
                  You may withdraw this Consent at any time by providing written notice to us through the Platform or by email to <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a>.
                </p>
                <p>
                  Withdrawal of consent shall be effective upon receipt of the notice by us, subject to any processing that may have already been completed prior to such withdrawal.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Upon withdrawal of consent, we shall cease processing your personal data for the purposes for which consent was withdrawn, except to the extent that continued processing is:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Required by applicable law;</li>
                    <li>Necessary for the establishment, exercise, or defense of legal claims;</li>
                    <li>Necessary for compliance with a legal obligation, including clinical documentation requirements under the Mental Healthcare Act, 2017;</li>
                    <li>Necessary for regulatory record retention obligations; or</li>
                    <li>Otherwise permitted under the Digital Personal Data Protection Act, 2023.</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 mt-4">
                  <p className="font-semibold text-gray-800">You acknowledge that upon withdrawal of consent:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>AI services may become unavailable;</li>
                    <li>Therapy services may become unavailable where processing is essential for the provision of such services;</li>
                    <li>Previously anonymized research datasets may continue to be used; and</li>
                    <li>Information required by law or clinical documentation obligations may continue to be retained.</li>
                  </ul>
                </div>
                <p>
                  Withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.
                </p>
              </section>

              {/* 14. SECURITY SAFEGUARDS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">14</span>
                  Security Safeguards
                </h2>
                <p>
                  We implement and maintain reasonable security safeguards to protect your data from unauthorized access, disclosure, alteration, or destruction, in compliance with the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Security safeguards include, but are not limited to:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Encryption</strong> - Encryption of data at rest and in transit using industry-standard encryption protocols.</li>
                    <li><strong>Authentication</strong> - Multi-factor authentication for access to sensitive systems and data.</li>
                    <li><strong>Role-Based Access Control</strong> - Access restricted to authorized personnel on a need-to-know basis.</li>
                    <li><strong>Audit Logging</strong> - Comprehensive audit logs of all access to and modifications of your data.</li>
                    <li><strong>Monitoring</strong> - Continuous monitoring of systems for security incidents and unauthorized access.</li>
                    <li><strong>Secure Cloud Infrastructure</strong> - Data stored in secure cloud infrastructure managed by or on our behalf.</li>
                    <li><strong>Incident Response</strong> - Procedures for investigating and responding to security incidents.</li>
                    <li><strong>Business Continuity</strong> - Business continuity and disaster recovery procedures.</li>
                    <li><strong>Backup</strong> - Regular backups of your data to prevent data loss.</li>
                    <li><strong>Security Reviews</strong> - Periodic security reviews and assessments.</li>
                  </ul>
                </div>
                <p>
                  We shall comply with the reasonable security practices and procedures required under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
                </p>
              </section>

              {/* 15. GOVERNING LAW */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">15</span>
                  Governing Law
                </h2>
                <p>This Consent shall be governed by and construed in accordance with the laws of the Republic of India.</p>
                <p>
                  The courts of Dharwad, Karnataka, India shall have exclusive jurisdiction over any disputes arising out of or in connection with this Consent, subject to the dispute resolution provisions set forth below.
                </p>
              </section>

              {/* 16. DISPUTE RESOLUTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">16</span>
                  Dispute Resolution
                </h2>
                <p>
                  We and you shall make reasonable efforts to resolve any disputes arising out of or in connection with this Consent or data processing through good-faith negotiations.
                </p>
                <p>
                  If the dispute cannot be resolved through negotiations within thirty (30) days of the date on which either party notifies the other of the dispute, the dispute shall be referred to mediation in accordance with the provisions of the Arbitration and Conciliation Act, 1996.
                </p>
                <p>
                  If mediation is unsuccessful, the dispute shall be finally settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English at Dharwad, Karnataka, India, by a sole arbitrator appointed by mutual agreement of the parties or, failing such agreement, by us.
                </p>
                <p>
                  You acknowledge that you may also have the right to file a complaint with the Data Protection Board of India in accordance with the Digital Personal Data Protection Act, 2023.
                </p>
                <p>
                  Nothing in this section shall prevent either party from seeking interim or injunctive relief from a court of competent jurisdiction.
                </p>
              </section>

              {/* 17. ACKNOWLEDGEMENT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">17</span>
                  Acknowledgement
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">By providing this Consent, you (or in the case of a minor user, the caregiver) acknowledge that:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>You have read, understood, and agreed to all the terms and conditions set forth in this Consent;</li>
                    <li>You have had the opportunity to ask questions and seek clarification regarding any aspect of this Consent or data processing;</li>
                    <li>You understand the data processing principles set forth in this Consent;</li>
                    <li>You understand the categories of data collected and the purposes for which they are processed;</li>
                    <li>You understand that your data may be shared with trusted third-party service providers operating under appropriate contractual obligations;</li>
                    <li>You understand that your data may be processed outside India, subject to appropriate safeguards;</li>
                    <li>You understand that automated processing, including AI assistance, may be used in connection with your data;</li>
                    <li>You understand that your de-identified, anonymized, aggregated, or pseudonymized data may be used for research and AI development;</li>
                    <li>You understand your rights as a Data Principal, including the right to access, correction, erasure, and grievance redressal;</li>
                    <li>You understand that you may withdraw this Consent at any time, and that withdrawal may impact your access to Services;</li>
                    <li>You understand that we have implemented reasonable security safeguards to protect your data;</li>
                    <li>You understand that voice input is optional and that raw audio is not retained after successful transcription;</li>
                    <li>You understand that microphone permission may be withdrawn at any time through your device settings;</li>
                    <li>You understand that speech recognition may occasionally generate inaccurate transcripts and that you remain responsible for reviewing important information;</li>
                    <li>You understand that this Consent is a legally binding document and that you are providing this Consent freely, without any coercion, undue influence, fraud, misrepresentation, or mistake; and</li>
                    <li>You have received a copy of this Consent or have been provided with access to it through the Platform.</li>
                  </ul>
                </div>
              </section>

              {/* 18. DIGITAL SIGNATURE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">18</span>
                  Digital Signature
                </h2>
                <p>
                  By checking the box or clicking the &quot;I Agree&quot; button on the Platform, I acknowledge that I have read, understood, and agree to be bound by the terms of this Data Processing Consent. I confirm that I am providing this Consent freely, voluntarily, and without any coercion, undue influence, fraud, misrepresentation, or mistake.
                </p>
                <p className="font-semibold text-gray-800">
                  I understand that this digital acknowledgement constitutes my legally binding signature and consent under applicable law.
                </p>
              </section>

              {/* CONTACT US */}
              <section className="space-y-4 border-t pt-8">
                <h2 className="text-2xl font-bold text-[#1a2b3c] uppercase">
                  Contact Us
                </h2>
                <p>
                  If you have any questions about this Data Processing Consent or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2 text-sm">
                  <p><strong>Email:</strong> <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a></p>
                </div>
                <p className="text-sm font-semibold">
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
