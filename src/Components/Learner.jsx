import React from "react";
import Score from "./Score";

function Learner({ learner }) {
  return (
    <div>
      <h1>{learner.name}</h1>
      <p>{learner.bio}</p>
      {learner.scores.map((score) => (
        <Score score={score} />
      ))}
    </div>
  );
}

export default Learner;
