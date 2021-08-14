import { Dimensions, Platform } from 'react-native';
import color from '@values/colors'


const { height, width } = Dimensions.get('screen')


export default {
    container: {
        flex: 1,
    },
    textWhiteBold20: {
        fontSize: 20,
        fontFamily: 'Montserrat-Bold',
        color: color.white,
        letterSpacing: 0.2
    },
    textWhiteMedium12: {
        fontSize: 12,
        fontFamily: 'Montserrat-SemiBold',
        color: color.white,
    },
    textBlack18: {
        fontSize: 18,
        fontFamily: 'Montserrat-Bold',
        color: color.black,
        lineHeight: 20,
        letterSpacing: 0.2
    },
    textBlack18Med: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: color.black,
        lineHeight: 20,
        letterSpacing: 0.2
    },
    textWhite12: {
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
        color: color.white,
    },
    textBold15: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 15,
        textAlign: 'center',
    },

    // category
    categoryMainView: {
        height: 110,
        width: width,
        backgroundColor: color.white
    },
    categoryInnerView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
    },
    categoryImageView: {
        height: 55,
        width: 55,
        marginTop: 10,
        backgroundColor: color.grey,
        justifyContent: 'center',
        borderRadius: 55 / 2,
        alignItems: 'center'
    },
    categoryImg: {
        height: 55, width: 55,
        borderRadius: 55 / 2,
    },
    categoryText: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
    },

    // slider

    sliderView: {
        width: width,
        height: height * 0.32,
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
        fontSize: 30
    },
    dotInActive: {
        margin: 3,
        color: color.grey,
        fontSize: 30
    },
    sliderDot: {
        top: -10,
        flexDirection: 'row',
        alignSelf: 'center'
    },


    //info
    infoMainView: {
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
        marginBottom: 5
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
        marginTop: 20
    },
    infoView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
    },
    infoImageView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoImg: {
        height: 30, width: 30,
    },
    infoText: {
        fontSize: 10,
        fontFamily: 'Montserrat-Regular',
        textAlign: 'center'
    },

    //discover collection
    collectionImage: {
        height: height * 0.35,
        width: width - 70,
        backgroundColor: color.white,
        marginVertical: 20,
        borderRadius: 20
    },
    collectionImageView: {
        alignSelf: 'flex-start',
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
        position: 'absolute',
    },


    // exclusive carousel
    exclusiveView: {
        marginTop: 20,
    },
    carouselImageView: {
        height: 260,
        width: 220,
        backgroundColor: color.white,
        marginVertical: 20
    },
    imageContainer: {
        flex: 1,
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
    },
    imageShimmer: {
        borderRadius: 20,
        alignSelf: 'center'
    },
    carouselImage: {
        width: 220,
        height: 200,
    },
    titleView: {
        marginVertical: 10,
        alignSelf: 'center'
    },
    carouselSubText: {
        paddingTop: 3,
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        textAlign: 'center',
    },
    centerTop7: {
        paddingTop: 7,
        alignSelf: 'center'
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
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingHorizontal: 12,
        paddingBottom: 20,
    },
}