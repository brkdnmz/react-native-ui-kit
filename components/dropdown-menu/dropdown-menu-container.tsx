import { ScrollView, ViewProps } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { DEFAULT_ANIMATION_DURATION } from "./constants";

export function DropdownMenuContainer(props: ViewProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Animated.View
      {...props}
      entering={FadeIn.duration(DEFAULT_ANIMATION_DURATION)}
      exiting={FadeOut.duration(DEFAULT_ANIMATION_DURATION)}
      style={[styles.container, props.style]}
    >
      <ScrollView>{props.children}</ScrollView>
    </Animated.View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    backgroundColor: theme.colors.surfaceContainer,
  },
}));
