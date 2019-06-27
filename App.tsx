import React from 'react';
import Numbers from './src/controller/Numbers';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.flexOne}>
      <Numbers/>
    </View>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex:1
  }
})
