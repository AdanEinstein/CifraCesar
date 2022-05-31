import styles from "../styles/Left.module.css";
import { useState } from "react";
import { cripto } from "../rule/cripto";

export default function Left(){
    const [msg, setMsg] = useState("")
    const [msgCript, setMsgCript] = useState("")
    const [deslocamento, setDeslocamento] = useState(0)

    function handleMsg(){
        setMsgCript(cripto(msg, deslocamento))
    }

    return (
        <div className={styles.Left}>
            <h1>Encriptação</h1>
            <textarea type="text" value={msg} placeholder="Digite sua mensagem aqui!" onChange={e => setMsg(e.target.value)}/>
            <div className={styles.controls}>
                <input type="number" min="0" max="25" value={deslocamento} onChange={e => setDeslocamento(e.target.value)} placeholder="Digite o deslocamento"/>
                <button onClick={handleMsg}>Criptografar</button>
            </div>
            <div className={styles.result}>
                <h2>Resultado:</h2>
                <div>
                    {msgCript}
                </div>
            </div>
        </div>
    )
}