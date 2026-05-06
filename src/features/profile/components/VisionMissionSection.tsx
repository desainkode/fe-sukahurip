'use client'

import React from "react";
import { Target, CheckCircle2 } from "lucide-react";

export function VisionMissionSection({ vision, mission }: { vision: string, mission: string[] }) {
  const [displayedVision, setDisplayedVision] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < vision.length) {
        setDisplayedVision(vision.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Optional: Reset after some time to loop
        setTimeout(() => {
          setDisplayedVision("");
          setIsTyping(true);
        }, 15000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [vision]);

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-[#072ac8] p-8 text-white shadow-2xl sm:rounded-[48px] md:p-16 lg:p-20">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#ffc600]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-white/5 blur-[100px]" />
      
      <div className="relative z-10 grid gap-12 md:gap-16 lg:grid-cols-2">
        {/* Vision */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-2 text-[12px] font-bold uppercase tracking-widest text-[#ffc600] backdrop-blur-md sm:text-[13px]">
            <Target size={24} />
            Visi Desa
          </div>
          <blockquote className="font-timeless text-lg font-bold italic leading-relaxed sm:text-2xl md:text-3xl min-h-[160px] md:min-h-[200px] text-white">
            &quot;{displayedVision}&quot;
            {isTyping && <span className="ml-1 inline-block w-1 h-8 md:h-10 bg-[#FFC400] animate-pulse" />}
          </blockquote>
        </div>

        {/* Mission */}
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-6 py-2 text-[12px] font-bold uppercase tracking-widest text-[#FFC400] backdrop-blur-md sm:text-[13px]">
            <CheckCircle2 size={24} />
            Misi Desa
          </div>
          <div className="space-y-4 md:space-y-6">
            {mission.map((item, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ffc600] text-[#072ac8] text-[11px] font-bold">
                  {idx + 1}
                </div>
                <p className="text-[14px] leading-relaxed text-white/70 group-hover:text-white transition-colors md:text-[15px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
