"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { FormattedMessage } from "react-intl";
import { AchievementProps } from "@/types/globalTypes";

export const AchievementsCountUp = ({
  end,
  label,
  delay,
}: AchievementProps) => {
  const { count, ref } = useCountUp(end, 2000, 0, delay);

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-1000 opacity-100 translate-y-0"
      style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-3xl font-bold text-[#E52323] mb-2">{count}+</div>
      <p className="text-[#333333]">
        <FormattedMessage id={label} />
      </p>
    </div>
  );
};
