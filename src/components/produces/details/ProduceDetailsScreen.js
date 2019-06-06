import React from 'react';

import {
	View,
	TouchableNativeFeedback,
	StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

import {MaterialIcons} from '@expo/vector-icons';

import ProduceDetailsHeader from './ProduceDetailsHeader';
import ProduceDetailsBody from './ProduceDetailsBody';

import { GREEN_MAIN } from '../../../util/Colors';

import {ICON_SIZE} from '../../../util/Constants';

const styles = StyleSheet.create({
	headerRight: {
		marginRight: 21,
	},
});

class ProduceDetailsScreen extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: GREEN_MAIN,
			height: 56,
		},
		headerTintColor: 'white',
		headerRight: (
			<View style={styles.headerRight}>
				<TouchableNativeFeedback
					onPress={() => {}}
				>
					<MaterialIcons name="edit" size={ICON_SIZE} color="white" />
				</TouchableNativeFeedback>
			</View>
    ),
	};

	render() {
		const {
			availability,
			name,
			price,
			quantity,
			unit,
			src,
		} = this.props;

		return (
			<View>
				<ProduceDetailsHeader imageData={src} name={name} price={price} quantity={quantity} unit={unit}/>
				<ProduceDetailsBody quantity={quantity} unit={unit} availability={availability}/>
			</View>
		);
	}
}

const calculateAvailability = (produceId, users, stocks, stockItems) => {
	const relevantStockItems = stockItems.filter(stockItem => stockItem.produceId === produceId);
	const availability = relevantStockItems.map(relevantStockItem => {
		const {stockId, quantity} = relevantStockItem;
		const stock = stocks.find(stock => stock.stockId === stockId);
		const userId = stock.userId;
		const {name} = users.find(user => user.login.uuid === userId);

		return {
			name: `${name.first} ${name.last}`,
			quantity,
		}
	});
	return availability;
}

const mapStateToProps = (state, ownProps) => {
	const {navigation} = ownProps;
	const {quantity, unit, price, name, src, produceId} = navigation.getParam('item');
	const {users, stocks, stockItems} = state;

	return {
		...ownProps,
		availability: calculateAvailability(produceId, users, stocks, stockItems),
		name,
		price,
		quantity,
		unit,
		src,
	}
}

export default connect(mapStateToProps)(ProduceDetailsScreen);