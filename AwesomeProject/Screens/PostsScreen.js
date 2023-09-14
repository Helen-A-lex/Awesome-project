import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FotoUser } from "../components/FotoUser/FotoUser";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text> Posts Screen </Text>
      <View>
        <FotoUser />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
