import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Alert,
  Dimensions,
  Platform,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import RoundedFormButton from "@common_components/RoundedFormButton";
import IconPack from "@values/IconPack";
import CarousalComponent from "./CarousalComponent";
import color from "@values/Colors";
import Theme from "@values/Theme";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
const DATA = [
  { id: 1, title: "Cursor head Diamond Rings" },
  { id: 2, title: "Cursor head Diamond Rings" },
  { id: 3, title: "Cursor head Diamond Rings" },
  { id: 4, title: "Cursor head Diamond Rings" },
  { id: 5, title: "Cursor head Diamond Rings" },
  { id: 6, title: "Cursor head Diamond Rings" },
  { id: 7, title: "Cursor head Diamond Rings" },
  { id: 8, title: "Cursor head Diamond Rings" },
  { id: 9, title: "Cursor head Diamond Rings" },
  { id: 10, title: "Cursor head Diamond Rings" },
];

const priceArray = [
  {
    id: 1,
    priceTitle: "Less than ₹10,000",
  },
  {
    id: 2,
    priceTitle: "₹10,000 to ₹20,000",
  },
  {
    id: 3,
    priceTitle: "₹20,000 to ₹30,000",
  },
  {
    id: 4,
    priceTitle: "₹30,000 to ₹50,000",
  },
  {
    id: 5,
    priceTitle: "₹50,000 and above",
  },
];
const sortByArray = [
  {
    key: "Popularity",
    text: "Popularity",
  },
  {
    key: "Price low to high",
    text: "Price low to high",
  },
  {
    key: "Price high to low",
    text: "Price high to low",
  },
  {
    key: "Latest",
    text: "Latest",
  },
  {
    key: "Discount %",
    text: "Discount %",
  },
  {
    key: "Recommended",
    text: "Recommended",
  },
];
const VerticalCard = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.imageContainer} onPress={() => null}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9cn5wDunlrrvU9R2xgIeVz2u-yIrHBozpg&usqp=CAU",
          }}
        />
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => Alert.alert("Todo")}
        >
          <Image
            source={IconPack.FAV_ICON}
            style={{ width: 17, height: 17 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.cardInfoContainer}>
        <Text style={styles.cardTitle}>Cursor head Diamond Rings</Text>
        <View style={styles.cardAmtView}>
          <Text style={styles.cardAmtText}>₹21,156</Text>
          <Text style={styles.cardDiscountAmtText}>₹8,156</Text>
        </View>
        <Text numberOfLines={2} style={styles.discountText}>
          100% off on making charges
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Products = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  const [selectedPriceIndex, setSelectedPrice] = useState(0);
  const navigation = useNavigation();

  const [value, setValue] = useState("");
  const displayModal = (show) => {
    setModalVisible(show);
  };
  const displaySortModal = (show) => {
    setSortModalVisible(show);
  };
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          data={DATA}
          keyExtractor={(item) => item.id}
          horizontal={false}
          numColumns={2}
          renderItem={({ item, index }) => (
            <View style={styles.cardContainer} key={item.id}>
              <VerticalCard navigation={navigation} />
            </View>
          )}
          ListHeaderComponent={
            <>
              <CarousalComponent />
              <Text style={styles.categoryTextStyle}>Explore Earrings</Text>
              <Text style={styles.productsCountText}>3714 products found</Text>
            </>
          }
        />
      </View>
      <View style={styles.bottomViewContainer}>
        <View style={styles.filterRowContainer}>
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            style={styles.filterTextView}
            onPress={() => displayModal(true)}
          >
            <Text style={styles.filterTextStyle}>Price</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine} />
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            style={styles.filterTextView}
            onPress={() => displaySortModal(true)}
          >
            <Text style={styles.filterTextStyle}>Sort</Text>
          </TouchableOpacity>
          <View style={styles.verticleLine} />
          <TouchableOpacity
            hitSlop={styles.hitSlop}
            style={styles.filterTextView}
          >
            <Text style={styles.filterTextStyle}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        isVisible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        style={styles.modalView}
      >
        <View style={styles.modalViewContainer}>
          <View style={styles.logoIconStyle} />
          <View>
            <Text style={styles.titleText}>Price</Text>
          </View>
          <ScrollView>
            {priceArray.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => setSelectedPrice(index)}
                  style={styles.priceContainer}
                  key={item.id}
                >
                  <View
                    style={
                      selectedPriceIndex === index
                        ? styles.checkViewSelected
                        : styles.checkViewNotSelected
                    }
                  />
                  <Text style={styles.priceTextStyle}>{item.priceTitle}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <View style={styles.priceLineStyle} />
          <View style={styles.btnContainer}>
            <RoundedFormButton
              onPress={() => null}
              title="Done"
              buttonStyle={styles.buttonStyle}
            />
          </View>
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
      </Modal>

      <Modal
        isVisible={sortModalVisible}
        onRequestClose={() => displaySortModal(false)}
        onBackdropPress={() => displaySortModal(false)}
        onBackButtonPress={() => displaySortModal(false)}
        style={styles.modalView}
      >
        <View style={styles.modalViewContainer}>
          <View style={styles.logoIconStyle} />
          <View>
            <Text style={styles.titleText}>Sort By</Text>
          </View>
          <ScrollView>
            {sortByArray.map((res) => {
              return (
                <View key={res.key} style={styles.sortTextContainer}>
                  <TouchableOpacity
                    style={styles.radioCircle}
                    onPress={() => {
                      setValue(res.key);
                    }}
                  >
                    {value === res.key && <View style={styles.selectedRb} />}
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setValue(res.key);
                    }}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.radioText}>{res.text}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
          <TouchableOpacity
            style={styles.closeIconView}
            onPress={() => displaySortModal(false)}
          >
            <Image
              source={IconPack.CLOSE_ICON}
              style={{ width: 16, height: 16 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  imageStyle: {
    width: 130,
    height: 130,
  },
  hitSlop: {
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
  },

  imageContainer: {
    width: 177,
    padding: 20,
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: color.white,
    // borderWidth: 1,
    borderColor: color.grey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  cardInfoContainer: {
    marginTop: 5,
    width: 177,
    backgroundColor: "#fff",
    marginBottom: 26,
  },
  cardTitle: {
    color: "#282c3f",
    fontSize: 13,
    fontFamily: Theme.fontMontSerratRegular,
  },
  cardAmtView: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardAmtText: {
    color: "#282c3f",
    fontSize: 16,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  cardDiscountAmtText: {
    fontSize: 14,
    marginLeft: 10,
    color: "#61616d",
    lineHeight: 24,
    fontFamily: Theme.fontMontSerratRegular,
    textDecorationLine: "line-through",
  },
  lineStyle: {
    borderColor: "#61616d",
    borderTopWidth: 1,
    width: 55,
    position: "absolute",
    top: 12,
    right: 60,
  },
  discountText: {
    color: "#2e9a37",
    fontSize: 12,
    marginTop: 2.5,
    fontFamily: Theme.fontMontSerratRegular,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  favoriteIcon: {
    position: "absolute",
    right: 10,
    top: 8,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  verticleLine: {
    height: "50%",
    width: 2,
    backgroundColor: "#D3D3D3",
  },
  filterTextView: {
    flex: 1,
    alignItems: "center",
  },
  filterTextStyle: {
    color: "#282c3f",
    fontSize: 14,
    fontFamily: Theme.fontMontSerratSemiBold,
  },
  filterRowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bottomViewContainer: {
    flex: 0.6,
    justifyContent: "flex-end",
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: color.grey,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
  flex: {
    flex: 9,
  },
  categoryTextStyle: {
    fontSize: 18,
    fontFamily: Theme.fontMontSerratBold,
    color: "#282c3f",
    lineHeight: 22,
    marginBottom: 5,
    marginLeft: 12,
    marginTop: 30,
  },
  productsCountText: {
    fontSize: 13,
    color: "#282c3f",
    marginBottom: 26,
    marginLeft: 12,
    fontFamily: Theme.fontMontSerratRegular,
  },
  blurViewStyle: {
    flex: 1,
    backgroundColor: "#000000AA",
  },
  modalViewContainer: {
    marginTop: Platform.OS === "ios" ? "25rem" : "21rem",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: color.white,
  },
  sortByModalViewContainer: {
    marginTop: Platform.OS === "ios" ? "27rem" : "23rem",
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: color.white,
  },
  closeIconView: {
    position: "absolute",
    right: 20,
    top: 25,
  },
  titleText: {
    color: "#282c3f",
    fontFamily: Theme.fontMontSerratBold,
    fontSize: 20,
    marginLeft: 14,
    marginTop: 25,
    marginBottom: 30,
  },
  priceContainer: {
    flexDirection: "row",
    marginLeft: 14,
    marginBottom: 35,
  },
  checkViewSelected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: color.brandColor,
    // backgroundColor: "#ff8d6d",
  },
  checkViewNotSelected: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: color.grey,
    // backgroundColor: "#ff8d6d",
  },
  priceTextStyle: {
    marginLeft: 7,
    color: "#61616d",
    fontSize: 14,
    fontFamily: Theme.fontMontSerratRegular,
  },
  priceLineStyle: {
    borderColor: "#d3d3d3",
    borderWidth: 0.4,
  },
  btnContainer: {
    alignItems: "center",
    marginVertical: 12,
  },
  buttonStyle: {
    width: width - 20,
  },
  radioText: {
    fontSize: 14,
    color: "#61616d",
    fontFamily: Theme.fontMontSerratRegular,
    marginLeft: 7,
  },
  radioCircle: {
    height: 18,
    width: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgb(255, 155, 109)",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRb: {
    width: 9,
    height: 9,
    borderRadius: 25,
    backgroundColor: "#ff8d6d",
  },
  sortTextContainer: {
    marginBottom: 30,
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 14,
  },
  modalView: {
    justifyContent: "flex-end",
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
});

export default Products;
