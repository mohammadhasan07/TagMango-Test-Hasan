import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

const splashScreen = () => {

  return (
		<ImageBackground 
		source = {require('../assets/img/splash.png')} 
		style = {styles.container}>
			<Image 
			source = {require('../assets/img/logo-white.png')}
			style = {styles.image}>
			</Image>
    	</ImageBackground>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		height: '100%'
	}
  });

export default splashScreen;
