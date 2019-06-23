import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Post() {
  return (
    <View style={styles.postBox}>
      <Text style={styles.title}>Aprendendo React Native</Text>
      <Text style={styles.subTitle}>Thiago Trindade</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam excepturi ipsum, nostrum
        modi veritatis nemo repellat? Debitis error impedit, veniam tempore quae ad, reprehenderit
        iste sequi aliquam nostrum quis perspiciatis?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postBox: {
    backgroundColor: '#FFF',
    marginTop: 20,
    width: 320,
    height: 175,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subTitle: {
    fontSize: 12,
    color: '#7f8c8d',
  },
  content: {
    fontSize: 14,
    marginTop: 10,
  },
});
