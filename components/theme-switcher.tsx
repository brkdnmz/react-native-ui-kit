import { Feather } from "@expo/vector-icons";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { Button } from "./button/button";

export function ThemeSwitcher() {
  // For rerendering after theme change
  useStyles();

  const themeName = UnistylesRuntime.themeName;

  const onSwitchTheme = () => {
    UnistylesRuntime.setTheme(themeName === "light" ? "dark" : "light");
  };

  return (
    <Button
      onPress={onSwitchTheme}
      icon={
        themeName === "light" ? (
          <Feather
            name="moon"
            size={20}
          />
        ) : (
          <Feather
            name="sun"
            size={20}
          />
        )
      }
      type="filled"
      rounded="full"
      style={{ aspectRatio: 1, borderRadius: 100 }}
    ></Button>
  );
}
