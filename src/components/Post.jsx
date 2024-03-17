import React from "react";

const Post = (props) => {
  return (
    <div className=" p-4 rounded-lg bg-post-bg my-4 shadow animate-post-animation">
      <p className="text-sm m-0 font-bold text-author-text uppercase">
        {props.author}
      </p>
      <p className=" whitespace-pre-wrap text-xl ml-1 text-post-text italic">
        {props.body}
      </p>
    </div>
  );
};

export default Post;
