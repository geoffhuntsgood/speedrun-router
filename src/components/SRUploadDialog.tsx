import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useCallback, useState, type Dispatch, type SetStateAction } from "react";
import { useDropzone } from "react-dropzone";
import { Route } from "../classes/Route";
import { SRTypography } from "./SRTypography";

export const SRUploadDialog = ({
  open,
  setOpen,
  setTitle,
  setRoute
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setRoute: Dispatch<SetStateAction<Route | null>>;
}) => {
  const onDrop = useCallback((accepetedFiles: File[]) => {
    const file = accepetedFiles[0];
    const extension = file.name.match(/\.[0-9a-z]+$/i);

    if (extension && extension[0] === ".txt") {
      const reader = new FileReader();
      reader.onabort = () => console.log("File reading was aborted");
      reader.onerror = () => console.log("File reading has failed");
      reader.onload = () => {
        const res = String(reader.result);
        const divider = res.indexOf("\n");
        const title = res.substring(0, divider);
        setTitle(title);
        setRoute(
          new Route(
            title,
            "white",
            res.substring(divider).split("\n"),
            undefined,
            true
          )
        );
        setOpen(false);
      };

      if (file) {
        reader.readAsText(file);
      }
    } else {
      setInputText("Incorrect file type, click or drag to try again");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultText = "Drag 'n' drop a file here, or click to select a file";
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const [inputText, setInputText] = useState(defaultText);

  return (
    <Dialog open={open} onClose={() => {
      setOpen(false);
      setInputText(defaultText);
    }}>
      <DialogTitle>
        <div>Upload a Custom Route</div>
        <ul>
          <li>.txt files only for now!</li>
          <li>The first line of the file is the title</li>
          <li>For headers to appear, prefix header lines with *</li>
          <li>For tracking collectables, the number must be in [ ]</li>
        </ul>
      </DialogTitle>
      <DialogContent>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <SRTypography
            header
            headerColor="white"
            text={inputText}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
