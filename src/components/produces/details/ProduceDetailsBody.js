import React from 'react';

import {
	View,
	Text,
	StyleSheet,
	SectionList,
} from 'react-native';

import ProduceSellerListItem from './ProduceSellerListItem';

import Separator from '../../Separator';

export default class ProduceDetailsBody extends React.Component {
	render() {
		const {quantity, availability, unit} = this.props;

		return (
			<View style={styles.container}>
				<SectionList
					sections={[{data: availability}]}
					renderSectionHeader={() => <SectionHeader unit={unit} quantity={quantity} />}
					renderItem={({item}) => <ProduceSellerListItem unit={unit} {...item} />}
					keyExtractor={(item, index) => index}
				/>
			</View>
		);
	}
}

const SectionHeader = props => (
	<View style={styles.header}>
		<Text style={styles.headerText}>{props.quantity} {props.unit}(s) disponível(is) em</Text>
		<Separator/>
	</View>
);

const styles = StyleSheet.create({
	container: {
		paddingTop: 24,
		paddingLeft: 16,
	},
	header: {
		height: 25,
		marginBottom: 11,
	},
	headerText: {
		marginBottom: 7,
	}
});