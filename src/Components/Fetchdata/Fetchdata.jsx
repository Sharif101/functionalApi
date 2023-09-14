import { useEffect, useState } from "react";
import classes from "./Fetchdata.module.css";

export default function Fetchdata() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch("https://api.github.com/users/Sharif101")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className={classes.info}>
      <div className={classes.get}>
        <div className={classes.searchbar}>
          <input type="text" placeholder="Enter Github UserName" />
          <button>Search</button>
        </div>
        <div className={classes.getInfo}>
          <div className={classes.img}>
            <img src={data.avatar_url} alt="" />
          </div>
          <div className={classes.details}>
            <p>
              <span>Name: </span> {data.name}
            </p>
            <p>
              <span>Company name:</span> {data.company}
            </p>
            <p>
              <span>location:</span> {data.location}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}

      <div className={classes.post}>
        <img src={data.avatar_url} alt="" />
        <h1>Name: {data.name}</h1>
        <p>Company name: {data.company}</p>
        <p>location: {data.location}</p>
      </div>
    </div>
  );
}
