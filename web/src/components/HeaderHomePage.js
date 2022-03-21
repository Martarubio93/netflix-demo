import bell from "../images/bell-solid.svg";
import "bootstrap/dist/css/bootstrap.min.css"; //adding bootstrap
import "../styles/layout/HeaderHomePage.scss";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

const HeaderHomePage = (props) => {
  const [dropdown, setDropdown] = useState(false); //State fro dropdown

  const handleInput = (ev) => {
    props.handleSearchEngine({
      key: "name",
      value: ev.currentTarget.value,
    });
  };

  const openCloseDropDown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className="homePageHeader">
      <Dropdown
        className="Dropdown"
        isOpen={dropdown}
        toggle={openCloseDropDown}
      >
        <DropdownToggle caret></DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Home</DropdownItem>
          <DropdownItem>Tv Series</DropdownItem>
          <DropdownItem>Films</DropdownItem>
          <DropdownItem>My List</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <div className="menu">
        <div className="homePageHeader__optionsContainer">
          <nav className="homePageHeader__optionsNav">
            <ul className="homePageHeader__optionsNavList">
              <li className="homePageHeader__optionsNavList--item">Home</li>
              <li className="homePageHeader__optionsNavList--item">
                TV Series
              </li>
              <li className="homePageHeader__optionsNavList--item">Films</li>
              <li className="homePageHeader__optionsNavList--item">My List</li>
            </ul>
          </nav>
        </div>
        <div className="homePageHeader__actionsContainer">
          <nav className="homePageHeader__actionsNav">
            <ul className="homePageHeader__actionsNavList">
              <li className="homePageHeader__actionsNavList--item">
                <div className="input-wrapper">
                  <input
                    type="search"
                    className="input-wrapper__input"
                    placeholder="title, gender..."
                    onChange={handleInput}
                    value={props.searchEngine}
                  />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="input-wrapper__input--icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
              <li className="homePageHeader__actionsNavList--item">
                <img
                  className="homePageHeader__actionsNavList--img"
                  src={bell}
                  alt="notifications"
                ></img>
              </li>
              <li className="homePageHeader__actionsNavList--item">FOTO</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderHomePage;
