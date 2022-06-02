import Footer from "../components/Footer";
import Header from "../components/Header";
import Encriptacao from "../components/Encriptacao";
import Decriptacao from "../components/Decriptacao";
import { useState } from "react";
import ModoContext from "../contexts/ModoContext";
import Preview from "../components/Preview";

//Componente inicial
const Home = () => {
	const [modo, setModo] = useState("");
	return (
		<div className="container">
			<ModoContext.Provider value={{ modo, setModo }}>
				<Header />
			</ModoContext.Provider>
			<div className="main">
				{modo === "Encriptação" && (
					<div className="left">
						<Encriptacao />
					</div>
				)}
				{modo === "Decriptação" && (
					<div className="right">
						<Decriptacao />
					</div>
				)}
				{modo === "Ambos" && (
					<>
						<div className="left">
							<Encriptacao />
						</div>
						<div className="right">
							<Decriptacao />
						</div>
					</>
				)}
				{(modo === "Demonstração" || !modo) && (
					<div>
						<Preview />
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
};

export default Home;
