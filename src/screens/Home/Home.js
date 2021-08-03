import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image,
    FlatList, Dimensions, ScrollView,
    RefreshControl,
    ImageBackground,
} from 'react-native';
import styles from '@home/HomeStyle';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { height, width } = Dimensions.get('screen')
var isFetching = false;
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

const categoryDataSource = [
    { id: '1', categoryName: 'Ring', categoryImage: require('@assets/ring.jpg') },
    { id: '2', categoryName: 'Chains', categoryImage: require('@assets/chains.jpg') },
    { id: '3', categoryName: 'Earrings', categoryImage: require('@assets/earrings.jpg') },
    { id: '4', categoryName: 'Pendants', categoryImage: require('@assets/pendants.jpg') },
    { id: '5', categoryName: 'All Jewellery', categoryImage: require('@assets/ring.jpg') },
]

const sliderData = [
    { id: '1', sliderImage: require('@assets/slider3.jpg'), title: 'Modular', subtitle: LOREM_IPSUM },
    { id: '2', sliderImage: require('@assets/slider2.jpg'), title: 'Solitair Rings', subtitle: LOREM_IPSUM },
    { id: '3', sliderImage: require('@assets/slider1.jpg'), title: 'Affordable Pendants', subtitle: LOREM_IPSUM },
    { id: '4', sliderImage: require('@assets/slider4.png'), title: 'Ultra Light' },
    { id: '5', sliderImage: require('@assets/slider5.jpg'), title: 'Top Modular ' },
]

const infoData = [
    { id: '1', infoName: 'BIS Hallmarked Jewellery', infoImage: require('@assets/recycle.png') },
    { id: '2', infoName: 'Cash on\nDelivery', infoImage: require('@assets/recycle.png') },
    { id: '3', infoName: 'Lifetime \nExchange', infoImage: require('@assets/recycle.png') },
    { id: '4', infoName: '30 Days\nReturn Policy', infoImage: require('@assets/recycle.png') },
]


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSliderIndex: 0
        };
    }



    getCategory = (item) => {
        const { categoryInnerView, categoryImageView, categoryImg, categoryText, } = styles;

        return (
            <TouchableOpacity style={categoryInnerView}>
                <View style={categoryImageView}>
                    <ShimmerPlaceholder width={55} height={55} style={{ borderRadius: 55 / 2 }} visible={!isFetching}>
                        <Image
                            style={categoryImg}
                            source={item.categoryImage}
                        />
                    </ShimmerPlaceholder>
                </View>

                <ShimmerPlaceholder width={55} height={15} style={{ paddingTop: 7 }} visible={!isFetching}>
                    <Text numberOfLines={1} style={categoryText}>{item.categoryName}</Text>
                </ShimmerPlaceholder>
            </TouchableOpacity>
        );
    }

    getSliderItemParallel = (data, index, parallaxProps) => {
        const item = data.item
        return (
            <View style={styles.sliderView2}>
                <Image
                    source={item.sliderImage}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                    resizeMode='stretch'
                />
            </View>

        );
    }

    getpagination() {
        const { activeSlide } = this.state;
        const { infoText } = styles;
        return (
            <View style={{ marginBottom: height * 0.16, }}>
                {!isFetching &&
                    <Pagination
                        dotsLength={sliderData.length}
                        activeDotIndex={activeSlide}
                        dotStyle={styles.dotStyle}
                    />
                }
            </View>

        );
    }

    bannerView = () => {
        const { activeSliderIndex } = this.state

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
                        {sliderData.map((image, index) =>
                            <ShimmerPlaceholder height={height * 0.32} width={width} visible={!isFetching}>
                                <Image
                                    key={image.id}
                                    source={image.sliderImage}
                                    resizeMode='stretch'
                                    style={styles.sliderView}
                                />
                            </ShimmerPlaceholder>

                        )}
                    </ScrollView>
                </View>

                <View style={styles.sliderDot}>
                    {!isFetching && sliderData.map((image, index) =>
                        <Text
                            key={index}
                            style={activeSliderIndex === index ? styles.dotActive : styles.dotInActive}
                        >•
                        </Text>
                    )}
                </View>
            </>
        );
    }

    onScrollBanner = (nativeEvent) => {
        const { activeSliderIndex } = this.state

        if (nativeEvent) {
            const currentSlide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (currentSlide !== activeSliderIndex) {
                this.setState({ activeSliderIndex: currentSlide })
            }
        }
    }

    getInfo = (item) => {
        const { infoView, infoImageView, infoImg, infoText, } = styles;

        return (
            <View style={infoView} key={item.id}>
                <View style={infoImageView}>
                    <ShimmerPlaceholder
                        width={65}
                        height={55}
                        visible={!isFetching}>
                        <Image
                            style={infoImg}
                            source={item.infoImage}
                        />
                    </ShimmerPlaceholder>
                </View>

                <ShimmerPlaceholder
                    width={65}
                    height={15}
                    style={{ paddingTop: 7 }}
                    visible={!isFetching}>
                    <Text numberOfLines={2} style={infoText}>{item.infoName}</Text>
                </ShimmerPlaceholder>
            </View>
        );
    }


    exclusiveBanner({ item, index }, parallaxProps) {
        const { textBold15, carouselSubText, titleView,
            carouselImage, carouselImageView, imageContainer,
            imageShimmer } = styles
        return (
            <TouchableOpacity key={'b' + index} style={carouselImageView} >
                <ShimmerPlaceholder
                    width={220}
                    height={200}
                    style={imageShimmer}
                    visible={!isFetching}>
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
                        style={{ paddingTop: 7, alignSelf: 'center' }}
                        visible={!isFetching}>
                        <Text numberOfLines={1} style={textBold15}>{item.title}</Text>
                    </ShimmerPlaceholder>
                    <ShimmerPlaceholder
                        width={200}
                        height={15}
                        style={{ paddingTop: 7, alignSelf: 'center' }}
                        visible={!isFetching}>
                        <Text numberOfLines={2} style={carouselSubText}>{item.subtitle}</Text>
                    </ShimmerPlaceholder>
                </View>

            </TouchableOpacity>
        );
    }


    renderCategories = (item, index) => {

        return (
            <TouchableOpacity key={'#' + item.id} style={styles.card}>
                <ShimmerPlaceholder
                    width={width / 2 - 15}
                    height={height * 0.23}
                    style={styles.card}
                    visible={!isFetching}>
                    <ImageBackground
                        imageStyle={styles.imageBgBorder}
                        style={styles.imageStyle}
                        source={item.categoryImage}
                    >
                        <View style={styles.contentView}>
                            <Text numberOfLines={1} style={styles.textWhiteBold16}>
                                {item.categoryName}
                            </Text>
                            <Text numberOfLines={1} style={styles.textWhiteMedium12}>Starts from Rs 32321</Text>
                        </View>
                    </ImageBackground>
                </ShimmerPlaceholder>

            </TouchableOpacity >
        )
    };



    render() {
        const { categoryMainView, infoMainView,
            exclusiveView, exclusiveTitleView,
            infoTop, exclusiveSubText,
            textBlack16 } = styles

        return (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

                {/*Top Category */}
                <View style={categoryMainView}>
                    <FlatList
                        horizontal={true}
                        data={categoryDataSource}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => this.getCategory(item)}
                        keyExtractor={(item, index) => item.id}
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
                        renderItem={({ item, index }) => this.getInfo(item)}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>


                {/* Exclusive */}
                <View style={exclusiveView}>

                    <View style={exclusiveTitleView}>
                        <ShimmerPlaceholder
                            width={200}
                            height={15}
                            style={exclusiveTitleView}
                            visible={!isFetching}>
                            <Text numberOfLines={1} style={textBlack16}>Shop 0ur Exclusives</Text>
                        </ShimmerPlaceholder>

                        <ShimmerPlaceholder
                            width={width - 60}
                            height={15}
                            style={exclusiveTitleView}
                            visible={!isFetching}>
                            <Text numberOfLines={2} style={exclusiveSubText}>{LOREM_IPSUM}</Text>
                        </ShimmerPlaceholder>
                    </View>

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

                    <View style={exclusiveTitleView}>
                        <ShimmerPlaceholder
                            width={200}
                            height={15}
                            style={exclusiveTitleView}
                            visible={!isFetching}>
                            <Text numberOfLines={1} style={textBlack16}>Shop by Categories</Text>
                        </ShimmerPlaceholder>
                    </View>

                    <FlatList
                        data={categoryDataSource}
                        renderItem={({ item, index }) => this.renderCategories(item, index)}
                        numColumns={2}
                        keyExtractor={(item, index) => item.id}
                        contentContainerStyle={{ paddingVertical: 5 }}
                    />
                </View>

            </ScrollView>
        );
    }
}
