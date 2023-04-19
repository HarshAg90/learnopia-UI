import React from "react";
import "./news.css";

export default function News() {
  // fetch online
  const News = [
    {
      news: "ChatGPT takes over world by surprise",
      link: "link",
    },
    {
      news: "over 200k Layoff reported in tech industry",
      link: "link",
    },
    {
      news: "worst time to enter tech industry ~ someone",
      link: "link",
    },
  ];

  const filter = (arg) => {
    console.log(arg);
  };

  return (
    <div id="news">
      <h1>News Letest</h1>
      <ul className="news">
        {News.map((item) => (
          <li onClick={item.link}>{item.news}</li>
        ))}
      </ul>
    </div>
  );
}
