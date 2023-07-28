import { StyleSheet, View } from "react-native";

export const HomeIndicator = () => {
  return (
    <>
      <View style={styles.indicator}></View>
    </>
  );
};
const styles = StyleSheet.create({
  indicator: {
    width: 134,
    height: 5,
    flexShrink: 0,
    borderRadius: 100,
    backgroundColor: "#212121",
    marginLeft: 140,
    marginRight: 140,
    marginBottom: 7,
  },
});
