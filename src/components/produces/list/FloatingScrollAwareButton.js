import React from 'react';

import {
	Animated,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Easing,
} from 'react-native';

import { BUTTON_MAIN_ACTIVE } from '../../../util/Colors';

const ANIMATION_DURATION_COLLAPSE = 200;
const ANIMATION_DURATION_EXPAND = 250;
const BUTTON_HEIGHT = 58;
const {width} = Dimensions.get('window');

export default class FloatingScrollAwareButton extends React.Component {
	state = {
		animationValue: new Animated.Value(0),
		animating: false,
	}

	handleVisibility = (delta, y) => {
		const {animating, animationValue} = this.state;
		
		if (delta >= 0 && !animating && y !== 0) {
			this.setState({
				animating: true,
			});
			
			Animated.timing(
				animationValue,
				{
					toValue: BUTTON_HEIGHT,
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
				animationValue,
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

	componentDidUpdate = () => {
		const {y, delta} = this.props;

		this.handleVisibility(delta, y);
	}

	render() {
		const {animationValue} = this.state;
		const {buttonText} = this.props;

		return(
			<Animated.View style={
				[
					styles.animatedView,
					{
						transform: [
							{
								translateY: animationValue,
							}
						],
					}
				]
			}>
				<TouchableOpacity style={styles.sendListButton}>
					<Text style={styles.sendListText}>{buttonText}</Text>
				</TouchableOpacity>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	sendListButton: {
		flex: 1,
		backgroundColor: BUTTON_MAIN_ACTIVE,
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
		width,
		height: 58,
		position: 'absolute',
		bottom: 0,
	}
});