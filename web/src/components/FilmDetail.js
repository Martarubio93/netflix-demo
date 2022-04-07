import { Link } from "react-router-dom";
import "../styles/layout/FilmDetail.scss"
import arrow from '../images/arrow.svg'

const filmDetail = (props) => {
  const data = props.getRoute;
  console.log(data);

  return (
    <div className="carddetail">
      <Link className="link" to="/HomePage">
      <img className="iconBack" src={arrow} alt="back"></img>
      </Link>
      <img className="carddetail__img" src={data.image} alt={data.name} />
      <div className="carddetail__info">
        <h2 className="carddetail__name">{data.name}</h2>
        <h4>Rating {data.rating}</h4>
        <h4>Genres</h4>
        <ul className="carddetail__list">
          {data.genres.map((genre, index) => {
            return <li className="carddetail__list--item"key={index}>{genre}</li>;
          })}
        </ul>
        <h3>Summary</h3>
        <p>{data.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        
      </div>
    </div>
  );
};

export default filmDetail;
