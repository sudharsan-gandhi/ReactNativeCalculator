import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import common from "../../stylesheets/common"

export class Numbers extends Component {
    
    constructor(props) {
        super(props);
    }

    _onPressButton(value) {
        console.log('printing state', this.props.input)
        switch(value) {
            case 'clr': {
                this.props.remove()
                break
            } 
            default: {
                this.props.insert(value)
            }
        }
        
        
        console.log('after altering printing state', this.props.input.inputReducer)
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
                <TouchableOpacity style={styles.buttons} key={index} onPressOut={() => {this._onPressButton(value)}}>
                    <Text style={styles.view}>{value}</Text>
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
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    view: {
        fontSize: 25,
        color: '#0d0628',
        fontWeight: '700'
    }
    // https://coolors.co/4ecdc4-27213c-0d0628-fefcfd-bd4f6c
});


export default Numbers
