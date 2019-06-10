import React from 'react';
import {
	StyleSheet,
	View,
	SectionList,
} from 'react-native';

import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';

export default class ProducesBody extends React.Component {
	_renderSectionHeader = ({productData}) => () => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={productData && productData.length}/>
	_renderItem = ({onEachItemPress}) => ({item}) => <ProducesListItem onPress={onEachItemPress(item)} {...item}/>;
	_keyExtractor = (_, index) => index

	render() {
		const {productData, onScroll} = this.props;

		return (
			<View style={styles.container}>
				<SectionList
					scrollEventThrottle={50}
					onScroll={onScroll}
					sections={[{data: productData || []}]}
					renderSectionHeader={this._renderSectionHeader(this.props)}
					renderItem={this._renderItem(this.props)}
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