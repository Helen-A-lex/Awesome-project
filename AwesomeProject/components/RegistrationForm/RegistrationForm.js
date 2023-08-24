import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback, // імпорт компонента обгортки
  Keyboard, // імпорт компонента клавіатури
  KeyboardAvoidingView,
  Platform,
} from "react-native";
// import { Formik } from "formik";
import Button from "../Button/Button";

// export const RegistrationForm = (props) => (
//   <Formik
//     initialValues={{ login: "", email: "", password: "" }}
//     onSubmit={(values) => console.log(values)}
//   >
//     {({ handleChange, handleBlur, handleSubmit, values }) => (
//       <View style={[styles.wrap, styles.shadowProp]}>
//         <Text style={styles.title}>Рeєстрація</Text>

//         <TextInput
//           style={styles.input}
//           onChangeText={handleChange("login")}
//           onBlur={handleBlur("login")}
//           value={values.login}
//           placeholder="Логін"
//         />

//         <TextInput
//           style={styles.input}
//           onChangeText={handleChange("email")}
//           onBlur={handleBlur("email")}
//           value={values.email}
//           placeholder="Адреса електронної пошти"
//         />
//         <TextInput
//           style={styles.input}
//           onChangeText={handleChange("password")}
//           onBlur={handleBlur("pasword")}
//           value={values.password}
//           placeholder="Пароль"
//         />

//         <Button onPress={handleSubmit} />
//         <Text style={styles.text}>Вже є акаунт? Увійти</Text>
//       </View>
//     )}
//   </Formik>
// );

export const RegistrationForm = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password} +${email}`);
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.wrap, styles.shadowProp]}>
        <Text style={styles.title}>Рeєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "android" ? 0 : undefined}
        >
          <TextInput
            value={login}
            style={styles.input}
            onChangeText={setLogin}
            placeholder="Логін"
          />

          <TextInput
            value={email}
            style={styles.input}
            onChangeText={setEmail}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            value={password}
            style={styles.input}
            onChangeText={setPassword}
            placeholder="Пароль"
          />

          <Button onPress={onLogin} />
          <Text style={styles.text}>Вже є акаунт? Увійти</Text>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    height: 549,
    flexShrink: 0,
    backgroundColor: "FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // paddingBottom: 7,

    paddingTop: 92,
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
    marginBottom: 52,
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
