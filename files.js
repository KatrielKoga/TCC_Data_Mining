const fs = require('fs');

const read = nomeArquivo => {
	return fs.readFileSync(`${__dirname}/arquivos/${nomeArquivo}`, {
		encoding: 'utf-8',
	});
};

// const write = (nomeArquivo, conteudo) => {
// 	const dirname = `${__dirname}/alterados`;
// 	if (!fs.existsSync(dirname)) {
// 		fs.mkdir(dirname);
// 	}

// 	fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, {
// 		encoding: 'utf-8',
// 	});
// };

module.exports = { read /*, write*/ };
