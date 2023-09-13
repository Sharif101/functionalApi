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
      <div>
        <p>vfn</p>
        <img src={data.avatar_url} alt="" />
        <h1>Name: {data.name}</h1>
        <p>Company name: {data.company}</p>
        <p>location: {data.location}</p>
      </div>
    </div>
  );
}
