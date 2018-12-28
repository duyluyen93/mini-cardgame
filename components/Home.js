import React, { Component } from 'react';
import { Image, StyleSheet, View, ImageBackground, Dimensions, Text } from 'react-native';
import { Button } from 'native-base';
import CardFlip from 'react-native-card-flip';

var cao = Dimensions.get("window").height;
var rong = Dimensions.get("window").width;
const styles = StyleSheet.create({
  anh: {
    height: cao,
    width: rong
  },

  anh_phu: {
    height: 151 / 3,
    width: 646 / 3,
  },

  khung: {
    alignSelf: 'center',
    marginTop: cao / 2
  },

  nut: {
    // margin: 10,
    backgroundColor: 'transparent',
  },

  cardContainer: {
    height: 151 / 3,
    width: 646 / 3,
    backgroundColor: 'transparent',
  },
});

export default class Home extends Component {

  vaogame() {
    setTimeout(() => {
      this.props.navigation.navigate('Game')
    }, 1000);
  }

  render() {
    return (
      <ImageBackground source={require("../image/background.jpg")} style={styles.anh}>
        <View style={styles.khung}>
          <CardFlip style={styles.cardContainer} ref={(card) => this.card = card}>
            <Button style={styles.nut} activeOpacity={1} onPress={() => { this.card.flip(), this.vaogame() }}>
              <Image source={require("../image/batdau.png")} style={styles.anh_phu}></Image>
            </Button>
            <Image source={require("../image/ok.png")} style={styles.anh_phu}></Image>
          </CardFlip>
        </View>
      </ImageBackground>
    );
  }
}