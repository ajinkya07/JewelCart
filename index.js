import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({
  $textColor: "#0275d8",
});

import App from "./App";
AppRegistry.registerComponent(appName, () => App);
