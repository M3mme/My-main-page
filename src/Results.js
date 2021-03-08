import style from "../style/Results.module.css";
import { useEffect, useState } from "react";
import SingleResult from "./SingleResult";
import { firebase } from "../Axios";

const Results = ({ data }) => {
  console.log(data.items);
  const myData = data.items;
  const [getBooksID, setGetBooksID] = useState([]);

  useEffect(() => {
    getSavedBooksID();
  }, []);

  const getSavedBooksID = async () => {
    try {
      const response = await firebase.get();
      const data = response.data;
      console.log("data da firebase", data);
      const allIDs = [];
      for (let key in data) {
        allIDs.push(data[key].bookID);
      }
      setGetBooksID(allIDs);
      console.log("id salvati", allIDs);
    } catch (error) {
      console.log(error);
    }
  };

  const renderElement = () => {
    return myData.map((book) => {
      const doesExist = getBooksID.includes(book.id);
      return (
        <SingleResult
          doesExist={doesExist}
          key={book.id}
          id={book.id}
          thumbnail={book.volumeInfo.imageLinks.thumbnail}
          title={book.volumeInfo.title}
        />
      );
    });
  };

  return (
    <div className={style.container}>
      <div className={style.resultsContainer}>{renderElement()}</div>
    </div>
  );
};

export default Results;
