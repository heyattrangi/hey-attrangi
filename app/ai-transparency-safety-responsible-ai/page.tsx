import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Transparency, Safety & Responsible AI | Hey Attrangi",
  description: "Learn how Hey Attrangi designs, deploys, monitors, evaluates, and governs AI systems responsibly across its digital mental health platform.",
};

export default function AITransparencyPage() {
  const sections = [
    { id: "introduction", label: "1. Introduction" },
    { id: "what-ai-is-used-for", label: "2. What AI Is Used For" },
    { id: "what-ai-cannot-do", label: "3. What AI Cannot Do" },
    { id: "role-of-therapists", label: "4. The Role of Therapists" },
    { id: "your-rights", label: "5. Your Rights" },
    { id: "responsible-ai-principles", label: "6. Our Responsible AI Principles" },
    { id: "ai-systems-on-our-platform", label: "7. AI Systems on Our Platform" },
    { id: "ai-capabilities", label: "8. AI Capabilities" },
    { id: "voice-input-processing", label: "9. Voice Input Processing" },
    { id: "explainability", label: "10. Explainability" },
    { id: "ai-safety", label: "11. AI Safety" },
    { id: "limitations", label: "12. Limitations" },
    { id: "ai-memory", label: "13. AI Memory" },
    { id: "model-training", label: "14. Model Training" },
    { id: "bias-fairness-quality", label: "15. Bias, Fairness & Quality" },
    { id: "human-oversight", label: "16. Human Oversight" },
    { id: "service-availability", label: "17. Service Availability" },
    { id: "future-ai", label: "18. Future AI" },
    { id: "ai-governance", label: "19. AI Governance" },
    { id: "changes-to-this-statement", label: "20. Changes to This Statement" },
    { id: "contact-us", label: "21. Contact Us" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navigation currentPath="/ai-transparency-safety-responsible-ai" />

      {/* Main Content */}
      <main className="flex-grow pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="bg-white rounded-[32px] shadow-sm shadow-orange-500/5 border border-gray-100 p-8 md:p-12 lg:p-16">
            
            {/* Header Section */}
            <div className="mb-12 border-b border-gray-100 pb-8 text-center md:text-left">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block">
                Responsible AI & Safety
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2b3c] tracking-tight mb-2">
                AI Transparency, Safety &amp; Responsible AI Statement
              </h1>
              <p className="text-lg font-bold text-gray-700 mb-2">
                HEY ATTRANGI
              </p>
              <p className="text-sm text-gray-500 font-semibold italic">
                (A Digital Mental Health Platform operated by Aatrangi Private Limited)
              </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-orange-50/30 border border-orange-100 rounded-2xl">
              {/* Mobile Table of Contents */}
              <div className="block md:hidden">
                <details className="group">
                  <summary className="font-bold text-[#1a2b3c] cursor-pointer flex items-center justify-between py-2 select-none">
                    <span>On this page</span>
                    <span className="transition-transform group-open:rotate-180">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600 pl-4 border-l-2 border-orange-500/20">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a href={`#${section.id}`} className="hover:text-orange-600 transition-colors">
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>

              {/* Desktop Table of Contents */}
              <div className="hidden md:block">
                <h2 className="text-lg font-bold text-[#1a2b3c] mb-4">Table of Contents</h2>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-gray-600">
                  {sections.map((section) => (
                    <a key={section.id} href={`#${section.id}`} className="hover:text-orange-600 transition-colors">
                      {section.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Document Content */}
            <div className="prose prose-lg max-w-none text-gray-600 space-y-12 leading-relaxed">
              
              {/* 1. INTRODUCTION */}
              <section id="introduction" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  1. Introduction
                </h2>
                <p>
                  Welcome to Hey Attrangi. This AI Transparency, Safety &amp; Responsible AI Statement explains how we design, deploy, monitor, evaluate, and govern Artificial Intelligence systems across our Platform.
                </p>
                <p>
                  We are committed to responsible, ethical, and transparent AI deployment in digital mental healthcare. This Statement demonstrates our commitment to ensuring that AI serves humanity, benefits people&apos;s lives, and addresses potential harms while fostering responsible innovation.
                </p>
                <p>
                  This Statement is designed to comply with applicable laws of the Republic of India, including the Digital Personal Data Protection Act, 2023, and the Information Technology Act, 2000. It is also informed by internationally recognized principles, including the World Health Organization&apos;s guidance on the ethics and governance of artificial intelligence for health.
                </p>
              </section>

              {/* 2. WHAT AI IS USED FOR */}
              <section id="what-ai-is-used-for" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  2. What AI Is Used For
                </h2>
                <p>AI assists with:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li>Conversational support</li>
                  <li>Mood analysis</li>
                  <li>Wellness recommendations</li>
                  <li>Personalization</li>
                  <li>Crisis detection</li>
                  <li>Clinical documentation support</li>
                  <li>Therapist workflow assistance</li>
                  <li>Voice input processing (converting speech to text for AI interaction)</li>
                </ul>
                <p className="font-semibold text-[#1a2b3c]">
                  AI is a supportive tool designed to complement, not replace, professional mental healthcare.
                </p>
              </section>

              {/* 3. WHAT AI CANNOT DO */}
              <section id="what-ai-cannot-do" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 text-orange-950 bg-orange-50/20">
                  3. What AI Cannot Do
                </h2>
                <p>The AI System:</p>
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Is not a psychologist, psychiatrist, therapist, physician, or healthcare practitioner</li>
                  <li>Does not independently diagnose any medical or psychological condition</li>
                  <li>Does not prescribe medications or recommend specific pharmaceutical treatments</li>
                  <li>Does not replace licensed mental healthcare professionals, clinical judgment, or therapeutic intervention</li>
                  <li>Does not make clinical decisions, which remain solely with Licensed Therapists and other qualified mental health professionals</li>
                  <li>Is a supportive tool designed to complement, not replace, professional mental healthcare</li>
                  <li>Should not be relied upon as the sole source of mental health support, clinical guidance, or emergency response</li>
                  <li>Cannot guarantee accuracy, completeness, timeliness, or appropriateness of outputs</li>
                  <li>Cannot guarantee any specific therapeutic outcome or result</li>
                  <li>Does not generate spoken responses (AI always responds in text only)</li>
                  <li>Does not perform speaker identification, voice authentication, voice biometrics, voice profiling, voice cloning, or voiceprint creation</li>
                </ul>
                <p>
                  We do not represent or warrant that the AI System will meet your specific needs or achieve any particular outcome.
                </p>
              </section>

              {/* 4. THE ROLE OF THERAPISTS */}
              <section id="role-of-therapists" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  4. The Role of Therapists
                </h2>
                <p>
                  Licensed Therapists remain solely responsible for all clinical decisions. Therapists retain authority to review, override, modify, or disregard AI-generated recommendations whenever clinically appropriate.
                </p>
                <p>
                  AI outputs are advisory and supplementary. Final clinical decisions remain with Licensed Therapists and other qualified mental health professionals.
                </p>
              </section>

              {/* 5. YOUR RIGHTS */}
              <section id="your-rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  5. Your Rights
                </h2>
                <p>You have the right to:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li>Understand how AI is used</li>
                  <li>Request plain-language explanations of AI-generated outputs where reasonably possible</li>
                  <li>Manage AI memory</li>
                  <li>Withdraw consent for AI services in accordance with our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent form</Link></li>
                  <li>Understand how voice input is processed and choose whether to use it</li>
                </ul>
              </section>

              {/* 6. OUR RESPONSIBLE AI PRINCIPLES */}
              <section id="responsible-ai-principles" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  6. Our Responsible AI Principles
                </h2>
                <p>
                  We adopt the following Responsible AI Principles, which guide the design, deployment, monitoring, evaluation, and governance of all AI systems across our Platform.
                </p>

                {/* 14 Principles Grid */}
                <div className="space-y-6">
                  
                  {/* Principle 1 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 1 — Human Oversight</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems augment, rather than replace, human judgment and clinical decision-making.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>No AI System shall make autonomous clinical decisions without human review and approval where clinical judgment is required</li>
                      <li>AI outputs shall be clearly identified as AI-generated and shall not be presented as human clinical judgment</li>
                      <li>All AI outputs shall be subject to appropriate human review where clinically indicated</li>
                      <li>Licensed Therapists and authorized personnel retain the authority to review, override, modify, or disregard AI-generated recommendations whenever clinically appropriate</li>
                    </ul>
                  </div>

                  {/* Principle 2 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 2 — Safety First</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are designed to minimize the risk of harm to Users.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems are designed to detect and respond to potential safety concerns</li>
                      <li>Safety thresholds and parameters are subject to ongoing review and refinement</li>
                      <li>Incident response procedures are maintained for AI-related safety incidents</li>
                      <li>The principle of &quot;Do No Harm&quot; guides all AI development and deployment decisions</li>
                    </ul>
                  </div>

                  {/* Principle 3 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 3 — Privacy by Design</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that privacy protections are embedded into AI systems from the outset.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems collect and process only such data as is reasonably necessary for specified purposes</li>
                      <li>Appropriate safeguards are applied to data used for AI improvement</li>
                      <li>Your consent is obtained for AI services in accordance with our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent form</Link></li>
                      <li>Children&apos;s data is subject to enhanced protections in accordance with our Children&apos;s Privacy &amp; Protection Policy</li>
                    </ul>
                  </div>

                  {/* Principle 4 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 4 — Clinical Responsibility</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that clinical decisions remain with qualified mental health professionals, and that AI supports, rather than supplants, clinical judgment.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems shall not independently diagnose medical or psychiatric conditions</li>
                      <li>AI systems shall not prescribe medications</li>
                      <li>AI outputs shall not replace the clinical judgment of Licensed Therapists</li>
                      <li>Clinical documentation shall clearly distinguish between AI-generated content and therapist-generated content</li>
                    </ul>
                  </div>

                  {/* Principle 5 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 5 — Transparency</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that you understand how AI is used, what it can and cannot do, and how your data is processed.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>You will be clearly informed when you are interacting with AI rather than a human</li>
                      <li>AI systems shall not present themselves as licensed clinicians</li>
                      <li>You have access to plain-language explanations of AI-generated outputs where reasonably possible</li>
                      <li>This Statement and our AI Assistance Consent form are publicly available and regularly updated</li>
                    </ul>
                  </div>

                  {/* Principle 6 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 6 — Explainability</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are interpretable to the extent feasible.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>You have the right to request explanations of AI outputs</li>
                      <li>Explanations shall be provided in plain, understandable language</li>
                      <li>We make reasonable efforts to provide meaningful explanations without disclosing proprietary information</li>
                      <li>Internal documentation maintains records of AI system design and decision-making processes</li>
                    </ul>
                  </div>

                  {/* Principle 7 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 7 — Accountability</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure clear attribution of accountability for AI developers and deployers.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>Clear roles and responsibilities are assigned for AI governance</li>
                      <li>Incident response and escalation procedures are maintained</li>
                      <li>Regular audits and reviews are conducted</li>
                      <li>Continuous improvement mechanisms are implemented</li>
                    </ul>
                  </div>

                  {/* Principle 8 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 8 — Fairness</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are designed and tested in a way that outcomes are fair, non-exclusionary, unbiased, and do not discriminate.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems are tested for potential biases</li>
                      <li>Fairness is evaluated across diverse User populations</li>
                      <li>Mitigation measures are implemented where biases are identified</li>
                      <li>Continuous monitoring is conducted to ensure ongoing fairness</li>
                    </ul>
                  </div>

                  {/* Principle 9 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 9 — Security</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are secure and resilient against threats.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems are protected from unauthorized access and manipulation</li>
                      <li>Security incidents are promptly investigated and remediated</li>
                      <li>Regular security reviews and assessments are conducted</li>
                      <li>Security by design principles are applied to AI system development</li>
                    </ul>
                  </div>

                  {/* Principle 10 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 10 — Reliability</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems perform reliably and consistently.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI system performance is continuously monitored</li>
                      <li>Quality assurance reviews are conducted regularly</li>
                      <li>Issues and errors are promptly identified and addressed</li>
                      <li>Reliability metrics are tracked and reported</li>
                    </ul>
                  </div>

                  {/* Principle 11 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 11 — User Control</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that you have control over your interactions with AI systems.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>You have the right to request deletion of AI memory</li>
                      <li>You have the right to withdraw consent for AI services</li>
                      <li>You have the right to request explanations of AI outputs</li>
                      <li>You have the right to choose between typed text and voice input</li>
                      <li>You may grant or withdraw microphone permission at any time through your device settings</li>
                    </ul>
                  </div>

                  {/* Principle 12 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 12 — Child Safety</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems provide safe and appropriate interactions for Minor Users.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems adapt responses according to the Child&apos;s age and developmental stage</li>
                      <li>AI systems use child-friendly language</li>
                      <li>AI systems automatically restrict unsafe, illegal, explicit, exploitative, or age-inappropriate interactions</li>
                      <li>Safety concerns are escalated in accordance with applicable policies</li>
                    </ul>
                  </div>

                  {/* Principle 13 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 13 — Accessibility</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are accessible to Users with diverse needs and abilities.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems are designed with accessibility in mind</li>
                      <li>User feedback is incorporated to improve accessibility</li>
                      <li>Continuous improvement of accessibility is pursued</li>
                    </ul>
                  </div>

                  {/* Principle 14 */}
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-3">
                    <h3 className="text-lg font-bold text-[#1a2b3c]">Principle 14 — Continuous Improvement</h3>
                    <p className="text-sm"><strong>Purpose:</strong> To ensure that AI systems are continuously improved through monitoring, evaluation, user feedback, and research.</p>
                    <p className="text-sm font-semibold">What This Means for You:</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      <li>AI systems are continuously monitored and evaluated</li>
                      <li>User feedback is incorporated into improvement processes</li>
                      <li>Research and academic collaborations inform improvement</li>
                      <li>Model training and refinement are conducted with appropriate safeguards</li>
                    </ul>
                  </div>

                </div>
              </section>

              {/* 7. AI SYSTEMS ON OUR PLATFORM */}
              <section id="ai-systems-on-our-platform" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  7. AI Systems on Our Platform
                </h2>
                <p>Our Platform may utilize one or more of the following types of AI models and technologies:</p>
                <ul className="space-y-3 pl-5 list-disc">
                  <li><strong>Proprietary AI Models:</strong> AI models developed internally</li>
                  <li><strong>Open-Source AI Models:</strong> AI models distributed under open-source licenses</li>
                  <li><strong>Third-Party Commercial AI Models:</strong> AI models provided by trusted third-party service providers operating under appropriate contractual, privacy, confidentiality, and security obligations</li>
                </ul>
                <p>
                  The specific AI technologies utilized may evolve over time. All AI models deployed on our Platform are subject to the Responsible AI Principles set forth in this Statement, regardless of their origin.
                </p>
                <p>
                  Our Platform may utilize multimodal AI (processing multiple types of data inputs) and future AI technologies as they are introduced, subject to this Statement.
                </p>
              </section>

              {/* 8. AI CAPABILITIES */}
              <section id="ai-capabilities" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  8. AI Capabilities
                </h2>
                <p>The AI System provides the following capabilities, which may evolve over time:</p>
                <ul className="space-y-3 pl-5 list-disc text-gray-600">
                  <li><strong>Conversational AI:</strong> Engaging in text-based conversations to provide emotional wellbeing support, active listening, and guided reflection. You may interact with the AI either by typing text or by using voice input, as described in this Statement.</li>
                  <li><strong>Voice Input Processing:</strong> Converting spoken input into text for AI interaction. Raw audio is not retained after successful transcription. Only the generated transcript becomes part of your conversation history.</li>
                  <li><strong>Mood Analysis:</strong> Analyzing mood based on inputs, assessments, and interaction patterns to provide insights and recommendations</li>
                  <li><strong>Emotional Support:</strong> Providing supportive and non-judgmental responses to concerns</li>
                  <li><strong>Personalization:</strong> Tailoring responses, recommendations, and content to preferences and needs</li>
                  <li><strong>Conversation Memory:</strong> Retaining information from previous conversations to provide continuity of support</li>
                  <li><strong>Wellness Recommendations:</strong> Providing personalized recommendations for wellness activities, coping strategies, and self-care practices</li>
                  <li><strong>Assessment Support:</strong> Administering standardized and non-standardized screening tools to assess aspects of mental health</li>
                  <li><strong>Medication Reminders:</strong> Providing notifications to support adherence to prescribed medication regimens</li>
                  <li><strong>Journal Insights:</strong> Offering prompts, guidance, and reflective questions to support journaling practice</li>
                  <li><strong>Risk Identification:</strong> Identifying potential clinical risks based on inputs and interaction patterns</li>
                  <li><strong>Crisis Detection:</strong> Identifying potential indicators of crisis situations</li>
                  <li><strong>Clinical Documentation Support:</strong> Assisting with the preparation of clinical documentation</li>
                  <li><strong>Therapist Workflow Assistance:</strong> Supporting Licensed Therapists with documentation and workflow management</li>
                  <li><strong>Follow-up Recommendations:</strong> Generating recommendations for follow-up care</li>
                  <li><strong>Multilingual Support:</strong> Supporting conversations in multiple languages</li>
                  <li><strong>Future Multimodal Capabilities:</strong> Any additional capabilities that may be introduced in the future</li>
                </ul>
              </section>

              {/* 9. VOICE INPUT PROCESSING */}
              <section id="voice-input-processing" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  9. Voice Input Processing
                </h2>
                <p>
                  The Platform offers you the option to provide input to the AI Companion through voice, in addition to typed text. This section explains how voice input works and how your voice data is processed.
                </p>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.1 Optional Nature</h3>
                  <p>Voice input is entirely optional. You may continue to interact with the AI Companion exclusively through typed text if you so choose. Typing remains fully supported at all times.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.2 How Voice Input Works</h3>
                  <p>When you choose to use voice input:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Microphone Permission:</strong> The application requests permission to access your device&apos;s microphone only when you choose to use voice input. You may grant or withdraw this permission at any time through your device settings.</li>
                    <li><strong>Speech-to-Text Conversion:</strong> Your speech is converted into text using a trusted third-party speech recognition service operating under appropriate contractual confidentiality, privacy, and security obligations.</li>
                    <li><strong>Text-Only Responses:</strong> The AI always responds in text. The AI does not generate spoken responses.</li>
                    <li><strong>Transcript Processing:</strong> The generated transcript is processed by the AI Companion in the same manner as a typed message and becomes part of your conversation history.</li>
                  </ul>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.3 Data Retention and Privacy</h3>
                  <p><strong>Raw Audio Discarded:</strong> Raw audio recordings are not retained after successful transcription. Immediately after your speech has been converted into text, the raw audio is securely discarded.</p>
                  <p><strong>Transcript Retention:</strong> Only the generated transcript is retained as part of your conversation history and is subject to the same privacy policies, retention policies, and AI safeguards as typed messages.</p>
                  <p><strong>No Voice Identification:</strong> The AI does not use your voice to identify you. The platform does not perform speaker identification, voice authentication, voice biometrics, voice profiling, voice cloning, or voiceprint creation.</p>
                  <p><strong>No Voice Storage:</strong> Your voice is not used to create a voiceprint or biometric profile.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.4 Speech Recognition Limitations</h3>
                  <p>Speech recognition technology may occasionally generate inaccurate words, punctuation, names, accents, or interpretations. Factors that may affect accuracy include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Background noise</li>
                    <li>Accents and dialects</li>
                    <li>Speech clarity and speed</li>
                    <li>Technical limitations of the speech recognition service</li>
                  </ul>
                  <p>You remain responsible for reviewing important information before relying upon AI responses. We recommend reviewing critical information that may affect your health, safety, or wellbeing.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.5 Voice Interactions and AI Safeguards</h3>
                  <p>Voice conversations are subject to the same AI limitations, safety mechanisms, content moderation, crisis detection, and disclaimers that apply to typed conversations. The AI System&apos;s safety measures operate regardless of how you provide input.</p>
                </div>

                <div className="space-y-4 pl-4 border-l-2 border-orange-500/30">
                  <h3 className="text-lg font-bold text-[#1a2b3c]">9.6 User Control</h3>
                  <p>You may grant or withdraw microphone permission at any time through your device&apos;s operating system settings.</p>
                  <p>If microphone permission is denied, voice input becomes unavailable while text input continues to function normally.</p>
                  <p>Your decision to use or not use voice input does not affect your access to any other Platform features.</p>
                </div>
              </section>

              {/* 10. EXPLAINABILITY */}
              <section id="explainability" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  10. Explainability
                </h2>
                <p>
                  You may request plain-language explanations, where reasonably possible, regarding AI-generated recommendations or outputs.
                </p>
                <p>
                  Requests for explanations shall be processed in a timely manner and shall be provided in plain, understandable language.
                </p>
                <p>
                  We make reasonable efforts to provide meaningful explanations without disclosing proprietary information.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p className="font-semibold text-gray-800">The following information is not publicly disclosed:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Proprietary algorithms and model architecture</li>
                    <li>Internal safety thresholds and confidence scores</li>
                    <li>Confidential implementation details</li>
                    <li>Trade secrets and other proprietary information</li>
                  </ul>
                </div>
                <p>
                  We maintain internal documentation of AI system design, decision-making processes, and safety mechanisms to support explainability and accountability.
                </p>
              </section>

              {/* 11. AI SAFETY */}
              <section id="ai-safety" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  11. AI Safety
                </h2>
                <p>
                  We implement comprehensive safety mechanisms to protect Users and ensure responsible AI operation.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-4">
                  <ul className="space-y-3 list-none pl-0">
                    <li><strong>Internal Confidence Mechanisms:</strong> The AI System employs internally defined confidence scores and safety thresholds to evaluate the reliability of its outputs and identify potential safety concerns.</li>
                    <li><strong>Safety Systems:</strong> Safety systems include content moderation, risk detection, crisis detection, and clinical escalation procedures.</li>
                    <li><strong>Risk Detection:</strong> The AI System is designed to identify potential indicators of risk, including but not limited to suicide risk, self-harm, violence, abuse, neglect, severe psychosis, and medical emergencies.</li>
                    <li><strong>Content Moderation:</strong> Automated and human content moderation is implemented to prevent exposure to inappropriate, harmful, or age-inappropriate content.</li>
                    <li><strong>Human Oversight:</strong> Human oversight is maintained for AI outputs, particularly in safety-critical contexts.</li>
                    <li><strong>Clinical Escalation:</strong> Procedures are maintained for escalating safety concerns to Licensed Therapists, clinical supervisors, crisis response staff, and, where appropriate, emergency services.</li>
                    <li><strong>Safety Monitoring:</strong> Continuous monitoring of AI system safety performance is conducted.</li>
                    <li><strong>Child Protections:</strong> Enhanced safety protections are implemented for Minor Users in accordance with our Children&apos;s Privacy &amp; Protection Policy.</li>
                    <li><strong>Crisis Handling:</strong> The AI System includes crisis detection and escalation capabilities, as governed by our Crisis Intervention Consent form.</li>
                    <li><strong>Confidentiality of Safety Parameters:</strong> Internal confidence scores, thresholds, and safety parameters are proprietary and confidential. These are not publicly disclosed to protect the integrity and effectiveness of the safety systems and to prevent attempts to circumvent safety measures.</li>
                  </ul>
                </div>
              </section>

              {/* 12. LIMITATIONS */}
              <section id="limitations" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3 text-orange-950 bg-orange-50/20">
                  12. Limitations
                </h2>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 space-y-3">
                  <p className="font-semibold text-orange-950">You acknowledge and accept that the AI System has significant limitations, including but not limited to:</p>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-orange-900">
                    <li><strong>Inaccurate Outputs:</strong> The AI System may generate responses that are factually incorrect, outdated, or inconsistent with established clinical knowledge</li>
                    <li><strong>Incomplete Outputs:</strong> The AI System may generate responses that are incomplete, superficial, or fail to address the full scope of your concerns</li>
                    <li><strong>Misunderstanding Context:</strong> The AI System may misinterpret your inputs, context, or intent</li>
                    <li><strong>Misleading Outputs:</strong> The AI System may generate outputs that appear authoritative or clinically valid but are, in fact, misleading or inappropriate</li>
                    <li><strong>Failure to Detect Emergencies:</strong> The AI System may fail to detect crisis situations that would be recognizable to a human professional</li>
                    <li><strong>Hallucination:</strong> The AI System may generate content that appears plausible but is entirely fabricated</li>
                    <li><strong>Generalized Responses:</strong> The AI System may provide responses that are overly generalized and fail to address your specific needs</li>
                    <li><strong>Impact of Incomplete User Input:</strong> The AI System&apos;s responses are dependent on the completeness and accuracy of your inputs</li>
                    <li><strong>Lack of Emotional Intelligence:</strong> The AI System lacks genuine emotional intelligence, empathy, and the capacity for human connection that is fundamental to effective therapeutic relationships</li>
                    <li><strong>Speech Recognition Errors:</strong> Speech recognition technology may occasionally misinterpret words, context, or meaning, leading to inaccurate transcripts and potentially inappropriate AI responses</li>
                  </ul>
                </div>
                <p>
                  You should verify important decisions with qualified professionals where appropriate. We do not warrant or guarantee the accuracy, completeness, timeliness, or appropriateness of any AI-generated content.
                </p>
              </section>

              {/* 13. AI MEMORY */}
              <section id="ai-memory" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  13. AI Memory
                </h2>
                <p>
                  The AI System maintains memory of previous conversations and interactions to provide continuity of care and personalized experiences.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">AI Memory May Include:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Previous discussions and conversational exchanges</li>
                    <li>Previous emotional concerns and themes</li>
                    <li>User preferences, including communication style and content preferences</li>
                    <li>Wellness goals and objectives</li>
                    <li>Previous recommendations</li>
                    <li>Mood trends and patterns</li>
                    <li>Behavioural patterns</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 mt-4">
                  <p className="font-semibold text-gray-800">Managing AI Memory:</p>
                  <p>You may request deletion or modification of portions of AI memory where operationally feasible and subject to applicable legal, clinical, and governance obligations.</p>
                  <p>Therapists and authorized Caregivers (where applicable) may manage relevant AI memory where clinically appropriate.</p>
                  <p>Deletion requests shall be processed in accordance with our Privacy Policy, Data Retention &amp; Deletion Policy, and applicable law.</p>
                </div>
                <p>
                  For more information on AI memory, please refer to our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent form</Link>.
                </p>
              </section>

              {/* 14. MODEL TRAINING */}
              <section id="model-training" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  14. Model Training
                </h2>
                <p>
                  The AI System does not automatically learn from each individual conversation in real time. Model improvements occur through controlled training, evaluation, validation, governance, and quality assurance processes.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Safeguards Applied to Model Training:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>De-identification:</strong> Removing or modifying personal identifiers from data used for training</li>
                    <li><strong>Anonymization:</strong> Rendering data irreversible such that it cannot be linked to an identifiable individual</li>
                    <li><strong>Aggregation:</strong> Combining data from multiple individuals into summary form</li>
                    <li><strong>Human Review:</strong> Human review of training data and processes</li>
                    <li><strong>Clinical Governance:</strong> Clinical oversight of model training and improvement</li>
                    <li><strong>Quality Assurance:</strong> Quality assurance reviews of model performance</li>
                    <li><strong>Privacy Review:</strong> Privacy review of training data and processes</li>
                  </ul>
                </div>
                <p>
                  Children&apos;s information is subject to enhanced protections in accordance with our Children&apos;s Privacy &amp; Protection Policy.
                </p>
                <p>
                  For more information on data processing and AI improvement, please refer to our Data Processing Consent form and Privacy Policy.
                </p>
              </section>

              {/* 15. BIAS, FAIRNESS & QUALITY */}
              <section id="bias-fairness-quality" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  15. Bias, Fairness &amp; Quality
                </h2>
                <p>We are committed to identifying and mitigating potential biases in AI systems.</p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Our Commitments:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Bias Testing:</strong> Testing AI systems for potential biases across diverse User populations</li>
                    <li><strong>Fairness Evaluation:</strong> Evaluating the fairness of AI outputs and outcomes</li>
                    <li><strong>Clinical Validation:</strong> Validating AI outputs against clinical standards and expectations</li>
                    <li><strong>Internal Testing:</strong> Conducting internal testing of AI system performance</li>
                    <li><strong>User Feedback:</strong> Incorporating User feedback into improvement processes</li>
                    <li><strong>Academic Collaborations:</strong> Collaborating with academic institutions on research and evaluation</li>
                    <li><strong>Benchmarking:</strong> Benchmarking AI system performance against industry standards</li>
                    <li><strong>Continuous Monitoring:</strong> Continuously monitoring AI system performance for potential issues</li>
                    <li><strong>Performance Evaluation:</strong> Regularly evaluating AI system performance against established metrics</li>
                    <li><strong>Risk Assessment:</strong> Conducting risk assessments for AI system deployment</li>
                  </ul>
                </div>
              </section>

              {/* 16. HUMAN OVERSIGHT */}
              <section id="human-oversight" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  16. Human Oversight
                </h2>
                <p>
                  Therapists and authorized personnel retain authority to review, override, modify, or disregard AI-generated recommendations whenever clinically appropriate.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">Human Oversight Throughout the AI Lifecycle:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Design:</strong> Human input in AI system design and development</li>
                    <li><strong>Deployment:</strong> Human review of AI system deployment and configuration</li>
                    <li><strong>Monitoring:</strong> Human monitoring of AI system performance</li>
                    <li><strong>Review:</strong> Human review of AI outputs where clinically indicated</li>
                    <li><strong>Escalation:</strong> Human escalation of safety concerns</li>
                    <li><strong>Improvement:</strong> Human input into AI system improvement processes</li>
                    <li><strong>Governance:</strong> Human oversight of AI governance and accountability</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 mt-4">
                  <p className="font-semibold text-gray-800">Human Oversight Procedures:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Quality assurance reviews</li>
                    <li>Clinical supervision</li>
                    <li>Incident response and escalation</li>
                    <li>Performance monitoring</li>
                    <li>Continuous improvement</li>
                  </ul>
                </div>
                <p>
                  Final clinical decisions remain with Licensed Therapists and other qualified mental health professionals.
                </p>
              </section>

              {/* 17. SERVICE AVAILABILITY */}
              <section id="service-availability" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  17. Service Availability
                </h2>
                <p>
                  We aim to provide continuous availability of AI services but do not guarantee uninterrupted, error-free, or always-available AI services.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">If AI Services Become Temporarily Unavailable:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Some Platform functionality may be reduced</li>
                    <li>AI-generated recommendations and outputs may not be available</li>
                    <li>Therapist-led services and other human-supported services may continue where operationally available</li>
                    <li>You will be notified of significant service disruptions where reasonably practicable</li>
                  </ul>
                </div>
                <p>
                  We make reasonable efforts to restore AI services promptly following disruptions.
                </p>
              </section>

              {/* 18. FUTURE AI */}
              <section id="future-ai" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  18. Future AI
                </h2>
                <p>We reserve the right to introduce new AI technologies and capabilities, including but not limited to:</p>
                <ul className="space-y-1 pl-5 list-disc">
                  <li>New AI Models</li>
                  <li>Voice AI (the AI may support additional voice-related capabilities in the future)</li>
                  <li>Vision AI</li>
                  <li>Multimodal AI</li>
                  <li>Agentic AI</li>
                  <li>Personalized AI</li>
                  <li>Other Emerging AI Technologies</li>
                </ul>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3 mt-4">
                  <p className="font-semibold text-gray-800">Introduction of New AI Technologies Shall Be Subject To:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>This Statement and the Responsible AI Principles set forth herein</li>
                    <li>Applicable governance processes</li>
                    <li>Risk assessment and evaluation</li>
                    <li>Appropriate User notice and consent where required</li>
                    <li>Applicable legal and regulatory requirements</li>
                  </ul>
                </div>
              </section>

              {/* 19. AI GOVERNANCE */}
              <section id="ai-governance" className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  19. AI Governance
                </h2>
                <p>
                  We maintain a comprehensive AI governance framework to ensure responsible AI deployment.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#1a2b3c]">Governance Roles and Responsibilities</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">AI Governance Office</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Overseeing AI governance and compliance</li>
                        <li>Maintaining this Statement and associated policies</li>
                        <li>Conducting AI risk assessments</li>
                        <li>Monitoring AI system performance and safety</li>
                        <li>Coordinating AI incident response</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Clinical Governance Office</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Overseeing clinical aspects of AI deployment</li>
                        <li>Ensuring clinical validation and quality assurance</li>
                        <li>Managing clinical escalation procedures</li>
                        <li>Overseeing therapist oversight of AI outputs</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Privacy &amp; Compliance Office</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Ensuring privacy compliance in AI systems</li>
                        <li>Overseeing data protection in AI processing</li>
                        <li>Managing User rights and consent</li>
                        <li>Ensuring compliance with applicable laws</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Engineering Team</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Developing and maintaining AI systems</li>
                        <li>Implementing technical safeguards</li>
                        <li>Conducting performance monitoring</li>
                        <li>Addressing technical issues and incidents</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Security Team</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Securing AI systems and data</li>
                        <li>Investigating security incidents</li>
                        <li>Conducting security reviews</li>
                        <li>Implementing security safeguards</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Licensed Therapists</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Exercising clinical judgment in AI-supported contexts</li>
                        <li>Reviewing AI outputs where clinically indicated</li>
                        <li>Escalating safety concerns</li>
                        <li>Providing feedback on AI system performance</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Legal Department</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Ensuring legal compliance</li>
                        <li>Managing legal risks</li>
                        <li>Overseeing regulatory engagement</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-gray-50 border border-gray-100 rounded-2xl space-y-2">
                      <h4 className="font-bold text-[#1a2b3c]">Executive Leadership</h4>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Providing strategic oversight</li>
                        <li>Allocating resources for AI governance</li>
                        <li>Approving AI governance policies</li>
                        <li>Ensuring accountability</li>
                      </ul>
                    </div>

                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <h3 className="font-bold text-[#1a2b3c]">Governance Workflows</h3>
                  <ul className="space-y-2 list-none pl-0">
                    <li><strong>Periodic Review:</strong> AI systems and governance frameworks are reviewed periodically to ensure they remain effective and compliant</li>
                    <li><strong>Risk Assessment:</strong> Risk assessments are conducted for new AI deployments and significant changes to existing AI systems</li>
                    <li><strong>Incident Management:</strong> Incident response procedures are maintained for AI-related incidents</li>
                    <li><strong>Continuous Improvement:</strong> Lessons learned from monitoring, incidents, and feedback are incorporated into continuous improvement processes</li>
                  </ul>
                </div>
              </section>

              {/* 20. CHANGES TO THIS STATEMENT */}
              <section id="changes-to-this-statement" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  20. Changes to This Statement
                </h2>
                <p>
                  We may update this Statement from time to time to reflect changes in practices, legal requirements, or operational needs.
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-3">
                  <p className="font-semibold text-gray-800">When material changes are made to this Statement, we will notify you through:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The Platform</li>
                    <li>Email to registered email addresses</li>
                    <li>In-app notifications</li>
                    <li>Any other appropriate means</li>
                  </ul>
                </div>
                <p>
                  The &quot;Effective Date&quot; at the top of this Statement indicates when it was last revised.
                </p>
                <p>
                  Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the updated Statement, subject to any additional consent requirements under applicable law.
                </p>
              </section>

              {/* 21. CONTACT US */}
              <section id="contact-us" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-bold text-[#1a2b3c] border-b pb-3">
                  21. Contact Us
                </h2>
                <p>
                  If you have any questions, concerns, or complaints about this Statement or our AI practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-2xl space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:contact@heyattrangi.com" className="text-orange-600 hover:underline">contact@heyattrangi.com</a></p>
                  <p><strong>Website:</strong> <a href="https://www.heyattrangi.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">https://www.heyattrangi.com/</a></p>
                  <p><strong>Address:</strong> Aatrangi Private Limited, Jai Jinendra Banglow, Hubli-Dharwad Road, KHB Colony, Narayanpura, Dharwad, Karnataka - 580009, India</p>
                </div>
                <p>
                  If you are not satisfied with our response, you have the right to file a complaint with the Data Protection Board of India in accordance with the Digital Personal Data Protection Act, 2023.
                </p>
              </section>

              {/* RELATED DOCUMENTS */}
              <section className="space-y-4 border-t pt-8">
                <h2 className="text-xl font-bold text-[#1a2b3c] uppercase">
                  Related Documents
                </h2>
                <p>This Statement should be read together with:</p>
                <ul className="space-y-2 pl-5 list-disc text-sm">
                  <li>Our <Link href="/privacy-policy" className="text-orange-600 hover:underline">Privacy Policy</Link></li>
                  <li>Our <Link href="/terms-and-conditions" className="text-orange-600 hover:underline">Terms &amp; Conditions</Link></li>
                  <li>Our <Link href="/ai-assistance-consent" className="text-orange-600 hover:underline">AI Assistance Consent form</Link></li>
                  <li>Our General Treatment Consent form</li>
                  <li>Our Teletherapy Consent form</li>
                  <li>Our Crisis Intervention Consent form</li>
                  <li>Our Data Processing Consent form</li>
                  <li>Our Children&apos;s Privacy &amp; Protection Policy</li>
                </ul>
                <p className="text-lg font-bold text-gray-800 pt-4">
                  Thank you for trusting Hey Attrangi with your mental health journey.
                </p>
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
