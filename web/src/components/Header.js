
import "../styles/layout/Header.scss"
import martflix from '../images/logo.svg'


const Header = () => {
  return (
    <header>
      <img className="martflix"src={martflix} alt="icon"/>

    </header>
  );
};

export default Header;
