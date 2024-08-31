import React from "react";

const Feedback = ({ feedback }) => {
  return <div className="feedback">{feedback && <p>{feedback}</p>}</div>;
};

export default Feedback;
