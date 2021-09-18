import { Dimensions, Platform } from "react-native";
import color from "@values/Colors";
import Theme from "@values/Theme";

const { height, width } = Dimensions.get("screen");
const hRem = height / 1600;
const wRem = width / 739;

export default {
  container: {
    flex: 1,
  },
  textWhiteBold20: {
    fontSize: 20,
    fontFamily: Theme.fontMontSerratBold,
    color: color.white,
    letterSpacing: 0.2,
  },
  textWhiteMedium12: {
    fontSize: 12,
    fontFamily: Theme.fontMontSerratSemiBold,
    color: color.white,
  },
  textBlack18: {
    fontSize: 18,
    fontFamily: Theme.fontMontSerratBold,
    color: color.black,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  textBlack18Med: {
    fontSize: 18,
    fontFamily: Theme.fontMontSerratMedium,
    color: color.black,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  textWhite12: {
    fontSize: 12,
    fontFamily: Theme.fontMontSerratBold,
    color: color.white,
  },
  textBold15: {
    fontFamily: Theme.fontMontSerratBold,
    fontSize: 16,
    textAlign: "center",
  },

  // category
  categoryMainView: {
    height: 110,
    width: width,
    backgroundColor: color.white,
  },
  categoryInnerView: {
    justifyContent: "center",
    alignItems: "center",
    width: 75,
  },
  categoryImageView: {
    height: 55,
    width: 55,
    marginTop: 10,
    backgroundColor: color.grey,
    justifyContent: "center",
    borderRadius: 55 / 2,
    alignItems: "center",
  },
  categoryImg: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
  },
  categoryText: {
    fontSize: 12,
    fontFamily: Theme.fontMontSerratRegular,
  },

  // slider

  sliderView: {
    width: width,
    height: height * 0.35,
  },
  sliderView2: {
    width: width,
    height: 180,
  },
  sliderImageView2: {
    marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    backgroundColor: color.white,
    borderRadius: 10,
    width: width - 100,
    height: 180,
    marginHorizontal: 15,
  },
  dotActive: {
    margin: 3,
    color: color.black,
    fontSize: 30,
  },
  dotInActive: {
    margin: 3,
    color: color.grey,
    fontSize: 30,
  },
  sliderDot: {
    top: -10,
    flexDirection: "row",
    alignSelf: "center",
  },

  //info
  infoMainView: {
    height: 80,
    width: width,
    backgroundColor: color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.23,
    shadowRadius: 9.32,
    elevation: 2,
    marginBottom: 5,
  },
  infoTop: {
    height: 80,
    width: width,
    backgroundColor: color.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 6,
    marginBottom: 5,
    marginTop: 20,
  },
  infoShadowCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 4,
    backgroundColor: color.white,
  },
  infoView: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
  },
  infoImageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  infoImg: {
    height: 25,
    width: 25,
  },
  infoText: {
    fontSize: 10,
    fontFamily: Theme.fontMontSerratRegular,
    textAlign: "center",
  },

  //discover collection
  collectionImage: {
    height: height * 0.35,
    width: width - 70,
    backgroundColor: color.white,
    marginVertical: 15,
    borderRadius: 20,
  },
  collectionImageView: {
    alignSelf: "flex-start",
    width: width - 70,
    marginRight: 20,
  },
  scollComponentStyle: {
    marginLeft: 15,
    marginBottom: 30,
  },
  scollProgressContainer: {
    width: 70,
    height: 5,
    borderRadius: 100,
    backgroundColor: color.black,
    opacity: 0.1,
  },
  scollPosition: {
    width: 28,
    height: 5,
    borderRadius: 100,
    backgroundColor: color.black,
    position: "absolute",
  },

  // exclusive carousel
  exclusiveView: {
    marginTop: 20,
  },
  carouselImageView: {
    height: 260,
    width: 220,
    backgroundColor: color.white,
    marginVertical: 20,
  },
  imageContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageShimmer: {
    borderRadius: 20,
    alignSelf: "center",
  },
  carouselImage: {
    width: 220,
    height: 200,
  },
  titleView: {
    marginVertical: 10,
    alignSelf: "center",
  },
  carouselSubText: {
    paddingTop: 3,
    fontFamily: Theme.fontMontSerratRegular,
    fontSize: 12,
    textAlign: "center",
  },
  centerTop7: {
    paddingTop: 7,
    alignSelf: "center",
  },

  // Categories

  categoryCard: {
    height: 190,
    width: (width - 20) / 2 - 2.5,
    borderRadius: 20,
    marginTop: 10,
    marginLeft: 5,
    backgroundColor: color.white,
  },
  imageStyle: {
    height: 190,
    width: (width - 20) / 2 - 2.5,
    backgroundColor: color.grey,
    borderRadius: 20,
    marginLeft: 5,
  },
  imageBgBorder: {
    borderRadius: 20,
  },
  contentView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  //follow us
  socialIconContainer: {
    marginHorizontal: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  socialLogoView: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 50,
    marginTop: 15,
  },
  socialIcon: { width: 20, height: 20 },

  // End Placeholder
  placeholderView: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: color.secondary_grey,
  },
  checkCircle: {
    height: 30,
    width: 30,
    marginTop: 50,
  },
  placeholder: {
    fontFamily: Theme.fontMontSerratMedium,
    fontSize: 16,
    color: color.grey,
    lineHeight: 20,
    marginTop: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  placeholderSemiBold: {
    fontFamily: Theme.fontMontSerratSemiBold,
    marginBottom: 50,
  },
};
