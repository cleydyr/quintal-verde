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