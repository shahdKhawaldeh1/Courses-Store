import "./styles.css";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>

    <header>
    <div className="container">
       <div className="nav-row"> 
       <div className="logo">
          <img className="logo-img" alt="logo" src={logo} />
          <Link className="logo-name" to="/">
            Courses Store
          </Link>
        </div>

        <nav>
          <ul className="nav-list">
            <li>
              <Link  className="nav-link active" to="/">Home</Link>
            </li>
            <li>
              <Link  className="nav-link" to="courses">Courses</Link>
            </li>
            <li>
              <Link className="nav-link" to="/">About Us</Link>
            </li>
            <li>
              <Link className="nav-link" to="/">Article</Link>
            </li>
            <li>
              <Link  className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="auth">
          <Link  className="login" to="/">Login</Link>
          <Link  className="register" to="/">Register</Link>
        </div>
       </div>
      </div>

    </header>
    
    </>
  );
};

export default Navbar;
