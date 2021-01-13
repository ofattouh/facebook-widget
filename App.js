import React from 'react';
import { Dimensions, Image, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

import Reactions from './Reactions';

const image1 = require('./images/space.jpg');
const image2 = require('./images/space-2.jpg');
const image3 = require('./images/space-3.jpg');
const image4 = require('./images/space-4.jpg');
const { width } = Dimensions.get('window');

const App = () => (
  <SafeAreaView style={styles.main}>
    <Text style={styles.toolbar}>Gallery</Text>

    <ScrollView style={styles.content}>
      <Image source={image1} style={styles.image} resizeMode="cover" /><Reactions />

      <Image source={image2} style={styles.image} resizeMode="cover" /><Reactions />

      <Image source={image3} style={styles.image} resizeMode="cover" /><Reactions />

      <Image source={image4} style={styles.image} resizeMode="cover" /><Reactions />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  image: {
    width,
    height: 300,
  },
});

export default App;

// expo init my-app
