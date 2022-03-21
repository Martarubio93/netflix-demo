const FilmList = (props) => {
    return props.filmsFromApi.map((film, index) => {
        return (
          <li key={index} id={film.id} className="filmList">
           <h3>{film.name}</h3>
           <img src={film.image}/>
          </li>
        );
      });
  };

export default FilmList