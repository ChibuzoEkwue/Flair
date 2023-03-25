import "./About.scss";
const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="top">
					<div className="left">
						<img src="./images/image18.png" alt="" />
					</div>
					<div className="right">
						<h2>what we do</h2>
						<p>
							FLAIR.ng is a modern modelling and talent agency which scouts for
							and identifies incredible and amazing models and talents. We
							provide our clients with te best talents out there to help build
							and boost their brands or companies.
						</p>

						<button>Discover</button>
					</div>
				</div>
				<div className="bottom">
					<div className="left">
						<h2>Hiring made easy</h2>
						<p>
							FLAIR.ng is a modern modelling and talent agency which scouts for
							and identifies incredible and amazing models and talents. We
							provide our clients with te best talents out there to help build
							and boost their brands or companies.
						</p>

						<button>Discover</button>
					</div>
					<div className="right">
						<div className="images">
							<img src="./images/image19.png" alt="" />
							<img src="./images/image49.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
