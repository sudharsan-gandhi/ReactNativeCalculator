import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export class Numbers extends Component {

    _onPressButton() {

    }

    layoutHTML() {
        const layout = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, 'clr']]
        const layoutHTML  = [];
        for(const layer of layout) {
            layoutHTML.push(<View style={styles.container}>{this.buildChildRow(layer)}</View>)
        }
        return layoutHTML
    }

    buildChildRow(layer) {
        const array = [];
        for(const value of layer) {
            array.push(
                <TouchableOpacity style={styles.buttons} key={value} onPress={this._onPressButton}>
                    <Text>{value}</Text>
                </TouchableOpacity>)
        }
        return array;
    }

    render() {
    
        return (
            <View style={styles.container}>
                {this.layoutHTML()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
    },
    buttons: {
        flex: 1,
        alignItems: 'center',
    },
    flexOne: {
        flex:1
      }

});


export default Numbers
