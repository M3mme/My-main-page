import styles from "../style/SingleChapter.module.css";
import { Link } from "react-router-dom";

const SingleChapter = ({ number, bookID, bookName }) => {
  return (
    <Link
      className={styles.container}
      to={{
        pathname: `/book/${bookID}/chapter/${number}`,
        state: { book: bookName, chapter: number },
      }}
    >
      <div>
        <p >Chapter: {number}</p>
      </div>
    </Link>
  );
};

export default SingleChapter;
