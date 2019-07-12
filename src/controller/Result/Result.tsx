import React, { Component } from 'react'
import { Text, View, StyleSheet, PanResponder, Animated } from 'react-native'

export class Result extends Component {
    constructor(props) {
        super(props)
        this.state = { pan: new Animated.ValueXY() }
        this._val = { x:0, y:0 }
    }
    componentWillMount() {
        this.state.pan.addListener((value) => this._val = value);
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onPanResponderGrant: (e, gesture) => {
                this.state.pan.setOffset({
                  x: this._val.x,
                  y:this._val.y
                })
                this.state.pan.setValue({ x:0, y:0})
              },
              onPanResponderMove: Animated.event([ 
                null, { dx: this.state.pan.x, dy: this.state.pan.y }
              ]),
              onPanResponderRelease: (e, gesture) => {
                Animated.spring(this.state.pan, {
                    toValue: { x: 0, y: 0 },
                    friction: 5
                  }).start();
              }
            // onPanResponderMove: (evt, gesture) => { 
            //     console.log('moving', gesture);
            //     console.log('pan', this.state.pan.getTranslateTransform()[0].translateX)
            // //     Animated.event([
            // //     null, { dx: this._val, dy: this.state.pan.y }
            // //   ])
            // }
              
        })
    }

    render() {
        const panStyle = {
            transform: this.state.pan.getTranslateTransform()
          }
        return (
            <View>
                <Animated.Text {...this._panResponder.panHandlers} style={[panStyle,style.view]}>{this.props.result.resultReducer ? this.props.result.resultReducer : ''}</Animated.Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    view: {
        fontSize: 35,
        fontWeight: '300'
    }
})

export default Result
