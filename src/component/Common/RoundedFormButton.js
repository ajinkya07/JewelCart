import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Theme from "@values/Theme";
import colors from "@values/Colors";

const { width, height } = Dimensions.get("window");

const hRem = height / 1600;
const wRem = width / 739;

const RoundedFormButton = ({ onPress, title, buttonStyle }) => {
  return (
    <View style={[styles.formButtonContainer, buttonStyle]}>
      <TouchableOpacity
        style={styles.buttonContainer}
        activeOpacity={0.8}
        onPress={() => onPress()}
      >
        <Text style={styles.formButtonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  buttonContainer: {
    paddingVertical: hRem * 24,
    backgroundColor: "rgb(255, 155, 109)",
    alignItems: "center",
    borderRadius: wRem * 44,
  },
  formButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.3,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  formButtonContainer: {
    width: width - 40,
  },
});

export default RoundedFormButton;
