import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const verificationScreen = () => {
  return (
    <View style = {styles.container}>
	  <Image 
	  style = {styles.image}
	  source = {require('../assets/img/successful.png')}>
	  </Image>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#49BA69',
		justifyContent: 'center', 
		alignItems: 'center'
	},
	styles: {
		width: 200,
		height: 200
	}
  });

export default verificationScreen;
