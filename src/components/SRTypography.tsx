import { Typography } from "@mui/material";
import type { JSX } from "react";

export const SRTypography = ({
  text,
  id,
  backgroundColor,
  header,
  headerColor,
  childJsx
}: {
  text: string;
  id?: string;
  backgroundColor?: string;
  header?: boolean;
  headerColor?: string;
  childJsx?: JSX.Element;
}) => (
  <Typography
    id={id}
    variant={header ? "h1" : "h2"}
    textAlign="center"
    color={header ? headerColor : "textPrimary"}
    borderBottom="1px solid black"
    bgcolor={backgroundColor}
    position="relative"
  >
    {text}
    {childJsx}
  </Typography>
);
