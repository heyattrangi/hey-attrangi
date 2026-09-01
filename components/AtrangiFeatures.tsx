"use client";

import { motion } from "framer-motion";

const ROW_1_FEATURES = [
  {
    id: 1,
    title: "Understand your mood",
    description: "One tap logs how you're feeling. Watch patterns build up over days and weeks.",
    image: "https://res.cloudinary.com/dxoiluua8/image/upload/v1788269366/Understand_your_mood_npjx55.jpg",
  },
  {
    id: 2,
    title: "Quick self check-ins",
    description: "A 3-minute check-in to help you notice what's actually going on with you.",
    image: "https://res.cloudinary.com/dxoiluua8/image/upload/v1788269366/Quick_self_check-ins_itmhlg.jpg",
  },
  {
    id: 3,
    title: "Guided wellness activities",
    description: "Breathing, grounding and journaling, clinically reviewed, at your own pace.",
    image: "https://res.cloudinary.com/dxoiluua8/image/upload/v1788269366/Guided_wellness_activities_x6fqcs.jpg",
  },
];

const ROW_2_FEATURES = [
  {
    id: 4,
    title: "Talk it out, anytime",
    description: "A companion that's there at 2am or between classes — no scheduling needed.",
    image: "https://res.cloudinary.com/dxoiluua8/image/upload/v1788269366/Talk_it_out_anytime_lnld8w.jpg",
    isWide: true,
  },
  {
    id: 5,
    title: "Speak instead of type",
    description: "Talk to Hey Atrangi out loud when typing feels like too much.",
    image: "https://res.cloudinary.com/dxoiluua8/image/upload/v1788269368/Speak_instead_of_type_yvpgjz.jpg",
    isWide: false,
  },
];

export default function AtrangiFeatures() {
  return (
    <section className="relative w-full bg-[#FAF9F6] py-16 sm:py-24 border-b border-gray-100/60 select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center items-center mb-14 sm:mb-18"
        >
          <h2 
            style={{
              width: "129px",
              height: "36px",
              fontFamily: "'Inter', sans-serif",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "30px",
              lineHeight: "36px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "#020618",
              flex: "none",
              order: 0,
              flexGrow: 0
            }}
            className="select-text"
          >
            Features
          </h2>
        </motion.div>

        {/* First Row: 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-6 lg:mb-8 items-stretch">
          {ROW_1_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col justify-between bg-white border border-slate-100/80 hover:border-orange-200/60 rounded-[28px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(255,107,0,0.04)] transition-all duration-300 transform hover:-translate-y-1 select-text min-h-[360px] sm:min-h-[380px]"
            >
              {/* 1. Title at top-left */}
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "32px",
                  color: "#020618",
                }}
                className="w-full max-w-[347.33px] h-[32px] flex items-center text-left"
              >
                {feat.title}
              </h3>

              {/* 2. Centered Illustration */}
              <div className="flex-1 flex items-center justify-center my-4 w-full min-h-[160px] sm:min-h-[180px] select-none">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="max-h-[160px] sm:max-h-[180px] w-auto max-w-full object-contain mx-auto group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* 3. Description at bottom-left */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                }}
                className="w-full max-w-[347.33px] min-h-[36px] flex items-center text-left"
              >
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Second Row: 1 Wide Card + 1 Regular Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {ROW_2_FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
              className={`${
                feat.isWide ? "lg:col-span-2" : "lg:col-span-1"
              } group relative flex flex-col justify-between bg-white border border-slate-100/80 hover:border-orange-200/60 rounded-[28px] p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(255,107,0,0.04)] transition-all duration-300 transform hover:-translate-y-1 select-text min-h-[360px] sm:min-h-[380px]`}
            >
              {/* 1. Title at top-left */}
              <h3 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "32px",
                  color: "#020618",
                }}
                className="w-full max-w-[347.33px] h-[32px] flex items-center text-left"
              >
                {feat.title}
              </h3>

              {/* 2. Centered Illustration */}
              <div className="flex-1 flex items-center justify-center my-4 w-full min-h-[160px] sm:min-h-[180px] select-none">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="max-h-[160px] sm:max-h-[180px] w-auto max-w-full object-contain mx-auto group-hover:scale-103 transition-transform duration-500"
                />
              </div>

              {/* 3. Description at bottom-left */}
              <p 
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                }}
                className="w-full max-w-[347.33px] min-h-[36px] flex items-center text-left"
              >
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
