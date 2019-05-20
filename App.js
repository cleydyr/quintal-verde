import React from 'react';

import { AppLoading, Font } from 'expo';

import { Entypo, AntDesign} from '@expo/vector-icons';

import ProducesScreen from './src/components/produces/ProducesScreen';

export default class App extends React.Component {
	state = {
		loading: true,
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

	render() {
		const {loading} = this.state;

		if (loading) {
			return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({ loading: false })}
					onError={console.warn}
				/>
			);
		}
		else {
			return (
				<ProducesScreen/>
			);
		}
	}
}
