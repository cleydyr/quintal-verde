import React from 'react';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

export default ListItem = ({title, price, quantity, unit}) => (
	<View style={styles.listItem} >
		<View style={styles.listItemThumbnail}>
			<View style={styles.image}></View>
		</View>
		<View style={styles.listItemDescription}>
			<Text style={styles.listItemTitle}>{title}</Text>
			<Text style={styles.listItemPrice}>R$ {price}</Text>
			<Text style={styles.listItemQuantity}>{quantity} {unit}</Text>
			<View style={styles.divider} />
		</View>
	</View>
);

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
	},
	divider: {
		height: 1,
		backgroundColor: 'black',
		opacity: 0.12,
		marginTop: 17,
	}
});