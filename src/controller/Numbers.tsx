import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { format } from 'path';

export class Numbers extends Component {

    _onPressButton() {

    }

    render() {
        const layout = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, 'clr']]
        const layoutHTML = [];
        for(const layer of layout) {
            for(const value of layer) {
                layoutHTML.push(
                    <TouchableOpacity key={value} onPress={this._onPressButton}>
                        <Text>{value}</Text>
                    </TouchableOpacity>)
            }
        }
        return (
            <View style={styles.container}>
                
                <TouchableOpacity onPress={this._onPressButton}>
                    {layoutHTML}
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
        alignItems: 'center'
    }

});


export default Numbers
