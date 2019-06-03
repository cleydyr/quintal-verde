const fs = require('fs').promises;
const uuidv1 = require('uuid/v1');


async function buildStocks() {
	const chosen = [0, 1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 21, 25, 26, 27, 28, 30, 31, 34, 35, 36, 38, 39, 40, 41, 43, 45, 46, 48, 49, 52, 53, 54, 55, 56, 58, 60, 61, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 79, 80, 81, 84, 86, 90, 91, 92, 93, 94, 95, 97, 98, 99];
	const usersData = await fs.readFile('./users.json', 'utf-8');
	const users = JSON.parse(usersData).users;
	const userQty = users.length / 2;
	const futureDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	const stocks = chosen.map(i => ({
		userId: users[i].login.uuid,
		expirationDate: futureDate,
		stockId: uuidv1(),
	}));

	fs.writeFile('./stocks.json', JSON.stringify({
		stocks: stocks
	}), 'utf-8');
}

async function buildStockItems() {
	const produces = await parseEntityFile('produces');
	const stocks = await parseEntityFile('stocks');

	const stockItems = stocks.map(({
		stockId
	}) => {
		const numOfProduces = between(1, 5);
		const chosenProduces = (new Array(numOfProduces)).fill(0).map(() => produces[between(0, produces.length-1)].id);
		return chosenProduces.map(produceId => ({
			stockId,
			produceId,
			quantity: between(1, 10),
			stockItemId: uuidv1(),
		}));
	});

	fs.writeFile('./stock-items.json', JSON.stringify({
		stockItems: flatten(stockItems)
	}, 'utf-8'));
}

function flatten(array) {
	return array.reduce((acc, cur) => [...acc, ...cur], []);
}

function between(a, b) {
	return Math.floor(Math.random() * (b - a)) + a;
}

function readEntityFile(entityName) {
	return fs.readFile(`./${entityName}.json`, 'utf-8');
}

async function parseEntityFile(entityName) {
	return JSON.parse(await readEntityFile(entityName))[entityName];
}

async function postAll() {
	const request = require("request");

	const produces = await parseEntityFile('produces');

	produces.forEach(produce => {
		const options = {
			method: 'POST',
			url: 'https://quintalverde-a84f.restdb.io/rest/produces',
			headers: {
				'cache-control': 'no-cache',
				'x-apikey': 'ecca9f57de3c33c1ccade2876446e5eed3c5d',
				'content-type': 'application/json'
			},
			body: produce,
			json: true,
		};

		request(options, function (error, response, body) {
			if (error) throw new Error(error);
		});
	});
}

async function main() {
	buildStockItems();
}

main();