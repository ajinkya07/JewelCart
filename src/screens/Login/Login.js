import React, { Component } from "react";
import {
  View,
  Dimensions,
  Text,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import EStyleSheet, { value } from "react-native-extended-stylesheet";
import FormButton from "@common_components/FormButton";
import SocialLoginButton from "@common_components/SocialLoginButton";
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

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: "",
      password: "",
    };
  }

  setUserInfo = (value) => {
    this.setState({ emailAddress: value, password: value });
  };

  handleonChangeText = (value, fieldName) => {
    this.setUserInfo({ [fieldName]: value });
  };

  submitForm = () => {
    const { emailAddress, password } = this.state;
    // if (emailAddress === "" || password === "") {
    //   Alert.alert("", "Please enter all the mandatory fields", [
    //     { text: "OK" },
    //   ]);
    //   return;
    // }
    // if (!validateEmail(emailAddress)) {
    //   Alert.alert("", "Please enter valid email", [{ text: "OK" }]);
    //   return;
    // }
    this.props.navigation.navigate("TabNavigator");
  };

  render() {
    const { emailAddress, password } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={{ marginTop: hRem * 100 }}>
            <FormInput
              value={emailAddress}
              placeholder="Email Address"
              autoCapitalize="none"
              label="Email Address"
              title="Email Address"
              placeholderTextColor="#B2C0CF"
              onChangeText={(value) =>
                this.handleonChangeText(value, "emailAddress")
              }
            />
            <FormInput
              value={password}
              placeholder="Password"
              autoCapitalize="none"
              label="Password"
              secureTextEntry
              title="Password"
              placeholderTextColor="#B2C0CF"
              onChangeText={(value) =>
                this.handleonChangeText(value, "password")
              }
            />
            <Text style={styles.forgotPasswordText}>
              Forgot password?{" "}
              <Text
                style={styles.resetHereText}
                onPress={() => this.props.navigation.navigate("ForgotPassword")}
              >
                Reset here
              </Text>
            </Text>

            <View style={{ marginTop: 30 }}>
              <FormButton title="Login" onPress={() => this.submitForm()} />
            </View>
          </View>

          <View style={styles.orTextContainer}>
            <View style={styles.lineViewStyle} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.lineViewStyle} />
          </View>
          <View style={styles.socialButtonView}>
            <SocialLoginButton
              title="Login with Facebook"
              onPress={() => null}
              icon={IconPack.FACEBOOK_ICON}
            />
            <SocialLoginButton
              title="Login with Google"
              onPress={() => null}
              icon={IconPack.GOOGLE_ICON}
            />
          </View>
          <View style={styles.borderLineStyle} />
          <Text style={styles.newOnCartText}>New on Jewel Cart?</Text>
          <FormButton
            onPress={() => this.props.navigation.navigate("Register")}
            title="Create an account"
            buttonStyle={{ backgroundColor: "#FFF" }}
            borderColor={{ borderColor: "rgb(255, 155, 109)", borderWidth: 1 }}
            textColor={{ color: "rgb(255, 155, 109)" }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
  },
  forgotPasswordText: {
    fontSize: 13,
    color: "#282c3f",
    letterSpacing: 0.3,
    marginLeft: wRem * 20,
    marginBottom: hRem * 18,
    fontFamily: Theme.fontMontSerratRegular,
  },
  resetHereText: {
    color: "#004aac",
    fontSize: 13,
    fontWeight: "500",
    fontFamily: Theme.fontMontSerratBold,
  },
  orTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wRem * 18,
    marginVertical: hRem * 50,
  },
  orText: {
    color: "#282c3f",
    fontSize: 14,
    paddingHorizontal: 10,
    letterSpacing: 0.5,
  },
  lineViewStyle: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#303030",
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
    marginTop: hRem * 16,
    marginBottom: hRem * 24,
    fontFamily: Theme.fontMontSerratMedium,
  },
  socialButtonView: {
    alignItems: "center",
  },
});

export default Login;
