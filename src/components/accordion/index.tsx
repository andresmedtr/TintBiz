import { TintLevel } from "@/constants";
import { useTint } from "@/hooks/useTint";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FormattedMessage } from "react-intl";

export const TintAccordion = () => {
  const { opacity, setOpacity, setTintName } = useTint();

  const HandelOpacity = (opacity: number, name: string) => {
    return () => {
      setOpacity(opacity);
      setTintName(name);
    };
  };
  return (
    <>
      <Accordion className="border-b-1 border-gray-200">
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="cursor-pointer transition-all group"
        >
          <p className="text-[#111111] font-semibold transition-all group-hover:underline group-hover:decoration-[#E52323]">
            <FormattedMessage id="block.model3d.square.accordion" />
          </p>
        </AccordionSummary>
        <AccordionDetails>
          {TintLevel.map(
            ({ name, description, tone, opacity: itemOpacity }) => {
              const isActive = opacity === itemOpacity;
              return (
                <div
                  key={tone}
                  className={`flex flex-row justify-between p-3 mb-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                ${
                  isActive
                    ? "border-[#E52323] shadow-lg scale-[1.02]"
                    : "border-gray-200 hover:border-[#E52323] hover:shadow-md hover:scale-[1.02]"
                }`}
                  onClick={HandelOpacity(itemOpacity, name)}
                >
                  <div className="flex flex-col">
                    <p className="font-semibold text-[#111111]">
                      <FormattedMessage id={name} />
                    </p>
                    <p className="text-sm text-[#333333]">
                      <FormattedMessage id={description} />
                    </p>
                  </div>
                  <div
                    className="w-[50px] h-[50px] border border-gray-300 rounded"
                    style={{ backgroundColor: tone }}
                  ></div>
                </div>
              );
            }
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
