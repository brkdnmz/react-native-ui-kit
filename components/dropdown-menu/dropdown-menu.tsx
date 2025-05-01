import { View, ViewProps } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export type DropdownMenuProps = ViewProps & {
  isOpen?: boolean;
};

export function DropdownMenu({ isOpen, ...props }: DropdownMenuProps) {
  return (
    <View style={{ position: "relative" }}>
      {isOpen && (
        <Animated.View
          {...props}
          entering={FadeIn.duration(100)}
          exiting={FadeOut.duration(100)}
          style={[{ position: "absolute" }, props.style]}
        />
      )}
    </View>
  );
}
