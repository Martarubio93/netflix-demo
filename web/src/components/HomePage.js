import HeaderHomePage from "./HeaderHomePage";

const HomePage = (props) => {
  return (
    <>
      <HeaderHomePage
        searchEngine={props.searchEngine}
        handleSearchEngine={props.handleSearchEngine}
      />
    </>
  );
};

export default HomePage;
