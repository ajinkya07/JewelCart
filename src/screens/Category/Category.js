import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Dimensions, ScrollView, RefreshControl } from 'react-native';
import styles from '@home/HomeStyle';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { ParallaxImage, Pagination } from 'react-native-snap-carousel';


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { height, width } = Dimensions.get('screen')
var isFetching = true;


const categoryDataSource = [
    { id: '1', categoryName: 'Ring', categoryImage: require('@assets/ring.jpg') },
    { id: '2', categoryName: 'Chains', categoryImage: require('@assets/chains.jpg') },
    { id: '3', categoryName: 'Earrings', categoryImage: require('@assets/earrings.jpg') },
    { id: '4', categoryName: 'Pendants', categoryImage: require('@assets/pendants.jpg') },
    { id: '5', categoryName: 'All Jewellery', categoryImage: require('@assets/ring.jpg') },
]

const sliderData = [
    { id: '1', categoryImage: require('@assets/slider1.jpg') },
    { id: '2', categoryImage: require('@assets/slider2.jpg') },
    { id: '3', categoryImage: require('@assets/slider3.jpg') },
    { id: '4', categoryImage: require('@assets/slider4.png') },
    { id: '5', categoryImage: require('@assets/slider5.jpg') },
]


const infoData = [
    { id: '1', infoName: 'BIS Hallmarked Jewellery', infoImage: require('@assets/recycle.png') },
    { id: '2', infoName: 'Cash on\nDelivery', infoImage: require('@assets/recycle.png') },
    { id: '3', infoName: 'Lifetime \nExchange', infoImage: require('@assets/recycle.png') },
    { id: '4', infoName: '30 Days\nReturn Policy', infoImage: require('@assets/recycle.png') },
]


export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0
        };
    }

    onRefresh = () => {
    }

    getCategory = (item) => {

        const {
            categoryInnerView,
            categoryImageView,
            categoryImg,
            categoryText,
        } = styles;

        return (
            <TouchableOpacity style={categoryInnerView}>
                <View style={categoryImageView}>
                    <ShimmerPlaceholder width={65} height={65} style={{ borderRadius: 65 / 2 }} visible={!isFetching}>
                        <Image
                            style={categoryImg}
                            source={item.categoryImage}
                        />
                    </ShimmerPlaceholder>
                </View>

                <ShimmerPlaceholder width={65} height={15} style={{ paddingTop: 7 }} visible={!isFetching}>
                    <Text numberOfLines={1} style={categoryText}>{item.categoryName}</Text>
                </ShimmerPlaceholder>
            </TouchableOpacity>
        );
    }

    getSliderItemParallel = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.sliderView2}>
                <ParallaxImage
                    source={item.categoryImage}
                    containerStyle={styles.imageContainer}
                    style={{ height: height * 0.33, width: width }}
                    parallaxFactor={0.4}
                    {...parallaxProps}
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

    getSliderItem = ({ item, index }) => {
        return (
            <View style={styles.sliderView}>
                <ShimmerPlaceholder height={height * 0.33} width={width} visible={!isFetching}>
                    <Image
                        source={item.categoryImage}
                        style={{ height: height * 0.33, width: width }}
                        resizeMode='stretch'
                    />
                </ShimmerPlaceholder>
            </View>
        );
    }

    getInfo = (item) => {
        const { infoView, infoImageView, infoImg, infoText, } = styles;

        return (
            <View style={infoView}>
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




    render() {
        const { categoryMainView, infoMainView } = styles
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => this.onRefresh()} />
                }
            >

                {/* Category */}
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
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={this.getSliderItem}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this.getpagination()}

                {/* Info */}
                <View style={infoMainView}>
                    <FlatList
                        horizontal={true}
                        data={infoData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => this.getInfo(item)}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>

                {/* <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={sliderData}
                    renderItem={this.getSliderItemParallel}
                    sliderWidth={width}
                    sliderHeight={width}
                    itemWidth={width - 60}
                    hasParallaxImages={true}
                /> */}

            </ScrollView>
        );
    }
}
