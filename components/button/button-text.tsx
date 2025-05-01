import { Text, TextProps } from "react-native";
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";

type ButtonTextProps = TextProps &
  UnistylesVariants<typeof stylesheet> & {
    disabled?: boolean;
  };

export function ButtonText({
  type,
  size,
  disabled,
  ...props
}: ButtonTextProps) {
  const { styles } = useStyles(stylesheet, {
    type: type ?? "filled",
    size: size ?? "md",
  });

  return (
    <Text
      {...props}
      style={[styles.buttonText(!!disabled), props.style]}
    />
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  buttonText: (disabled: boolean) => ({
    textAlign: "center",
    variants: {
      type: {
        filled: {
          color: !disabled
            ? theme.colors.onPrimaryContainer
            : theme.colors.onSurfaceDisabled,
        },
        outlined: {
          color: !disabled
            ? theme.colors.primary
            : theme.colors.onSurfaceDisabled,
        },
        text: {
          color: !disabled
            ? theme.colors.primary
            : theme.colors.onSurfaceDisabled,
        },
      },
      size: {
        xs: {
          fontSize: 12,
        },
        sm: {
          fontSize: 14,
        },
        md: {
          fontSize: 16,
        },
      },
    },
  }),
}));
