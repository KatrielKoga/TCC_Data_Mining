const fs = require('fs');

const read = nomeArquivo => {
	return fs.readFileSync(`${__dirname}/arquivos/${nomeArquivo}`, {
		encoding: 'utf-8',
	});
};

module.exports = { read };
