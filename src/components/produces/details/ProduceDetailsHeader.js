import React from 'react';

import {
	View,
	Image,
	Text,
	StyleSheet
} from 'react-native';

import { GREEN_MAIN } from '../../../util/Colors';

import { toLocalCurrency } from '../../../util/Functions';

export default class ProduceDetailsHeader extends React.Component {
	render() {
		const {name, price, quantity, unit, imageData} = this.props;

		return (
				<>
				<View style={styles.container} >
					<View style={styles.image}>
						<Image
							source={
								{
									uri: imageData,
								}
							}
							style={imageStyle}
						/>
					</View>
					<View style={styles.details}>
						<Text style={styles.titleText}>
							{name}
						</Text>
						<Text style={styles.priceText}>
							{toLocalCurrency(price)}
						</Text>
						<Text style={styles.quantityText}>
							{quantity} {unit}(s)
						</Text>
					</View>
					<View style={styles.whiteBar}/>
				</View>
				</>
		);
	}
}

const imageStyle = {
	width: 120,
	height: 120,
	borderWidth: 6,
	borderRadius: 4,
	borderColor: 'white',
};

const styles = StyleSheet.create({
	headerBar: {
		height: 56,
		backgroundColor: 'pink',
	},
	container: {
		height: 142,
		backgroundColor: GREEN_MAIN,
	},
	image: {
		position: 'absolute',
		left: 16,
		top: 27,
		zIndex: 5,
	},
	details: {
		marginLeft: 154,
		marginTop: 34,
		marginBottom: 13,
	},
	titleText: {
		width: 190,
		height: 24,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 21,
		color: 'white',
		lineHeight: 24,
		letterSpacing: 0.17,
	},
	priceText: {
		width: 190,
		height: 18,
		opacity: 0.8,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 17,
		lineHeight: 18,
		color: '#DEFFFFFF',
		marginTop: 5,
	},
	quantityText: {
		width: 190,
		height: 18,
		opacity: 0.8,
		fontFamily: 'Roboto',
		fontSize: 17,
		lineHeight: 18,
		color: '#DEFFFFFF',
		marginTop: 6,
	},
	whiteBar: {
		height: 24,
		backgroundColor: 'white',
	}
});