import React, { useState } from "react";
import {
  View,
  Dimensions,
  Text,
  Alert,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FormButton from "@common_components/FormButton";
import FormInput from "@common_components/FormInput";
import IconPack from "@values/IconPack";
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

const validateName = (fName) => {
  var re = /^[a-zA-Z ]{1,40}$/;
  return re.test(fName);
};

const validateIsNumber = (number) => {
  return /^\d*$/.test(number);
};

const RegistrationScreen = (props) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
  });

  const { firstName, lastName, phoneNumber, emailAddress, password } = userInfo;

  const handleonChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const submitForm = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      phoneNumber === "" ||
      emailAddress === "" ||
      password === ""
    ) {
      Alert.alert("", "Please enter all the mandatory fields", [
        { text: "OK" },
      ]);
      return;
    }
    if (!validateEmail(emailAddress)) {
      Alert.alert("", "Please enter valid email", [{ text: "OK" }]);
      return;
    }
    if (!validateName(firstName)) {
      Alert.alert("", "Please enter valid first name", [{ text: "OK" }]);
      return;
    }
    if (!validateName(lastName)) {
      Alert.alert("", "Please enter valid last name", [{ text: "OK" }]);
      return;
    }
    if (!validateIsNumber(phoneNumber)) {
      Alert.alert("", "Please enter valid phone number", [{ text: "OK" }]);
      return;
    }

    console.log("userInfo", userInfo);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.createAccountText}>Create an account</Text>
        <FormInput
          value={firstName}
          placeholder="First Name"
          autoCapitalize="none"
          label="First Name"
          title="First Name"
          placeholderTextColor="#B2C0CF"
          onChangeText={(value) => handleonChangeText(value, "firstName")}
          maxLength={10}
        />
        <FormInput
          value={lastName}
          placeholder="Last Name"
          autoCapitalize="none"
          label="Last Name"
          title="Last Name"
          placeholderTextColor="#B2C0CF"
          onChangeText={(value) => handleonChangeText(value, "lastName")}
          maxLength={10}
        />
        <FormInput
          value={phoneNumber}
          placeholder="Phone Number"
          autoCapitalize="none"
          label="Phone Number"
          title="Phone Number"
          placeholderTextColor="#B2C0CF"
          onChangeText={(value) => handleonChangeText(value, "phoneNumber")}
          maxLength={10}
        />
        <FormInput
          value={emailAddress}
          placeholder="Email Address"
          autoCapitalize="none"
          label="Email Address"
          title="Email Address"
          placeholderTextColor="#B2C0CF"
          onChangeText={(value) => handleonChangeText(value, "emailAddress")}
        />
        <FormInput
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          label="Password"
          secureTextEntry
          title="Password"
          placeholderTextColor="#B2C0CF"
          onChangeText={(value) => handleonChangeText(value, "password")}
        />

        <View style={{ marginTop: 30 }}>
          <FormButton title="Sign Up" onPress={() => submitForm()} />
        </View>

        <View style={styles.borderLineStyle} />
        <Text style={styles.newOnCartText}>Already E-Kart?</Text>
        <FormButton
          title="Login to your account"
          onPress={() => props.navigation.navigate("Login")}
          buttonStyle={{ backgroundColor: "#FFF" }}
          borderColor={{ borderColor: "rgb(255, 155, 109)", borderWidth: 1 }}
          textColor={{ color: "rgb(255, 155, 109)", fontWeight: "300" }}
        />
        <View style={styles.socialIconContainer}>
          <View style={styles.followUsView}>
            <Text style={styles.bottomTextStyle}>
              Follow Us for Your Daily Dose of Fashion
            </Text>
          </View>
          <View style={styles.socialLogoView}>
            <Image
              source={IconPack.FACEBOOK_ICON}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Image
              source={IconPack.YOUTUBE_ICON}
              style={[
                styles.socialIcon,
                { marginHorizontal: 20, width: 22, height: 22 },
              ]}
              resizeMode="contain"
            />
            <Image
              source={IconPack.INSTAGRAM_ICON}
              style={styles.socialIcon}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  lineViewStyle: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#303030",
  },
  createAccountText: {
    color: "#282c3f",
    fontSize: 18,
    textAlign: "center",
    marginTop: hRem * 45,
    marginBottom: hRem * 50,
    letterSpacing: 0.3,
    fontFamily: Theme.fontMontSerratMedium,
  },
  borderLineStyle: {
    borderTopWidth: 1,
    borderColor: "#303030",
    marginHorizontal: wRem * 8,
    marginVertical: hRem * 50,
  },
  newOnCartText: {
    marginLeft: wRem * 20,
    color: "#303030",
    fontSize: 16,
    marginBottom: hRem * 24,
    fontFamily: Theme.fontMontSerratMedium,
  },
  bottomTextStyle: {
    color: "#282c3f",
    fontSize: 15,
    marginRight: wRem * 20,
    fontFamily: Theme.fontMontSerratRegular,
  },
  socialIconContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: wRem * 20,
    marginTop: hRem * 50,
  },
  followUsView: {
    flex: 0.7,
  },
  socialLogoView: {
    flexDirection: "row",
    flex: 0.5,
    marginLeft: 12,
    marginTop: 5,
  },
  socialIcon: { width: 20, height: 20 },
});

export default RegistrationScreen;
