import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import data from "./data";
import ImageZoom from "react-native-image-pan-zoom";
import color from "@values/Colors";
import Theme from "@values/Theme";
const { width, height } = Dimensions.get("window");
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 74;
const TICKER_HEIGHT = 40;

const categoryDataSource = [
  {
    id: "1",
    categoryName: "Rings",
    categoryImage: require("@home_assets/ring.jpg"),
  },
  {
    id: "2",
    categoryName: "Chains",
    categoryImage: require("@home_assets/chains.jpg"),
  },
  {
    id: "3",
    categoryName: "Earrings",
    categoryImage: require("@home_assets/earrings.jpg"),
  },
  {
    id: "4",
    categoryName: "Pendants",
    categoryImage: require("@home_assets/pendants.jpg"),
  },
  {
    id: "5",
    categoryName: "Chains",
    categoryImage: require("@home_assets/1.jpg"),
  },
  {
    id: "6",
    categoryName: "Pendants",
    categoryImage: require("@home_assets/2.jpg"),
  },
  {
    id: "7",
    categoryName: "Earrings",
    categoryImage: require("@home_assets/ring.jpg"),
  },
  {
    id: "8",
    categoryName: "Rings",
    categoryImage: require("@home_assets/4.jpg"),
  },
  {
    id: "9",
    categoryName: "All Jewellery",
    categoryImage: require("@home_assets/5.jpg"),
  },
];

const Ticker = ({ scrollX }) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{ transform: [{ translateY }] }}>
        {categoryDataSource.map(({ categoryName }, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {categoryName}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({ categoryImage, categoryName, index, scrollX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <View style={styles.itemStyle}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ImageZoom
          cropWidth={Dimensions.get("window").width}
          cropHeight={Dimensions.get("window").height}
          imageWidth={Dimensions.get("window").width - 500}
          imageHeight={Dimensions.get("window").height - 500}
        >
          <Animated.Image
            source={categoryImage}
            style={[
              styles.imageStyle,
              {
                transform: [{ scale }],
              },
            ]}
          />
        </ImageZoom>
      </View>
    </View>
  );
};

const Pagination = ({ scrollX }) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <ScrollView
      style={[styles.pagination]}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: "absolute",
            transform: [{ translateX }],
          },
        ]}
      />
      {categoryDataSource.map((item) => {
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.paginationDotContainer}
            onPress={() => null}
          >
            <View
              style={[styles.paginationDot, { backgroundColor: item.color }]}
            />
            <Image
              source={item.categoryImage}
              style={{ width: 50, height: 50 }}
            />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default function ProductZoomImage() {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* <Circle scrollX={scrollX} /> */}
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={categoryDataSource}
        renderItem={({ item, index }) => (
          <Item {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  itemStyle: {
    width,
    height,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: width - 20,
    height: width,
  },
  textContainer: {
    alignItems: "flex-start",
    alignSelf: "flex-end",
    flex: 0.5,
  },
  heading: {
    color: "#444",
    textTransform: "uppercase",
    fontSize: 24,
    fontWeight: "800",
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: "#ccc",
    fontWeight: "600",
    textAlign: "left",
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: "contain",
    position: "absolute",
    left: 10,
    bottom: 10,
    transform: [
      { translateX: -LOGO_WIDTH / 2 },
      { translateY: -LOGO_HEIGHT / 2 },
      { rotateZ: "-90deg" },
      { translateX: LOGO_WIDTH / 2 },
      { translateY: LOGO_HEIGHT / 2 },
    ],
  },
  pagination: {
    margin: 20,
    flexDirection: "row",
    height: DOT_SIZE,
    height: height * 0.1,
  },
  paginationDot: {
    width: DOT_SIZE * 0.2,
    height: DOT_SIZE * 0.2,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "rgb(255, 155, 109)",
  },
  tickerContainer: {
    position: "absolute",
    top: 40,
    left: 20,
    overflow: "hidden",
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: "uppercase",
    fontFamily: Theme.fontMontSerratMedium,
  },
});
