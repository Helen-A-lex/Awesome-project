import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { HomeIndicator } from "../components/HomeIndicator/HomeIndicator";

export const LoginScreens = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(users);
  }, [users]);
  function loginFormSubmitHandle(email, password) {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    console.log(foundUser);
    if (foundUser) {
      Alert.alert(`Ви успішно увійшли в наш додаток`);
      setUsers((prevStateUsers) => [...prevStateUsers, foundUser]);
    } else {
      Alert.alert(`Помилка входу. Перевірте ваші облікові дані.`);
    }
  }
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/background.png")}
          style={styles.imageBackground}
        />
        <LoginForm onSubmit={loginFormSubmitHandle} />
        <Text
          style={styles.text}
          onPress={() => navigation.navigate("Registration")}
        >
          Немає акаунту? Зареєструватися
        </Text>
        <HomeIndicator />
        <StatusBar style="auto" />
      </View>
    </>
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
    marginBottom: 132,
  },
});
