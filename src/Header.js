import style from "../style/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookReader,
  faPlusSquare,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

const Header = () => {
  return (
    <div className={style.container}>
      <Link to="/main" style={{ color: "white" }}>
        <FontAwesomeIcon size="3x" icon={faBookReader} />
      </Link>

      <Link  to="/">
        <FontAwesomeIcon style={{color:'white'}} size="3x" icon={faHome} />
      </Link>
      

      <div className={style.rightContainer}>
        <p
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
          }}
        >
          My Books
        </p>
        <Link to="/mybooks">
          <FontAwesomeIcon
            style={{ color: "white" }}
            size="3x"
            icon={faPlusSquare}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
