import React from "react";

function Score({ score }) {
  return (
    <div>
      <time datetime={score.date}>Date: {score.date}</time>
      <p>Score: {score.score}</p>
    </div>
  );
}

export default Score;
