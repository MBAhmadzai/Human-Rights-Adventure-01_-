import { useState, useRef } from "react";
import HeroSection from "@/components/HeroSection";
import RightsSection from "@/components/RightsSection";
import InteractiveStory from "@/components/InteractiveStory";
import RealStories from "@/components/RealStories";
import CallToAction from "@/components/CallToAction";
import SiteFooter from "@/components/SiteFooter";
import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import { getLangDir, type LangCode } from "@/lib/translations";

const Index = () => {
  const [lang, setLang] = useState<LangCode>("en");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div dir={getLangDir(lang)}>
      <Navbar lang={lang} />
      <LanguageToggle lang={lang} onSetLang={setLang} />
      <HeroSection lang={lang} onStart={handleStart} />
      <div ref={contentRef}>
        <RightsSection lang={lang} />
      </div>
      <InteractiveStory lang={lang} />
      <RealStories lang={lang} />
      <CallToAction lang={lang} />
      <SiteFooter lang={lang} />
    </div>
  );
};

export default Index;
