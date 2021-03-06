import { getProduces } from "../service-api/produce-service";
import { getStockItems } from "../service-api/stock-item-service";
import { getStocks } from '../service-api/stock-service';
import { getUsers } from '../service-api/user-service';

export const EDIT_PRODUCE = 'EDIT_PRODUCE';
export const START_LOADING_PRODUCES = 'START_LOADING_PRODUCES';
export const STOP_LOADING_PRODUCES = 'STOP_LOADING_PRODUCES';
export const UPDATE_PRODUCES = 'UPDATE_PRODUCES';
export const UPDATE_STOCK_ITEMS = 'UPDATE_STOCK_ITEMS';
export const UPDATE_STOCKS = 'UPDATE_STOCKS';
export const UPDATE_USERS = 'UPDATE_USERS';
export const TOGGLE_PRODUCE_MODAL_VISIBLE = 'TOGGLE_PRODUCE_MODAL_VISIBLE';
export const UPDATE_PRODUCE = 'UPDATE_PRODUCE';
export const ADD_PRODUCE = 'ADD_PRODUCE';

const startLoadingProduces = () => ({
	type: START_LOADING_PRODUCES,
});

const stopLoadingProduces = () => ({
	type: STOP_LOADING_PRODUCES,
});

export const startFetching = () => async dispatch => {
	dispatch(startLoadingProduces());
	await Promise.all(
		[
			dispatch(fetchProduces()),
			dispatch(fetchStockItems()),
			dispatch(fetchStocks()),
			dispatch(fetchUsers()),
		]
	);
	dispatch(stopLoadingProduces());
}

const updateProduces = produces => ({
	type: UPDATE_PRODUCES,
	produces,
});

const updateStockItems = stockItems => ({
	type: UPDATE_STOCK_ITEMS,
	stockItems,
});

const updateStocks = stocks => ({
	type: UPDATE_STOCKS,
	stocks,
});

const updateUsers = users => ({
	type: UPDATE_USERS,
	users,
});

const fetchProduces = () => async dispatch => {
	const produces = await getProduces();
	dispatch(updateProduces(produces));
}

const fetchStockItems = () => async dispatch => {
	const stockItems = await getStockItems();
	dispatch(updateStockItems(stockItems));
}

const fetchStocks = () => async dispatch => {
	const stocks = await getStocks();
	dispatch(updateStocks(stocks));
}

const fetchUsers = () => async dispatch => {
	const users = await getUsers();
	dispatch(updateUsers(users));
}

export const toggleModalVisible = () => ({
	type: TOGGLE_PRODUCE_MODAL_VISIBLE,
});

export const updateProduce = produce => ({
	type: UPDATE_PRODUCE,
	produce,
});

export const addProduce = produce => ({
	type: ADD_PRODUCE,
	produce,
});