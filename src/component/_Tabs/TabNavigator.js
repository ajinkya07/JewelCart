import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  ToastAndroid,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartCount from '@tabs/CartCount'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import color from '@values/colors'
import Home from '@home/Home'
import Category from '@category/Category'


var backPressed = 0;


class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.unsubscribeFocus = this.props.navigation.addListener('focus', e => {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    });
    this.unsubscribeBlur = this.props.navigation.addListener('blur', e => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButton,
      );
    });


  }

  handleBackButton = () => {
    if (backPressed > 0) {
      BackHandler.exitApp();
      backPressed = 0;
    } else {
      backPressed++;
      ToastAndroid.show('Press again to close app', ToastAndroid.SHORT);
      setTimeout(() => {
        backPressed = 0;
      }, 2000);
      return true;
    }

    return true;
  };

  componentWillUnmount() {
    this.unsubscribeFocus();
    this.unsubscribeBlur();
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View style={styles.tabScreen}>
        <Home />
      </View>
    );
  }
}


class CategoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.tabScreen}>
        <Category />
      </View>
    );
  }
}

class BagScreen extends React.Component {
  render() {
    return (
      <View style={styles.tabScreen}>
        <Text>Bag</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.tabScreen}>
        <Text>Profile</Text>
      </View>
    );
  }
}



const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'star';
      return <Icon2 name={iconName} color={color} size={20} />

    case 'Categories':
      iconName = 'appstore-o';
      return <Icon name={iconName} color={color} size={20} />

    case 'Bag':
      iconName = 'shopping-cart';
      return <CartCount name={iconName} color={color} />

    case 'Profile':
      iconName = 'account-circle';
      return <Icon3 name={iconName} color={color} size={23} />

    default:
      break;
  }

  return
};


const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (
    <Tab.Navigator
      keyboardHidesTabBar={true}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
      tabBarOptions={{
        activeTintColor: color.brandColor,
        inactiveTintColor: color.gray,
        style: {
          backgroundColor: color.white,
          elevation: 0,
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Bag" component={BagScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />

    </Tab.Navigator>
  );
};


const styles = StyleSheet.create({
  tabScreen: {
    backgroundColor: color.white,
    flex: 1,
    alignItems: 'center'
  }
})



