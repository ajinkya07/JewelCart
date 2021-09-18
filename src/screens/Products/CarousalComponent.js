import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import Carousel from "react-native-looped-carousel";
import EStyleSheet from "react-native-extended-stylesheet";

const { width, height } = Dimensions.get("window");
export default class CarousalComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  };

  render() {
    return (
      <View style={{ height: 35 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay
          currentPage={2}
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>Lifetime Exchange</Text>
          </View>
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>
              SGL and IGI certified Jewellery
            </Text>
          </View>
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>
              COD and secure delivery
            </Text>
          </View>
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>30-day trial and</Text>
          </View>
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>BSI halledmarked gold</Text>
          </View>
          <View style={[styles.headerComponentView, this.state.size]}>
            <Text style={styles.headerCarousalText}>
              30-day trail and easy returns
            </Text>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  headerComponentView: {
    height: 36,
    backgroundColor: "#F5F5F6",
    width: "100%",
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerCarousalText: {
    fontSize: 12,
    color: "#282c3f",
  },
});
