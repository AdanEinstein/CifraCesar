import { useContext } from "react";
import ModoContext from "../contexts/ModoContext"

export default function Header(){
    const {modo, setModo} = useContext(ModoContext)
    return (
        <header className="header">
            <h1>Cifra de César</h1>
            <select onChange={e => setModo(e.target.value)}>
                <option select='true'>Selecione o modo:</option>
                <option value="Encriptação">Encriptação</option>
                <option value="Decriptação">Decriptação</option>
                <option value="Ambos">Ambos</option>
            </select>
        </header>
    )
}