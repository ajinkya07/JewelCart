import React from "react";
import { Text, Dimensions, View, TouchableOpacity, Image } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Theme from "@values/Theme";
import colors from "@values/Colors";

const { width, height } = Dimensions.get("window");

const hRem = height / 1600;
const wRem = width / 739;

const SocialLoginButton = ({
  title,
  onPress,
  socialBtnStyle,
  buttonContainerStyle,
  icon,
}) => {
  return (
    <View style={[styles.formButtonContainer, socialBtnStyle]}>
      <TouchableOpacity
        style={[styles.buttonContainer, buttonContainerStyle]}
        activeOpacity={0.8}
        onPress={() => onPress()}
      >
        <Image source={icon} style={styles.imageStyle} />
        <Text style={styles.formButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  buttonContainer: {
    paddingVertical: hRem * 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: wRem * 50,
    flexDirection: "row",
    justifyContent: "center",
  },
  formButtonText: {
    fontSize: 13,
    color: "#282c3f",
    letterSpacing: 0.3,
    fontWeight: "600",
    marginLeft: 8,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  formButtonContainer: {
    // marginHorizontal: wRem * 40,
    marginBottom: hRem * 24,
    width: width - 36,
  },
  imageStyle: {
    width: 18,
    height: 18,
  },
});

export default SocialLoginButton;
