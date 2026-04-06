import { Heart, Globe, BookOpen } from "lucide-react";
import { tr, type LangCode } from "@/lib/translations";

interface SiteFooterProps {
  lang: LangCode;
}

const SiteFooter = ({ lang }: SiteFooterProps) => {
  return (
    <footer className="bg-foreground text-background py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              {tr("heroTitle", lang)}
            </h3>
            <p className="text-sm opacity-70 font-body">{tr("learnAboutRights", lang)}</p>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              {tr("forParentsTeachers", lang)}
            </h4>
            <ul className="space-y-2 text-sm opacity-70 font-body">
              <li>{tr("teachingGuides", lang)}</li>
              <li>{tr("classroomActivities", lang)}</li>
              <li>{tr("additionalResources", lang)}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold mb-3 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              {tr("helpfulLinks", lang)}
            </h4>
            <ul className="space-y-2 text-sm opacity-70 font-body">
              <li>UNICEF</li>
              <li>{tr("conventionRightsChild", lang)}</li>
              <li>{tr("universalDeclaration", lang)}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center text-sm opacity-60 font-body">
          <p>{tr("madeWithLove", lang)}</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
