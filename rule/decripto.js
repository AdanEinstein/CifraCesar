import { key } from "./key"; //importando a função que gera a chave
export const decripto = (mensagem, deslocamento) => {
	// obtendo a chave a partir do deslocamento
	const alfabeto = key(deslocamento);
	// tranformando a mensagem encriptada em um array
	const arrayMsgCript = mensagem.split("");
	// array vazio que será obtido na decriptação
	const arrayMsg = [];
	// tranformando uma letra por vez...
	arrayMsgCript.forEach((letra) => {
		// obtendo a posição da letra na chave
		const posicaoAlfabetoEncript = alfabeto.chave.indexOf(
			letra.toLowerCase()
		);
		// caso a posição seja igual a -1 a 'letra' não esta presente na chave
		posicaoAlfabetoEncript === -1
			? // se sim, adicione a 'letra' sem transforma-la
			  arrayMsg.push(letra)
			: // senão adicione pela letra obtida no alfabeto na posição encontrada
			  arrayMsg.push(alfabeto.original[posicaoAlfabetoEncript]);
	});
	// tranformando o arrayMsg em uma string..
	const msg = arrayMsg.join("");
	// retornando a mensagem clara
	return msg;
};
