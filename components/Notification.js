import React, { Component } from 'react'
import { Alert, Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types'
import left from '../image/left.png';
import right from '../image/right.png';
import time from '../image/time.png';

var cao = Dimensions.get("window").height;

Animatable.initializeRegistryWithDefinitions({
  slideOutLeft: {
    from: {
      translateX: 0,
    },
    to: {
      translateX: -45,
    }
  },
  slideOutRight: {
    from: {
      translateX: 0,
    },
    to: {
      translateX: 45,
    }
  },
  slideInLeft: {
    from: {
      translateX: -45,
    },
    to: {
      translateX: 0,
    }
  },
  slideInRight: {
    from: {
      translateX: 45,
    },
    to: {
      translateX: 0,
    }
  },
  zoomIn: {
    from: {
      opacity: 1,
      scale: 0.3,
    },
    0.5: {
      opacity: 1,
    },
    to: {
      opacity: 1,
      scale: 1,
    },
  }
})
export default class Notification extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       close: this.props.close
    }
  }
  
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Animatable.View
          // nằm phía dưới 2 nửa trái phải, gồm đồng hồ và nền xanh/đỏ
          style={{ position: "absolute", opacity: 0, marginTop: 5 }}
          ref={x => this.clock = x}
          animation="flipInX"
          delay={1000}
          // onAnimationEnd={this.close()}
        >
          <Animatable.Image source={time}
            style={styles.time}
            ref={time => this.time = time}
            delay={500}
          />
          {this.props.children}
        </Animatable.View>

        <Animatable.View
          style={{ flexDirection: 'row', opacity: 0, marginBottom: cao / 10 }}
          ref={view => this.view = view}
          animation="bounceInDown"
          duration={1000}
          // onAnimationEnd={this.close()}
        >
          <Animatable.Image style={styles.anh_trai} source={left}
            ref={a => this._left = a}
            animation="slideOutLeft"
            delay={500}
          />
          <Animatable.Image style={styles.anh_phai} source={right}
            ref={b => this._right = b}
            animation="slideOutRight"
            delay={500}
          />
        </Animatable.View>

        {/* <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button style={styles.nut} onPress={() => {
            this.view.zoomIn(1000);
            setTimeout(() => {
              this._right.slideOutRight(1000),
                this._left.slideOutLeft(1000)
            }, 1000);
            setTimeout(() => this.clock.fadeIn(1000), 1500)
            setTimeout(() => {
              this._right.slideInRight(1000),
                this._left.slideInLeft(1000)
            }, this.props.close);
          }
          }>
            <Text style={{ fontSize: 25, color: 'white' }}>   Mở   </Text>
          </Button>
        </View> */}
      </View>
    )
  }
  close() {
    setTimeout(() => {
      this._right.slideInRight(1000),
        this._left.slideInLeft(1000),
        this.clock.flipOutY(1000)
    }, this.state.close);
  }
}

Notification.propTypes = {
  close: PropTypes.number
}

const styles = StyleSheet.create({
  // nut: {
  //   backgroundColor: 'red',
  //   marginBottom: cao / 5,
  //   marginTop: 10,
  //   marginLeft: 20
  // },
  anh_trai: {
    marginRight: -20 / 1.3,
    width: 86 / 1.3,
    height: 58 / 1.3
  },
  anh_phai: {
    marginLeft: -20 / 1.3,
    width: 86 / 1.3,
    height: 58 / 1.3
  },
  time: {
    width: 196 / 1.3,
    height: 43 / 1.3
  }
  // 2 ảnh khoảng cách 40px
})
