import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity, Dimensions, StyleSheet,
} from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'react-native-linear-gradient';
import color from '@values/colors'


const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)
const { height, width } = Dimensions.get('screen')
var isFetching = false;
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'

export default class Heading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { isVisible, heading, subHeading, showViewAll } = this.props
    return (
      <View style={styles.headingView}>

        <View style={styles.headingView2}>
          <ShimmerPlaceholder
            width={200}
            height={10}
            style={styles.headingView2}
            visible={!isVisible}>
            <Text numberOfLines={1} style={styles.textBlack18}>{heading}</Text>
          </ShimmerPlaceholder>

          {subHeading != '' &&
            <ShimmerPlaceholder
              width={width / 2 + 40}
              height={10}
              style={styles.subHeading}
              visible={!isVisible}>
              <Text numberOfLines={2} style={styles.subHeading}>{subHeading}</Text>
            </ShimmerPlaceholder>
          }
        </View>

        {showViewAll &&
          <TouchableOpacity onPress={() => null}>
            <ShimmerPlaceholder
              width={50}
              height={10}
              style={styles.viewAll}
              visible={!isVisible}>
              <Text style={styles.viewAll}>View All</Text>
            </ShimmerPlaceholder>
          </TouchableOpacity>
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  headingView: {
    flexDirection: 'row', flex: 1,
    marginTop: 7,
    marginHorizontal: 15,
    justifyContent: 'space-between',
    // alignItems: 'center'
  },
  headingView2: {
    alignSelf: 'flex-start',
    flex: 0.90,
  },
  subHeading: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    marginTop: 3,
    letterSpacing: 0.2,
    color: color.grey
  },
  textBlack18: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: color.black,
    letterSpacing: 0.2
  },
  viewAll: {
    fontSize: 16, fontFamily: 'Montserrat-SemiBold',
    color: color.brandColor
  }
})