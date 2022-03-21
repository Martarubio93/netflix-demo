import HeaderHomePage from "./HeaderHomePage";
import FilmList from "./FilmList";

const HomePage = (props) => {
  return (
    <div className="HomePage">
      <HeaderHomePage
        searchEngine={props.searchEngine}
        handleSearchEngine={props.handleSearchEngine}
      />
      <FilmList
        filmsFromApi={props.filmsFromApi}
        searchEngine={props.searchEngine}
      />
    </div>
  );
};

export default HomePage;
