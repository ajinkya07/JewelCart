import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  RefreshControl,
  ImageBackground,
  Animated,
  SafeAreaView,
  StyleSheet,
  ImageBackgroundBase,
} from "react-native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import color from "@values/Colors";
import Theme from "@values/Theme";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const { height, width } = Dimensions.get("screen");
var isFetching = false;

const LOREM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const categoryDataSource = [
  {
    id: "1",
    categoryName: "Rings",
    categoryImage: require("@home_assets/ring.jpg"),
    bgColor: color.bg1,
  },
  {
    id: "2",
    categoryName: "Chains",
    categoryImage: require("@home_assets/chains.jpg"),
    bgColor: color.bg2,
  },
  {
    id: "3",
    categoryName: "Earrings",
    categoryImage: require("@home_assets/earrings.jpg"),
    bgColor: color.bg3,
  },
  {
    id: "4",
    categoryName: "Pendants",
    categoryImage: require("@home_assets/pendants.jpg"),
    bgColor: color.bg4,
  },
  {
    id: "5",
    categoryName: "Chains",
    categoryImage: require("@home_assets/1.jpg"),
    bgColor: color.bg5,
  },
  {
    id: "6",
    categoryName: "Pendants",
    categoryImage: require("@home_assets/2.jpg"),
    bgColor: color.bg6,
  },
  {
    id: "7",
    categoryName: "Earrings",
    categoryImage: require("@home_assets/ring.jpg"),
    bgColor: color.bg7,
  },
  {
    id: "8",
    categoryName: "Rings",
    categoryImage: require("@home_assets/4.jpg"),
    bgColor: color.bg2,
  },
];

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.bottom10}
        >
          <View style={{ marginTop: 20 }}>
            {categoryDataSource.map((item, index) => {
              return (
                <TouchableOpacity
                  key={`category-tab${index}`}
                  style={[styles.cardView, { backgroundColor: item.bgColor }]}
                  onPress={() => this.props.navigation.navigate("Products")}
                >
                  <View style={{ width: width / 2 + 20 }}>
                    <Text style={styles.categoryTitle}>
                      Explore {item.categoryName}
                    </Text>
                    <Text numberOfLines={3} style={styles.categorySubTitle}>
                      {LOREM_IPSUM}
                    </Text>
                  </View>
                  <View
                    style={{
                      alignItems: "flex-end",
                      flex: 1,
                    }}
                  >
                    <Image
                      source={item.categoryImage}
                      style={styles.categoryImage}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  bottom10: {
    paddingBottom: 10,
  },
  cardTop: {
    marginTop: 10,
  },
  cardView: {
    flexDirection: "row",
    width: width - 20,
    alignItems: "flex-start",
    borderRadius: 10,
    marginTop: 10,
  },
  imageBgBorder: {
    borderRadius: 10,
  },
  categoryImage: {
    height: 110,
    width: width / 2 - 40,
    // aspectRatio: 800 / 800,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  categoryTitle: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 10,
    fontSize: 16,
    fontFamily: Theme.fontMontSerratSemiBold,
    color: color.black,
    letterSpacing: 0.2,
  },
  categorySubTitle: {
    marginLeft: 15,
    marginRight: 10,
    marginTop: 2,
    fontSize: 12,
    fontFamily: Theme.fontMontSerratRegular,
    color: color.grey,
    letterSpacing: 0.2,
  },
});
