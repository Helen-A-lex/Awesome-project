import React, { useState, useEffect } from "react";

import { StyleSheet, View, Alert } from "react-native";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { HomeIndicator } from "../../components/HomeIndicator/HomeIndicator";

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

  return (
    <>
      <View>
        <LoginForm onSubmit={loginFormSubmitHandle} />
        <HomeIndicator />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
