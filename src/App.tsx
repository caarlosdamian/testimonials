import { useEffect, useState } from "react";
import "./App.scss";
import {
  John,
  Next,
  PatternBg,
  PatternCurve,
  PatternQuotes,
  Prev,
  Tanya,
} from "./images";

function App() {
  const arr = [
    {
      id: 1,
      name: "John Tarkpor",
      img: John,
      desc: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
      title: "Junior Front-end Developer",
    },
    {
      id: 2,
      name: "Tanya Sinclair",
      img: Tanya,
      desc: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
      title: "UX Engineer",
    },
  ];
  const [translate, setTranslate] = useState(326.5);
  const [innerWidth, setInnerwidth] = useState(0);
  console.log(innerWidth);
  const handleMove = () => {
    if (translate !== 0) {
      setTranslate(0);
    } else if (innerWidth > 1000) {
      setTranslate(1207);
    } else {
      setTranslate(326.5);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerwidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setInnerwidth(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className="App">
      <img src={PatternBg} alt="patrern" className="pattern" />
      <img src={PatternQuotes} alt="PatternQuotes" className="pattern-quotes" />
      <img src={PatternCurve} alt="PatternCurve" className="pattern-curve" />

      <div className="slider">
        {arr.map((item) => (
          <div className="item-container">
            <img
              key={item.id}
              src={item.img}
              alt="img"
              className="img"
              style={{ transform: `translatex(-${translate}px)` }}
            />
            <div
              className="item-container-wrapper"
              style={{ transform: `translatex(-${translate}px)` }}
            >
              <span className="item-container-wrapper-desc">{item.desc}</span>
              <div className="item-container-wrapper-bottom">
                <h1 className="item-container-wrapper-bottom-name">
                  {item.name}
                </h1>
                <span className="item-container-wrapper-bottom-title">
                  {item.title}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="control">
        <img
          src={Prev}
          alt="prev"
          className="control-click"
          onClick={handleMove}
        />
        <img
          src={Next}
          alt="next"
          className="control-click"
          onClick={handleMove}
        />
      </div>
    </div>
  );
}

export default App;
