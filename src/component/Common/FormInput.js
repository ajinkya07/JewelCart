import React from "react";
import { Text, Dimensions, TextInput, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Theme from "@values/Theme";
import colors from "@values/Colors";
const { width, height } = Dimensions.get("window");

const hRem = height / 1600;
const wRem = width / 739;

const FormInput = (props) => {
  const { placeholder, label } = props;
  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </View>
  );
};

const styles = EStyleSheet.create({
  formInputContainer: {
    marginHorizontal: wRem * 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d4d5d9",
    backgroundColor: "white",
    height: 40,
    fontSize: 14,
    paddingLeft: 10,
    marginBottom: hRem * 20,
    borderRadius: 2,
    color: "#303030",
    letterSpacing: 0.8,
    // fontFamily: Theme.fontMontSerratRegular,
  },
  textInputLabel: {
    fontSize: 13,
    color: colors.inputColor,
    letterSpacing: 0.8,
    marginBottom: hRem * 14,
    fontFamily: Theme.fontMontSerratMedium,
  },
});

export default FormInput;
