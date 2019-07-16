import React from 'react'
import { View, Animated, Dimensions } from 'react-native'
import common from './src/stylesheets/common'
import Numbers from './src/controller/Numbers'
import Operators from './src/controller/Operators'
import { Provider } from 'react-redux'
import store from './src/store/store'
import ShowInput from './src/controller/ShowInput';
import Result from './src/controller/Result';
import Memory from './src/controller/Memory';


export default function App() {
  return (
    <Provider store={store}>
      <View style={common["flex-1"]}>
        <View style = {[common["flex-1"],common["flex-row"],common["vu-end"],common["vu-operators"]]}>
          <Memory />
        </View>
        <View style = {[common["flex-2"],common["vu-input"],common["vu-end"]]}>
          <ShowInput/>
        </View>
        <View style = {[common["flex-1"],common["vu-result"],common["vu-end"]]}>
          <Result />
        </View>
        <View style={[common["flex-6"], common["flex-row"]]}>
          <View style={common["flex-7"]} >
            <Numbers/>
          </View>
          <View style={common["flex-3"]}>
            <Operators/>
          </View>
        </View>
      </View>
    </Provider>
  );
}


