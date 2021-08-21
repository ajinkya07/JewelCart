import React, { useState } from "react";
import { View, Dimensions, Text, Alert, SafeAreaView } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import RoundedFormButton from "@common_components/RoundedFormButton";
import FormInput from "@common_components/FormInput";
import Theme from "@values/Theme";
import colors from "@values/Colors";

const { width, height } = Dimensions.get("window");

const hRem = height / 1600;
const wRem = width / 739;

const validateEmail = (email) => {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const ForgotPassword = (props) => {
  const [emailAddress, setEmailAddress] = useState("");

  const submitForm = () => {
    if (emailAddress === "" || !validateEmail(emailAddress)) {
      Alert.alert("", "Please enter valid email", [{ text: "OK" }]);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: hRem * 100, marginBottom: hRem * 100 }}>
        <Text style={styles.headerTextStyle}>
          Please enter your registered email and we will send you the link to
          reset password
        </Text>
        <FormInput
          value={emailAddress}
          placeholder="username@domain.com"
          autoCapitalize="none"
          label="Email Address"
          title="Email Address"
          placeholderTextColor="#B2C0CF"
          onChangeText={(val) => setEmailAddress(val)}
        />
      </View>
      <View style={styles.btnContainer}>
        <RoundedFormButton
          onPress={() => submitForm()}
          title="SEND RESET LINK"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  headerTextStyle: {
    color: "#282c3f",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: wRem * 60,
    marginBottom: hRem * 50,
    letterSpacing: 0.3,
    fontFamily: Theme.fontMontSerratRegular,
  },
  btnContainer: {
    alignItems: "center",
  },
});

export default ForgotPassword;
