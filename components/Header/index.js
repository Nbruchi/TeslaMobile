import { View, Image, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const Header = () => {
   return (
      <View style={styles.container}>
         <Pressable
            onPress={() => {
               console.warn("Logo pressed");
            }}
         >
            <Image
               style={styles.logo}
               source={require("../../assets/images/logo.png")}
            />
         </Pressable>
         <Pressable
            onPress={() => {
               console.warn("Menu pressed");
            }}
         >
            <Image
               style={styles.menu}
               source={require("../../assets/images/menu.png")}
            />
         </Pressable>
      </View>
   );
};

export default Header;
