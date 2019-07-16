import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import common from '../../stylesheets/common'

export class Memory extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { height, width } = Dimensions.get('window');
        const each_flex = height / 10;
        const pixels = {
            memory: each_flex,
            input: each_flex * 2,
            result: each_flex,
            keypad: each_flex * 6
        }
        this.props.layout({layout: 'flex', height: height, width: width, area: pixels})

        console.log('height, width', height, width)
    }

    memoryRenderer() {
        var html = [];
        if (this.props.memory.memoryReducer &&
            this.props.memory.memoryReducer.length > 0) {
            this.props.memory.memoryReducer.map((cache, index) =>
                html.push(<Text key={index.toString()} style={[style.memory]}>{cache}</Text>)
            )
        } else {
            html = [];
            html.push(<Text key='null' style={{ color: 'white', textAlign: 'center' }}>Drag and Drop here</Text>)
        }

        return html;
    }

    render() {
        return (<View style={[common["flex-row"],common["flex-1"],style["flex-wrap"]]}>{this.memoryRenderer()}</View>)
    }
}
const style = StyleSheet.create({
    memory: {
        height : 25,
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        backgroundColor: '#27213c',
        borderRadius: 5,
        margin: 2,
        padding: 2,
        textAlign: 'center',
        flex: 1
    },
    "flex-wrap": {
        flexWrap: 'wrap'
    }
})
export default Memory
