import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image,
    FlatList, Dimensions,
    RefreshControl,
    ImageBackground,
    Animated,
    SafeAreaView,
    StyleSheet,
    ImageBackgroundBase
} from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import color from '@values/colors'
import EStyleSheet from 'react-native-extended-stylesheet';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { height, width } = Dimensions.get('screen')
var isFetching = false;


const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

const categoryDataSource = [
    { id: '1', categoryName: 'Rings', categoryImage: require('@assets/ring.jpg'), bgColor: color.bg1, },
    { id: '2', categoryName: 'Chains', categoryImage: require('@assets/chains.jpg'), bgColor: color.bg2, },
    { id: '3', categoryName: 'Earrings', categoryImage: require('@assets/earrings.jpg'), bgColor: color.bg3, },
    { id: '4', categoryName: 'Pendants', categoryImage: require('@assets/pendants.jpg'), bgColor: color.bg4 },
    { id: '5', categoryName: 'Pendants', categoryImage: require('@assets/1.jpg'), bgColor: color.bg5, },
    { id: '6', categoryName: 'Pendants', categoryImage: require('@assets/2.jpg'), bgColor: color.bg6, },
    { id: '7', categoryName: 'Pendants', categoryImage: require('@assets/3.jpg'), bgColor: color.bg7, },
    { id: '8', categoryName: 'All Jewellery', categoryImage: require('@assets/4.jpg'), bgColor: color.bg2, },
    { id: '9', categoryName: 'All Jewellery', categoryImage: require('@assets/5.jpg'), bgColor: color.bg3, },

]


export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView>
                <Animated.ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.bottom10}>
                    {categoryDataSource.map((item, index) => {
                        return (
                            <ShimmerPlaceholder
                                width={width / 2 - 10}
                                height={110}
                                style={styles.cardView}
                                visible={!isFetching}>
                                <TouchableOpacity key={'c' + index} style={styles.cardView}>
                                    <View style={{ width: width / 2 + 20 }}>
                                        <Text style={styles.categoryTitle}>Explore {item.categoryName}</Text>
                                        <Text style={styles.categorySubTitle}>{LOREM_IPSUM}</Text>
                                    </View>
                                    <View style={{ width: (width / 2) - 40 }}>
                                        <ImageBackground
                                            imageStyle={styles.imageBgBorder}
                                            source={item.categoryImage}
                                            style={styles.categoryImage}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </ShimmerPlaceholder>
                        )
                    })}
                </Animated.ScrollView>

            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    bottom10: {
        paddingBottom: 10
    },
    cardView: {
        flexDirection: 'row',
        width: width - 20, height: 110, alignItems: 'flex-start',
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: color.white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.32,
        elevation: 2,
    },
    imageBgBorder: {
        borderRadius: 10
    },
    categoryImage: {
        height: 110, width: (width / 2) - 40,
    },
    categoryTitle: {
        marginTop: 20,
        marginLeft: 15,
        marginRight: 10,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        color: color.black,
        letterSpacing: 0.2
    },
    categorySubTitle: {
        marginLeft: 15,
        marginRight: 10,
        marginTop: 2,
        fontSize: 12,
        fontFamily: 'Montserrat-Italic',
        color: color.grey,
        letterSpacing: 0.2
    }
})