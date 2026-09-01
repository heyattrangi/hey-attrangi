import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Assistance Consent",
  description: "AI Assistance Consent for Hey Attrangi, operated by Aatrangi Private Limited.",
};

export default function AIAssistanceConsentPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation currentPath="/ai-assistance-consent" />

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
                AI Assistance Consent
              </h1>
              <p className="text-lg font-bold text-gray-700 mb-4">
                HEY ATTRANGI
              </p>
              <p className="text-sm text-gray-500 font-semibold mb-4 italic">
                (A Digital Mental Health Platform operated by Aatrangi Private Limited)
              </p>
              <div className="text-sm text-gray-500 space-y-1 font-medium">
                <p>Effective Date: 23 JUL 2026</p>
                <p>Last Updated: 23 JUL 2026</p>
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8 leading-relaxed">
              
              {/* INTRODUCTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Introduction
                </h2>
                <p>
                  This AI Assistance Consent explains how artificial intelligence features are used when you interact with the Hey Attrangi platform. It sets out the terms under which you agree to use AI-powered features and describes your rights and responsibilities.
                </p>
                <p>
                  This consent is required before you can access any AI-powered features of the platform. It works alongside our other policies, including our Privacy Policy and Terms of Service.
                </p>
                <p>
                  Please read this document carefully. If you have any questions, please contact us using the details at the end.
                </p>
              </section>

              {/* 1. PURPOSE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">1</span>
                  Purpose
                </h2>
                <p>
                  This consent sets out the terms under which you agree to use artificial intelligence features provided through the Hey Attrangi platform.
                </p>
                <p>
                  This consent is intended to comply with applicable Indian laws, including the Digital Personal Data Protection Act, 2023, the Information Technology Act, 2000, and the Indian Contract Act, 1872.
                </p>
                <p className="font-semibold">
                  Acceptance of this consent is mandatory before any AI-powered features of the platform become available to you.
                </p>
              </section>

              {/* 2. SCOPE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">2</span>
                  Scope
                </h2>
                <p>
                  This consent applies to every user who accesses or uses any AI-powered feature of the platform.
                </p>
                <p>
                  It governs your interactions with our AI system, including but not limited to the AI conversational companion, mood analysis, wellness recommendations, AI-generated reports, and voice input functionality.
                </p>
                <p>
                  This consent does not govern your interactions with licensed therapists, which are governed by separate treatment consent documents.
                </p>
              </section>

              {/* 3. NATURE OF AI ASSISTANCE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">3</span>
                  Nature of AI Assistance
                </h2>
                <p>
                  Our platform incorporates artificial intelligence technologies to provide AI-assisted mental wellness and therapeutic support services.
                </p>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-950">You acknowledge and understand that the AI system:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-900">
                    <li>Is not a psychologist, psychiatrist, therapist, doctor, or healthcare practitioner</li>
                    <li>Does not independently diagnose any mental health condition or medical condition</li>
                    <li>Does not prescribe medications or recommend specific pharmaceutical treatments</li>
                    <li>Does not replace professional mental healthcare, clinical judgment, or therapeutic intervention</li>
                    <li>Does not make clinical decisions, which remain solely with licensed therapists and other qualified mental health professionals</li>
                    <li>Is a supportive tool designed to complement, not replace, professional mental healthcare</li>
                    <li>Should not be relied upon as the sole source of mental health support or guidance</li>
                  </ul>
                </div>
                <p>
                  The AI system provides informational, educational, and supportive content. Any recommendations or suggestions should be considered as general guidance only and should not be treated as professional advice.
                </p>
              </section>

              {/* 4. AI CAPABILITIES */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">4</span>
                  AI Capabilities
                </h2>
                <p>Our AI system can provide the following functionalities:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>AI Conversational Companion:</strong> Engaging in conversations to provide emotional wellbeing support, active listening, and guided reflection. You may interact with the AI companion either by typing text or by using voice input, as described in Clause 5.</li>
                  <li><strong>Voice Input:</strong> Allowing you to speak to the AI companion using your device&apos;s microphone, with your speech converted to text for processing by the AI system, as set forth in Clause 5.</li>
                  <li><strong>Emotional Wellbeing Conversations:</strong> Facilitating discussions about your emotional state, concerns, and experiences in a supportive and non-judgmental manner.</li>
                  <li><strong>Personalized Responses:</strong> Generating responses tailored to your inputs, preferences, and historical interactions.</li>
                  <li><strong>Context-Aware Conversations:</strong> Maintaining awareness of the context of the conversation, including previous exchanges and your stated concerns.</li>
                  <li><strong>Memory Across Conversations:</strong> Retaining information from previous conversations to provide continuity of support and personalized interactions.</li>
                  <li><strong>Mood Analysis:</strong> Analyzing your mood based on inputs, assessments, and interaction patterns to provide insights and recommendations.</li>
                  <li><strong>Wellness Recommendations:</strong> Providing personalized recommendations for wellness activities, coping strategies, and self-care practices.</li>
                  <li><strong>Wellness Plans:</strong> Generating structured wellness plans based on your goals, preferences, and assessment results.</li>
                  <li><strong>Psychological Screening Tools:</strong> Administering standardized and non-standardized screening tools to assess aspects of your mental health and wellbeing.</li>
                  <li><strong>Medication Reminders:</strong> Providing notifications and reminders to support adherence to prescribed medication regimens.</li>
                  <li><strong>Guided Journaling Assistance:</strong> Offering prompts, guidance, and reflective questions to support your journaling practice.</li>
                  <li><strong>Wellness Activity Recommendations:</strong> Suggesting activities and exercises to promote mental health and emotional resilience.</li>
                  <li><strong>Crisis Detection:</strong> Identifying potential indicators of crisis situations based on your inputs and interaction patterns.</li>
                  <li><strong>AI-Generated Summaries:</strong> Generating summaries of your interactions, progress, and key themes for your reference.</li>
                  <li><strong>AI-Generated Reports:</strong> Producing reports on your engagement, mood trends, and wellbeing for you and, where applicable, for your licensed therapist.</li>
                </ul>
              </section>

              {/* 5. VOICE INPUT */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">5</span>
                  Voice Input
                </h2>
                <p>
                  The platform offers you the option to provide input to the AI companion through voice, in addition to typed text.
                </p>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.1 Optional Nature</h3>
                  <p>Voice input is entirely optional. You may continue to interact with the AI companion exclusively through typed text if you so choose. Typing remains fully supported at all times.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.2 How Voice Input Works</h3>
                  <p>When you choose to use voice input:</p>
                  <p>The application will request permission to access your device&apos;s microphone only at the moment you initiate voice input.</p>
                  <p>Your speech is converted into text using a trusted third-party speech recognition service operating under appropriate contractual confidentiality, privacy, and security obligations.</p>
                  <p>The generated transcript is processed by the AI companion in the same manner as a typed message.</p>
                  <p>The transcript becomes part of your conversation history and is subject to the same privacy and AI policies as typed conversations.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.3 Microphone Permission</h3>
                  <p>You may grant or withdraw microphone permission at any time through your device&apos;s operating system settings. If microphone permission is denied, the AI companion continues to function normally using typed text input.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.4 Retention of Audio</h3>
                  <p>Raw audio recordings are not retained after successful transcription. Immediately after your speech has been converted into text, the raw audio is securely discarded. Only the generated transcript is retained as part of your conversation history.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.5 No Voice Identification</h3>
                  <p>The AI system does not use your voice to identify you. The platform does not perform speaker identification, voice authentication, voice biometrics, voice profiling, voice cloning, or voiceprint creation.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.6 Accuracy of Transcription</h3>
                  <p>You acknowledge that speech recognition technology may occasionally generate inaccurate words, punctuation, names, or interpretations. You remain responsible for reviewing important information before relying upon AI responses.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">5.7 Same Limitations Apply</h3>
                  <p>Voice conversations are subject to the same AI limitations, safety mechanisms, and disclaimers set forth elsewhere in this consent.</p>
                </div>
              </section>

              {/* 6. AI LIMITATIONS */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">6</span>
                  AI Limitations
                </h2>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-4">
                  <p className="font-semibold text-orange-950">You acknowledge and accept that the AI system has significant limitations, including:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-900">
                    <li><strong>Misunderstanding Context:</strong> The AI system may misinterpret your inputs, context, or intent, leading to inappropriate or irrelevant responses.</li>
                    <li><strong>Inaccurate Responses:</strong> The AI system may generate responses that are factually incorrect, outdated, or inconsistent with established clinical knowledge.</li>
                    <li><strong>Hallucination:</strong> The AI system may generate content that appears plausible but is entirely fabricated, including references to non-existent studies, resources, or information.</li>
                    <li><strong>Missing Clinical Information:</strong> The AI system may fail to identify, recognize, or appropriately respond to clinically significant information that would be apparent to a qualified mental health professional.</li>
                    <li><strong>Failure to Detect Emergencies:</strong> The AI system may fail to detect crisis situations, suicidal ideation, self-harm intent, or other emergencies that would be recognizable to a human professional.</li>
                    <li><strong>Incomplete Recommendations:</strong> The AI system may generate recommendations that are incomplete, inappropriate for your specific circumstances, or fail to account for important contextual factors.</li>
                    <li><strong>Generalized Responses:</strong> The AI system may provide responses that are overly generalized and fail to address your specific needs or concerns.</li>
                    <li><strong>Impact of Incomplete Input:</strong> The AI system&apos;s responses depend on the completeness and accuracy of your inputs. Incomplete, ambiguous, or inaccurate inputs may result in suboptimal or inappropriate responses.</li>
                    <li><strong>Lack of Emotional Intelligence:</strong> The AI system lacks genuine emotional intelligence, empathy, and the capacity for human connection that is fundamental to effective therapeutic relationships.</li>
                    <li><strong>Absence of Clinical Judgment:</strong> The AI system cannot exercise clinical judgment, professional discretion, or nuanced decision-making in the way that a qualified mental health professional can.</li>
                    <li><strong>Data Dependency:</strong> The AI system&apos;s performance depends on the quality, quantity, and representativeness of the data on which it has been trained, and may reflect biases or limitations present in that data.</li>
                  </ul>
                </div>
                <p>
                  You acknowledge that these limitations are inherent in current artificial intelligence technologies and that we do not guarantee that the AI system will overcome these limitations.
                </p>
                <p className="font-semibold">
                  You agree not to rely exclusively on the AI system for mental health support, clinical guidance, or emergency response, and to exercise your own judgment in evaluating AI-generated content.
                </p>
              </section>

              {/* 7. HUMAN OVERSIGHT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">7</span>
                  Human Oversight
                </h2>
                <p>
                  We maintain human oversight of the AI system to ensure responsible deployment, continuous improvement, and appropriate risk management.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Human oversight includes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Governance:</strong> We maintain an AI governance framework that includes policies, procedures, and controls for the development, deployment, and monitoring of the AI system.</li>
                    <li><strong>Monitoring:</strong> We monitor the performance of the AI system, including accuracy, safety, and appropriateness of responses.</li>
                    <li><strong>Quality Assurance:</strong> We conduct quality assurance reviews of AI-generated content and interactions to identify issues and areas for improvement.</li>
                    <li><strong>Incident Response:</strong> We maintain procedures for investigating and responding to incidents involving the AI system, including security incidents, safety concerns, and performance issues.</li>
                    <li><strong>Escalation:</strong> We have procedures for escalating issues identified by the AI system, including potential crisis situations, to appropriate personnel.</li>
                    <li><strong>Continuous Improvement:</strong> We use insights from human oversight to continuously improve the AI system&apos;s performance, safety, and effectiveness.</li>
                  </ul>
                </div>
                <p>
                  We may engage authorized personnel, contractors, or third-party service providers to perform human oversight functions, subject to appropriate confidentiality and data protection obligations.
                </p>
              </section>

              {/* 8. AI MEMORY AND CONTINUITY */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">8</span>
                  AI Memory and Continuity
                </h2>
                <p>
                  Our AI system maintains memory of previous conversations and interactions with you to improve continuity of care and enhance your experience.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">The AI system may remember:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Previous discussions and conversational exchanges</li>
                    <li>Your preferences, including communication style and content preferences</li>
                    <li>Wellness goals and objectives you have set</li>
                    <li>Ongoing emotional concerns and themes identified in your interactions</li>
                    <li>Previous mood trends and patterns</li>
                    <li>Any other information you have shared with the AI system</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">The purpose of AI memory is to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Provide personalized and contextually relevant responses</li>
                    <li>Avoid requiring you to repeat information across conversations</li>
                    <li>Track your progress and identify patterns over time</li>
                    <li>Support continuity of care by maintaining a coherent understanding of your journey</li>
                    <li>Enhance your overall experience through tailored interactions</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">The limitations of AI memory include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The AI system may not remember information perfectly or may misinterpret previously shared information</li>
                    <li>Memory is limited to interactions within the platform and does not include information from external sources</li>
                    <li>Memory is subject to the same limitations as other aspects of the AI system, including the potential for inaccuracies or misunderstandings</li>
                  </ul>
                </div>
                <p>
                  You should not assume that the AI system will remember all information or that its memory is infallible.
                </p>
                <p>
                  You may request the deletion of AI memory where legally and operationally feasible. Such requests will be processed in accordance with our Privacy Policy and applicable law. We reserve the right to retain certain information where required by law, for the establishment, exercise, or defense of legal claims, or for legitimate business purposes.
                </p>
              </section>

              {/* 9. DATA COLLECTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">9</span>
                  Data Collection
                </h2>
                <p>
                  Our AI system collects, processes, and stores data generated through your interactions with the AI system and other platform features.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Categories of data that may be collected include:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Conversation History:</strong> The complete record of your interactions with the AI companion, including typed text and transcripts generated from voice input.</li>
                    <li><strong>Journal Entries:</strong> Content you create through the guided journaling feature.</li>
                    <li><strong>Mood Tracking:</strong> Data from your mood tracking activities, including mood ratings, notes, and patterns.</li>
                    <li><strong>Assessment Responses:</strong> Responses to psychological screening assessments and other questionnaires administered through the platform.</li>
                    <li><strong>Uploaded Images:</strong> Images you upload to the platform.</li>
                    <li><strong>Medication Information:</strong> Information you provide regarding medications, including medication names, dosages, schedules, and adherence data.</li>
                    <li><strong>Audio Recordings:</strong> Audio recordings of therapy sessions, where applicable and with separate consent. Raw voice input audio is not retained after successful transcription.</li>
                    <li><strong>Therapy Transcripts:</strong> Transcripts of therapy sessions, where applicable and with separate consent.</li>
                    <li><strong>AI Generated Reports:</strong> Reports and summaries generated by the AI system based on your data.</li>
                    <li><strong>Wellness Activity History:</strong> Records of your engagement with wellness activities and exercises.</li>
                    <li><strong>User Preferences:</strong> Preferences you express regarding the platform, AI interactions, and content.</li>
                    <li><strong>Behavioral Interaction Data:</strong> Data regarding your interactions with the platform, including usage patterns, feature engagement, and navigation.</li>
                    <li><strong>System Usage Logs:</strong> Technical logs regarding your use of the platform, including timestamps, device information, and system performance data.</li>
                    <li><strong>Voice Input Data:</strong> Audio captured from your device&apos;s microphone when you choose to use voice input, processed solely for speech-to-text conversion. Raw audio is not retained after successful transcription. Only the generated transcript is retained as part of your conversation history.</li>
                  </ul>
                </div>
                <p>
                  Data collection occurs automatically when you interact with the AI system or other platform features, as well as through active input by you.
                </p>
                <p className="font-semibold">
                  We collect only such data as is reasonably necessary for the purposes set forth in this consent and our Privacy Policy.
                </p>
              </section>

              {/* 10. DATA PROCESSING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">10</span>
                  Data Processing
                </h2>
                <p>We process your data for the following purposes:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Providing AI Responses:</strong> Generating personalized, contextually relevant responses to your inputs, whether provided through typed text or voice input.</li>
                  <li><strong>Voice Input Processing:</strong> Converting spoken input into text for AI interaction when you choose to use voice input, as described in Clause 5.</li>
                  <li><strong>Conversation Continuity:</strong> Maintaining memory and context across conversations to support continuity of care.</li>
                  <li><strong>Personalization:</strong> Tailoring your experience, recommendations, and content to your preferences and needs.</li>
                  <li><strong>Clinical Support:</strong> Providing information and insights to support your mental wellness journey and, where applicable, to support licensed therapists in providing care.</li>
                  <li><strong>Therapist Support:</strong> Providing licensed therapists with insights, summaries, and data to support their clinical work.</li>
                  <li><strong>Quality Assurance:</strong> Monitoring and evaluating the performance, accuracy, and safety of the AI system.</li>
                  <li><strong>Bug Fixing:</strong> Identifying and resolving technical issues with the AI system and the platform.</li>
                  <li><strong>Security Investigations:</strong> Investigating and responding to security incidents, unauthorized access, and other threats to the platform or your data.</li>
                  <li><strong>Fraud Prevention:</strong> Detecting and preventing fraudulent or improper use of the platform.</li>
                  <li><strong>Crisis Detection:</strong> Identifying potential crisis situations and facilitating appropriate responses.</li>
                  <li><strong>Research:</strong> Conducting research to improve understanding of mental health, wellbeing, and the effectiveness of our services.</li>
                  <li><strong>Analytics:</strong> Analyzing usage patterns, trends, and outcomes to inform service improvement and business decisions.</li>
                  <li><strong>Service Improvement:</strong> Using insights from data to enhance the platform, services, and user experience.</li>
                  <li><strong>Evaluating AI Safety:</strong> Assessing the safety, reliability, and appropriateness of the AI system.</li>
                  <li><strong>Validating AI Performance:</strong> Measuring and validating the performance of the AI system against established benchmarks and standards.</li>
                  <li><strong>Training Future AI Models:</strong> Using data to train, fine-tune, and improve future versions of the AI system.</li>
                  <li><strong>Improving Future AI Systems:</strong> Incorporating learnings from data into the ongoing development and enhancement of our AI technologies.</li>
                </ul>
                <p>
                  We process your data in accordance with the Digital Personal Data Protection Act, 2023, which requires that personal data be processed only for the purposes for which consent has been obtained.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">We apply appropriate safeguards to data processing activities, including:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>De-identification:</strong> Where feasible and appropriate, we apply de-identification techniques to remove or modify personal identifiers from data used for research, analytics, or AI model improvement.</li>
                    <li><strong>Anonymization:</strong> Where feasible and appropriate, we apply anonymization techniques to render data irreversible such that it cannot be linked to an identifiable individual.</li>
                    <li><strong>Aggregation:</strong> Where feasible and appropriate, we aggregate data to prevent identification of individuals.</li>
                    <li><strong>Data Minimization:</strong> We collect and process only such data as is reasonably necessary for the specified purposes.</li>
                  </ul>
                </div>
                <p>
                  Nothing in this section requires us to apply de-identification, anonymization, or aggregation where doing so would impair the legitimate purposes for which the data is processed.
                </p>
              </section>

              {/* 11. DATA SHARING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">11</span>
                  Data Sharing
                </h2>
                <p>We may share your data with third parties in the following circumstances:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Licensed Therapists:</strong> Where you are receiving therapist-led care, we may share relevant data with your licensed therapist to support clinical decision-making and continuity of care.</li>
                  <li><strong>Service Providers:</strong> We may share data with third-party service providers who perform services on our behalf, including but not limited to cloud hosting, data storage, analytics, AI model hosting, and speech-to-text processing. Such service providers are bound by contractual obligations to protect the confidentiality and security of your data.</li>
                  <li><strong>Legal and Regulatory Authorities:</strong> We may share data with legal and regulatory authorities where required by applicable law, including court orders or legal process.</li>
                  <li><strong>Emergency Services:</strong> In the event of a crisis or emergency, we may share data with emergency services, crisis intervention services, or emergency contacts as necessary to protect your safety.</li>
                  <li><strong>Research Partners:</strong> We may share de-identified, anonymized, or aggregated data with research partners for the purpose of advancing mental health research and improving mental healthcare.</li>
                  <li><strong>Corporate Transactions:</strong> In the event of a merger, acquisition, or sale of all or substantially all of our assets, your data may be transferred to the successor entity, subject to appropriate notice and consent requirements under applicable law.</li>
                </ul>
                <p>We do not sell your data to third parties for marketing or advertising purposes.</p>
                <p>
                  We require all third-party service providers and partners to implement appropriate technical and organizational measures to protect the confidentiality, integrity, and security of your data.
                </p>
              </section>

              {/* 12. HUMAN REVIEW */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">12</span>
                  Human Review
                </h2>
                <p>
                  Authorized personnel of our company, and where applicable, our service providers, may review your conversations and data when reasonably necessary for the following purposes:
                </p>
                <ul className="space-y-2 pl-5 list-disc text-gray-600">
                  <li>Quality Assurance: Evaluating the performance, accuracy, and safety of the AI system.</li>
                  <li>Bug Investigation: Identifying and resolving technical issues with the AI system or the platform.</li>
                  <li>Security Incidents: Investigating and responding to security incidents or unauthorized access to the platform or your data.</li>
                  <li>Safety Investigations: Investigating potential safety concerns, including but not limited to crisis situations, self-harm, or harm to others.</li>
                  <li>Clinical Support: Supporting licensed therapists in providing care to you.</li>
                  <li>Therapist Support: Providing licensed therapists with insights, summaries, and data to support their clinical work.</li>
                  <li>AI Improvement: Using insights from human review to improve the performance, accuracy, and safety of the AI system.</li>
                  <li>Platform Improvement: Using insights from human review to enhance the platform and user experience.</li>
                  <li>Regulatory Compliance: Ensuring compliance with applicable laws, regulations, and guidelines.</li>
                  <li>Legal Obligations: Fulfilling legal obligations, including but not limited to responding to legal process or court orders.</li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">All personnel who conduct human review are subject to:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Confidentiality Obligations:</strong> Contractual and professional obligations to maintain the confidentiality of your data and not to disclose your data except as authorized.</li>
                    <li><strong>Data Protection Training:</strong> Training on data protection, privacy, and security requirements.</li>
                    <li><strong>Access Controls:</strong> Restricted access to your data on a need-to-know basis.</li>
                    <li><strong>Audit and Monitoring:</strong> Oversight and monitoring of review activities to ensure compliance with applicable policies and laws.</li>
                  </ul>
                </div>
                <p>
                  Human review is conducted in a manner that respects your privacy and minimizes the exposure of personal data to the extent practicable.
                </p>
              </section>

              {/* 13. AI IMPROVEMENT AND MODEL TRAINING */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">13</span>
                  AI Improvement and Model Training
                </h2>
                <p>
                  We are committed to the continuous improvement of the AI system to enhance its performance, accuracy, safety, and usefulness.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">We may use your data for the following AI improvement purposes:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Training Future AI Models:</strong> Using data to train, fine-tune, and improve future versions of the AI system.</li>
                    <li><strong>Improving Future AI Systems:</strong> Incorporating learnings from data into the ongoing development and enhancement of our AI technologies.</li>
                    <li><strong>Evaluating AI Safety:</strong> Assessing the safety, reliability, and appropriateness of the AI system.</li>
                    <li><strong>Validating AI Performance:</strong> Measuring and validating the performance of the AI system against established benchmarks and standards.</li>
                  </ul>
                </div>
                <p>
                  Where feasible and appropriate, we apply de-identification, anonymization, or aggregation techniques to data used for AI improvement to protect your privacy.
                </p>
                <p>
                  You acknowledge that data used for AI improvement may contribute to the development of AI models that benefit the broader user community, and that you may not directly benefit from such improvements.
                </p>
                <p>
                  You may opt out of the use of your data for AI improvement purposes by contacting us. However, you acknowledge that opting out may limit our ability to personalize your experience and may not prevent the use of de-identified or aggregated data for AI improvement.
                </p>
              </section>

              {/* 14. RISK DISCLOSURE */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">14</span>
                  Risk Disclosure
                </h2>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-950">You acknowledge and accept that the use of the AI system carries certain inherent risks, including:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-900">
                    <li><strong>Inaccurate or Misleading Information:</strong> The AI system may generate responses that are inaccurate, incomplete, outdated, or misleading, which could lead to poor decision-making or harmful actions.</li>
                    <li><strong>False Sense of Security:</strong> You may develop a false sense of security or over-reliance on the AI system, leading you to neglect appropriate professional care or emergency response.</li>
                    <li><strong>Emotional Distress:</strong> Interactions with the AI system may inadvertently cause or exacerbate emotional distress, particularly if the AI system generates insensitive, inappropriate, or triggering content.</li>
                    <li><strong>Privacy and Confidentiality Risks:</strong> Despite our reasonable security measures, there is a risk of unauthorized access to, disclosure of, or loss of your data.</li>
                    <li><strong>Technical Risks:</strong> The AI system may experience technical failures, interruptions, or degradations in performance that could affect your experience or access to support.</li>
                    <li><strong>Bias and Fairness Risks:</strong> The AI system may reflect biases present in its training data, potentially leading to discriminatory or unfair outcomes.</li>
                    <li><strong>Misunderstanding of Capabilities:</strong> You may misunderstand the capabilities of the AI system, attributing human-like qualities or clinical expertise to the AI system that it does not possess.</li>
                    <li><strong>Dependency Risk:</strong> You may develop a dependency on the AI system for emotional support, potentially hindering the development of real-world coping mechanisms and support networks.</li>
                    <li><strong>Data Security Risks:</strong> Despite our reasonable security measures, there is a risk of data breaches, cyberattacks, or other security incidents affecting your data.</li>
                    <li><strong>Regulatory Risks:</strong> The legal and regulatory landscape for AI in healthcare is evolving, and changes in applicable law may affect the availability or operation of the AI system.</li>
                    <li><strong>Speech Recognition Risks:</strong> Speech recognition technology may occasionally misinterpret words, context, or meaning, leading to inaccurate transcripts and potentially inappropriate AI responses.</li>
                  </ul>
                </div>
                <p>
                  We have implemented reasonable measures to mitigate these risks, including technical safeguards, human oversight, quality assurance processes, and risk management procedures. However, we do not guarantee that these measures will eliminate all risks.
                </p>
                <p className="font-semibold">
                  You acknowledge that you assume the risks associated with your use of the AI system and agree to use the AI system at your own risk.
                </p>
              </section>

              {/* 15. CRISIS DETECTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">15</span>
                  Crisis Detection
                </h2>
                <p>
                  Our AI system includes crisis detection capabilities designed to identify potential indicators of crisis situations based on your inputs and interaction patterns.
                </p>
                
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-950">The AI system may identify indicators of:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>Suicide risk, including suicidal ideation, intent, or plans</li>
                    <li>Self-harm intentions or behaviors</li>
                    <li>Thoughts of violence toward others</li>
                    <li>Abuse or neglect, including child abuse, domestic violence, or elder abuse</li>
                    <li>Severe psychosis or acute psychiatric decompensation</li>
                    <li>Medical emergencies</li>
                    <li>Missing minors</li>
                  </ul>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-950">When the AI system detects indicators of a potential crisis, the platform may:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-orange-900">
                    <li>Display emergency guidance and resources to you</li>
                    <li>Recommend that you contact local emergency services immediately</li>
                    <li>Notify your registered emergency contacts where legally, ethically, or clinically appropriate</li>
                    <li>Escalate the matter internally to designated personnel for follow-up</li>
                    <li>Notify your licensed therapist, where applicable</li>
                    <li>Take such other actions as are reasonably necessary to protect your safety, subject to applicable law</li>
                  </ul>
                </div>

                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3 text-sm text-orange-950">
                  <p className="font-bold">You acknowledge and accept that:</p>
                  <ul className="list-disc pl-5 space-y-1 text-orange-900">
                    <li>The AI system&apos;s crisis detection capabilities are not infallible and may fail to detect crises</li>
                    <li>The AI system may generate false positives, incorrectly identifying a crisis where none exists</li>
                    <li>You should never rely exclusively on the AI system for crisis detection or emergency response</li>
                    <li>You are responsible for seeking appropriate emergency care when experiencing a crisis</li>
                    <li>Our ability to respond to crises is limited by the nature of the digital platform and the information available to us</li>
                  </ul>
                </div>

                <p className="font-semibold bg-red-50 p-4 rounded-xl border border-red-100 text-red-900">
                  The platform is not an emergency response service and does not provide emergency medical or psychiatric care. If you are experiencing a crisis, you should immediately contact local emergency services by dialing the appropriate emergency number or proceed to the nearest hospital emergency department.
                </p>
              </section>

              {/* 16. USER RESPONSIBILITIES */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">16</span>
                  User Responsibilities
                </h2>
                <p>You agree to the following responsibilities in connection with your use of the AI system:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Provide Accurate Information:</strong> To provide accurate, complete, and truthful information to the AI system, recognizing that the quality of AI responses depends on the quality of your inputs.</li>
                  <li><strong>Avoid Misuse:</strong> To use the AI system only for its intended purposes and in accordance with this consent, our Terms of Service, and applicable law.</li>
                  <li><strong>Not Rely Exclusively on AI:</strong> To exercise independent judgment and not rely exclusively on the AI system for mental health support, clinical guidance, or emergency response.</li>
                  <li><strong>Seek Emergency Help:</strong> To seek appropriate emergency care when experiencing a mental health emergency, rather than relying on the AI system for emergency response.</li>
                  <li><strong>Understand AI Limitations:</strong> To understand and accept the limitations of the AI system as set forth in this consent.</li>
                  <li><strong>Protect Account Credentials:</strong> To maintain the confidentiality of your account credentials and to notify us immediately of any unauthorized access to your account.</li>
                  <li><strong>Report Issues:</strong> To promptly report any issues, concerns, or adverse experiences with the AI system to us.</li>
                  <li><strong>Comply with Laws:</strong> To use the AI system in compliance with all applicable laws, regulations, and guidelines.</li>
                  <li><strong>Respect Intellectual Property:</strong> To respect the intellectual property rights of our company and third parties in connection with the use of the AI system.</li>
                  <li><strong>Supervise Minor Users:</strong> Where you are a caregiver of a minor user, to supervise the minor user&apos;s use of the AI system and ensure that such use is appropriate for the minor user&apos;s age and developmental stage.</li>
                  <li><strong>Voice Input Responsibility:</strong> When using voice input, to speak clearly and to review important information before relying upon AI responses, recognizing that speech recognition may occasionally produce inaccurate transcripts.</li>
                </ul>
                <p>
                  You acknowledge that failure to fulfill these responsibilities may impact the quality of AI interactions and may result in the termination of your access to the AI system or the platform.
                </p>
              </section>

              {/* 17. COMPANY RESPONSIBILITIES */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">17</span>
                  Company Responsibilities
                </h2>
                <p>We agree to the following responsibilities in connection with the AI system:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Reasonable AI Governance:</strong> To maintain and implement reasonable AI governance frameworks, policies, and procedures for the development, deployment, and monitoring of the AI system.</li>
                  <li><strong>Security:</strong> To implement and maintain reasonable security safeguards to protect your data and the AI system from unauthorized access, disclosure, alteration, or destruction.</li>
                  <li><strong>Responsible Deployment:</strong> To deploy the AI system in a responsible manner, with appropriate human oversight and risk management measures.</li>
                  <li><strong>Monitoring:</strong> To monitor the performance, accuracy, and safety of the AI system on an ongoing basis.</li>
                  <li><strong>Continuous Improvement:</strong> To continuously improve the AI system&apos;s performance, accuracy, safety, and usefulness through research, development, and user feedback.</li>
                  <li><strong>Risk Management:</strong> To identify, assess, and mitigate risks associated with the AI system.</li>
                  <li><strong>Privacy:</strong> To process your data in accordance with this consent, our Privacy Policy, and applicable law, including the Digital Personal Data Protection Act, 2023.</li>
                  <li><strong>Human Oversight:</strong> To maintain appropriate human oversight of the AI system, including quality assurance, incident response, and escalation procedures.</li>
                  <li><strong>Transparency:</strong> To provide clear and transparent information about the AI system, its capabilities, and its limitations.</li>
                  <li><strong>Compliance:</strong> To comply with all applicable laws, regulations, and guidelines relating to the AI system and the processing of your data.</li>
                  <li><strong>Speech Recognition Provider Oversight:</strong> To ensure that any third-party speech recognition service provider we engage operates under appropriate contractual confidentiality, privacy, and security obligations.</li>
                </ul>
              </section>

              {/* 18. PROHIBITED USES */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">18</span>
                  Prohibited Uses
                </h2>
                <p>You shall not use the AI system for any of the following prohibited purposes:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Illegal Advice:</strong> Seeking or obtaining advice on illegal activities, including but not limited to drug manufacturing, fraud, or criminal activities.</li>
                  <li><strong>Committing Crimes:</strong> Using the AI system to plan, facilitate, or commit crimes or illegal activities.</li>
                  <li><strong>Harassment:</strong> Using the AI system to harass, threaten, intimidate, or abuse others.</li>
                  <li><strong>Harmful Content:</strong> Generating or disseminating content that is defamatory, obscene, pornographic, hateful, discriminatory, or otherwise harmful.</li>
                  <li><strong>Circumventing Safeguards:</strong> Attempting to circumvent, bypass, or disable any safety features, content filters, or other safeguards implemented in the AI system.</li>
                  <li><strong>Prompt Injection:</strong> Attempting to manipulate the AI system through prompt injection, jailbreaking, or other techniques to generate content outside the intended scope of the AI system.</li>
                  <li><strong>Extracting Confidential Information:</strong> Attempting to extract confidential information, trade secrets, or proprietary information from the AI system.</li>
                  <li><strong>Reverse Engineering:</strong> Reverse engineering, decompiling, disassembling, or otherwise attempting to derive the source code, algorithms, or underlying technology of the AI system.</li>
                  <li><strong>Automated Access:</strong> Using automated means, including bots, crawlers, or scrapers, to access the AI system without our prior written consent.</li>
                  <li><strong>Misrepresentation:</strong> Misrepresenting your identity, age, or eligibility to use the AI system.</li>
                </ul>
                <p>
                  We reserve the right to investigate any suspected violation of this section and to take appropriate action, including but not limited to terminating your access to the AI system and the platform.
                </p>
              </section>

              {/* 19. INTELLECTUAL PROPERTY */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">19</span>
                  Intellectual Property
                </h2>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Company Intellectual Property:</strong> The AI system, including all software, algorithms, models, code, data, and related technology, is our exclusive property or that of our licensors and is protected by intellectual property laws, including copyright, patent, trademark, and trade secret laws.</li>
                  <li><strong>AI Generated Content:</strong> Subject to your ownership of your user-generated content, we retain all right, title, and interest in and to AI generated content. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use AI generated content for personal, non-commercial purposes in connection with your use of the platform.</li>
                  <li><strong>User-Generated Content:</strong> You retain ownership of your user-generated content, including journal entries, mood logs, assessment responses, and other content you create on the platform. You grant us a worldwide, royalty-free, non-exclusive license to use, reproduce, modify, adapt, and distribute your user-generated content for the purposes set forth in this consent and our Privacy Policy.</li>
                  <li><strong>Feedback:</strong> Any feedback, suggestions, or improvements you provide regarding the AI system shall be our exclusive property, and you assign all right, title, and interest in such feedback to us.</li>
                  <li><strong>Training Improvements:</strong> Any improvements to the AI system resulting from the use of your data or feedback shall be our exclusive property.</li>
                </ul>
              </section>

              {/* 20. WITHDRAWAL OF CONSENT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">20</span>
                  Withdrawal of Consent
                </h2>
                <p>You may withdraw this consent at any time, in whole or in part, by providing written notice to us.</p>
                <p>Withdrawal of consent shall be effective upon receipt of your notice by us, subject to any processing that may have already been completed prior to such withdrawal.</p>
                <p>
                  Upon withdrawal of consent, your access to AI-powered features of the platform shall be terminated, and you may lose access to certain functionalities, including but not limited to the AI conversational companion, personalized recommendations, and AI-generated reports.
                </p>
                <p>
                  You acknowledge that withdrawal of consent may impact your ability to access certain services on the platform and that we may be required to retain certain information for legal, regulatory, or operational purposes even after consent has been withdrawn.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Upon withdrawal of consent, we shall cease processing your personal data for the purposes for which consent was withdrawn, except to the extent that continued processing is:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Required by applicable law</li>
                    <li>Necessary for the establishment, exercise, or defense of legal claims</li>
                    <li>Necessary for compliance with a legal obligation</li>
                    <li>Otherwise permitted under the Digital Personal Data Protection Act, 2023 or other applicable law</li>
                  </ul>
                </div>
                <p>You may request the deletion of AI memory where legally and operationally feasible. Such requests will be processed in accordance with our Privacy Policy and applicable law.</p>
                <p>Withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal.</p>
              </section>

              {/* 21. TERMINATION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">21</span>
                  Termination
                </h2>
                <p>We reserve the right to terminate or suspend your access to the AI system and the platform at any time, with or without cause, subject to applicable law and our Terms of Service.</p>
                
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Grounds for termination may include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Violation of this consent, our Terms of Service, or any other applicable policy</li>
                    <li>Provision of false or misleading information</li>
                    <li>Conduct that poses a risk to you, other users, or us</li>
                    <li>Prohibited uses as set forth in this consent</li>
                    <li>Non-payment of fees, where applicable</li>
                    <li>Inactivity for an extended period</li>
                    <li>Request by you or your caregiver</li>
                    <li>Closure or discontinuation of the AI system or the platform</li>
                    <li>Any other reason deemed appropriate by us in our sole discretion</li>
                  </ul>
                </div>
                <p>You may terminate your use of the AI system at any time by withdrawing this consent.</p>
                <p>Upon termination, your access to the AI system and AI-powered features shall cease, and we shall process your personal data in accordance with applicable law and our Privacy Policy.</p>
              </section>

              {/* 22. GOVERNING LAW */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">22</span>
                  Governing Law
                </h2>
                <p>This consent shall be governed by and construed in accordance with the laws of the Republic of India.</p>
                <p>The courts of Dharwad, Karnataka, India shall have exclusive jurisdiction over any disputes arising out of or in connection with this consent, subject to the dispute resolution provisions set forth below.</p>
              </section>

              {/* 23. DISPUTE RESOLUTION */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">23</span>
                  Dispute Resolution
                </h2>
                <p>We and you shall make reasonable efforts to resolve any disputes arising out of or in connection with this consent or the AI system through good-faith negotiations.</p>
                <p>If the dispute cannot be resolved through negotiations within thirty (30) days of the date on which either party notifies the other of the dispute, the dispute shall be referred to mediation in accordance with the provisions of the Arbitration and Conciliation Act, 1996.</p>
                <p>
                  If mediation is unsuccessful, the dispute shall be finally settled by arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English at Dharwad, Karnataka, India, by a sole arbitrator appointed by mutual agreement of the parties or, failing such agreement, by us.
                </p>
                <p>You acknowledge that you may also have the right to file a complaint with the Data Protection Board of India in accordance with the Digital Personal Data Protection Act, 2023.</p>
                <p>Nothing in this section shall prevent either party from seeking interim or injunctive relief from a court of competent jurisdiction.</p>
              </section>

              {/* 24. ACKNOWLEDGEMENT */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] flex items-center border-b pb-3">
                  <span className="bg-orange-100 text-orange-600 rounded-lg w-8 h-8 flex items-center justify-center mr-3 text-base">24</span>
                  Acknowledgement
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">By providing this consent, you (or in the case of a minor user, the caregiver) acknowledge that:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>You have read, understood, and agreed to all the terms and conditions set forth in this consent</li>
                    <li>You have had the opportunity to ask questions and seek clarification regarding any aspect of this consent or the AI system</li>
                    <li>You understand the nature, purpose, capabilities, and limitations of the AI system</li>
                    <li>You understand that the AI system is not a psychologist, psychiatrist, therapist, doctor, or healthcare practitioner and does not provide medical diagnosis, prescribe medications, or replace professional mental healthcare</li>
                    <li>You understand that the AI system may generate inaccurate, incomplete, or inappropriate responses and that you should not rely exclusively on the AI system</li>
                    <li>You understand that the platform is not an emergency response service and that you must contact local emergency services in the event of a mental health emergency</li>
                    <li>You understand the data collection, processing, and sharing practices set forth in this consent</li>
                    <li>You understand that authorized personnel may review your conversations and data for the purposes set forth in this consent</li>
                    <li>You understand that your data may be used for AI improvement and model training, subject to the safeguards set forth in this consent</li>
                    <li>You understand that your participation is voluntary and that you may withdraw this consent at any time</li>
                    <li>You understand the risks associated with the use of the AI system</li>
                    <li>You understand that voice input is optional and that you may continue to use typed text exclusively</li>
                    <li>You understand that voice input requires microphone permission, which may be withdrawn at any time through your device settings</li>
                    <li>You understand that speech is converted to text by a trusted third-party service provider and that raw audio is not retained after successful transcription</li>
                    <li>You understand that speech recognition may occasionally generate inaccurate transcripts and that you remain responsible for reviewing important information</li>
                    <li>You understand that this consent is a legally binding document and that you are providing this consent freely, without any coercion, undue influence, fraud, misrepresentation, or mistake</li>
                    <li>You have received a copy of this consent or have been provided with access to it through the platform</li>
                  </ul>
                </div>
              </section>

              {/* CONTACT US */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 uppercase">
                  Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or complaints about this AI Assistance Consent or our use of AI technologies, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:support@heyattrangi.com" className="text-orange-600 hover:underline">support@heyattrangi.com</a></p>
                  <p><strong>Website:</strong> <a href="https://www.heyattrangi.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">https://www.heyattrangi.com/</a></p>
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
