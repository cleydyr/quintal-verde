import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

import { prepareStocks } from '../../../api/stock-service';

import ProducesHeader from './ProducesHeader';
import ProducesBody from './ProducesBody';
import LoadingScreen from '../../LoadingScreen';
import FloatingScrollAwareButton from './FloatingScrollAwareButton';

import { GREEN_MAIN } from '../../../util/Colors';

export default class ProducesScreen extends React.Component {
	static navigationOptions = {
		headerTitle: <ProducesHeader/>,
		headerStyle: {
			backgroundColor: GREEN_MAIN,
			height: 56,
		},
		headerTintColor: 'white',
	};

	state = {
		y: 0,
		delta: 0,
		loading: true,
	}

	componentDidMount = async () => {
		const productData = await prepareStocks();
		this.setState({
			productData,
			loading: false,
		});
	}

	handleSendListVisibility = e => {
		const delta = e.nativeEvent.velocity.y;
		const y = e.nativeEvent.contentOffset.y; // To avoid hiding on bounce at top

		this.setState({
			y,
			delta,
		});
	}

	render() {
		const {navigation} = this.props;
		const {y, delta, loading, productData} = this.state;

		if (loading) {
			return (
				<LoadingScreen text="Carregando itens. Aguarde." />
			);
		}

		return (
			<View style={styles.container}>
				<ProducesBody productData={productData} onScroll={this.handleSendListVisibility} navigation={navigation}/>
				<FloatingScrollAwareButton buttonText="Enviar lista para clientes" y={y} delta={delta} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	headerText: {
		color: 'white',
	}
});
