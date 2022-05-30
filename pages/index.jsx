import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
	return (
		<div className="container">
			<Header />
			<div className="left">
                Left
            </div>
            <div className="right">
                Right
            </div>
			<Footer />
		</div>
	);
};

export default Home;
