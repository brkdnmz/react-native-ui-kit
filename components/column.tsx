import { StyleSheet, View, ViewProps } from "react-native";

export function Column(props: ViewProps) {
  return (
    <View
      {...props}
      style={[styles.column, props.style]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "column",
  },
});
