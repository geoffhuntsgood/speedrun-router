import type { Route } from "../../classes/Route";
import { dk64Colors, titleColors } from "../../utils/colors";

export const dk64Any1Kong2015: Route = {
  title: "Any% 1-Kong (2015)",
  headerColor: titleColors.dk64,
  doc: "https://pastebin.com/ezTY6uAx",
  steps: [
    `${dk64Colors.header} (Double Reset on N64 with deleting file between 1st & 2nd reset)`,
    `${dk64Colors.header} Story Skip, Enter File`,
    `${dk64Colors.dk} Cranky's`,
    `${dk64Colors.dk} O Barrel & B Barrel (Optional: Reset after Barrel Barrel. Saves ~30s, but makes ISG harder)`,
    `${dk64Colors.dk} Wet Escape`,
    `${dk64Colors.dk} Manual Save & Reset`,
    `${dk64Colors.header} ISG, Story Skip, Enter File`,
    `${dk64Colors.dk} TBS (Count Tag Barrel Entries) & TGHE`,
    `${dk64Colors.dk} Helm Lobby Kick, B-Locker Text Skip`,
    `${dk64Colors.dk} DK Helm`,
    `${dk64Colors.dk} Dance Skip Key 8`,
    `${dk64Colors.dk} Manual save if needed (See 2015 MMM Doc if you're not sure what this means)`,
    `${dk64Colors.header} Pause Quit`,
    `${dk64Colors.header} Get back to Main Menu ASAP`,
    `${dk64Colors.header} Factory Boss, Pause Exit`,
    `${dk64Colors.header} Hope for no LegShakes, Night Cycles or Rain Cycles`,
    `${dk64Colors.header} NORMAL 1-KONG STUFF`,
    `${dk64Colors.dk} Dry Escape, W4, DKFE`,
    `${dk64Colors.dk} TAG W1!!!!!!!!!!!!!!!!`,
    `${dk64Colors.dk} DK Hatch Skip, Enter Storage T&S`,
    `${dk64Colors.dk} Enter MJ, Key 3`,
    `${dk64Colors.dk} W1, Exit Factory`,
    `${dk64Colors.dk} Exit Factory Lobby, Kick down to K-Lumsy`,
    `${dk64Colors.dk} Watch Japes open CS, turn in Keys 8 & 3`,
    `${dk64Colors.dk} Swim to K Rool's Ship`,
    `${dk64Colors.header} K. Rool`
  ]
};
