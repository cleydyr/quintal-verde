import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	SectionList,
	TouchableOpacity,
	Animated,
	Dimensions,
	Easing,
} from 'react-native';

import { BUTTON_MAIN_ACTIVE } from '../../../util/Colors';

import ProducesListBanner from './ProducesListBanner';
import ProducesListItem from './ProducesListItem';
import { prepareStocks } from '../../../api/stock-service';
import LoadingScreen from '../../LoadingScreen';


const ANIMATION_DURATION_COLLAPSE = 200;
const ANIMATION_DURATION_EXPAND = 250;
const SEND_LIST_HEIGHT = 58;
const {width} = Dimensions.get('window');

export default class ProducesBody extends React.Component {
	state = {
		sendListAnim: new Animated.Value(0),
		animating: false,
		loading: true,
	}

	componentDidMount = async () => {
		const productData = await prepareStocks();
		this.setState({
			productData,
			loading: false,
		});
	}

	handleSendListVisibility = (e) => {
		const delta = e.nativeEvent.velocity.y;
		const y = e.nativeEvent.contentOffset.y; // To avoid hiding on bounce at top

		const {animating} = this.state;

		if (delta >= 0 && !animating && y !== 0) {
			this.setState({
				animating: true,
			});

			Animated.timing(
				this.state.sendListAnim,
				{
					toValue: SEND_LIST_HEIGHT,
					duration: ANIMATION_DURATION_COLLAPSE,
					easing: Easing.out(Easing.ease),
					useNativeDriver: true,
				}
			).start(() => {
				this.setState({
					animating: false,
				});
			});
		}
		else if (!animating) {
			this.setState({
				animating: true,
			});

			Animated.timing(
				this.state.sendListAnim,
				{
					toValue: 0,
					duration: ANIMATION_DURATION_EXPAND,
					easing: Easing.in(Easing.ease),
					useNativeDriver: true,
				}
			).start(() => {
				this.setState({
					animating: false,
				});
			});
		}
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
					renderItem={({item}) => <ProducesListItem {...item}/>}
					keyExtractor={(item, index) => index}
				/>
				<Animated.View style={
					[
						styles.animatedView,
						{
							transform: [
								{
									translateY: sendListAnim,
								}
							],
						}
					]
				}>
					<TouchableOpacity style={styles.sendListButton}>
						<Text style={styles.sendListText}>Enviar lista para clientes</Text>
					</TouchableOpacity>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	sendListButton: {
		backgroundColor: BUTTON_MAIN_ACTIVE,
		height: 58,
		width,
		justifyContent: 'center',
		alignItems: 'center',
	},
	sendListText: {
		color: 'white',
		lineHeight: 30,
		fontFamily: 'Roboto',
		fontWeight: 'bold',
		fontSize: 19,
	},
	animatedView: 	{
		position: 'absolute',
		bottom: 0,
	}
});