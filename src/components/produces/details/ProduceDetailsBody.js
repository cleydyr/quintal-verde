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
	_renderSectionHeader = () => <SectionHeader unit={this.props.unit} quantity={this.props.quantity} />
	_renderItem = ({item}) => <ProduceSellerListItem unit={this.props.unit} {...item} />
	_keyExtractor = (_, index) => index

	render() {
		const {availability} = this.props;

		return (
			<View style={styles.container}>
				<SectionList
					sections={[{data: availability}]}
					renderSectionHeader={this._renderSectionHeader}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
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