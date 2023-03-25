import "./ShowCase.scss";
const ShowCase = () => {
	return (
		<section className="showcase">
			<div className="container">
				<div className="left">
					<img src="./images/image50.png" alt="" />
				</div>
				<div className="right">
					<h2>Showcase your talent</h2>
					<p>
						FLAIR.ng is a modern modelling and talent agency which scouts for
						and identifies incredible and amazing models and talents
					</p>

					<button>Get Started</button>
				</div>
			</div>
		</section>
	);
};

export default ShowCase;
