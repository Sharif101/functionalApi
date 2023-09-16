import React, { useEffect, useState } from "react";
import User from "../User/User";
import classes from "./Users.module.css";

export default function Users() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          //   console.log("users", data);
          setData(data);
        }
      } catch (error) {
        console.log("Please check your internet connection!");
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <input
        type="text"
        placeholder="Search by Name"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={classes.users}>
        {/* {data.map((data) => (
          <User data={data} key={data.id}></User>
        ))} */}

        {/* ................search fillter............  */}
        {data
          .filter((data) => {
            return search.toLocaleLowerCase() === ""
              ? data
              : data.name.toLocaleLowerCase().includes(search);
          })
          .map((data) => (
            <User data={data} key={data.id}></User>
          ))}
      </div>
    </div>
  );
}
