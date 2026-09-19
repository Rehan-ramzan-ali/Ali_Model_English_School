import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen py-12 text-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* ================= 1. FOUNDER SECTION ================= */}
        <section className="text-center space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Late Shabbir Hussain
          </h1>
          <p className="text-xs font-bold text-[#0F5A37] tracking-widest uppercase">
            FOUNDER, ALI MODEL ENGLISH SCHOOL
          </p>

          <blockquote className="italic text-lg sm:text-xl font-medium text-slate-700 pt-4 leading-relaxed">
            "My aim in establishing Ali Model English School has been to raise a generation of students equipped for a bright future — strong in character and conviction, just in their morals, and persistent in their work."
          </blockquote>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-4 text-left pt-6 border-t border-gray-100">
            <p>
              For decades, Ali Model English School has served families across the city with a single commitment: that quality education should be accessible to every child, not a privilege for a few.
            </p>
            <p>
              When our late founder, <strong>Shabbir Hussain</strong>, envisioned this institution, he saw how a good education could change the course of a child’s life. His unwavering conviction became the bedrock of Ali Model English School. Today, thousands of students step through our doors to learn, grow, and standards are set so that no child is ever written off as a failure.
            </p>
            <p>
              From the very beginning, our school has stood on three qualities: <strong>Character</strong> — the strength to know who you are and what you believe; <strong>Integrity</strong> — the fairness and honesty to deal justly with others; and <strong>Perseverance</strong> — the patience to meet difficulty with steady, unglamorous work.
            </p>
          </div>
        </section>

        {/* ================= 2. HEAD PRINCIPAL SECTION ================= */}
        <section className="bg-gray-50 rounded-2xl p-6 sm:p-10 border border-gray-100 space-y-4">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Amna Batool
            </h2>
            <p className="text-xs font-bold text-[#0F5A37] tracking-widest uppercase mt-1">
              HEAD PRINCIPAL, ALI MODEL ENGLISH SCHOOL
            </p>
          </div>

          <blockquote className="italic text-slate-700 text-sm sm:text-base font-medium">
            "I welcome our students, parents, and the wider Ali Model English School family. We are committed to shaping generations of students with quality learning and lifelong values."
          </blockquote>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 pt-2">
            <p>
              Education is never limited to academic learning alone. It is a process of cultivating potential, strengthening character, and preparing young minds for life. In a time of rapid change, our aim is to prepare students not just for examinations, but for life.
            </p>
            <p>
              It is a partnership between students, parents, and educators. Together we create an environment where young minds can think fearlessly, explore endlessly, and never stop believing in themselves.
            </p>
          </div>
        </section>

        {/* ================= 3. OUR VALUES SECTION ================= */}
        <section className="space-y-8 text-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Values</h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              An educational system that would stimulate the mind and encompass all values of life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0F5A37] flex items-center justify-center font-bold text-xl">
                💡
              </div>
              <h3 className="font-bold text-slate-900 text-lg">CURIOSITY & LEARNING</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We nurture the habit of questioning, exploring, and thinking independently — a genuine, lifelong love of learning that reaches beyond memorisation.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0F5A37] flex items-center justify-center font-bold text-xl">
                ⚖️
              </div>
              <h3 className="font-bold text-slate-900 text-lg">RESPONSIBILITY & INTEGRITY</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We build accountability and honesty. Students learn to take ownership of their actions, their learning, and their contribution to society.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#0F5A37] flex items-center justify-center font-bold text-xl">
                🎓
              </div>
              <h3 className="font-bold text-slate-900 text-lg">CONFIDENCE & RESILIENCE</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We develop self-assured, adaptable young people who meet challenges with courage and keep improving through effort and perseverance.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 4. VISION AND MISSION ================= */}
        <section className="space-y-8">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">Vision And Mission</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-3">
              <h3 className="text-xs font-bold text-[#0F5A37] tracking-widest uppercase">VISION</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Educational opportunity for all — fostering a culture in which every student is empowered to succeed in character, and contribute responsibly to society.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 space-y-3">
              <h3 className="text-xs font-bold text-[#0F5A37] tracking-widest uppercase">MISSION</h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Ali Model English School advances educational opportunity through enduring pursuit of excellence in both learning and character. We provide a disciplined, supportive environment where students build strong academic foundations and grow into active, responsible citizens.
              </p>
            </div>
          </div>
        </section>

        {/* ================= 5. EMPOWERING EVERY CHILD ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-6 border-t border-gray-100">
          <div className="rounded-2xl overflow-hidden border border-gray-200 h-72 sm:h-80 bg-gray-100">
            <img 
              src="public/Yesterday, students from our Matric class went on a study trip to the National Museum of Pakista (1).jpg" 
              alt="Students of Ali Model English School" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              Empowering Every Child To Pursue Excellence
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Ali Model English School, we believe every child deserves the opportunity to learn, grow, and succeed — regardless of their background.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We do not define excellence by academic achievement alone; we define it by the character, confidence, and sense of purpose students carry into the future. Every child has unique talents; our task is to help each one become the best version of themselves through strong academic foundations and a supportive environment.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;