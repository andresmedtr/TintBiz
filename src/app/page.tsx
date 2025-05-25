"use client";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@mui/material";
import { AmexCardIcon } from "icondex";
// import styles from "./page.module.css";
import { FormattedMessage } from "react-intl";
import QuoteForm from "./components/QuoteForm";

export default function Home() {
  return (
    <div>
      <FormattedMessage id="test" description="esto es el testeo" />
      <div className="">
        <Accordion>
          <AccordionSummary
            expandIcon={<AmexCardIcon height={100} width={120} />}
            aria-controls="panel1-content"
            id="panel1-header">
            <Typography component="span">Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="panel2-content" id="panel2-header">
            <Typography component="span">Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
          <AccordionSummary aria-controls="panel3-content" id="panel3-header">
            <Typography component="span">Accordion Actions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
        <QuoteForm />
      </div>
    </div>
  );
}
