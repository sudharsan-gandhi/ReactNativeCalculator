import React from 'react';
import { View } from 'react-native';
import * as common from "./src/stylesheets/common"

export default function App() {
  return (
      <View style={common["flex-1"]}>
        <View style = {common["flex-1"]}></View>
        <View style = {common["flex-2"]}></View>
      </View>
  );
}


