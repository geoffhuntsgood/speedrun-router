import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid
} from "@mui/material";
import {
  Fragment,
  type Dispatch,
  type SetStateAction,
  type SyntheticEvent
} from "react";
import type { Route } from "../classes/Route";
import { SRButton } from "./SRButton";
import { SRTypography } from "./SRTypography";

export const SRAccordion = ({
  expanded,
  expand,
  title,
  handleAccordionChange,
  backgroundColor,
  routeSet,
  setTitle
}: {
  expanded: string | false;
  expand: string;
  title: string;
  handleAccordionChange: (
    panel: string
  ) => (_: SyntheticEvent<Element, Event>, newExpanded: boolean) => void;
  backgroundColor: string;
  routeSet: Route[];
  setTitle: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Accordion
      expanded={expanded === expand}
      onChange={handleAccordionChange(expand)}
    >
      <AccordionSummary>
        <SRTypography text={title} backgroundColor={backgroundColor} header />
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={1} maxHeight="300px">
          {routeSet.map((r: Route) => (
            <Fragment key={r.title}>
              <Grid size={8}>
                <SRButton
                  label={r.title}
                  handleClick={setTitle}
                  color={r.headerColor}
                />
              </Grid>
              <Grid size={1}></Grid>
              <Grid size={3}>
                {r.doc && (
                  <SRButton
                    label={r.doc.includes("youtube") ? "vid" : "doc"}
                    doc={r.doc}
                    color={r.headerColor}
                  />
                )}
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
