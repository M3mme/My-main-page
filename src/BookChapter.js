import styles from "../style/BookChapter.module.css";
import { useState } from "react";
import Header from '../components/Header';

function BookChapter(props) {
  console.log(props.location.state);
  const [inputText, setInputText] = useState("");
  const [takeAwayList, setTakeAwayList] = useState([]);
  const bookName = props.location.state.book;
  const bookChapter = props.location.state.chapter;

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const addTakeAway = (e) => {
    setTakeAwayList([...takeAwayList, inputText]);

    setInputText("");

    e.preventDefault();
  };

  const renderTakeAway = () => {
    return takeAwayList.map((takeAway, index) => {
      return <li style={{ fontSize: "20px" }}>Takeaway: {takeAway}</li>;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header/>
      </div>
      
      <h2>
        {bookName} - Chapter: {bookChapter}
      </h2>

      <form onSubmit={addTakeAway}>
        <p>Add Key Takeaway</p>
        <input onChange={handleInput} type="text" value={inputText} />
      </form>
      <div className={styles.takeAwayContainer}>
        <ol>{renderTakeAway()}</ol>
      </div>
    </div>
  );
}

export default BookChapter;
