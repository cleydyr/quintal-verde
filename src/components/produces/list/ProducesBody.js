import React from 'react';
import {
	StyleSheet,
	View,
	SectionList,
} from 'react-native';


import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';

export default class ProducesBody extends React.Component {
	navigateToDetails = item => () =>
		this.props.navigation.navigate('ProduceDetails', {
			item,
		});

	render() {
		const {productData, onScroll} = this.props;

		return (
			<View style={styles.container}>
				<SectionList
					scrollEventThrottle={50}
					onScroll={onScroll}
					sections={[{data: productData || []}]}
					renderSectionHeader={() => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={productData && productData.length || 0}/>}
					renderItem={({item}) => <ProducesListItem onPress={this.navigateToDetails(item)} {...item}/>}
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