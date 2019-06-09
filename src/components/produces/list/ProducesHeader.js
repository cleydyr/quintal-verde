import React from 'react';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import { Entypo } from '@expo/vector-icons';

import HeaderButton from '../../HeaderButton';

export default class ProducesHeader extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<HeaderButton element={Entypo} name="menu" />
				<View style={styles.headerCenter} >
					<Text style={styles.headerTitle}>Produtos</Text>
				</View>
				<HeaderButton element={Entypo} name="plus" />
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

	headerCenter: {
		width: 216,
	},
});
