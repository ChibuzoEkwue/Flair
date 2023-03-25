import "./Featured.scss";
const Featured = () => {
	return (
		<section className="featured">
			<div className="container">
				<div className="left">
					<div className="textbox">
						<div className="textbox__main">
							<h1>The best platform to discover talent & models</h1>
						</div>
						<div className="textbox__sub">
							<p>
								At Flair, We identify amazing talents and models to help build
								an amazing industry and make hiring a lot easier
							</p>
						</div>
					</div>

					<button>Discover</button>
				</div>
				<div className="right">
					<div>
						<img alt="" src="/images/image8.png" />
						<img alt="" src="/images/image6.png" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
