import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ProfileScreen } from "../../Screens/ProfileScreen";
import { PostsScreen } from "../../Screens/PostsScreen";
import { CreatePostsScreen } from "../../Screens/CreatePostsScreen";

import { Feather } from "@expo/vector-icons";
const Tabs = createBottomTabNavigator();

export const BottomTab = () => {
  const navigation = useNavigation();
  return (
    <>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "PostsScreen") {
              iconName = focused ? "grid" : "grid";
            } else if (route.name === "CreatePostsScreen") {
              iconName = "plus-circle";
            } else if (route.name === "ProfileScreen") {
              iconName = "user";
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen name="PostsScreen" component={PostsScreen} />
        <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tabs.Navigator>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 39,
          right: 20,
          backgroundColor: "tomato",
          borderRadius: 30,
          padding: 15,
        }}
        onPress={() => navigation.navigate("CreatePostsScreen")}
      >
        <Feather name="plus" size={30} color="#FFF" />
      </TouchableOpacity>
    </>
  );
};
