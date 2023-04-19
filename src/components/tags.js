import React from "react";
import "./tags.css";

export default function Tags() {
  const Tags = ["AI", "ChatGPT", "WebFlow", "MachineLearning", "Solana", "K8s"];
  const filter = (arg) => {
    console.log(arg);
  };

  return (
    <div id="tags">
      <h1>Tags - Filter</h1>
      <div className="tags">
        {Tags.map((item) => (
          <button onClick={() => filter(item)}>#{item}</button>
        ))}
      </div>
    </div>
  );
}
