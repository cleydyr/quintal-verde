import {produces} from './produces.json';

export async function getProduces() {
	return new Promise(resolve => setTimeout(() => resolve(produces), 1000));
}