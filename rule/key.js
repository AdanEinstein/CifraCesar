export const key = (deslocamento) => {
	//Objeto com o alfabeto original como atributo e a chave que será
	//gerada a partir do deslocamento como segundo atributo
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
	// Tratamento do valor do deslocamento que não pode ser inferior a 0
	deslocamento = deslocamento <= 0 ? 0 : deslocamento;
	// Recorte do array 'chave' baseado no deslocamento
	const letrasPuladas = alfabeto.chave.splice(0, deslocamento);
	// Adição de cada letra recortada do array ao final
	letrasPuladas.forEach((letra) => alfabeto.chave.push(letra));
	// Retorno do objeto modificado
	return alfabeto;
};
