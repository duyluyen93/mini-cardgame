import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types'

var t;
export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phut: this.props.phut,
            giay: this.props.giay,
            animate: '',
            color: 'green'
        }
        this.pressed = false
    }

    two_numbers() {
        this.setState({
            giay: this.state.giay - 1
        });
        if (this.state.giay < 10 && this.state.giay.toString().length < 2) {
            this.setState({
                giay: "0" + this.state.giay
            })
        }
        if (this.state.giay == '00' && this.state.phut != 0) {
            setTimeout(() => {
                this.setState({
                    giay: 59,
                    phut: this.state.phut - 1
                })
            }, 1000)
        }
        if (this.state.giay < 10 && this.state.phut == 0) {
            this.setState({
                animate: this.props.animate,
                color: 'red'
            })
        }
        if (this.state.giay == '00' && this.state.phut == 0) {
            clearInterval(t);
            this.setState({
                animate: '',
            });
        }
    }

    change() {
        if (this.pressed == false) {
            this.pressed = true;
            this.two_numbers();

            t = setInterval(() => {
                this.two_numbers()
            }, 1000);
        }
    }

    render() {
        return (
            <TouchableOpacity onPress={() => this.change()}>
                {/* <TouchableOpacity onPress={this.change()}> */}
                <Animatable.View
                    animation={this.state.animate}
                    iterationCount='infinite'
                    iterationDelay={500}>
                    <Text style={[styles.clock, { color: this.state.color }]}>
                        {this.state.phut}:{this.state.giay}
                    </Text>
                </Animatable.View>
            </TouchableOpacity>
        )
    }
}

Clock.propTypes = {
    phut: PropTypes.number,
    giay: PropTypes.number,
    animate: PropTypes.string
}

const styles = StyleSheet.create({
    clock: {
        alignSelf: 'center',
        marginBottom: 120,
        fontSize: 50,
        fontFamily: '7segment'
    }
})