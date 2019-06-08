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
import { calculateAvailability } from '../../../util/Functions';
import EditProduceModal from '../edit/EditProduceModal';
import { toggleEditProduceModalVisible } from '../../../actions';

const styles = StyleSheet.create({
	headerRight: {
		marginRight: 21,
	},
});

const EditButton = (props) => (
	<View style={styles.headerRight}>
		<TouchableNativeFeedback
			onPress={props.onPress}
		>
			<MaterialIcons name="edit" size={ICON_SIZE} color="white" />
		</TouchableNativeFeedback>
	</View>
);


class ProduceDetailsScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		const dispatch = navigation.getParam('dispatch');

		return {
			headerStyle: {
				backgroundColor: GREEN_MAIN,
				height: 56,
			},
			headerTintColor: 'white',
			headerRight: <EditButton onPress={() => dispatch(toggleEditProduceModalVisible())}/>,
		}
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
				<EditProduceModal price={price} name={name} unit={unit} imageData={src} />
			</View>
		);
	}
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