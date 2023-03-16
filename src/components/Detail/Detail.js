import { async } from "@firebase/util";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const userName = useParams();
  const [newList, setNewList] = useState([]);
  console.log();

  async function getData() {
    await axios
      .get("https://640e9edacde47f68db33ee1a.mockapi.io/Films/" + userName.id)
      .then((response) => response.data)
      .then((data) => {
        setNewList(data);
      });
    console.log(newList);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="row" style={{ margin: "40px" }}>
        <div className="col-12">
          <div
            className="card"
            style={{ background: "#FCF9F3", padding: "40px" }}
          >
            <div>
              <img
                src={newList.img}
                style={{ width: "100%" }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h1 className="card-title" style={{ fontWeight: "bold" }}>
                {newList.title}
              </h1>
              <h2
                className="card-title"
                style={{ fontWeight: "bold", opacity: "0.6" }}
              >
                {newList.year}
              </h2>
              <p style={{ fontWeight: "bold", color: "#E00707" }}>
                Cost: {newList.cost}đ
              </p>
              <hr></hr>
              <h6 style={{ fontWeight: "bold" }}>Nation</h6>
              <p className="card-text">{newList.nation}</p>
              <div style={{ left: "0" }} className="bottom-line2"></div>
              <h6 style={{ fontWeight: "bold" }}>Description:</h6>
              <p className="card-text">{newList.info}</p>
              <div
                style={{ left: "0", marginBottom: "50px" }}
                className="bottom-line2"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
