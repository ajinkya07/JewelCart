import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  Modal,
  Button,
} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import FormButton from "@common_components/FormButton";
// import BackIcon from '../../../LCRN16-food-delivery-app-lite-starter-master/assets/images/backButton.png';

const DATA = [1, 2, 3, 4];

const BagCard = ({ onPress }) => {
  return (
    <View style={{ backgroundColor: "#FFF" }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 2 }}>
          <View>
            <Text style={styles.itemTextTitle}>
              Effortless Swerve, Effortless Swerve Diamond Earrings
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.itemPrice}>₹ 61,845</Text>
              <Text style={styles.discountItemPrice}>₹ 73951</Text>
            </View>
            <View
              style={{
                backgroundColor: "#f5f5f6",
                paddingVertical: 7,
                borderRadius: 20,
                alignItems: "center",
                width: "70%",
                marginLeft: 12,
              }}
            >
              <Text style={styles.goldValue}>
                <Text style={styles.goldText}>Gold:</Text> 18 KT | 5.11 Gms
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#f5f5f6",
                paddingVertical: 7,
                borderRadius: 20,
                alignItems: "center",
                width: "70%",
                marginLeft: 12,
                marginTop: 10,
              }}
            >
              <Text style={styles.goldValue}>
                <Text style={styles.goldText}>Diamond:</Text>0.51 Carat,SI IJ
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
          <View
            style={{
              width: 90,
              height: 90,
              borderRadius: 4,
              borderColor: "#d3d3d3",
              borderWidth: 0.7,
            }}
          >
            <Image
              source={{
                uri: "https://images.melorra.com/image/upload/h_500,w_500,f_auto,q_auto/v1591419772/live-melorra/dev/catalogue/images/EA/OPT/580/W20CEA03F_S_580.jpg",
              }}
              resizeMode="contain"
              style={{ width: null, height: null, flex: 1 }}
            />
          </View>
        </View>
      </View>
      <View
        style={{ borderColor: "#D3D3D3", borderBottomWidth: 1, marginTop: 30 }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
        //</View>onPress={() => onPress()}
        >
          <Text style={styles.removeTextStyle}>Remove</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", justifyContent: "center" }}></View>
        <View style={styles.verticleLine}></View>
        <TouchableOpacity>
          <Text style={styles.moveTowishlistTextStyle}>Move to wishlist</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 12, backgroundColor: "#f5f5f6" }}></View>
    </View>
  );
};

const Bag = (props) => {
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: "Bag",
      headerTitleStyle: { lineHeight: 21, letterSpacing: 1.7, color: "#000" },
      headerTitleAlign: "center",
      headerStyle: {
        elevation: 0,
        shadowColor: "transparent",
      },
    });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const renderItemComponent = () => {
    return <BagCard onPress={() => openModal(true)} />;
  };

  const openModal = (bool) => {
    setIsVisible(bool);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItemComponent}
        ListFooterComponent={
          <View style={{ backgroundColor: "#FFF", marginBottom: 12 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 20,
                marginTop: 28,
              }}
            >
              <View>
                <Text style={styles.cartTotalText}>Product Total</Text>
                <Text style={styles.cartTotalText}>Product Discount</Text>
                <Text style={styles.cartTotalText}>Delivery Charges</Text>
              </View>
              <View>
                <Text style={styles.cartTotalValue}>₹ 73,951</Text>
                <Text style={[styles.cartTotalValue, { color: "#2E9A37" }]}>
                  ₹ -12106
                </Text>
                <Text style={styles.cartTotalValue}>₹ FREE</Text>
              </View>
            </View>

            <View
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderRadius: 1,
                marginHorizontal: 20,
                borderColor: "#D3D3D3",
                marginBottom: 10,
                marginTop: 16,
              }}
            />

            <View
              style={{
                marginHorizontal: 20,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text style={styles.finalAmt}>Total Amount</Text>
              <Text style={styles.finalAmt}>61,845</Text>
            </View>
          </View>
        }
      />

      <View
        style={{
          height: Dimensions.get("screen").height * 0.071,
          backgroundColor: "#FFF",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.totalAmtValue}>₹ 61,845</Text>
          <Text style={styles.totalAmtText}>Total Amount</Text>
        </View>
        <View>
          {/* <RoundedFormButton
                 title='CONTINUE'
                 buttonStyle={{width:Dimensions.get('screen').width - 150}}
                 onPress={() => props.navigation.navigate('Favourite')}
                /> */}
          <FormButton
            title="CONTINUE"
            buttonStyle={{ width: Dimensions.get("screen").width - 150 }}
            onPress={() => null}
          />
        </View>
      </View>
      <Modal
        animationType={"fade"}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.modal}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center", marginTop: 12 }}>
                <View
                  style={{
                    borderRadius: 4,
                    borderColor: "#d3d3d3",
                    borderWidth: 0.7,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://images.melorra.com/image/upload/h_500,w_500,f_auto,q_auto/v1591419772/live-melorra/dev/catalogue/images/EA/OPT/580/W20CEA03F_S_580.jpg",
                    }}
                    style={{ width: 100, height: 70, borderRadius: 4 }}
                  />
                </View>
              </View>
              <View style={{ flex: 1.85, marginTop: 14 }}>
                <Text style={styles.modalTitleText}>Effortless Swerve</Text>
                <Text style={styles.modalSubTitleText}>
                  Are you sure want to remove this item?
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 16,
                justifyContent: "space-around",
                marginBottom: 14,
              }}
            >
              <TouchableOpacity
                onPress={() => setIsVisible(!isVisible)}
                activeOpacity={0.8}
                style={{
                  paddingVertical: 5,
                  backgroundColor: "#f5f5f6",
                  flex: 1,
                  marginHorizontal: 10,
                  alignItems: "center",
                }}
              >
                <Text style={styles.cancelButtonStyle}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#f5f5f6",
                  flex: 1,
                  marginHorizontal: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={styles.cancelButtonStyle}>REMOVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      {/* <Button
           title="Click To Open Modal"
           onPress = {() => {openModal(true)}}
        /> */}
      {/* {isVisible &&  <View style={{position:'absolute',top:0,bottom:0,left:0,right:0,backgroundColor: '#000000AA'}}>

        </View> } */}
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  itemTextTitle: {
    fontSize: 13,
    fontFamily: "Montserrat-SemiBold",
    marginTop: "1.3rem",
    marginLeft: 12,
    color: "#282c3f",
  },
  itemPrice: {
    marginLeft: 12,
    marginTop: 5,
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    color: "#282c3f",
  },
  discountItemPrice: {
    marginTop: 5,
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#282c3f",
    marginLeft: 5,
    marginBottom: 10,
    textDecorationLine: "line-through",
  },
  goldText: {
    fontSize: 12,
    color: "#282c3f",
    fontFamily: "Montserrat-Regular",
  },
  goldValue: {
    fontSize: 12,
    color: "#282c3f",
    fontFamily: "Montserrat-SemiBold",
  },
  removeTextStyle: {
    fontSize: 14,
    color: "#282c3f",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "400",
    paddingVertical: 19,
  },
  moveTowishlistTextStyle: {
    fontSize: 14,
    color: "#004AAC",
    fontFamily: "Montserrat-SemiBold",
    fontWeight: "600",
    paddingVertical: 19,
  },
  verticleLine: {
    height: "60%",
    width: 2,
    backgroundColor: "#d3d3d3",
    marginHorizontal: 45,
  },
  totalAmtValue: {
    fontSize: 14,
    color: "#282c3f",
    fontFamily: "Montserrat-SemiBold",
  },
  totalAmtText: {
    color: "#004AAC",
    fontFamily: "Montserrat-SemiBold",
    fontSize: 11,
  },
  cartTotalText: {
    color: "#8A8A8F",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginBottom: 8,
  },
  cartTotalValue: {
    color: "#282c3f",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginBottom: 8,
  },
  finalAmt: {
    color: "#282c3f",
    fontSize: 16,
    fontFamily: "Montserrat-SemiBold",
  },
  modal: {
    backgroundColor: "pink",
    width: "98%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  text: {
    color: "#3f2949",
    marginTop: 10,
  },
  modalSubTitleText: {
    color: "#8A8A8F",
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    marginTop: 8,
  },
  modalTitleText: {
    color: "#282c3f",
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
  },
  cancelButtonStyle: {
    color: "#8A8A8F",
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
  },
  blurViewStyle: {
    flex: 1,
    backgroundColor: "#000000AA",
  },
});

export default Bag;
