import { UnistylesRegistry } from "react-native-unistyles";
import { THEMES } from "./themes";

type Themes = typeof THEMES;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends Themes {}
}

UnistylesRegistry.addThemes({
  light: THEMES.light,
  dark: THEMES.dark,
}).addConfig({
  initialTheme: "light",
});
