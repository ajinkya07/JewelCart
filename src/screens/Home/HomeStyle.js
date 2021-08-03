import { Dimensions, Platform } from 'react-native';
import color from '@values/colors'


const { height, width } = Dimensions.get('screen')


export default {
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
        height: 65,
        width: 65,
        marginTop: 10,
        backgroundColor: color.gray,
        justifyContent: 'center',
        borderRadius: 65 / 2,
        alignItems: 'center'
    },
    categoryImg: {
        height: 65, width: 65,
        borderRadius: 65 / 2,
    },
    categoryText: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
    },

    // slider
    sliderView: {
        width: width,
        height: height * 0.33,
    },
    sliderView2: {
        width: width - 60,
        height: height * 0.33,
    },
    imageContainer: {
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: color.white,
        borderRadius: 8,
    },
    dotStyle: {
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
        marginHorizontal: -8,
        bottom: 20,
        backgroundColor: color.black
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
        bottom: 160
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
        fontFamily: 'Lato-Regular',
        textAlign: 'center'
    },
}