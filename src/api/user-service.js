export async function authenticate(cpf, password) {
	return new Promise(resolve => {
		setTimeout(() => resolve(cpf === '1234' && password === '1234'), 1000);
	});
}