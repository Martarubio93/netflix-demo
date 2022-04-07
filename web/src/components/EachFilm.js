import { Link } from "react-router-dom";
import "../styles/layout/FilmList.scss"

const EachFilm = (props) => {
  return (
    <>
      <li
        key={props.index}
        id={props.film.id}
        className="filmListContainer__item"
      >
        <Link className="filmListContainer__link"to={`film/${props.film.id}`} style={{ textDecoration: "none" }}>
          More details
        </Link>
        <h3 className="filmListContainer__item--title">{props.film.name}</h3>
        <img
          className="filmListContainer__item--img"
          src={props.film.image}
          alt="film"
        ></img>
      </li>
    </>
  );
};

export default EachFilm;
