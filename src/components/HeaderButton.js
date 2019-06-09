import React from 'react';

import {
	View,
	TouchableNativeFeedback,
	StyleSheet,
} from 'react-native';

import {
	GREEN_MAIN_DARKEN_50,
} from '../util/Colors';

import {
	ICON_SIZE,
	TOUCHABLE_ICON_HIT_SLOP,
} from '../util/Constants';

const styles = StyleSheet.create({
	headerRight: {
		marginRight: 21,
		alignItems: 'center',
		justifyContent: 'center',
		width: ICON_SIZE*1.2,
		height: ICON_SIZE*1.2,
		borderRadius: ICON_SIZE*1.2/2,
	},
	container: {
		flex: 1,
	}
});

export default HeaderButton = ({element, name, onPress}) => (
	<TouchableNativeFeedback onPress={onPress} hitSlop={TOUCHABLE_ICON_HIT_SLOP}
		background={TouchableNativeFeedback.Ripple(GREEN_MAIN_DARKEN_50, true)}>
		<View style={styles.headerRight}>
				{
					React.createElement(
						element,
						{
							name,
							size: ICON_SIZE,
							color: 'white',
						}
					)
				}
		</View>
	</TouchableNativeFeedback>
);