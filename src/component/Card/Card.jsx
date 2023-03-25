import "./Card.scss";

const Card = ({ path }) => {
	return (
		<div className="card">
			<img src={`./images/${path}`} alt="" />
		</div>
	);
};

export default Card;
