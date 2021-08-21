import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import EStyleSheet from 'react-native-extended-stylesheet';

const PrivacyPolicy = props => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint',
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
