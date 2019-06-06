import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import {connect} from 'react-redux';

import ProducesHeader from './ProducesHeader';
import ProducesBody from './ProducesBody';
import LoadingScreen from '../../LoadingScreen';
import FloatingScrollAwareButton from './FloatingScrollAwareButton';

import {startFetching} from '../../../actions';
import {denormalizeData} from '../../../util/Functions';

import { GREEN_MAIN } from '../../../util/Colors';

class ProducesScreen extends React.Component {
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
		const {dispatch} = this.props;

		dispatch(startFetching());
	}

	handleSendListVisibility = e => {
		const newY = e.nativeEvent.contentOffset.y;

		this.setState(prevState => ({
			y: newY,
			hide: newY > prevState.y,
		}));
	}

	render() {
		const {navigation, isLoadingProduces, listItems} = this.props;
		const {hide} = this.state;

		if (isLoadingProduces) {
			return (
				<LoadingScreen text="Carregando itens. Aguarde." />
			);
		}

		return (
			<View style={styles.container}>
				<ProducesBody productData={listItems} onScroll={this.handleSendListVisibility} navigation={navigation}/>
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

const mapStateToProps = state => {
	const {isLoadingProduces, produces, stockItems} = state;

	return {
		isLoadingProduces,
		listItems: denormalizeData(produces, stockItems),
	}
};

const ConnectedProducesScreen = connect(mapStateToProps)(ProducesScreen);

export default ConnectedProducesScreen;
