import styles from "../styles/Right.module.css";
import { decripto } from "../rule/decripto";
import { useState } from "react";

export default function Right() {
	const [msgCript, setMsgCript] = useState("");
	const [deslocamento, setDeslocamento] = useState(0);
	const [msg, setMsg] = useState("");

    function handleMsg(){
        setMsg(decripto(msgCript, deslocamento))
    }

	return (
		<div className={styles.Right}>
			<h1>Decriptação</h1>
			<textarea
				type="text"
				placeholder="Digite sua mensagem aqui!"
				value={msgCript}
				onChange={(e) => setMsgCript(e.target.value)}
			/>
			<div className={styles.controls}>
				<div>
					<label htmlFor="deslocamento">Deslocamento</label>
					<input
						id="deslocamento"
						type="number"
						min="0"
						max="25"
						placeholder="Digite o deslocamento"
										value={deslocamento}
										onChange={e => setDeslocamento(e.target.value)}
					/>
				</div>
				<button onClick={handleMsg}>Descriptografar</button>
			</div>
			<div className={styles.result}>
				<h2>Resultado:</h2>
				<div>{msg}</div>
			</div>
		</div>
	);
}
