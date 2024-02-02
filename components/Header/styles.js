import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      position: "absolute",
      top: 50,
      paddingHorizontal: 20,
      justifyContent: "space-between",
      zIndex: 100,
      width: "100%",
      flexDirection: "row",
   },
   logo: {
      width: 100,
      height: 20,
      resizeMode: "contain",
   },
   menu: {
      width: 25,
      height: 25,
      resizeMode: "contain",
   },
});

export default styles;
