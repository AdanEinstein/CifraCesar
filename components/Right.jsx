import styles from "../styles/Right.module.css";

export default function Right(){
    return (
        <div className={styles.Right}>
            <h1>Decriptação</h1>
            <textarea type="text" placeholder="Digite sua mensagem aqui!"/>
            <div className={styles.controls}>
                <input type="number" min="0" max="25" placeholder="Digite o deslocamento"/>
                <button>Descriptografar</button>
            </div>
            <div className={styles.result}>
                <h2>Resultado:</h2>
                <div>
                    
                </div>
            </div>
        </div>
    )
}