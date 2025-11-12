import { Button } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

export const SRButton = ({
  label,
  handleClick,
  doc,
  color,
  sx
}: {
  label: string;
  handleClick?: Dispatch<SetStateAction<string>>;
  doc?: string;
  color?: string;
  sx?: object;
}) => (
  <>
    {doc && (
      <Button
        variant="text"
        href={doc}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: color }}
      >
        {label}
      </Button>
    )}
    {!doc && handleClick && (
      <Button
        variant="text"
        onClick={() => handleClick(label)}
        sx={{ ...sx, color: color }}
      >
        {label}
      </Button>
    )}
  </>
);
