import React from "react";
import "./Detail.css";
import { Players } from "../../shared/ListOfPlayer";
import { useParams } from "react-router-dom";
import { useState } from "react";
export default function Detail() {
  const [readMore, setReadMore] = useState(false);
  const userName = useParams();
  const player = Players.find((obj) => {
    return obj.id == userName.id;
  });
  let cost = player.cost.toLocaleString();

  return (
    <article className="single-tour">
      <img src={`../${player.img}`} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{player.name}</h4>
          <h4 className="tour-price">${player.cost}</h4>
        </div>
        <p>
          {readMore ? player.info : `${player.info.substring(0, 50)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
      </footer>
    </article>
  );
}
