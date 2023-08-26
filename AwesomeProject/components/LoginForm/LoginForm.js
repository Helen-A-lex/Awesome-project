import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

import Button from "../Button/Button";

export const LoginForm = ({ onSubmit }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onLogin = () => {
    Alert.alert(`Вітаємо в нашому додатку!`);
    onSubmit(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.wrap, styles.shadowProp]}>
        <Text style={styles.title}>Увійти</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android" ? 0 : undefined}
        >
          <TextInput
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
            type="email"
            name="email"
          />
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Пароль"
            type="password"
            name="password"
          />

          <Button onPress={onLogin} title={"Увійти"} />
          <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    height: 489,
    flexShrink: 0,
    backgroundColor: "FFFFFF",
    borderRadius: 25,

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "500",
    letterSpacing: 0.3,
    marginBottom: 33,
    marginTop: 0,
  },
  input: {
    width: 343,
    height: 50,
    flexShrink: 0,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    color: "#BDBDBD",
    fontFamily: "Roboto",
    fontSize: 16,
    borderWidth: 1,
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
