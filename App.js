import React from 'react';

import { AppLoading, Font } from 'expo';

import { Entypo, AntDesign} from '@expo/vector-icons';

import ProducesScreenList from './src/components/produces/list/ProducesScreen';

import LoginScreen from './src/components/LoginScreen';

import {createStackNavigator, createAppContainer} from 'react-navigation';
import ProduceDetails from './src/components/produces/details/ProduceDetails';


const StackNavigation = createStackNavigator({
	Home: {
		screen: ProducesScreenList,
	},
	ProduceDetails: {
		screen: ProduceDetails,
	}
});

const NavigationContainer = createAppContainer(StackNavigation);

export default class App extends React.Component {
	state = {
		loading: true,
		authenticated: false,
	}

	_loadAssetsAsync = () => {
		return Promise.all([
			Entypo.loadFont(),
			AntDesign.loadFont(),
			Font.loadAsync({
				Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
			})
		]);
	}

	authenticate = () => {
		this.setState({
			authenticated: true,
		});
	}

	stopLoading = () => {
		this.setState({
			loading: false,
		});
	}

	render() {
		const {
			loading,
			authenticated,
		} = this.state;

		if (loading) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={this.stopLoading}
					onError={console.warn}
				/>
			);
		}

		if (!authenticated) {
			return (
				<LoginScreen onAuthSuccess={this.authenticate}/>
			);
		}
		else {
			return (
				<NavigationContainer/>
			);
		}
	}
}
