import { StyleSheet, View } from "react-native";
// import { HeaderLogoutButton } from "../HeaderLogoutButton/HeaderLogoutButton";
export const FotoUser = () => {
  return (
    <>
      <View style={styles.user}></View>
      {/* <HeaderLogoutButton /> */}
    </>
  );
};
const styles = StyleSheet.create({
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
});
