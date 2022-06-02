import { key } from "./key"; //importando a função que gera a chave
export const cripto = (mensagem, deslocamento) => {
	// obtendo a chave a partir do deslocamento
	const alfabeto = key(deslocamento);
	// tranformando a mensagem em um array
	const arrayMsg = mensagem.split("");
	// array vazio que será obtido na encriptação
	const arrayMsgCript = [];
	// tranformando uma letra por vez...
	arrayMsg.forEach((letra) => {
		// verificação caso a 'letra' seja uma string e diferente de um
		// espaço em branco
		if (typeof letra == "string" && letra != " ") {
			// obtendo a posição da letra no alfabeto original [a - z]
			const posicaoAlfabetoOriginal = alfabeto.original.indexOf(
				letra.toLowerCase()
			);
			// adição da letra obtida na chave a partir da posição 
			// encontrada no 'arrayMsgCript'
			arrayMsgCript.push(alfabeto.chave[posicaoAlfabetoOriginal]);
		} else {
			// caso contrário adicione a letra obtida no 'arrayMsgCript'
			arrayMsgCript.push(letra);
		}
	});
	// tranformando o arrayMsgCript em uma string..
	const msgCript = arrayMsgCript.join("");
	// return a mensagem encriptada
	return msgCript;
};
