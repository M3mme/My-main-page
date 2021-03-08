import Message from "../components/Message";
import Results from "../components/Results";
import Header from '../components/Header';
import { useState } from "react";
import style from "../style/SearchBar.module.css";
import {googleBooks} from '../Axios';

function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const fetchData = async () => {
    if (input.trim() === "") {
      return;
    }

    setLoading(true);
    const myData = await googleBooks.get(
        `?q=${input}`
      ).catch((error)=> {
        console.log(error)
        setLoading(false)
        setError(true)
      })
    

    setData(myData.data);
    setLoading(false);
  };

  const showResults = () => {
    if (data.totalItems === 0) {
      return (
        <Message error={true} message="Your search doesn't generate results" />
      );
    } else if (data.length === 0) {
      return;
    } else {
      return loading ? (
        <Message message="loading..." />
      ) : (
        <Results data={data} />
      );
    }
  };

  return (
    <div className="App">
      <Header />
      <div className={style.container}>
        <h2>Seacrch a Book</h2>
        <div style={{ display: "flex" }}>
          <input
            onChange={handleInput}
            value={input}
            placeholder="Search Something"
            type="text"
          />
          <button onClick={fetchData}>Seach</button>
        </div>
      </div>
      <h1 style={{ paddingLeft: "30px" }}>Results:</h1>
      {error ? <Message message='Error!' error/> : showResults()}
    </div>
  );
}

export default Home;
