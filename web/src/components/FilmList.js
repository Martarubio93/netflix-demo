import '../styles/layout/FilmListHome.scss'
import {Link} from 'react-router-dom'
import Modal from './Modal'
import { useState } from 'react';

const FilmList = (props) => {
  const [isOpen, setIsOpen] = useState(false)
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
              <button onClick={()=> setIsOpen(true)}>More Details</button>
              <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Ey
              </Modal>
            </li>
            </Link>
          );
        })
    );
  };

  return (
    <section>
      <ul className="filmListContainer">{renderList()}</ul>
    </section>
  );
};

export default FilmList;
