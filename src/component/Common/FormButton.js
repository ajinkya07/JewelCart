import React from "react";
import { Text, Dimensions, View, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Theme from "@values/Theme";
import colors from "@values/Colors";

const { width, height } = Dimensions.get("window");

const hRem = height / 1600;
const wRem = width / 739;

const FormButton = ({
  onPress,
  title,
  buttonStyle,
  borderColor,
  textColor,
}) => {
  return (
    <View style={styles.formButtonContainer}>
      <TouchableOpacity
        style={[styles.buttonContainer, buttonStyle, borderColor]}
        activeOpacity={0.8}
        onPress={() => onPress()}
      >
        <Text style={[styles.formButtonText, textColor]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = EStyleSheet.create({
  buttonContainer: {
    paddingVertical: hRem * 26,
    backgroundColor: "rgb(255, 155, 109)",
    alignItems: "center",
    borderRadius: 25,
  },
  formButtonText: {
    fontSize: 16,
    color: "#FFFFFF",
    letterSpacing: 0.3,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  formButtonContainer: {
    marginHorizontal: wRem * 20,
  },
});

export default FormButton;
