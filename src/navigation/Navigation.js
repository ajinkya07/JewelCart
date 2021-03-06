import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "@tabs/TabNavigator";
import Login from "@login/Login";
import Register from "@login/Register";
import ForgotPassword from "@login/ForgotPassword";
import Products from "@products/Products";
import Profile from "@profile/Profile";
import PrivacyPolicy from "@profile/PrivacyPolicy";
import ProductZoomImage from "@products/ProductZoomImage";
import * as NavigationService from "@values/NavigationService";
import ProductDetails from "@products/ProductDetails";
const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabStack() {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{ headerBackTitleVisible: false }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerBackTitleVisible: false, headerTitle: "" }}
      />
      <Stack.Screen
        name="ProductZoomImage"
        component={ProductZoomImage}
        options={{ headerBackTitleVisible: false, headerTitle: "" }}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerBackTitleVisible: false, headerTitle: "" }}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigator">
        {/* <Stack.Screen name="Login" component={LoginStack} /> */}
        <Stack.Screen
          name="TabNavigator"
          component={TabStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const handleScreenNavigation = (navigateTo, params) => {
  NavigationService.navigate(navigateTo, params || {});
};

export const handleScreenNavigationGoBack = (params) => {
  NavigationService.goBack(params || {});
};

export const handleTabJumpTo = (jumpTo, params) => {
  NavigationService.jumpTo(jumpTo, params || {});
};

export default RootNavigator;
