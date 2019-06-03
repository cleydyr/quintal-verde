import React from 'react';

import {
	View,
	TouchableNativeFeedback,
	StyleSheet,
} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

import ProduceDetailsHeader from './ProduceDetailsHeader';
import ProduceDetailsBody from './ProduceDetailsBody';
import { GREEN_MAIN } from '../../../util/Colors';

const ICON_SIZE = 24;

const styles = StyleSheet.create({
	headerRight: {
		marginRight: 21,
	},
});

export default class ProduceDetailsScreen extends React.Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: GREEN_MAIN,
			height: 56,
		},
		headerTintColor: 'white',
		headerRight: (
      <TouchableNativeFeedback
				style={styles.headerRight}
        onPress={() => alert('This is a button!')}
      >
				<MaterialIcons name="edit" size={ICON_SIZE} color="white" />
			</TouchableNativeFeedback>
    ),
	};
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