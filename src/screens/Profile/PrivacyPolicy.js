import React from "react";
import { View, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import EStyleSheet from "react-native-extended-stylesheet";

const PrivacyPolicy = (props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.lipsum.com",
        }}
      />
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PrivacyPolicy;
