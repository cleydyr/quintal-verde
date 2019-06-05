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
		hide: false,
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
		const newY = e.nativeEvent.contentOffset.y;

		this.setState(prevState => ({
			y: newY,
			hide: newY > prevState.y,
		}));
	}

	render() {
		const {navigation} = this.props;
		const {hide, loading, productData} = this.state;

		if (loading) {
			return (
				<LoadingScreen text="Carregando itens. Aguarde." />
			);
		}

		return (
			<View style={styles.container}>
				<ProducesBody productData={productData} onScroll={this.handleSendListVisibility} navigation={navigation}/>
				<FloatingScrollAwareButton buttonText="Enviar lista para clientes" hide={hide} />
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
