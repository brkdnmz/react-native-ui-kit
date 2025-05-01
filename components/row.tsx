import { StyleSheet, View, ViewProps } from "react-native";

export function Row(props: ViewProps) {
  return (
    <View
      {...props}
      style={[styles.row, props.style]}
    >
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
});
