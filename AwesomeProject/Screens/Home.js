import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostsScreen } from "././PostsScreen";
import { BottomTab } from "../components/BottomTab/BottomTab";
import { HomeIndicator } from "../components/HomeIndicator/HomeIndicator";

export const Home = () => {
  return (
    <View>
      <PostsScreen />
      <BottomTab />
      <HomeIndicator />
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
