import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

import ProducesHeader from './ProducesHeader';
import ProducesBody from './ProducesBody';
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

	render() {
		const {navigation} = this.props;

		return (
			<View style={styles.container}>
				<ProducesBody navigation={navigation}/>
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
