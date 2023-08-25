import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { RegistrationScreens } from "./Screens/RegistrationScreen/RegistrationScreen";

// import { LoginScreens } from "./Screens/LoginScreen/LoginScreen";

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
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.imageBackground}
      />
      <RegistrationScreens />
      {/* <LoginScreens /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingLeft: 16,
    // paddingRight: 16,
  },
  imageBackground: {
    // width: "100%",
    // height: "100%",

    // alignSelf: "stretch",
    flex: 1,
    resizeMode: "cover",
    // alignSelf: "stretch",
    justifyContent: "center",
  },
});
