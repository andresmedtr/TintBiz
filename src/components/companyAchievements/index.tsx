import { achievementStats } from "@/constants";
import { AchievementsCountUp } from "../achievementsCountUp";

export const CompanyAchievements = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 ">
      {achievementStats.map((stat) => (
        <AchievementsCountUp
          end={stat.end}
          label={stat.label}
          delay={600}
          key={stat.label}
        />
      ))}
    </div>
  );
};
