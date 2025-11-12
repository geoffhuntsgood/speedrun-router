import { useKeyPress } from "@custom-react-hooks/use-key-press";
import { RotateLeft } from "@mui/icons-material";
import { Grid, IconButton, ThemeProvider, Tooltip } from "@mui/material";
import { useEffect, useState, type SyntheticEvent } from "react";
import type { Route } from "./classes/Route";
import { SRAccordion } from "./components/SRAccordion";
import { SRButton } from "./components/SRButton";
import { SRTypography } from "./components/SRTypography";
import { SRUploadDialog } from "./components/SRUploadDialog";
import {
  allDK64CERoutes,
  allDK64Routes,
  allDKBCERoutes,
  allDKBRoutes,
  allYRRoutes
} from "./lists";
import { getRouteByTitle } from "./utils/api";
import { titleColors } from "./utils/colors";
import { theme } from "./utils/theme";

const App = () => {
  const [title, setTitle] = useState("");
  const [route, setRoute] = useState<Route | null>(null);
  const [expanded, setExpanded] = useState<string | false>(false);
  const [collectibleImg, setCollectibleImg] = useState("");
  const [customOpen, setCustomOpen] = useState(false);
  const [currHeaderIndex, setCurrHeaderIndex] = useState(0);

  let headers: string[] = [];

  const leftPressed = useKeyPress("ArrowLeft");
  const rightPressed = useKeyPress("ArrowRight");

  const handleAccordionChange =
    (panel: string) => (_: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const reset = () => {
    headers = [];
    setTitle("");
    setCurrHeaderIndex(0);
  };

  const getRow = (row: string, index: number, monochrome: boolean) => {
    const divider = row.indexOf(" ");
    const color = monochrome ? "#d3d3d3" : row.substring(0, divider);
    let text = monochrome ? row : row.substring(divider + 1);
    const isHeader = text.startsWith("*");

    if (isHeader) {
      text = text.substring(1);
      headers.push(`${index}`);
    }

    let count = 0;
    text.match(/\[(.*?)\]/g)?.forEach((m: string) => {
      const withoutBrackets = m.substring(1, m.length - 1);
      if (!isNaN(Number(withoutBrackets))) {
        count = Number(withoutBrackets);
      }
    });

    const styles = {
      count: {
        right: "5px",
        paddingLeft: "3px",
        borderRadius: "3px",
        backgroundColor: "rgba(255, 255, 255, 0.5)"
      },
      img: {
        margin: "2px 3px -4px 0"
      }
    };

    return (
      <Grid size={12} key={index}>
        <SRTypography
          id={`${index}`}
          header={isHeader}
          text={text}
          backgroundColor={color}
          childJsx={
            <span style={{ position: "absolute", ...styles.count }}>
              {count !== 0 && (
                <>
                  <span>{count}</span>
                  <img
                    src={collectibleImg || undefined}
                    height="25"
                    style={styles.img}
                  />
                </>
              )}
            </span>
          }
        />
      </Grid>
    );
  };

  useEffect(() => {
    if (expanded !== false) {
      setRoute(getRouteByTitle(expanded, title));
    }
  }, [expanded, title]);

  useEffect(() => {
    if (expanded === "dk64" || expanded === "dk64ce") {
      setCollectibleImg("public/img/gb.png");
    } else if (expanded === "dkb" || expanded === "dkbce") {
      setCollectibleImg("public/img/3nan.png");
    } else if (expanded === "yr") {
      setCollectibleImg("public/img/pagie.png");
    }
  }, [expanded]);

  useEffect(() => {
    if (leftPressed && currHeaderIndex > 0) {
      setCurrHeaderIndex(currHeaderIndex - 1);
    }
    if (rightPressed && currHeaderIndex < headers.length) {
      setCurrHeaderIndex(currHeaderIndex + 1);
    }
  }, [leftPressed, rightPressed]);

  useEffect(() => {
    document.getElementById(headers[currHeaderIndex])?.scrollIntoView();
  }, [currHeaderIndex]);

  return (
    <ThemeProvider theme={theme}>
      {!title && (
        <>
          <SRTypography header headerColor="white" text="Speedrun Doc Router" />
          <div style={{ width: "100%", display: "flex" }}>
            <SRButton
              label="Import custom doc"
              color="white"
              sx={{ width: "50%", margin: "10px auto 0 auto" }}
              handleClick={() => setCustomOpen(true)}
            />
          </div>
          <SRUploadDialog
            open={customOpen}
            setOpen={setCustomOpen}
            setTitle={setTitle}
            setRoute={setRoute}
          />
          <SRAccordion
            expanded={expanded}
            expand="dk64"
            title="Donkey Kong 64"
            handleAccordionChange={handleAccordionChange}
            backgroundColor={titleColors.dk64}
            routeSet={allDK64Routes}
            setTitle={setTitle}
          />
          <SRAccordion
            expanded={expanded}
            expand="dk64ce"
            title="Donkey Kong 64 Category Extensions"
            handleAccordionChange={handleAccordionChange}
            backgroundColor={titleColors.dk64}
            routeSet={allDK64CERoutes}
            setTitle={setTitle}
          />
          <SRAccordion
            expanded={expanded}
            expand="dkb"
            title="Donkey Kong Bananza"
            handleAccordionChange={handleAccordionChange}
            backgroundColor={titleColors.dkb}
            routeSet={allDKBRoutes}
            setTitle={setTitle}
          />
          <SRAccordion
            expanded={expanded}
            expand="dkbce"
            title="Donkey Kong Bananza Category Extensions"
            handleAccordionChange={handleAccordionChange}
            backgroundColor={titleColors.dkb}
            routeSet={allDKBCERoutes}
            setTitle={setTitle}
          />
          <SRAccordion
            expanded={expanded}
            expand="yr"
            title="Yooka-Replaylee"
            handleAccordionChange={handleAccordionChange}
            backgroundColor={titleColors.yr}
            routeSet={allYRRoutes}
            setTitle={setTitle}
          />
        </>
      )}
      {title && route && (
        <>
          <SRTypography
            header
            headerColor={route.headerColor}
            text={route.title}
            childJsx={
              <Tooltip title="Go Back">
                <IconButton
                  sx={{ backgroundColor: route.headerColor }}
                  onClick={reset}
                >
                  <RotateLeft />
                </IconButton>
              </Tooltip>
            }
          />
          <Grid container spacing={0}>
            {route.steps
              .filter((t) => t && t.trim().length !== 0)
              .map((t: string, index: number) => {
                return getRow(t, index, route.monochrome || false);
              })}
          </Grid>
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
