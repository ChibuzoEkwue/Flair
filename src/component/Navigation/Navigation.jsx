import "./Navigation.scss";

const Navigation = () => {
	return (
		<header >
			<div className="container">
				<nav>
					<h2>Flair.ng</h2>
					<div>
						<div className="links">
							<span>Home</span>
							<span>Talent</span>
							<span>Model</span>
							<span>News</span>
							<span>Partners</span>
						</div>
						<button>Contact Us</button>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navigation;
