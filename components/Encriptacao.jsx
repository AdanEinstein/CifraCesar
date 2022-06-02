import styles from "../styles/Encriptacao.module.css";
import { useState } from "react";
import { cripto } from "../rule/cripto";

//Componente de Encriptação
export default function Encriptacao() {
	const [msg, setMsg] = useState("");
	const [msgCript, setMsgCript] = useState("");
	const [deslocamento, setDeslocamento] = useState(0);

	function handleMsg() {
		setMsgCript(cripto(msg, deslocamento));
	}

	return (
		<div className={styles.Encript}>
			<h1>Encriptação</h1>
			<textarea
				type="text"
				value={msg}
				placeholder="Digite sua mensagem aqui!"
				onChange={(e) => setMsg(e.target.value)}
			/>
			<div className={styles.controls}>
				<div>
					<label htmlFor="deslocamento">Deslocamento:</label>
					<input
						id="deslocamento"
						type="number"
						min="0"
						max="25"
						value={deslocamento}
						onChange={(e) => setDeslocamento(e.target.value)}
						placeholder="Digite o deslocamento"
					/>
				</div>
				<button onClick={handleMsg}>Criptografar</button>
			</div>
			<div className={styles.result}>
				<h2>Resultado:</h2>
				<div>{msgCript}</div>
			</div>
		</div>
	);
}
