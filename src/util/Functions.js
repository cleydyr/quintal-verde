import NumberFormatter from './NumberFormatter';

export function denormalizeData(produces, stockItems) {
	return stockItems.map(item => {
		const {produceId, quantity} = item;

		return {
			...produces[produceId],
			quantity,
		};
	}).reduce((acc, cur) => {
		const {produceId, quantity} = cur;

		if (acc.some(item => item.produceId === produceId)) {
			return acc.map(item =>
				item.produceId === produceId
				? {
						...item,
						quantity: item.quantity + quantity,
					}
				: item);
		}
		else {
			return [...acc, cur];
		}
	}, []);
}

export function calculateAvailability(produceId, users, stocks, stockItems) {
	const relevantStockItems = stockItems.filter(stockItem => stockItem.produceId === produceId);
	const availability = relevantStockItems.map(relevantStockItem => {
		const {stockId, quantity} = relevantStockItem;
		const stock = stocks.find(stock => stock.stockId === stockId);
		const userId = stock.userId;
		const {name} = users.find(user => user.login.uuid === userId);

		return {
			name: `${name.first} ${name.last}`,
			quantity,
		}
	});
	return availability;
}

export function toLocalCurrency(value) {
	return NumberFormatter.format(value/100.0);
}