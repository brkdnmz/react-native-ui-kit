import { Text as RNText, TextProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Text(props: TextProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <RNText
      {...props}
      style={[styles.text, props.style]}
    />
  );
}

const stylesheet = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.onBackground,
  },
}));
