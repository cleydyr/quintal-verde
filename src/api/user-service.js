import {users} from './users.json';

export async function authenticate(cpf, password) {
	return new Promise(resolve => {
		setTimeout(() => resolve(cpf === '1234' && password === '1234'), 1000);
	});
}

export async function getUsers() {
	return users;
}