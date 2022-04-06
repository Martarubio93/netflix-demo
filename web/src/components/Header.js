import {Link} from 'react-router-dom'
import "../styles/layout/Header.scss"
import martflix from '../images/logo.svg'


const Header = () => {
  return (
    <header>
      <Link to="/">
      <img className="martflix"src={martflix} alt="icon"/>
      </Link>
    </header>
  );
};

export default Header;
