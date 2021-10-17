import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FormButton from "@common_components/FormButton";
import ArrowIcon from "@product_assets/placeArrow.png";
import BackIcon from "@product_assets/backButton.png";
import ArrowupIcon from "@product_assets/arrowup.png";
import IMAGE1 from "@product_assets/img1.png";
import SEARCH from "@product_assets/search.png";
import FAVICON from "@product_assets/fav.png";
import BAGICON from "@product_assets/bag.png";
import { useNavigation } from "@react-navigation/native";
import color from "@values/Colors";
import Theme from "@values/Theme";

const { width, height } = Dimensions.get("window");
const hRem = height / 411;
const wRem = width / 187.5;
const images = [
  "https://media.istockphoto.com/photos/indian-beautiful-bridal-woman-wear-traditional-wedding-dress-costume-picture-id1281397929?k=20&m=1281397929&s=612x612&w=0&h=W1-Lw41m8Gp-nRnYlwkbqd-RBYiJ5U4lfHwHkKzHufE=",
  "https://media.istockphoto.com/photos/beautiful-indian-traditional-woman-portrait-picture-id1189191586?k=20&m=1189191586&s=612x612&w=0&h=xuGjUTiYBSvXuUq6ACmMgLHq6tuG8jSm9qEy5YvL0hk=",
  "https://media.istockphoto.com/photos/scrap-gold-picture-id468847612?k=20&m=468847612&s=612x612&w=0&h=7QWArrR4e36wvKnhErbkUQTsgAwq5u01V07Oyx_erlc=",
  "https://media.istockphoto.com/photos/vintage-toned-cross-processed-hand-with-jewelry-picture-id522356581?k=20&m=522356581&s=612x612&w=0&h=9n5zTPWlNkCx6MhrvkaI1rOfEzHco8Sfv1-xwwl2pJM=",
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ProductDetails = (props) => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   props.navigation.setOptions({
  //     headerTitle: "ok",
  //     headerTitleStyle: { lineHeight: 21, letterSpacing: 1.7, color: "#000" },
  //     headerTitleAlign: "center",
  //     headerStyle: {
  //       elevation: 0,
  //       shadowColor: "transparent",
  //     },
  //     headerLeft: () => (
  //       <TouchableOpacity
  //         style={{ marginLeft: 10 }}
  //         onPress={() => Alert.alert("Back")}
  //         hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
  //       >
  //         <Image
  //           source={BackIcon}
  //           resizeMode="contain"
  //           style={{ width: 22, height: 22 }}
  //         />
  //       </TouchableOpacity>
  //     ),
  //     headerRight: () => (
  //       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
  //         <TouchableOpacity
  //           style={{ marginHorizontal: 12 }}
  //           onPress={() => null}
  //           activeOpacity={0.4}
  //         >
  //           navigation
  //           <Image
  //             source={IMAGE1}
  //             resizeMode="contain"
  //             style={{ width: 18, height: 18 }}
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{ marginHorizontal: 12 }}
  //           onPress={() => null}
  //           activeOpacity={0.4}
  //         >
  //           <Image
  //             source={SEARCH}
  //             resizeMode="contain"
  //             style={{ width: 18, height: 18 }}
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{ marginHorizontal: 12 }}
  //           onPress={() => null}
  //           activeOpacity={0.4}
  //         >
  //           <Image
  //             source={FAVICON}
  //             resizeMode="contain"
  //             style={{ width: 18, height: 18 }}
  //           />
  //         </TouchableOpacity>
  //         <TouchableOpacity
  //           style={{ marginHorizontal: 12 }}
  //           onPress={() => null}
  //           activeOpacity={0.4}
  //         >
  //           <Image
  //             source={BAGICON}
  //             resizeMode="contain"
  //             style={{ width: 18, height: 18 }}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     ),
  //   });
  // }, []);

  const [imgActive, setimgActive] = useState(0);
  const [showAboutProduct, setShowAboutProduct] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [is18Karat, setIs18Karat] = useState(1);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  // {modalreleated code}
  const [filterModalVisible, setfilterModalVisible] = useState(false);
  const [filterTabIndex, setFilterTabIndex] = useState(0);
  const [filterValue, setFilterValue] = useState("");
  const displayFilterModal = (show) => {
    setfilterModalVisible(show);
  };
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          borderColor: "#e3e3e3",
          borderBottomWidth: 1,
        }}
        onPress={() => {
          setFilterValue(item.title), setFilterTabIndex(item.id);
        }}
      >
        <View style={{ marginVertical: 15 }}>
          <Text
            style={
              item.title === filterValue
                ? styles.filterTabSelectedText
                : styles.filterTabUnelectedText
            }
          >
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{ flex: 0.9, backgroundColor: "#FFF" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}
          >
            {images.map((e, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductZoomImage")}
              >
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.wrap}
                  source={{ uri: e }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}
              >
                ●
              </Text>
            ))}
          </View>
        </View>
        <View
          style={{ borderColor: "#d3d3d3", borderWidth: 0.8, marginTop: 12 }}
        />
        <View style={{ marginTop: 16, marginHorizontal: 12 }}>
          {/* Product Details Section */}
          <Text style={styles.titleText}>
            Triangular Drift Gold Earrings, Stud_Earring
          </Text>
          <Text style={styles.fromText}>
            From{" "}
            <Text style={styles.collectionText}>
              Checks & Stripes Collection
            </Text>
          </Text>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <Text style={styles.actualPrice}>₹25,019</Text>
            <Text style={styles.discountText}>₹27,607</Text>
          </View>
          <Text style={styles.savingText}>You are saving ₹2,588</Text>
          <View
            style={{ borderColor: "#d3d3d3", borderWidth: 0.8, marginTop: 20 }}
          />

          {/* Karat View */}
          <Text
            style={{
              fontSize: 13,
              color: "#282c3f",
              fontFamily: Theme.fontMontSerratRegular,
              marginTop: 12,
            }}
          >
            Choose a Gold Karat
          </Text>
          <View style={{ flexDirection: "row", marginTop: 12 }}>
            <View
              style={[
                is18Karat ? styles.karatSelectedStyle : styles.unselectedStyle,
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => setIs18Karat(true)}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: is18Karat ? "#FFF" : "#282c3f",
                    fontFamily: Theme.fontMontSerratRegular,
                  }}
                >
                  18KT
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                is18Karat ? styles.unselectedStyle : styles.karatSelectedStyle,
                { marginLeft: 16 },
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={() => setIs18Karat(false)}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: is18Karat ? "#282c3f" : "#fff",
                    fontFamily: Theme.fontMontSerratRegular,
                  }}
                >
                  22KT
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* About Product View */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onPress={() => setShowAboutProduct(!showAboutProduct)}
            activeOpacity={0.7}
          >
            <Text style={styles.aboutProductText}>About the Product</Text>
            {showAboutProduct ? (
              <Image
                source={ArrowupIcon}
                resizeMode="contain"
                style={{ width: 12, height: 12 }}
              />
            ) : (
              <Image source={ArrowIcon} resizeMode="contain" />
            )}
          </TouchableOpacity>
          {showAboutProduct && (
            <Text style={styles.aboutProductDesc}>
              Triangular Drift Gold Earring - An edgy pair of stud earrings for
              a smart look at work with two triangles drrifting over one
              another, in rose gold and white gold.
            </Text>
          )}
          {!showAboutProduct && (
            <View style={{ borderColor: "#d3d3d3", borderWidth: 0.5 }} />
          )}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            onPress={() => setShowProductDetails(!showProductDetails)}
            activeOpacity={0.7}
          >
            <Text style={styles.aboutProductText}>Product Details</Text>
            {showProductDetails ? (
              <Image
                source={ArrowupIcon}
                resizeMode="contain"
                style={{ width: 12, height: 12 }}
              />
            ) : (
              <Image source={ArrowIcon} resizeMode="contain" />
            )}
          </TouchableOpacity>
          {showProductDetails && (
            <View style={{ marginBottom: 20 }}>
              <Text style={styles.productIdText}>
                Product Id :{" "}
                <Text style={styles.productIdValueText}>150054</Text>
              </Text>
              <Text style={[styles.productIdText, { marginTop: 15 }]}>
                Dimensions :{" "}
                <Text style={styles.productIdValueText}>
                  Length - 15.9 mm, Width - 16.4 mm
                </Text>
              </Text>
            </View>
          )}
          {!showProductDetails && (
            <View style={{ borderColor: "#d3d3d3", borderWidth: 0.5 }} />
          )}
        </View>
        <View style={{ marginBottom: 20, marginTop: 30 }}>
          <View style={{ marginBottom: 4 }}>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: HEIGHT * 0.14,
                  backgroundColor: "#FFF",
                  flex: 1,
                  shadowColor: "#000",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowOffset: {
                    width: 0,
                    height: 2.5,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 7.22,

                  elevation: 3,
                }}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppKeNlxRZLe9FjWrz_wtEkpz4coOiv1Ahuw&usqp=CAU",
                  }}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000",
                    fontFamily: Theme.fontMontSerratMedium,
                    letterSpacing: 0.3,
                    fontWeight: "500",
                    marginTop: 6,
                  }}
                >
                  BIS Hallmarked Jewellery
                </Text>
                <Text
                  style={{
                    color: color.black,
                    fontFamily: Theme.fontMontSerratRegular,
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  SGL & IGI Certified diamonds,{"\n"}100% react authentic
                  jewellery
                </Text>
              </View>
              <View
                style={{
                  height: HEIGHT * 0.14,
                  backgroundColor: "white",
                  flex: 1,
                  shadowColor: "#000",
                  marginLeft: 0,
                  shadowOffset: {
                    width: 0,
                    height: 2.5,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 7.22,
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 3,
                }}
              >
                <Image
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppKeNlxRZLe9FjWrz_wtEkpz4coOiv1Ahuw&usqp=CAU",
                  }}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000",
                    fontFamily: Theme.fontMontSerratMedium,
                    letterSpacing: 0.3,
                    fontWeight: "500",
                    marginTop: 6,
                  }}
                >
                  Cash / Card on Delivery
                </Text>
                <Text
                  style={{
                    color: color.black,
                    fontFamily: Theme.fontMontSerratRegular,
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  Available Across{"\n"}25,000 pincodes
                </Text>
              </View>
            </View>
            <View />
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  height: HEIGHT * 0.14,
                  backgroundColor: "#FFF",
                  flex: 1,
                  shadowColor: "#000",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowOffset: {
                    width: 0,
                    height: 2.5,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 7.22,
                  elevation: 3,
                }}
              >
                <Image
                  source={require("@home_assets/recycle.png")}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000",
                    fontFamily: Theme.fontMontSerratMedium,
                    letterSpacing: 0.3,
                    fontWeight: "500",
                    marginTop: 6,
                  }}
                >
                  Lifetime Exchange
                </Text>
                <Text
                  style={{
                    color: color.black,
                    fontFamily: Theme.fontMontSerratRegular,
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  Get 100% of the gold value{"\n"}at prevailing market rates
                </Text>
              </View>
              <View
                style={{
                  height: HEIGHT * 0.14,
                  backgroundColor: "white",
                  flex: 1,
                  shadowColor: "#000",
                  marginLeft: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  shadowOffset: {
                    width: 0,
                    height: 2.5,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 7.22,
                  elevation: 3,
                }}
              >
                <Image
                  source={require("@home_assets/recycle.png")}
                  style={{ width: 35, height: 35 }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: "#000",
                    fontFamily: Theme.fontMontSerratMedium,
                    letterSpacing: 0.3,
                    fontWeight: "500",
                    marginTop: 6,
                  }}
                >
                  30 Day Return Policy
                </Text>
                <Text
                  style={{
                    color: color.black,
                    fontFamily: Theme.fontMontSerratRegular,
                    fontSize: 10,
                    marginTop: 4,
                  }}
                >
                  100% refund, no questions asked.{"\n"}Door step pick up &
                  return
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          flex: 0.1,
          alignItems: "center",
          marginTop: 0,
          justifyContent: "center",
          borderTopWidth: 1,
          borderColor: "#d3d3d3",
          backgroundColor: "#fff",
        }}
      >
        <FormButton
          title="ADD TO BAG"
          buttonStyle={{ width: Dimensions.get("screen").width - 30 }}
          onPress={() => navigation.navigate("Bag")}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.38,
  },
  wrapDot: {
    position: "absolute",
    bottom: 5,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: color.blackc,
    fontSize: 16,
  },
  dot: {
    margin: 3,
    color: color.white,
    fontSize: 16,
  },
  titleText: {
    fontSize: 15,
    color: color.black,
    fontFamily: Theme.fontMontSerratSemiBold,
    lineHeight: 20,
  },
  fromText: {
    fontSize: 13,
    color: color.black,
    fontFamily: Theme.fontMontSerratRegular,
    marginTop: 5,
  },
  collectionText: {
    fontSize: 13,
    color: "#004AAC",
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  actualPrice: {
    fontSize: 18,
    color: color.black,
    fontFamily: Theme.fontMontSerratBold,
    marginRight: 10,
  },
  discountText: {
    fontSize: 18,
    color: color.grey,
    fontFamily: Theme.fontMontSerratRegular,
    textDecorationLine: "line-through",
  },
  savingText: {
    fontSize: 12,
    color: color.green,
    fontFamily: Theme.fontMontSerratMedium,
    letterSpacing: 0.7,
    marginTop: 2,
  },
  aboutProductText: {
    fontSize: 16,
    color: color.black,
    fontFamily: Theme.fontMontSerratSemiBold,
    paddingVertical: 24,
  },
  aboutProductDesc: {
    fontSize: 14,
    color: color.black,
    fontFamily: Theme.fontMontSerratRegular,
    lineHeight: 22,
  },
  productIdText: {
    fontSize: 14,
    color: color.black,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  productIdValueText: {
    fontSize: 14,
    color: color.black,
    fontFamily: Theme.fontMontSerratRegular,
  },
  karatSelectedStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgb(255, 155, 109)",
    alignItems: "center",
    justifyContent: "center",
  },
  unselectedStyle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.grey,
    borderWidth: 0.5,
  },
  filterTabSelectedText: {
    letterSpacing: 0.7,
    fontSize: 14,
    color: "#ff8d6d",
    marginLeft: 10,
    fontFamily: Theme.fontMontSerratRegular,
    fontWeight: "500",
  },
  filterTabUnelectedText: {
    letterSpacing: 0.7,
    fontSize: 14,
    color: color.black,
    marginLeft: 10,
    fontFamily: Theme.fontMontSerratRegular,
    fontWeight: "500",
  },
  filterButtonStyle: {
    width: width - 200,
  },
});

export default ProductDetails;
