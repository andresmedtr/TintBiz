import { TintLevel } from "@/constants";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { FormattedMessage } from "react-intl";

export const TintAccordion = () => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <FormattedMessage id="block.model3d.square.accordion" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {TintLevel.map(({ name, description, tone }) => {
            return (
              <div key={tone} className="flex flex-row justify-between">
                <div className="flex flex-col">
                  <FormattedMessage id={name} />
                  <FormattedMessage id={description} />
                </div>
                <div className="w-[50px] h-[50px]" style={{ backgroundColor: tone }}></div>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>
    </>
  );
};
