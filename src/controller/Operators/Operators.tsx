import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import common from "../../stylesheets/common"

export default class Operators extends Component {

    constructor(props) {
        super(props)
    }

    _onPressButton(value) {
        let check = this.props.input.inputReducer
        let last_char = check.charAt(check.length -1 )
        let checker = ['.','/','*','+','-','(',')']

        console.log('printing state', this.props.input)
        if( check && check != '' && !checker.includes(last_char) ) {
            if(value == '=') {
                let result = eval(this.props.input.inputReducer).toString()
                // this.props.replace(result)
                this.props.set_result(result)
            }else {
                this.props.insert(value)
            }
        }
        console.log('after altering printing state', this.props.input.inputReducer)
    }
    
    layoutHTML() {
        const layout = ['/','*','-','+', '=']
        const layoutHTML  = [];
        for(const value of layout) {
            layoutHTML.push(
                <TouchableOpacity style={[common["flex-1"], styles.buttons]} key={value.toString()} onPress={() => {this._onPressButton(value)}}>
                    <Text style={styles.view}>{value}</Text>
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
        alignItems: 'center'
    },
    buttons: {
        alignItems: 'center'
    },
    view: {
        fontSize: 25,
        color: '#0d0628',
        fontWeight: '700'
    }

});

