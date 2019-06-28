import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import common from "../stylesheets/common"

export default class Operators extends Component {
    layoutHTML() {
        const layout = ['/','*','-','+', '=']
        const layoutHTML  = [];
        for(const value of layout) {
            layoutHTML.push(
                <TouchableOpacity style={[common["flex-1"]]} key={value.toString()} >
                    <Text>{value}</Text>
                </TouchableOpacity>)
        }
        return layoutHTML
    }
    render() {
        return (
            <View style={[styles.container]}>
                {this.layoutHTML()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttons: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    }

});

