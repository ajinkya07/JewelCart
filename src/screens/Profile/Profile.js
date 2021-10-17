import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
  Alert,
  Image,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FormInput from "@common_components/FormInput";
import RoundedFormButton from "@common_components/RoundedFormButton";
import SocialLoginButton from "@common_components/SocialLoginButton";
import IconPack from "@values/IconPack";
import Theme from "@values/Theme";
import colors from "@values/Colors";
import Icon2 from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("window");
const hRem = height / 1600;

const Profile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const displayModal = (show) => {
    setModalVisible(show);
  };
  const [userInfo, setUserInfo] = useState({
    emailAddress: "",
    password: "",
  });

  const { emailAddress, password } = userInfo;

  const handleonChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.logoView}>
          <Image
            source={require("../../assets/Common/logo.png")}
            style={styles.logo}
          />
        </View>
        <Text style={styles.textTitle}>
          You are logged out, please login to access login account options.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <RoundedFormButton
          onPress={() => displayModal(true)}
          title="Login to your account"
          buttonStyle={styles.buttonStyle}
        />
      </View>
      <View style={styles.middleView} />
      <View style={styles.webViewTextContainer}>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>E-KART ASSURANCE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>PRIVACY POLICY</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>BLOG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>TERMS OF USE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>
            LIFETIME EXCHANGE & BUY-BACK POLICY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.titleTextStyle}
          onPress={() => props.navigation.navigate("PrivacyPolicy")}
        >
          <Text style={styles.titleTextStyle}>FAQs</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.middleView, { height: 4 }]} />
      <View style={styles.versionTextView}>
        <Text style={styles.versionText}>Version: 1.0.0</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.blurViewStyle}>
          <View style={styles.modalViewContainer}>
            {/* <View style={styles.logoIconStyle} /> */}
            <View style={{ margin: 20 }}>
              <Icon2 name={"star"} color={colors.brandColor} size={40} />
            </View>
            <View>
              <Text style={styles.titleText}>Login to E-Kart</Text>
              <FormInput
                value={emailAddress}
                placeholder="Enter Email Address"
                autoCapitalize="none"
                label="Email Address"
                title="Email Address"
                placeholderTextColor="#B2C0CF"
                onChangeText={(value) =>
                  handleonChangeText(value, "emailAddress")
                }
              />
              <FormInput
                value={password}
                placeholder="Enter Password"
                autoCapitalize="none"
                label="Password"
                secureTextEntry
                title="Password"
                placeholderTextColor="#B2C0CF"
                onChangeText={(value) => handleonChangeText(value, "password")}
              />
              <View style={styles.modalBtnContainer}>
                <RoundedFormButton
                  onPress={() => null}
                  title="Login"
                  buttonStyle={styles.modalButtonStyle}
                />
              </View>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              <View style={styles.middleView} />
            </View>
            <View style={styles.socialLoginView}>
              <SocialLoginButton
                title="Google Login"
                onPress={() => null}
                socialBtnStyle={styles.socialBtnStyle}
                buttonContainerStyle={{ paddingVertical: hRem * 17 }}
                icon={IconPack.GOOGLE_ICON}
              />
              <SocialLoginButton
                title="Facebook Login"
                onPress={() => null}
                socialBtnStyle={styles.socialBtnStyle}
                buttonContainerStyle={{ paddingVertical: hRem * 17 }}
                icon={IconPack.FACEBOOK_ICON}
              />
            </View>
            <Text style={styles.createAccountText}>
              New to E-Kart? Create an account here
            </Text>
            <TouchableOpacity
              style={styles.closeIconView}
              onPress={() => setModalVisible(false)}
            >
              <Image
                source={IconPack.CLOSE_ICON}
                style={{ width: 16, height: 16 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* {modalVisible && (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        />
      )} */}
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  logoView: {
    width: "8rem",
    height: "8rem",
    borderRadius: "4rem",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "8rem",
    height: "8rem",
    borderRadius: "4rem",
  },
  topView: {
    marginTop: "1.2rem",
    alignItems: "center",
  },
  textTitle: {
    fontSize: "1rem",
    textAlign: "center",
    color: "#282c3f",
    lineHeight: 22,
    fontFamily: "Montserrat-Regular",
    marginHorizontal: "1rem",
  },
  btnContainer: {
    alignItems: "center",
    marginTop: "2rem",
    marginBottom: "1.6rem",
  },
  buttonStyle: {
    width: width - 100,
  },
  middleView: {
    height: "0.8rem",
    backgroundColor: "#F5F5F5",
  },
  titleTextStyle: {
    fontSize: 14,
    color: "#282c3f",
    letterSpacing: 0.3,
    marginBottom: "0.65rem",
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  webViewTextContainer: {
    marginLeft: 14,
    marginTop: "1.5rem",
  },
  versionText: {
    fontSize: 14,
    color: "#D5D5D5",
    marginBottom: "1rem",
  },
  versionTextView: {
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
  },
  button: {
    display: "flex",
    height: 60,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2AC062",
    shadowColor: "#2AC062",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  modalContainer: {
    backgroundColor: "grey",
    justifyContent: "flex-end",
    flex: 1,
    marginTop: "14rem",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  blurViewStyle: {
    flex: 1,
    backgroundColor: "#000000AA",
  },
  modalViewContainer: {
    backgroundColor: "white",
    marginTop: "15.5rem",
    flex: 1,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  modalBtnContainer: {
    alignItems: "center",
    marginTop: "1rem",
    marginBottom: "1.6rem",
  },
  modalButtonStyle: {
    width: width - 20,
  },
  forgotPasswordText: {
    textAlign: "center",
    fontSize: 13,
    color: "#282c3f",
    fontWeight: "400",
    letterSpacing: 0.2,
    marginBottom: "1rem",
  },
  logoIconStyle: {
    width: 50,
    height: 50,
    backgroundColor: "grey",
    marginTop: 20,
    marginLeft: 20,
  },
  titleText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 30,
  },
  closeIconView: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  socialLoginView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  socialBtnStyle: {
    width: width / 2 - 20,
  },
  createAccountText: {
    color: "#004aac",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
    textDecorationLine: "underline",
    letterSpacing: 0.6,
  },
});

export default Profile;
