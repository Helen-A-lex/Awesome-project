import React, { useState } from "react";
import uuid from "react-native-uuid";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RegistrationForm } from "../components/RegistrationForm/RegistrationForm";
import { HomeIndicator } from "../components/HomeIndicator/HomeIndicator";
import { FotoUser } from "../components/FotoUser/FotoUser";

export const RegistrationScreens = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  function formSubmitHandle(login, email, password) {
    const user = {
      id: uuid.v4(),
      login: login,
      email: email,
      password: password,
    };
    console.log(user);
    console.log(users);
    setUsers((prevStateUsers) => {
      const updatedUsers = [user, ...prevStateUsers];

      return updatedUsers;
    });
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.png")}
        style={styles.imageBackground}
      />
      <FotoUser />
      <RegistrationForm onSubmit={formSubmitHandle} />
      <Text style={styles.text} onPress={() => navigation.navigate("Login")}>
        Вже є акаунт? Увійти
      </Text>
      <HomeIndicator />
      <StatusBar style="auto" />
    </View>
  );
};

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
  text: {
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 66,
  },
});
