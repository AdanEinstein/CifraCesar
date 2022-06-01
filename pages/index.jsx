import Footer from "../components/Footer";
import Header from "../components/Header";
import Left from "../components/Left";
import Right from "../components/Right";
import { useState } from "react";
import ModoContext from "../contexts/ModoContext";
import Preview from "../components/Preview";

const Home = () => {
	const [modo, setModo] = useState("");
	return (
		<div className="container">
			<ModoContext.Provider value={{ modo, setModo }}>
				<Header />
			</ModoContext.Provider>
			<div className="main">
				{modo == "Encriptação" && (
					<div className="left">
						<Left />
					</div>
				)}
				{modo == "Decriptação" && (
					<div className="right">
						<Right />
					</div>
				)}
				{modo == "Ambos" && (
					<>
						<div className="left">
							<Left />
						</div>
						<div className="right">
							<Right />
						</div>
					</>
				)}
				{(!modo || modo == "Selecione o modo:") && (
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
