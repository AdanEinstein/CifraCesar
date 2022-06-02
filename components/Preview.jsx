import styles from "../styles/Preview.module.css";
import { key } from "../rule/key";
import { useEffect, useState } from "react";

//Componente de desmonstração da chave
export default function Preview() {
	const { original } = key(0);
	const [deslocamento, setDeslocamento] = useState(0);
	const [chave, setChave] = useState([]);

	useEffect(() => {
		setChave((oldChave) => key(deslocamento).chave);
	}, [deslocamento]);

	return (
		<>
			<h2 style={{textAlign: "center"}}>Demonstração da cifra de césar</h2>
			<div className={styles.preview}>
				<label htmlFor="deslocamento">Deslocamento</label>
				<input
					type="number"
					id="deslocamento"
					value={deslocamento}
					onChange={(e) => setDeslocamento(e.target.value)}
				/>
			</div>
			<div className={styles.result}>
				<table>
					<tr>
						{original.map((letra) => (
							<td key={letra}>{letra}</td>
						))}
					</tr>
					{chave && (
						<tr>
							{chave.map((letra) => (
								<td key={letra}>{letra}</td>
							))}
						</tr>
					)}
				</table>
			</div>
		</>
	);
}
