<<<<<<< HEAD
import "../styles/layout/FilmListHome.scss";

const FilmList = (props) => {
  const renderList = () => {
    return props.filmsFromApi
      .filter((film) => {
        return film.name
          .toLowerCase()
          .includes(props.searchEngine.toLowerCase());
      })
      .map((film, index) => {
        return (
          <li key={index} id={film.id} className="filmListContainer__item">
            <h3 className="filmListContainer__item--title">{film.name}</h3>
            <img
              className="filmListContainer__item--img"
              src={film.image}
              alt="film"
            ></img>
          </li>
        );
      });
=======
import '../styles/layout/FilmListHome.scss'
import {Link} from 'react-router-dom'

const FilmList = (props) => {
  const renderList = () => {
    return (
      props.filmsFromApi
         .filter((film )=> {
           return film.name.toLowerCase().includes(props.searchEngine.toLowerCase())
    })
        .map((film, index) => {
          
          return (
            <Link className="detailedLink">
            <li key={index} id={film.id} className="filmListContainer__item">
              <h3 className="filmListContainer__item--title">{film.name}</h3>
              <img className="filmListContainer__item--img"src={film.image} alt="film"></img>
            </li>
            </Link>
          );
        })
    );
>>>>>>> b91b67ac24384cd881e85df8e51b7f19a2f1a702
  };

  return (
    <section key="1">
      <ul className="filmListContainer" >{renderList()}</ul>
    </section>
  );
};

export default FilmList;
