export async function authenticate(cpf, password) {
	return new Promise(resolve => {
		setTimeout(() => {
			if (cpf === '1234' && password === '1234') {
				resolve(true);
			}
			else {
				resolve(false);
			}
		}, 2000
		);
	});
}