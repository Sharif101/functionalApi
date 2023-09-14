import { useEffect, useState } from "react";
import classes from "./Fetchdata.module.css";

export default function Fetchdata() {
  // const [info, setInfo] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/Sharif101")
  //     .then((res) => res.json())
  //     .then((data) => setInfo(data));
  // }, []);

  const [name, setName] = useState("annurtasnimislam");
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${name}`, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          console.log("piku", data);
          setDetail(data);
        }
      } catch {
        console.log("Please check your internet connection!");
      }
    };
    fetchData();
  }, [name]);

  return (
    <div className={classes.info}>
      <div>
        <img src={detail.avatar_url} alt="" />
        <h1>Name: {detail.name}</h1>
        <p>Company name: {detail.company}</p>
        <p>location: {detail.location}</p>
      </div>
    </div>
  );
}
