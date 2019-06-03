import React from 'react';

import {
	View,
	Text,
	ProgressBarAndroid,
	StyleSheet,
} from 'react-native';

import { GREEN_MAIN } from '../util/Colors';

export default ({text, }) => (
	<View style={styles.centered}>
		<Text style={styles.text}>{text}</Text>
		<ProgressBarAndroid style={styles.progressBar} styleAttr="Horizontal" color={GREEN_MAIN} indeterminate/>
	</View>
);

const styles = StyleSheet.create({
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
		fontFamily: 'Roboto',
	},
	progressBar: {
		width: 240,
	},
});