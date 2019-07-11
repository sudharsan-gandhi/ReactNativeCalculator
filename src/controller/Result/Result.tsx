import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class Result extends Component {
    render() {
        return (
            <View>
                <Text style={style.view}>{this.props.result.resultReducer? this.props.result.resultReducer : ''}</Text>
            </View>
        )
    }
}


const style = StyleSheet.create({
    view: {
        fontSize: 35,
        fontWeight: '500'
    }
})

export default Result
