import About from "./component/About/About";
import Featured from "./component/Featured/Featured";
import Footer from "./component/Footer/Footer";
import Gallery from "./component/Gallery/Gallery";
import Navigation from "./component/Navigation/Navigation";
import ShowCase from "./component/ShowCase/ShowCase";
const App = () => {
	return (
		<>
			<Navigation />
			<Featured />
			<About />
			<Gallery />
			<ShowCase/>
			<Footer/>
		</>
	);
};

export default App;
