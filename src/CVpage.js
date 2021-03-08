import styles from "../style/CVpage.module.css";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function CVpage() {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <h1 style={{ color: "#ffebcc" }}>
          <span style={{ color: "#ff9900" }}>Emanuele</span> Maggino
        </h1>
        <p style={{ color: "#ffebcc" }}>Front End Developer</p>
      </div>
      <div className={styles.info}>
        <div className={styles.about}>
          <h1>
            <span style={{ color: "#ff9900" }}>About</span> Me:
          </h1>
          <p>
            Hello World! I'm Emanuele, I am a Front End developer and i put a
            lot of passion on my work. Every single day I study to improve my
            skills in this area. I have a good knowledge of the English language
            (B2 level), an excellent ability to work in team and an excellent
            propensity to adapt. My main goals are to make satified my customers
            and to improve my skills day per day{" "}
          </p>
        </div>

        <div className={styles.skills}>
          <h1>
            <span style={{ color: "#ff9900" }}>Check</span> out my skills:
          </h1>
          <div className={styles.img}>
            <div className={styles.first}>
              <img
                style={{ width: "100px" }}
                src={
                  "https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>HTML5</p>

              <img
                style={{ width: "120px" }}
                src={"https://maxcdn.icons8.com/Share/icon/Logos/css31600.png"}
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>CSS3</p>

              <img
                style={{ width: "120px" }}
                src={
                  "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>SASS</p>

              <img
                style={{ width: "150px" }}
                src={
                  "https://www.bootstrapdash.com/wp-content/uploads/2017/06/bootstrap-logo.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>Bootstrap</p>
            </div>

            <div className={styles.second}>
              <img
                style={{ width: "100px" }}
                src={
                  "https://images.vexels.com/media/users/3/166403/isolated/preview/a5a33bf3004830a2bd581e9fa65de660-javascript-programming-language-icon-by-vexels.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>Javascript ES6</p>

              <img
                style={{ width: "100px" }}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>GIT</p>

              <img
                style={{ width: "150px" }}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>React</p>

              <img
                style={{ width: "170px" }}
                src={
                  "https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
                }
                alt=""
              />
              <p style={{ color: "white", fontSize: "30px" }}>Firebase</p>
            </div>
          </div>
        </div>

        <div className={styles.projects}>
          <h1>
            <span style={{ color: "#ff9900" }}>My</span> Projects (still working
            on)
          </h1>
          <Link to="/main">
            <img
              src={"https://pngimg.com/uploads/book/book_PNG51114.png"}
              alt=""
            />
          </Link>
        </div>
      </div>

      <footer>
        <div className={styles.footerFirst}>
          <img
            src={
              "https://th.bing.com/th/id/R6e19540757907e6cac985b506fbd4908?rik=yHYJVArVNM1vJw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fiynque%2fios7-style%2f1024%2fPhone-icon.png&ehk=aimLQaJM3YVQhO4b3FeFvOOPXbsoQEFzySVvhopbfZE%3d&risl=&pid=ImgRaw"
            }
            alt=""
          />
          <h3>+39 342 845 7879</h3>

          <a href="https://www.facebook.com/emanuele.maggino">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png"
              }
            />
          </a>
          <h3>Emanuele Maggino</h3>
          <a href="https://www.instagram.com/999memme999/">
            <img
              src={
                "https://th.bing.com/th/id/R03f40b67b63d9c1c1a5a792109bbc699?rik=3bjz%2bHye2xAlMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2finstagram-png-instagram-png-logo-1455.png&ehk=tXZJFem4w4cHLWA0P0%2bZpjLmMKtElsnFdmxjyZ2jHgY%3d&risl=&pid=ImgRaw"
              }
              alt=""
            />
          </a>
          <h3>@999memme999</h3>
        </div>
      </footer>
    </div>
  );
}

export default CVpage;
