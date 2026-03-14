"use client";

import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import QuickStatsSection from "@/components/home/QuickStatsSection";
import JourneysSection from "@/components/home/JourneysSection";
import FeaturedWorkSection from "@/components/home/FeaturedWorkSection";
import AboutUsSection from "@/components/home/AboutUsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-hidden -mt-9" suppressHydrationWarning={true}>
      <HeroSection />
      <WhatWeDoSection />
      <QuickStatsSection />
      <JourneysSection />
      <FeaturedWorkSection />
      <AboutUsSection />
    </div>
  );
}