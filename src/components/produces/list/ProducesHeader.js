import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

const ICON_SIZE = 24;

export default class ProducesHeader extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headerLeft} >
					<Entypo name="menu" size={ICON_SIZE} color="white" />
				</View>
				<View style={styles.headerCenter} >
					<Text style={styles.headerTitle}>Produtos</Text>
				</View>
				<View style={styles.headerRight} >
					<Entypo name="plus" size={ICON_SIZE} color="white" />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	headerTitle: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'Roboto_medium',
		letterSpacing: 0.25,
	},

	headerLeft: {
		marginLeft: 21,
	},

	headerCenter: {
		width: 216,
	},

	headerRight: {
		marginRight: 21,
	},
});
