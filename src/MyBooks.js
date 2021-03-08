import { useState, useEffect } from "react";
import Message from "../components/Message";
import { firebase } from "../Axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function MyBooks() {
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    setLoading(true);
    try {
      const response = await firebase.get("");

      const bookList = [];

      for (let key in response.data) {
        bookList.push({
          title: response.data[key].bookTitle,
          id: response.data[key].bookID,
          key: key,
        });
      }

      setBookData(bookList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  const renderBookItem = (book) => {
    return (
      <div
        key={book.id}
        style={{
          display: "flex",
          justifyContent: "center",
          alingItems: "center",
          backgroundColor: "green",
          marginBottom: "10px",
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={{
            pathname: `book/${book.id}`,
            state: {},
          }}
        >
          <p style={{ color: "white" }}>{book.title}</p>
        </Link>
      </div>
    );
  };

  const renderBookList = () => {
    return bookData.map((item) => {
      return renderBookItem(item);
    });
  };

  

  return (
    <div>
      <Header/>
      <h1>Your saved books</h1>
      {error ? (
        <Message message="Errore di network" error />
      ) : loading ? (
        <Message message="Loading..." />
      ) : (
        renderBookList()
      )}
    </div>
  );
}

export default MyBooks;
