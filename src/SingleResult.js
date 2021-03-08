import style from "../style/SingleResult.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { useState } from "react";
import { firebase } from "../Axios";

const SingleResult = ({ title, thumbnail, id, doesExist }) => {
  const myTitle = title.slice(0, 50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(doesExist);

  const addBook = async () => {
    setLoading(true);
    setError(false);
    if (doesExist) {
      alert('This book has been already saved')
      return
    }
    try {
      const data = await firebase.post("", {
        bookID: id,
        bookTitle: title,
      });
      setLoading(false);
      setError(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const buttonColor = doesExist ? 'grey' : 'green';

  return (
    <div className={style.container}>
      <div style={{ padding: "10px", height: "70px" }}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={`/book/${id}`}
        >
          <p>{myTitle}</p>
        </Link>
      </div>
      <img src={thumbnail} style={{ maxHeight: "200px" }} />
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}
        >
          <FontAwesomeIcon
            onClick={addBook}
            style={{ color: buttonColor, cursor: "pointer" }}
            size="3x"
            icon={faPlusSquare}
          />
          {error ? <p>Errore...</p> : null}
        </div>
      )}
    </div>
  );
};

export default SingleResult;
