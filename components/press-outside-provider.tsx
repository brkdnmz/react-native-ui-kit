import { PropsWithChildren } from "react";
import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export function PressOutsideProvider({ children }: PropsWithChildren) {
  const gesture = Gesture.Pan().onFinalize(({ absoluteX, absoluteY, x, y }) => {
    console.log("onFinalize", absoluteX, absoluteY, x, y);
  });

  return (
    <GestureDetector gesture={gesture}>
      <View style={{ flex: 1 }}>{children}</View>
    </GestureDetector>
  );
}
