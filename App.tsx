import React from 'react';
import { View } from 'react-native';
import common from "./src/stylesheets/common"
import Numbers from './src/controller/Numbers';
import Operators from './src/controller/Operators';

export default function App() {
  return (
      
      <View style={common["flex-1"]}>
        <View style = {[common["flex-1"],common["vu-memory"] ]}></View>
        <View style = {[common["flex-2"],common["vu-input"]]}></View>
        <View style = {[common["flex-1"],common["vu-result"]]}></View>
        <View style={[common["flex-6"], common["flex-row"]]}>
          <View style={common["flex-7"]} >
            <Numbers/>
          </View>
          <View style={common["flex-3"]}>
            <Operators/>
          </View>
        </View>
      </View>
  );
}


