import React from "react";
import { Link,Navigate } from "react-router-dom";
import "./home.css";
import Feeds from "./feeds";
import Tags from "../tags/tags";
import News from "../news/news";
import { Redirect } from "react-router";

export default function Home({ isLoggedIn }) {
  if (!isLoggedIn()) return <Navigate to="/login" />;

  return (
    <div>
      <nav>
        <div id="nav2">
          <h1>Learnopia</h1>
          <div id="search">
            <input type="text" name="" id="" placeholder="search" />
          </div>
        </div>
        <div id="content-type">
          <button className="selected">Home</button>
          <button>Roadmaps</button>
          <button>Carreer</button>
          <button>Cources</button>
          <button>Saves</button>
          <Link to="/profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="38"
              viewBox="0 96 960 960"
              width="38"
            >
              <path d="M479.989 567.565q-72.745 0-118.182-45.557T316.37 403.864q0-72.588 45.399-118.074 45.399-45.486 118.144-45.486t118.351 45.459q45.606 45.46 45.606 118.22 0 72.468-45.568 118.025t-118.313 45.557ZM143.326 926V815.375q0-41.712 20.748-71.866 20.747-30.154 53.643-45.813 68.761-32 133.04-47.381 64.278-15.38 129.086-15.38 65.267 0 128.973 16 63.706 16 132.387 46.955 34.261 15.472 54.986 45.539 20.724 30.067 20.724 71.884V926H143.326Zm77.304-77.304h518.74v-32.413q0-15.846-8.654-29.767-8.654-13.922-21.542-19.712-63.804-30.521-117.608-42.424-53.803-11.902-111.804-11.902-57.523 0-111.947 12.022t-116.886 42.267q-13.641 6.14-21.97 19.709-8.329 13.569-8.329 29.807v32.413Zm259.321-358.435q37.092 0 61.734-24.605 24.641-24.604 24.641-61.713 0-37.207-24.593-61.89-24.592-24.683-61.684-24.683t-61.734 24.694q-24.641 24.694-24.641 61.761 0 37.165 24.593 61.8 24.592 24.636 61.684 24.636Zm.049-86.326Zm0 444.761Z" />
            </svg>
          </Link>
        </div>
      </nav>
      <div id="body">
        <div className="side">
          <Tags />
          <News />
        </div>
        <main>
          <Feeds></Feeds>
        </main>
      </div>
    </div>
  );
}
