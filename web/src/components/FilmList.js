import "../styles/layout/FilmList.scss";
import EachFilm from "./EachFilm";

const FilmList = (props) => {
  const renderList = () => {

    return props.filmsFromApi
      .filter((film) => {
        return film.name
          .toLowerCase()
          .includes(props.searchEngine.toLowerCase());
      })
      .map((film, index) => {
        return <EachFilm key={index} film={film} />;
      });
  };

 
  return (
    <section className="filmsSection"key="1">
      <ul className="filmListContainer">{renderList()}</ul>
    </section>
  );
};

export default FilmList;
