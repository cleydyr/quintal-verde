import React from 'react';
import {
	StyleSheet,
	View,
	SectionList,
} from 'react-native';

import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';
export default class ProducesBody extends React.Component {

	_renderSectionHeader = () => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={this.props.productData && this.props.productData.length}/>
	_renderItem = ({item}) => <ProducesListItem onPress={this.props.onEachItemPress(item)} {...item}/>;
	_keyExtractor = (_, index) => index

	render() {
		const {productData, onScroll} = this.props;

		return (
			<View style={styles.container}>
				<SectionList
					scrollEventThrottle={50}
					onScroll={onScroll}
					sections={[{data: productData || []}]}
					renderSectionHeader={this._renderSectionHeader}
					renderItem={this._renderItem}
					keyExtractor={this._keyExtractor}
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