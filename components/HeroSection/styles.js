import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   backgroundVideo: {
      flex: 1,
   },
   overlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
   },
   overlayText: {
      color: "white",
      fontSize: 24,
      marginBottom: 20,
   },
   button: {
      backgroundColor: "#ffffff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
   },
   buttonText: {
      color: "#000000",
      fontSize: 18,
   },
});

export default styles;
