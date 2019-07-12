import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import common from '../../stylesheets/common'

export class Memory extends Component {
    constructor(props) {
        super(props)
    }

    saveLayout(event) {
        debugger;
        this.props.layout({layout: 'memoryArea', area: event.nativeEvent.layout})
    }

    memoryRenderer() {
        var html = [];
        if (this.props.memory.memoryReducer &&
            this.props.memory.memoryReducer.length > 0) {
            this.props.memory.memoryReducer.map((cache, index) =>
                html.push(<Text key = {index.toString()} style={[style.memory]}>{item}</Text>)
            )
        } else {
            html = [];
            html.push(<Text key= 'null' style={{color: 'white', textAlign: 'center'}}>Drag and Drop here</Text>)
        }

        return html;
    }

    render() {
        return (<View onLayout= {(event) => this.saveLayout(event)}>{this.memoryRenderer()}</View>)
    }
}
const style = StyleSheet.create({
    memory: {
        fontSize: 20,
        fontWeight: '300',
        color: '#fff',
        backgroundColor: '#27213c',
        borderRadius: 5,
        margin: '2px',
        padding: '2px',
        textAlign: 'center',
        flex:3
    }
})
export default Memory
