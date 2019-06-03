import { stockItems } from './stock-items.json';
import { produces } from './produces.json';
import { stocks } from './stocks.json';
import { users } from './users.json';

export async function prepareStocks(expirationDate) {
	const data = stockItems.map(({produceId, quantity, stockId}) => {
		const user = users.find(user => user.login.uuid === stocks.find(stock => stock.stockId === stockId).userId);
		const userName = `${user.name.first} ${user.name.last}`;
		const userId = user.login.uuid;

		return {
			...produces[produceId],
			quantity,
			stockId,
			availability: [
				{
					userId: userId,
					name: userName,
					quantity,
				},
			],
		};
	}).reduce((acc, cur) => {
		const {id, quantity, stockId, availability} = cur;

		if (acc.some(item => item.id === id)) {
			return acc.map(item =>
				item.id === id
				? {
						...item,
						quantity: item.quantity + quantity,
						availability: [
							...item.availability,
							...availability,
						]
					}
				: item);
		}
		else {
			return [...acc, cur];
		}
	}, []);

	return new Promise(resolve => setTimeout(() => resolve(data), 1500));
}

export async function getStocks() {
	return stockItems;
}