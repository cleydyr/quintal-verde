import {stockItems} from './stock-items.json';

export async function getStockItems() {
	return new Promise(resolve => setTimeout(() => resolve(stockItems), 1500));
}