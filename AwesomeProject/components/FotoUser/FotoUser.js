import { StyleSheet, View } from "react-native";
import { FotoUserButtonClose } from "../FotoUserButtonClose/FotoUserButtonClose";
export const FotoUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.user}></View>
      <FotoUserButtonClose style={styles.button} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  user: {
    width: 120,
    height: 120,
    flexShrink: 0,
    borderRadius: 16,
    backgroundColor: "grey",
    position: "absolute",
    top: -60,
    left: 140,
  },
  button: {
    position: "absolute",
    top: 30,
    right: 140,
  },
});
