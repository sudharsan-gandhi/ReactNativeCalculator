import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import common from "../stylesheets/common"

export class Numbers extends Component {

    _onPressButton() {

    }


    layoutHTML() {
        const layout = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, 'clr']]
        const layoutHTML = [];
        layout.map((layer, index) =>
            layoutHTML.push(<View key={index} style={styles.container}>{this.buildChildRow(layer)}</View>)
        )
        return layoutHTML
    }

    buildChildRow(layer) {
        const array = [];
        layer.map((value, index) =>
            array.push(
                <TouchableOpacity style={styles.buttons} key={index} onPress={this._onPressButton}>
                    <Text>{value}</Text>
                </TouchableOpacity>)
        )
        return array;
    }

    render() {

        return (
            <View style={[common["flex-1"], common["vu-buttons"]]}>
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
        width: '100%',
        alignItems: 'center',
    }

});


export default Numbers
