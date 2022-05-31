export const cripto = (mensagem, deslocamento) => {
	const alfabeto = {
		original: [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		],
		chave: [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		],
	};
	deslocamento = deslocamento <= 0 ? 0 : deslocamento;
	const letrasPuladas = alfabeto.chave.splice(0, deslocamento);
	letrasPuladas.forEach((letra) => alfabeto.chave.push(letra));
	const arrayMsg = mensagem.split("");
	const arrayMsgCript = [];
	arrayMsg.forEach((letra) => {
		if (typeof letra == "string" && letra != " ") {
			const posicaoAlfabetoOriginal = alfabeto.original.indexOf(
				letra.toLowerCase()
			);
			arrayMsgCript.push(alfabeto.chave[posicaoAlfabetoOriginal]);
		} else {
			arrayMsgCript.push(letra);
		}
	});
	const msgCript = arrayMsgCript.join("");
	return msgCript;
};
