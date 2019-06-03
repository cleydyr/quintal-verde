import { stockItems } from './stock-items.json';
import { produces } from './produces.json';

export async function prepareStocks(expirationDate) {
	return stockItems.map(({produceId, quantity}) => ({
		...produces[produceId],
		quantity,
	})).reduce((acc, cur) => {
		const {id, quantity} = cur;

		return acc.find(item => item.id === id)
			? acc.map(item => item.id === id ? {...item, quantity: item.quantity + quantity} : item)
			: [...acc, cur];
	}, []);
}

export async function getStocks() {
	return stockItems;
}