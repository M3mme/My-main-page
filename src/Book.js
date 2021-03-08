import { useState, useEffect } from "react";
import axios from 'axios';
import Header from '../components/Header';
import SingleChapter from "../components/SingleChapter";
import styles from "../style/Book.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import Message from "../components/Message";
import { googleBooks } from "../Axios";


function Book(props) {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chapterList, setChapterList] = useState([{ id: uuidv4() }]);
  const [error, setError] = useState(false);
  

  
  console.log(props);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookID = props.match.params.id;
        const bookData = await googleBooks.get(`/${bookID}`);
        setBookData(bookData.data.volumeInfo);
        setLoading(false);
        
      } catch (error) {
        console.log(error);
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addChapter = () => {
    setChapterList([...chapterList, { id: uuidv4() }]);
  };

  const renderChapter = () => {
    return chapterList.map((chapter, index) => {
      return (
        <SingleChapter
          bookName={bookData.title}
          key={chapter.id}
          bookID={chapter.bookID}
          chapter={chapter}
          number={index + 1}
        />
      );
    });
  };
  

  const createNewChapter = async () => {
    try {
      const bookKey = props.location.state;
      const response = axios.post(`https://booktakeaway-d4fd5-default-rtdb.firebaseio.com/booksData/${bookKey}/chapters.json`, ['la vita è bella'])
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const renderAuthors = () => {
    if (bookData.authors.length === 0) {
      return "Author not found";
    } else {
      return <h3>Author : {bookData.authors[0]}</h3>;
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <Message message="Errore di Network" error />
  ) : (
    
    <div className={styles.container}>
      <Header/>
      <div className={styles.infoContainer}>
        <div>
          <h2>{bookData.title}</h2>
          <p>{bookData.description}</p>

          {renderAuthors()}
        </div>

        <img className={styles.img} src={bookData.imageLinks.thumbnail} />
      </div>

      <div className={styles.chapterContainer}>
        {renderChapter()}
        <FontAwesomeIcon
          onClick={addChapter}
          style={{ marginTop: "30px", cursor: "pointer" }}
          size="3x"
          icon={faPlusSquare}
        />
      </div>
    </div>
  );
}

export default Book;
