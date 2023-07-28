import { StyleSheet, View } from "react-native";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { HomeIndicator } from "../../components/HomeIndicator/HomeIndicator";

export const LoginScreens = () => {
  return (
    <>
      <View>
        <LoginForm />
        <HomeIndicator />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
