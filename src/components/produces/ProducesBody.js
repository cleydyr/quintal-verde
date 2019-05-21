import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	SectionList,
} from 'react-native';

import { GREEN_MAIN } from '../../util/Colors';

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

export default class ProducesBody extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<SectionList
					sections={[{data: productData}]}
					renderSectionHeader={() => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={120}/>}
					renderItem={({item}) => <ProducesListItem {...item}/>}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});