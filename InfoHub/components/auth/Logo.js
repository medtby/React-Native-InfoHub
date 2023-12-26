import React from "react";
import { View, Image, Text } from "react-native";

const Logo = () => (
    <View style={{justifyContent: "center", alignItems: "center"}}>
        <Image source={require("../../assets/logo.jpg")} style={{ width:250, height:150, marginVertical: 30}}/>
    </View>
)

export default Logo;