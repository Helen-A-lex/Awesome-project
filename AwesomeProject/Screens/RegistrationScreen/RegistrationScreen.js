import React, { useState } from "react";
import uuid from "react-native-uuid";
import { StyleSheet, View } from "react-native";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { HomeIndicator } from "../../components/HomeIndicator/HomeIndicator";
import { FotoUser } from "../../components/FotoUser/FotoUser";
export const RegistrationScreens = () => {
  const [users, setUsers] = useState([]);

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
  }

  return (
    <>
      <View>
        <FotoUser />
        <RegistrationForm onSubmit={formSubmitHandle} />
        <HomeIndicator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
