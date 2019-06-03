import React from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableNativeFeedback,
	Image,
} from 'react-native';

import Separator from '../../Separator';

import numeral from 'numeral';

export default ListItem = ({name, price, quantity, unit, src, onPress}) => {
	return (
		<TouchableNativeFeedback onPress={onPress} >
			<View style={styles.listItem}>
				<View style={styles.listItemThumbnail}>
					<Image
						style={styles.image}
						source={{uri: src}}
					/>
				</View>
				<View style={styles.listItemDescription}>
					<Text style={styles.listItemTitle}>{name}</Text>
					<Text style={styles.listItemPrice}>R$ {numeral(price/100.0).format('0.00')}</Text>
					<Text style={styles.listItemQuantity}>{quantity} {unit}</Text>
					<Separator />
				</View>
			</View>
		</TouchableNativeFeedback>
	);
}

const styles = StyleSheet.create({
	listItem: {
		flexDirection: 'row',
		height: 102,
	},
	listItemThumbnail: {
		paddingLeft: 16,
		paddingTop: 18,
		paddingRight: 16,
		paddingBottom: 19,
	},
	image: {
		height: 66,
		width: 66,
		backgroundColor: 'green',
	},
	listItemDescription: {
		flex: 1,
	},
	listItemTitle: {
		height: 24,
		fontSize: 18,
		color: 'rgba(0, 0, 0, 0.87)',
		fontWeight: 'bold',
		letterSpacing: 0.15,
		marginTop: 18,
	},
	listItemPrice: {
		height: 18,
		fontSize: 15,
		color: '#212122',
		opacity: 0.7,
	},
	listItemQuantity: {
		height: 18,
		fontSize: 15,
		color: '#212122',
		opacity: 0.5,
		marginTop: 6,
		marginBottom: 17,
	},
});