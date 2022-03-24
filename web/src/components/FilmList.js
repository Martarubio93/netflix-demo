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
  };

  return (
    <section key="1">
      <ul className="filmListContainer" >{renderList()}</ul>
    </section>
  );
};

export default FilmList;
