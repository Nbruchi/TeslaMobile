import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CarsList from "./components/CarsLIst";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index.js";

export default function App() {
   return (
      <View style={styles.container}>
         <Header />
         <HeroSection />
         <CarsList />
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
});
