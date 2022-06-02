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
		// obtendo a posição da letra na chave
		const posicaoAlfabetoOriginal = alfabeto.original.indexOf(
			letra.toLowerCase()
		);
		// caso a posição seja igual a -1 a 'letra' não esta presente no alfabeto
		posicaoAlfabetoOriginal === -1
			? // se sim, adicione a 'letra' sem transforma-la
			  arrayMsgCript.push(letra)
			: // senão adicione pela letra obtida na chave na posição encontrada
			  arrayMsgCript.push(alfabeto.chave[posicaoAlfabetoOriginal]);
	});
	// tranformando o arrayMsgCript em uma string..
	const msgCript = arrayMsgCript.join("");
	// return a mensagem encriptada
	return msgCript;
};
