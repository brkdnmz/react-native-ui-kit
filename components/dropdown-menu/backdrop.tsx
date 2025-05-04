import { PropsWithChildren } from "react";
import { Pressable, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export type BackdropProps = {
  onPress?: () => void;
};

export function Backdrop({ onPress }: BackdropProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        zIndex: -1, // It works without this but wanted to set anyway
      }}
    >
      <GestureBlocker>
        <View style={{ flex: 1 }} />
      </GestureBlocker>
    </Pressable>
  );
}

// yep, you read it right
// its sole purpose is to block the gesture detectors behind the transparent backdrop
// https://github.com/software-mansion/react-native-gesture-handler/issues/1178
// I encountered this stupid issue on Android only
function GestureBlocker({ children }: PropsWithChildren) {
  return <GestureDetector gesture={Gesture.Pan()}>{children}</GestureDetector>;
}
