import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  RefreshControl,
  ImageBackground,
  Animated,
  SafeAreaView,
} from "react-native";
import styles from "@home/HomeStyle";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "react-native-linear-gradient";
import Carousel, {
  ParallaxImage,
  Pagination,
} from "react-native-snap-carousel";
import Heading from "../../component/Common/Heading";
import IconPack from "@values/IconPack";

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
const { height, width } = Dimensions.get("screen");
var isFetching = false;
const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.";

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
    categoryName: "Chains",
    categoryImage: require("@home_assets/pendants.jpg"),
  },
  {
    id: "8",
    categoryName: "All Jewellery",
    categoryImage: require("@home_assets/4.jpg"),
  },
  {
    id: "9",
    categoryName: "Chains",
    categoryImage: require("@home_assets/5.jpg"),
  },
];

const sliderData = [
  {
    id: "1",
    sliderImage: require("@home_assets/1.jpg"),
    title: "Modular",
    subtitle: LOREM_IPSUM,
  },
  {
    id: "2",
    sliderImage: require("@home_assets/2.jpg"),
    title: "Solitair Rings",
    subtitle: LOREM_IPSUM,
  },
  {
    id: "3",
    sliderImage: require("@home_assets/3.jpg"),
    title: "Affordable Pendants",
    subtitle: LOREM_IPSUM,
  },
  { id: "4", sliderImage: require("@home_assets/4.jpg"), title: "Ultra Light" },
  {
    id: "5",
    sliderImage: require("@home_assets/5.jpg"),
    title: "Top Modular ",
  },
];

const infoData = [
  {
    id: "1",
    infoName: "BIS Hallmarked Jewellery",
    infoImage: require("@home_assets/recycle.png"),
  },
  {
    id: "2",
    infoName: "Cash on\nDelivery",
    infoImage: require("@home_assets/recycle.png"),
  },
  {
    id: "3",
    infoName: "Lifetime \nExchange",
    infoImage: require("@home_assets/recycle.png"),
  },
  {
    id: "4",
    infoName: "30 Days\nReturn Policy",
    infoImage: require("@home_assets/recycle.png"),
  },
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSliderIndex: 0,
      scrollIndicatorY: new Animated.Value(0),
    };
  }

  getCategory = (item, index) => {
    const { categoryInnerView, categoryImageView, categoryImg, categoryText } =
      styles;

    return (
      <TouchableOpacity
        style={categoryInnerView}
        key={`category-${index}`}
        onPress={() => this.props.navigation.navigate("Products")}
      >
        <View style={categoryImageView}>
          <ShimmerPlaceholder
            width={55}
            height={55}
            style={{ borderRadius: 55 / 2 }}
            visible={!isFetching}
          >
            <Image style={categoryImg} source={item.categoryImage} />
          </ShimmerPlaceholder>
        </View>

        <ShimmerPlaceholder
          width={55}
          height={15}
          style={{ paddingTop: 7 }}
          visible={!isFetching}
        >
          <Text numberOfLines={1} style={categoryText}>
            {item.categoryName}
          </Text>
        </ShimmerPlaceholder>
      </TouchableOpacity>
    );
  };

  getSliderItemParallel = (data, index, parallaxProps) => {
    const item = data.item;
    return (
      <View style={styles.sliderView2}>
        <Image
          source={item.sliderImage}
          parallaxFactor={0.4}
          {...parallaxProps}
          resizeMode="stretch"
        />
      </View>
    );
  };

  getpagination() {
    const { activeSlide } = this.state;
    const { infoText } = styles;
    return (
      <View style={{ marginBottom: height * 0.16 }}>
        {!isFetching && (
          <Pagination
            dotsLength={sliderData.length}
            activeDotIndex={activeSlide}
            dotStyle={styles.dotStyle}
          />
        )}
      </View>
    );
  }

  bannerView = () => {
    const { activeSliderIndex } = this.state;

    return (
      <>
        <View style={styles.sliderView}>
          <ScrollView
            onScroll={({ nativeEvent }) => this.onScrollBanner(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            style={styles.sliderView}
          >
            {sliderData.map((image, index) => (
              <ShimmerPlaceholder
                key={`banner-${index}`}
                height={height * 0.35}
                width={width}
                visible={!isFetching}
              >
                <Image
                  key={image.id}
                  source={image.sliderImage}
                  resizeMode="stretch"
                  style={styles.sliderView}
                />
              </ShimmerPlaceholder>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sliderDot}>
          {!isFetching &&
            sliderData.map((image, index) => (
              <Text
                key={`banner-text-${index}`}
                style={
                  activeSliderIndex === index
                    ? styles.dotActive
                    : styles.dotInActive
                }
              >
                •
              </Text>
            ))}
        </View>
      </>
    );
  };

  onScrollBanner = (nativeEvent) => {
    const { activeSliderIndex } = this.state;

    if (nativeEvent) {
      const currentSlide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (currentSlide !== activeSliderIndex) {
        this.setState({ activeSliderIndex: currentSlide });
      }
    }
  };

  getInfo = (item, index) => {
    const { infoView, infoImageView, infoImg, infoText } = styles;

    return (
      <View style={infoView} key={`info-${index}`}>
        <View style={infoImageView}>
          <ShimmerPlaceholder width={65} height={55} visible={!isFetching}>
            <Image style={infoImg} source={item.infoImage} />
          </ShimmerPlaceholder>
        </View>

        <ShimmerPlaceholder
          width={65}
          height={15}
          style={{ paddingTop: 7 }}
          visible={!isFetching}
        >
          <Text numberOfLines={2} style={infoText}>
            {item.infoName}
          </Text>
        </ShimmerPlaceholder>
      </View>
    );
  };

  exclusiveBanner({ item, index }, parallaxProps) {
    const {
      textBold15,
      carouselSubText,
      titleView,
      carouselImage,
      carouselImageView,
      imageContainer,
      imageShimmer,
      centerTop7,
    } = styles;
    return (
      <TouchableOpacity key={`exclusive-${index}`} style={carouselImageView}>
        <ShimmerPlaceholder
          width={220}
          height={200}
          style={imageShimmer}
          visible={!isFetching}
        >
          <Image
            source={item.sliderImage}
            containerStyle={imageContainer}
            style={carouselImage}
            parallaxFactor={0.3}
            {...parallaxProps}
          />
        </ShimmerPlaceholder>
        <View style={titleView}>
          <ShimmerPlaceholder
            width={100}
            height={15}
            style={centerTop7}
            visible={!isFetching}
          >
            <Text numberOfLines={1} style={textBold15}>
              {item.title}
            </Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            width={200}
            height={15}
            style={centerTop7}
            visible={!isFetching}
          >
            <Text numberOfLines={2} style={carouselSubText}>
              {item.subtitle}
            </Text>
          </ShimmerPlaceholder>
        </View>
      </TouchableOpacity>
    );
  }

  renderCategories = (item, index) => {
    return (
      <TouchableOpacity
        key={`recent-categories-${index}`}
        style={styles.categoryCard}
        onPress={() => this.props.navigation.navigate("Products")}
      >
        <ShimmerPlaceholder
          width={width / 2 - 5}
          height={190}
          style={styles.categoryCard}
          visible={!isFetching}
        >
          <ImageBackground
            imageStyle={styles.imageBgBorder}
            style={styles.imageStyle}
            source={item.categoryImage}
          >
            <View style={styles.contentView}>
              <Text numberOfLines={1} style={styles.textWhiteBold20}>
                {item.categoryName}
              </Text>
              <Text numberOfLines={1} style={styles.textWhiteMedium12}>
                Starts from Rs 32321
              </Text>
            </View>
          </ImageBackground>
        </ShimmerPlaceholder>
      </TouchableOpacity>
    );
  };

  discoverCollections = (item, index) => {
    const {
      textBlack18Med,
      carouselSubText,
      titleView,
      collectionImage,
      collectionImageView,
      imageContainer,
      imageShimmer,
      centerTop7,
    } = styles;

    return (
      <TouchableOpacity key={`collection-${index}`} style={collectionImageView}>
        <ShimmerPlaceholder
          width={width - 70}
          height={height * 0.35}
          style={imageShimmer}
          visible={!isFetching}
        >
          <Image source={item.sliderImage} style={collectionImage} />
        </ShimmerPlaceholder>

        <View style={titleView}>
          <ShimmerPlaceholder
            width={100}
            height={15}
            style={isFetching ? centerTop7 : null}
            visible={!isFetching}
          >
            <Text numberOfLines={1} style={textBlack18Med}>
              Woven Totes
            </Text>
          </ShimmerPlaceholder>
          <ShimmerPlaceholder
            width={200}
            height={15}
            style={isFetching ? centerTop7 : null}
            visible={!isFetching}
          >
            <Text numberOfLines={2} style={carouselSubText}>
              Collection
            </Text>
          </ShimmerPlaceholder>
        </View>
      </TouchableOpacity>
    );
  };

  followUsView = () => {
    return (
      <View style={styles.socialIconContainer}>
        <Text style={styles.textBold15}>Share your #E-Kart story with us</Text>
        <Text
          style={[
            styles.categoryText,
            { textAlign: "center", marginVertical: 3 },
          ]}
        >
          Use the #E-Kart in your instagram pics to get featured on our page
        </Text>
        <View style={styles.socialLogoView}>
          <Image
            source={IconPack.FACEBOOK_ICON}
            style={styles.socialIcon}
            resizeMode="contain"
          />
          <Image
            source={IconPack.YOUTUBE_ICON}
            style={[
              styles.socialIcon,
              { marginHorizontal: 20, width: 22, height: 22 },
            ]}
            resizeMode="contain"
          />
          <Image
            source={IconPack.INSTAGRAM_ICON}
            style={styles.socialIcon}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  endPlaceholderView = () => {
    return (
      <View style={styles.placeholderView}>
        <Image source={IconPack.TICK} style={styles.checkCircle} />
        <Text style={styles.placeholder}>
          {"That’s it for today.\n"}
          <Text style={styles.placeholderSemiBold}>You’re all caught up!</Text>
        </Text>
      </View>
    );
  };

  render() {
    const {
      categoryMainView,
      infoMainView,
      exclusiveView,
      exclusiveTitleView,
      infoTop,
      exclusiveSubText,
      textBlack18,
      infoShadowCard,
    } = styles;

    const { scrollIndicatorY } = this.state;
    return (
      <SafeAreaView>
        <Animated.ScrollView
          style={styles.container}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          {/*Top Category */}
          <View style={categoryMainView}>
            <FlatList
              horizontal={true}
              data={categoryDataSource.slice(0, 6)}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => this.getCategory(item, index)}
              keyExtractor={(item, index) => `category-${item.id}`}
            />
          </View>

          {/* Banner */}
          {this.bannerView()}

          {/* Info */}
          <View style={isFetching ? infoTop : infoMainView}>
            <FlatList
              horizontal={true}
              data={infoData}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => this.getInfo(item, index)}
              keyExtractor={(item, index) => `info-${item.id}`}
              style={infoShadowCard}
            />
          </View>

          {/* Bestsellers */}
          <View style={exclusiveView}>
            <Heading
              heading={"Discover our Collections"}
              subHeading={LOREM_IPSUM}
              isVisible={isFetching}
              showViewAll={true}
              onPress={null}
            />
            <Animated.ScrollView
              horizontal
              contentContainerStyle={{ marginHorizontal: 15, marginTop: 20 }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollIndicatorY } } }],
                { useNativeDriver: true }
              )}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
            >
              {sliderData.map((data, index) =>
                this.discoverCollections(data, index)
              )}
            </Animated.ScrollView>
          </View>

          {/* <ScrollProgressComponent
                        containerStyle={styles.scollComponentStyle}
                        scrollPositionStyle={{
                            transform: [
                                {
                                    translateX: Animated.multiply(
                                        scrollIndicatorY,
                                        0.1
                                    ).interpolate({
                                        inputRange: [0, 42],
                                        outputRange: [0, 42],
                                        extrapolate: 'clamp',
                                    }),
                                },
                            ],
                        }}
                    /> */}

          {/* Exclusive */}
          <View style={exclusiveView}>
            <Heading
              heading={"Shop 0ur Exclusives"}
              subHeading={LOREM_IPSUM}
              isVisible={isFetching}
              showViewAll={true}
              onPress={null}
            />
            <Carousel
              sliderWidth={width}
              sliderHeight={200}
              itemWidth={240}
              itemHeight={200}
              data={sliderData}
              renderItem={(data, index) => this.exclusiveBanner(data, index)}
              hasParallaxImages={true}
            />
          </View>

          {/* Categories */}
          <View style={exclusiveView}>
            <Heading
              heading={"Shop by Categories"}
              showViewAll={false}
              isVisible={isFetching}
            />
            <FlatList
              data={categoryDataSource}
              scrollEnabled={false}
              renderItem={({ item, index }) =>
                this.renderCategories(item, index)
              }
              numColumns={2}
              keyExtractor={(item, index) => `recent-category-${item.id}`}
              contentContainerStyle={{
                marginRight: 10,
                marginTop: isFetching ? 0 : -20,
                paddingBottom: 20,
              }}
            />
          </View>

          {/* follow us  */}
          {this.followUsView()}

          {/* End placeholder */}
          {this.endPlaceholderView()}
        </Animated.ScrollView>
      </SafeAreaView>
    );
  }
}

ScrollProgressComponent = ({ containerStyle, scrollPositionStyle }) => (
  <View style={containerStyle || null}>
    <View style={styles.scollProgressContainer} />
    <Animated.View
      style={[styles.scollPosition, scrollPositionStyle || null]}
    />
  </View>
);
