import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
} from 'react-native';

import { GREEN_MAIN } from '../../util/Colors';

import ProducesListBanner from './ProducesListBanner';

export default class ProducesBody extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={120}/>
				<FlatList>

				</FlatList>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});