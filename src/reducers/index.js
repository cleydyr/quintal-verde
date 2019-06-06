import {
	START_LOADING_PRODUCES,
	STOP_LOADING_PRODUCES,
	UPDATE_PRODUCES,
	UPDATE_STOCK_ITEMS,
	UPDATE_STOCKS,
	UPDATE_USERS,
} from '../actions';

const initialState = {
	produces: [],
	users: [],
	stocks: [],
	stockItems: [],
}

export default function reducer(state = initialState, action) {
	if (!action) {
		return state;
	}

	const {
		produces,
		stockItems,
		stocks,
		users,
	} = action;

	switch(action.type) {
		case START_LOADING_PRODUCES:
			return {
				...state,
				isLoadingProduces: true,
			};
			break;
		case STOP_LOADING_PRODUCES:
			return {
				...state,
				isLoadingProduces: false,
			};
		case UPDATE_PRODUCES:
			return {
				...state,
				produces,
			}
		case UPDATE_STOCK_ITEMS:
			return {
				...state,
				stockItems,
			}
		case UPDATE_STOCKS:
			return {
				...state,
				stocks,
			}
		case UPDATE_USERS:
			return {
				...state,
				users,
			}
		default:
			return state;
	}
}