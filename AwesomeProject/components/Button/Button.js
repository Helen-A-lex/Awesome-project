import { Pressable, StyleSheet, Text } from "react-native";
export default function Button(props) {
  const { onPress, title } = props;
  return (
    <Pressable style={[styles.button, styles.shadowProp]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 343,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    marginTop: 27,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
