import React from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import { GREEN_MAIN } from '../../util/Colors';

export default class ProducesListBanner extends React.Component {
	
	render() {
		const {submissionDeadline, produceQuantity} = this.props;

		return (
			<View style={styles.listBanner}>
				<Text style={styles.registeredProductText}>{_getProducePhrase(produceQuantity)}</Text>
				<View style={styles.bannerWarning}>
					<View style={styles.warningIcon}>
						<AntDesign name="exclamationcircleo" size={18} color="white"/>
					</View>
					<Text style={styles.warningText}>A lista deve ser enviada até {submissionDeadline}</Text>
				</View>
			</View>
		);
	}
}

function _getProducePhrase(produceQuantity) {
	if (produceQuantity === 0) {
		return `Nenhum produto cadastrado`;
	}
	else if (produceQuantity === 1) {
		return `1 produto cadastrado`;
	}
	else if (produceQuantity > 1) {
		return `${produceQuantity} produtos cadastrados`;
	}
	else {

	}
}

const styles = StyleSheet.create({
	listBanner: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingTop: 28,
		paddingBottom: 18,
		height: 148,
		backgroundColor: GREEN_MAIN,
	},
	registeredProductText: {
		fontSize: 32,
		height: 72,
		color: 'white',
		fontWeight: 'bold',
		letterSpacing: 0.48,
	},
	bannerWarning: {
		marginTop: 12,
		flexDirection: 'row',
		alignItems: 'center',
		opacity: 0.8,
		height: 18,
	},
	warningIcon: {
		marginRight: 9,
	},
	warningText: {
		color: 'white',
		fontSize: 16,
		letterSpacing: 0.15,
	},
});
