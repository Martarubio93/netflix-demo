const FilmList = (props) => {
  const renderList = () => {
    debugger
    return (
      props.filmsFromApi
         .filter((film )=> {
           return film.name.toLowerCase().includes(props.searchEngine.toLowerCase())
    })
        .map((film, index) => {
          return (
            <li key={index} id={film.id}>
              <h3>{film.name}</h3>
              <img src={film.image} alt="film"></img>
            </li>
          );
        })
    );
  };

  return (
    <section>
      <ul>{renderList()}</ul>
    </section>
  );
};

export default FilmList;
