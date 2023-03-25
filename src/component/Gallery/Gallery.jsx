import Card from "../Card/Card";
import "./Gallery.scss";
const Gallery = () => {
	const PROFILE = [
		"image26.png",
		"image20.png",
		"image29.png",
		"image24.png",
		"image28.png",
		"image23.png",
		"image25.png",
		"image27.png",
	];
	return (
		<section className="gallery">
			<div className="container">
				<h2>Gallery</h2>
				<div className="cardlist">
					{PROFILE.map((pic) => (
						<Card key={pic} path={pic} />
					))}
				</div>
				<div>
					<button>See All</button>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
