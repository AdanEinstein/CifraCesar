import { key } from "./key" //importando a função que gera a chave
export const decripto = (mensagem, deslocamento) => {
	// obtendo a chave a partir do deslocamento
    const alfabeto = key(deslocamento)
	// tranformando a mensagem encriptada em um array
    const arrayMsgCript = mensagem.split("");
	// array vazio que será obtido na decriptação
	const arrayMsg = [];
	// tranformando uma letra por vez...
	arrayMsgCript.forEach((letra) => {
		// verificação caso a 'letra' seja uma string e diferente de um
		// espaço em branco
		if (typeof letra == "string" && letra != " ") {
			// obtendo a posição da letra na chave
			const posicaoAlfabetoEncript = alfabeto.chave.indexOf(
				letra.toLowerCase()
			);
			// adição da letra obtida no alfabeto original a partir da posição 
			// encontrada no 'arrayMsg'
			arrayMsg.push(alfabeto.original[posicaoAlfabetoEncript]);
		} else {
			// caso contrário adicione a letra obtida no 'arrayMsg'
			arrayMsg.push(letra);
		}
	});
	// tranformando o arrayMsg em uma string..
	const msg = arrayMsg.join("");
	// retornando a mensagem clara
	return msg;
}