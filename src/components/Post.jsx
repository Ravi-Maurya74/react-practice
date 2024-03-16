import React from "react";

const names = ["Maximilian", "Manuel", "Julia"];

const Post = () => {
  const chosenName = names[Math.floor(Math.random() * names.length)];
  return (
    <div>
      <p>{chosenName}</p>
      <p>React is great!</p>
    </div>
  );
};

export default Post;
