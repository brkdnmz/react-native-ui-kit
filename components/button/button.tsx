import { StyleProp, ViewStyle } from "react-native";
import {
  Gesture,
  GestureDetector,
  Pressable,
  PressableProps,
} from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import {
  createStyleSheet,
  UnistylesVariants,
  useStyles,
} from "react-native-unistyles";
import { ButtonText } from "./button-text";

export type ButtonProps = PressableProps & { style?: StyleProp<ViewStyle> } & {
  title?: string;
  icon?: React.ReactNode;
} & UnistylesVariants<typeof stylesheet>;

export function Button({
  title,
  icon,
  type,
  size,
  rounded,
  ...props
}: ButtonProps) {
  const { styles } = useStyles(stylesheet, {
    type: type ?? "filled",
    size: size ?? "md",
    rounded: rounded ?? "md",
  });
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      {
        scale: scale.value,
      },
    ],
  }));

  const gesture = Gesture.LongPress()
    .enabled(!props.disabled)
    .onBegin(() => {
      opacity.value = 0.6;
      scale.value = 0.9;
      // opacity.value = withTiming(0.6, { duration: 0, easing: Easing.linear });
      // scale.value = withTiming(0.9, { duration: 0, easing: Easing.linear });
    })
    .onFinalize(() => {
      opacity.value = withTiming(1, { duration: 100, easing: Easing.linear });
      scale.value = withTiming(1, { duration: 50, easing: Easing.linear });
    });

  return (
    <GestureDetector gesture={gesture}>
      <Pressable
        {...props}
        style={null}
      >
        {/* Scaling interrupts onPress when pressed very close to the button edges, hence the extra View inside */}
        <Animated.View
          style={[styles.button(!!props.disabled), animatedStyles, props.style]}
        >
          {icon && (
            <ButtonText
              type={type}
              size={size}
              disabled={!!props.disabled}
            >
              {icon}
            </ButtonText>
          )}

          {title && (
            <ButtonText
              type={type}
              size={size}
              disabled={!!props.disabled}
            >
              {title}
            </ButtonText>
          )}
        </Animated.View>
      </Pressable>
    </GestureDetector>
  );
}

const stylesheet = createStyleSheet((theme, rt) => ({
  button: (disabled: boolean) => ({
    justifyContent: "center",
    alignItems: "center",
    borderWidth: rt.hairlineWidth,
    borderColor: "transparent",
    variants: {
      type: {
        filled: {
          backgroundColor: !disabled
            ? theme.colors.primaryContainer
            : theme.colors.surfaceDisabled,
        },
        outlined: {
          backgroundColor: theme.colors.background,
          borderColor: !disabled
            ? theme.colors.primary
            : theme.colors.surfaceDisabled,
        },
        text: {},
      },
      size: {
        xs: {
          paddingHorizontal: 4,
          paddingVertical: 2,
          minHeight: 20,
        },
        sm: {
          paddingHorizontal: 8,
          paddingVertical: 4,
          minHeight: 30,
        },
        md: {
          paddingHorizontal: 10,
          paddingVertical: 5,
          minHeight: 40,
        },
      },
      rounded: Object.entries(theme.roundness).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: {
            borderRadius: value,
          },
        }),
        {} as Record<keyof typeof theme.roundness, { borderRadius: number }>
      ),
    },
  }),
}));
