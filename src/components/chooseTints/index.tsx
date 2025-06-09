import { TintLevel } from "@/constants";
import { useTint } from "@/hooks/useTint";
import { TintProps } from "@/types/globalTypes";

export const ChooseTInts = ({ children }: TintProps) => {
  const { opacity, setOpacity, setTintName, setTintDescription } = useTint();

  const HandelOpacity = (
    opacity: number,
    name: string,
    description: string
  ) => {
    return () => {
      setOpacity(opacity);
      setTintName(name);
      setTintDescription(description);
    };
  };
  return (
    <>
      {TintLevel.map(({ name, description, tone, opacity: itemOpacity }) => {
        const isActive = opacity === itemOpacity;
        return (
          <div
            key={tone}
            className={`flex flex-row flex-shrink-0 justify-between p-3 mb-3 gap-2 rounded-lg border-2 cursor-pointer transition-all duration-300
                        ${
                          isActive
                            ? "border-[#E52323] shadow-lg scale-[1.02]"
                            : "border-gray-200 hover:border-[#E52323] hover:shadow-md hover:scale-[1.02]"
                        }`}
            onClick={HandelOpacity(itemOpacity, name, description)}
          >
            {children({ name, description, tone })}
          </div>
        );
      })}
    </>
  );
};
