import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Video from "react-native-video";
import styles from "./styles";

const HeroSection = () => {
   return (
      <View style={styles.container}>
         <Video
            source={require("../../assets/video/Teslaad.mp4")}
            style={styles.backgroundVideo}
            muted={true}
            repeat={true}
            resizeMode="cover"
            ignoreSilentSwitch="ignore"
         />
         <View style={styles.overlay}>
            <Text style={styles.overlayText}>Experience Tesla</Text>
            <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText}>Demo Drive</Text>
            </TouchableOpacity>
         </View>
      </View>
   );
};

export default HeroSection;
