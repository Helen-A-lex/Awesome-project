// import ImageBackground from "../../components/ImageBackground/ImageBackground";
import { StyleSheet, View } from "react-native";
import { RegistrationForm } from "../../components/RegistrationForm/RegistrationForm";
import { HomeIndicator } from "../../components/HomeIndicator/HomeIndicator";
import { FotoUser } from "../../components/FotoUser/FotoUser";
export const RegistrationScreens = () => {
  return (
    <>
      <View>
        <FotoUser />
        <RegistrationForm />
        <HomeIndicator />
      </View>
    </>
  );
};
const styles = StyleSheet.create({});
