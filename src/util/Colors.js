import Color from 'color';

function alpha(color, value) {
	return Color(color).alpha(value).hsl().string();
}

export const GREEN_MAIN = '#15a453';
export const GREEN_MAIN_DARKEN_50 = alpha(GREEN_MAIN, 0.5);
export const BUTTON_MAIN_ACTIVE = '#1d72b6';
export const LABEL_TEXT = '#212121';
export const TEXT_INPUT_BG = alpha(LABEL_TEXT, 0.1);
export const PICKER_BG = '#21212132';
export const BUTTON_SECONDARY = '#21212180'
export const ERROR_MAIN = '#da2b2b';
export const BLACK_ALPHA = '#000000de';
export const MASK = '#27283380';
export const IMAGE_PICKER_ICON = alpha(LABEL_TEXT, 0.4);