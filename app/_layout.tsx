import { ImageBackground, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Slot } from "expo-router";
import globalStyles from "@/styles/global-styles";

const Layout = () => {
  return (
    <ImageBackground
      source={require("../assets/img/fondo.jpg")}
      style={globalStyles.background}
    >
      <View style={globalStyles.container}>
        <Slot />
        <StatusBar style="light" />
      </View>
    </ImageBackground>
  );
};

export default Layout;
