import { key } from "./key"
export const decripto = (mensagem, deslocamento) => {
    const alfabeto = key(deslocamento)
    const arrayMsgCript = mensagem.split("");
	const arrayMsg = [];
	arrayMsgCript.forEach((letra) => {
		if (typeof letra == "string" && letra != " ") {
			const posicaoAlfabetoEncript = alfabeto.chave.indexOf(
				letra.toLowerCase()
			);
			arrayMsg.push(alfabeto.original[posicaoAlfabetoEncript]);
		} else {
			arrayMsg.push(letra);
		}
	});
	const msg = arrayMsg.join("");
	return msg;
}