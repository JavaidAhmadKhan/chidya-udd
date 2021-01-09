import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./Slides.css";

function Slides() {
  const [birds, setbirds] = useState([
    {
      name: "chidya udd",
      url: "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001",
    },
    {
      name: "chidya udd",
      url:
        "https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png",
    },
  ]);

  useEffect(() => {
    const unsubscribe = database
      .collection("birds")
      .onSnapshot((snapshot) =>
        setbirds(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the cleanpup...
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {birds.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            ></div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Slides;
