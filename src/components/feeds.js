import React, { useState } from "react";
import "./feeds.css";

const Tail = () => {
  return (
    <div className="tail-bar">
      <button className="subscribe">Support</button>
      <button className="like">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z" />
        </svg>
      </button>
      <button className="star">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z" />
        </svg>
      </button>
      <button className="save">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="48"
        >
          <path d="M200 936V271q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480 816 200 936Zm60-91 220-93 220 93V271H260v574Zm0-574h440-440Z" />
        </svg>
      </button>
    </div>
  );
};

export default function Feeds() {
  var [Feeds, addFeeds] = useState([
    {
      id: 1,
      type: "text_post",
      cType: "Tutuorial",

      by_user: "username",

      cource: "B-tech",
      semester: "2",

      topics: ["AI", "ML", "beginner", "topic_made_simple"],

      date: "18-03-2023",

      content: {
        heading: "LEARN AI IN 5 Easy steps",
        body: "here are 5 easy steps to learn AI in todays world, here are 5 easy steps to learn AI in todays world, here are 5 easy steps to learn AI in todays world, here are 5 easy steps to learn AI in todays world,here are 5 easy steps to learn AI in todays world, here are 5 easy steps to learn AI in todays world, here are 5 easy s"
      },
    },
    {
      id: 2,
      type: "image_post",
      cType: "Tutuorial",

      by_user: "username",

      cource: "none",
      semester: "none",

      topics: ["cloud", "intermediate", "k8s"],

      date: "21-03-2023",

      content: {
        image: "__link to image here__",
        heading: "LEARN how to host an application online",
        body: "here are 5 easy steps to learn AI in todays world",
      },
    },
    {
      id: 3,
      type: "Youtube_embed",
      cType: "Video",

      by_user: "username",

      cource: "BCA",
      semester: "2",

      topics: ["AI", "beginner", "topic_made_simple"],

      date: "18-03-2023",

      content: {
        embed_link: "Rh3tobg7hEo",
        heading: "Learn React with one simple project",
      },
    },
    {
      id: 4,
      type: "text_post",
      cType: "Tutuorial",

      by_user: "username",

      cource: "none",
      semester: "none",

      date: "18-03-2023",

      topics: ["API", "beginner", "topic_made_simple", "Integration"],

      content: {
        heading: "LEARN AI IN 5 Easy steps",
        body: "here are 5 easy steps to learn AI in todays world",
        ending: "click to learn more",
      },
    },
    {
      id: 5,
      type: "Youtube_embed",
      cType: "News",

      by_user: "dontDie",

      cource: "BCA",
      semester: "none",

      date: "18-03-2023",

      topics: ["SAAS", "Startup", "finances", "Economics"],

      content: {
        embed_link: "E_VKZ6dzauo",
        heading: "Why are Banks failing",
      },
    },
    {
      id: 6,
      type: "image_post",
      cType: "Road-Map",

      by_user: "Me-me",

      cource: "CS",
      semester: "none",

      date: "18-03-2023",

      topics: ["JS", "beginner", "Front_end", "easy"],

      content: {
        image: "__link to image here__",
        heading: "Learn JS in 1 month with these exact step",
        body: "I have created a complete roadmap of js from begainer to expert, the total estimated time to complete will be 1 month for 10 hrs a day",
      },
    },
  ]);

  function redirrect(id) {
    console.log(id);
  }

  return (
    <div id="feeds">
      <div className="timeline">
        <button>
          <h1 className="selected">Recomended</h1>
        </button>
        <button>
          <h1>Latest</h1>
        </button>
        <button>
          <h1>Following</h1>
        </button>
      </div>
      {Feeds.map((item) => {
        if (item.type === "text_post") {
          return (
            <div className="post">
              <div className="content text-post">
                <div onClick={() => redirrect(item.id)} className="title">
                  <h1 className={"type " + item.cType}>{item.cType}</h1>
                  <h1>{item.content.heading}</h1>
                </div>
                <p>{item.content.body}</p>
                <div className="endBar">
                  <div className="tags">
                    {item.topics.map((v) => (
                      <p className={"tag " + item.cType}>#{v}</p>
                    ))}
                  </div>
                  <p className="author">{item.by_user}</p>
                </div>
              </div>
              <Tail />
            </div>
          );
        } else if (item.type === "image_post") {
          return (
            <div className="post">
              <div className="content image-post">
                <img src="" alt="" />
                <div className="content-inner">
                  <div onClick={() => redirrect(item.id)} className="title">
                    <h1 className={"type " + item.cType}>{item.cType}</h1>
                    <h1>{item.content.heading}</h1>
                  </div>
                  <p>{item.content.body}</p>
                <div className="endBar">
                  <div className="tags">
                    {item.topics.map((v) => (
                      <p className={"tag " + item.cType}>#{v}</p>
                    ))}
                  </div>
                  <p className="author">{item.by_user}</p>
                </div>
                </div>
              </div>
              <Tail />
            </div>
          );
        } else if (item.type === "Youtube_embed") {
          return (
            <div className="post">
              <div className="content image-post">
                <iframe
                  width="700"
                  height="400"
                  src={"https://www.youtube.com/embed/"+item.content.embed_link}
                  title="Why Banks Fail"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                <div onClick={() => redirrect(item.id)} className="content-inner">
                  <div className="title">
                    <h1 className={"type " + item.cType}>{item.cType}</h1>
                    <h1>{item.content.heading}</h1>
                  </div>
                  <p>{item.content.body}</p>
                <div className="endBar">
                  <div className="tags">
                    {item.topics.map((v) => (
                      <p className={"tag " + item.cType}>#{v}</p>
                    ))}
                  </div>
                  <p className="author">{item.by_user}</p>
                </div>
                </div>
              </div>
              <Tail />
            </div>
          );
        } else {
          console.log("not found");
        }
      })}
    </div>
  );
}
