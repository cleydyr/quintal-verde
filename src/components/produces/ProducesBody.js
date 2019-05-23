import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	SectionList,
	TouchableOpacity,
	Animated,
	Dimensions,
} from 'react-native';

import { GREEN_MAIN, BUTTON_MAIN_ACTIVE } from '../../util/Colors';

import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';

const productData = [
	{
		title: 'Coentro',
		price: 1.0,
		quantity: 30,
		unit: 'unidade',
	},
	{
		title: 'Couve picada',
		price: 3.0,
		quantity: 15,
		unit: 'unidade',
	},
	{
		title: 'Couve folha',
		price: 2.00,
		quantity: 42,
		unit: 'unidade',
	},
	{
		title: 'Espinafre',
		price: 2.0,
		quantity: 18,
		unit: 'unidade',
	},
	{
		title: 'Acelga',
		price: 2.0,
		quantity: 34,
		unit: 'unidade',
	},
	{
		title: 'Salsinha',
		price: 1.0,
		quantity: 36,
		unit: 'unidade',
	},
	{
		title: 'Quiabo',
		price: 1.00,
		quantity: 53,
		unit: 'unidade',
	},
	{
		title: 'Feijão pau (seco)',
		price: 4.00,
		quantity: 13,
		unit: 'kg',
	},
	{
		title: 'Feijão mulatinho (seco)',
		price: 4.00,
		quantity: 20,
		unit: 'kg',
	},
];

const ANIMATION_DURATION_COLLAPSE = 200;
const ANIMATION_DURATION_EXPAND = 250;
const SEND_LIST_HEIGHT = 58;
const {width} = Dimensions.get('window');

export default class ProducesBody extends React.Component {
	state = {
		sendListAnim: new Animated.Value(0),
		animating: false,
	}

	handleSendListVisibility = (e) => {
		const delta = e.nativeEvent.velocity.y;
		const y = e.nativeEvent.contentOffset.y; // To avoid hiding on bounce at top

		const {animating} = this.state;

		if (delta >= 0 && !animating && y !== 0) {
			this.setState({
				animating: true,
			});

			Animated.timing(
				this.state.sendListAnim,
				{
					toValue: SEND_LIST_HEIGHT,
					duration: ANIMATION_DURATION_COLLAPSE,
					useNativeDriver: true,
				}
			).start(() => {
				this.setState({
					animating: false,
				});
			});
		}
		else if (!animating) {
			this.setState({
				animating: true,
			});

			Animated.timing(
				this.state.sendListAnim,
				{
					toValue: 0,
					duration: ANIMATION_DURATION_EXPAND,
					useNativeDriver: true,
				}
			).start(() => {
				this.setState({
					animating: false,
				});
			});
		}
	}

	render() {
		const {sendListAnim} = this.state;

		return (
			<View style={styles.container}>
				<SectionList
					scrollEventThrottle={50}
					onScroll={this.handleSendListVisibility}
					sections={[{data: productData}]}
					renderSectionHeader={() => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={120}/>}
					renderItem={({item}) => <ProducesListItem {...item}/>}
					keyExtractor={(item, index) => index}
				/>
				<Animated.View style={
					[
						styles.animatedView,
						{
							transform: [
								{
									translateY: sendListAnim,
								}
							],
						}
					]
				}>
					<TouchableOpacity style={styles.sendListButton}>
						<Text style={styles.sendListText}>Enviar lista para clientes</Text>
					</TouchableOpacity>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sendListButton: {
		backgroundColor: BUTTON_MAIN_ACTIVE,
		height: 58,
		width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sendListText: {
		color: 'white',
		lineHeight: 30,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 19,
	},
	animatedView: 	{
		position: 'absolute',
		bottom: 0,
	}
});