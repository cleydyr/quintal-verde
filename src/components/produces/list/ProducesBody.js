import React from 'react';
import {
	StyleSheet,
	View,
	SectionList,
} from 'react-native';


import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';
import { prepareStocks } from '../../../api/stock-service';
import LoadingScreen from '../../LoadingScreen';
import FloatingScrollAwareButton from './FloatingScrollAwareButton';


export default class ProducesBody extends React.Component {
	state = {
		loading: true,
		y: 0,
		delta: 0,
	}

	handleSendListVisibility = e => {
		const delta = e.nativeEvent.velocity.y;
		const y = e.nativeEvent.contentOffset.y; // To avoid hiding on bounce at top
		this.setState({
			y,
			delta,
		});
	}

	componentDidMount = async () => {
		const productData = await prepareStocks();
		this.setState({
			productData,
			loading: false,
		});
	}

	navigateToDetails = item => {
		return () => this.props.navigation.navigate('ProduceDetails', {
			item,
		});
	}

	render() {
		const {sendListAnim, productData, loading} = this.state;
		const {navigation} = this.props;

		if (loading) {
			return (
				<LoadingScreen text="Carregando itens. Aguarde." />
			);
		}

		return (
			<View style={styles.container}>
				<SectionList
					scrollEventThrottle={50}
					onScroll={this.handleSendListVisibility}
					sections={[{data: productData || []}]}
					renderSectionHeader={() => <ProducesListBanner submissionDeadline="20/08/2019" produceQuantity={productData && productData.length || 0}/>}
					renderItem={({item}) => <ProducesListItem onPress={this.navigateToDetails(item)} {...item}/>}
					keyExtractor={(item, index) => index}
				/>
				<FloatingScrollAwareButton buttonText="Enviar lista para clientes" y={y} delta={delta} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});