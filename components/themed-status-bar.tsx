import { StatusBar } from "expo-status-bar";

export function ThemedStatusBar() {
  // Turns out no need to set background color manually
  // translucent={true} (by default) is enough
  // (by the way, this is doable with React Native's own StatusBar API)

  // and also, it is way smoother this way
  // you'll see what I mean after uncommenting that below line

  // not setting background color results in a bit different behavior though, which I actually like

  // RNStatusBar.
  return (
    <StatusBar
    // backgroundColor={theme.colors.background}
    />
  );
}
