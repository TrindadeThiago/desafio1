/* eslint-disable no-use-before-define */
/* eslint-disable react/prefer-stateless-function */
import './config/ReactotronConfig';
import './config/DevToolsConfig';

import React, { Component } from 'react';
import {
  StyleSheet, View, ScrollView, Text,
} from 'react-native';

import Post from './components/Post';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GoNative App</Text>
        <ScrollView>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
  },
});
