import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostsScreen } from "./PostsScreen";

export const Home = () => {
  return (
    <View>
      <PostsScreen />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default Home;
