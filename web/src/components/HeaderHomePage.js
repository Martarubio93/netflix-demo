import search from "../images/search.svg";
import bell from "../images/bell-solid.svg";
import "bootstrap/dist/css/bootstrap.min.css"; //adding bootstrap
import "../styles/layout/HomePage.scss";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useState } from "react";

const HeaderHomePage = () => {
  const [dropdown, setDropdown] = useState(false); //State fro dropdown
  const [searchEngine, setSearchEngine] = useState('')


  const handleSearchEngine = (ev) => {
      setSearchEngine(ev.currentTarget.value)
  }

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
          <DropdownItem>Home page</DropdownItem>
          <DropdownItem>Tv Series</DropdownItem>
          <DropdownItem>Films</DropdownItem>
          <DropdownItem>My List</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <div className="menu">
        <div className="homePageHeader__optionsContainer">
          <nav className="homePageHeader__optionsNav">
            <ul className="homePageHeader__optionsNavList">
              <li className="homePageHeader__optionsNavList--item">HomePage</li>
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
                <div class="input-wrapper">
                  <input type="search" className="input" placeholder="title, gender..." onChange={handleSearchEngine} value={searchEngine}/>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="input-icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
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
