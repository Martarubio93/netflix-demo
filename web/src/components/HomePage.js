import HeaderHomePage from "./HeaderHomePage";
import FilmList from './FilmList'

const HomePage = (props) => {
  return (
    <>
      <HeaderHomePage
        searchEngine={props.searchEngine}
        handleSearchEngine={props.handleSearchEngine}
      />
      <FilmList filmsFromApi={props.filmsFromApi}/>
    </>
  );
};

export default HomePage;
