import "./Footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="top">
					<div className="desc">
						<h4>Flair.ng</h4>
						<p>
							FLAIR.ng is the best place to turn to when it comes to nature and
							plants. we are one of the best in the industry
						</p>
						<div className="socials">
							<div className="box">
								<img src="./images/tw.png" alt="" />
							</div>
							<div className="box">
								<img src="./images/fb.png" alt="" />
							</div>
							<div className="box">
								<img src="./images/ig.png" alt="" />
							</div>
						</div>
					</div>
					<div className="links">
						<div className="item">
							<h2>About</h2>
							<span>Our story</span>
							<span>Support</span>
							<span>Testimonals</span>
							<span>Contact</span>
						</div>
						<div className="item">
							<h2>Blog</h2>
							<span>Our Plant</span>
							<span>Plant Care</span>
							<span>What to know</span>
						</div>
						<div className="item">
							<h2>Discover</h2>
							<span>Explore</span>
							<span>Designs</span>
							<span>FAQs</span>
							<span>NewsLetter</span>
						</div>
					</div>
					<div className="newsletter"></div>
				</div>
				<div className="bottom">
					<hr />
					<p>
						Designed by{" "}
						<a href="https://twitter.com/inTeeehsmind">@inTeeehsmind</a> built
						by <a href="https://twitter.com/nathanbolt5">@nathanbolt5</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
