import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';

export class ShowInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={style.view}>{this.props.show.inputReducer? this.props.show.inputReducer : ''}</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view: {
        fontSize: 30
    }
})

export default ShowInput
