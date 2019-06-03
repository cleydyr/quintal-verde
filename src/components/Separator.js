import React from 'react';

import {View} from 'react-native';

export default props => <View {...props} style={[props.style, {
	height: 1,
	backgroundColor: 'black',
	opacity: 0.12,
}]}/>