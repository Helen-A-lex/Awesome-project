import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderLogoutButton } from "./components/HeaderLogoutButton/HeaderLogoutButton";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { RegistrationScreens } from "./Screens/RegistrationScreen";
import { LoginScreens } from "./Screens/LoginScreen";
import { Home } from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreens}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreens}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Публікації",
            headerStyle: {
              backgroundColor: "#FFF",

              shadowColor: "#000",
              shadowOpacity: 0.3,
              shadowOffset: {
                width: 0,
                height: 0.5,
              },
              borderBottomWidth: 1,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontWeight: 500,
              fontSize: 17,
              lineHeight: 22,
            },
            headerTitleAlign: "center",
            headerTitleContainerStyle: {
              padding: 10,
            },
            headerRight: () => (
              <HeaderLogoutButton onPress={() => alert("User logout!")} />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
