import React from 'react';

import {
	View,
} from 'react-native';

import ProduceDetailsHeader from './ProduceDetailsHeader';
import ProduceDetailsBody from './ProduceDetailsBody';

export default class ProduceDetailsScreen extends React.Component {
	render() {
		const {navigation} = this.props;
		const item = navigation.getParam('item');

		return (
			<View>
				<ProduceDetailsHeader imageData={item.src} {...item}/>
				<ProduceDetailsBody quantity={item.quantity}unit={item.unit} availability={item.availability}/>
			</View>
		);
	}
}