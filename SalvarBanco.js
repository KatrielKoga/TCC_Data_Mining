const files = require('./files');
const fs = require('fs');

const mysql = require('mysql');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'uso_diario',
});

function formatData(data) {
	if (data) {
		var [dia, mes, ano] = data.split('/');
		return `${ano}-${mes}-${dia}`;
	}
}
function formatHora(data_hora) {
	if (data_hora) return data_hora.split(' ')[1];
}

connection.connect(err => {
	if (err) throw err;
	console.log('Connected!');
	lerMes();
});

// criar pasta arquivos e adicionar os arquivos de uso diario .txt (max 20 arquivos)

async function lerMes() {
	fs.readdir('./arquivos', async (err, arquivos) => {
		for (const arquivo of arquivos) {
			await busca(arquivo);
			console.log(arquivo);
		}
	});
}

async function busca(data) {
	var dados = files.read(data);
	var linhas = dados.split('\n');
	for (const element of linhas) {
		const [
			nome,
			n_cartao,
			tipo_cartao,
			data,
			linha,
			prefixo,
			categoria_onibus,
			data_hora,
			integracao,
		] = element.split(';');
		const dado = {
			nome,
			n_cartao,
			tipo_cartao,
			data: formatData(data),
			linha,
			prefixo,
			categoria_onibus,
			data_hora: formatHora(data_hora),
			integracao,
		};

		if (dado.integracao) {
			connection.query('insert into uso_diario set ?', dado, (err, res) => {
				if (err) throw err;

				console.log('Last insert ID:', res.insertId);
			});
		}
	}
	dados = null;
	linhas = null;
}
