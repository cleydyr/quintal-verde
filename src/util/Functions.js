export function denormalizeData(produces, stockItems) {
	return stockItems.map(item => {
		const {produceId, quantity} = item;

		return {
			...produces[produceId],
			quantity,
		};
	}).reduce((acc, cur) => {
		const {id, quantity} = cur;

		if (acc.some(item => item.id === id)) {
			return acc.map(item =>
				item.id === id
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