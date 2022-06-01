import { key } from "./key";
export const cripto = (mensagem, deslocamento) => {
	const alfabeto = key(deslocamento);
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
