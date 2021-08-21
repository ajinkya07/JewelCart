import "react-native-gesture-handler";
import * as React from "react";
import { StatusBar, StyleSheet, SafeAreaView } from "react-native";
import RootNavigator from "@navigation/Navigation";
import EStyleSheet from "react-native-extended-stylesheet";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default App;
