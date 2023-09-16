import { useEffect, useState } from "react";
import classes from "./Fetchdata.module.css";

export default function Fetchdata() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("Sharif101");
  const [detail, setDetail] = useState({});

  const [useName, setUserName] = useState();
  const [password, setPassword] = useState();

  // console.log(name);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = () => {
    setName(search);
  };

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
      } catch (error) {
        console.log("Please check your internet connection!");
        console.log(error);
      }
    };
    fetchData();
  }, [name]);

  // Post
  const handleSubmit = async () => {
    const details = {
      useName,
      password,
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      const log = await response.json();

      if (response.ok) {
        // alert("Success");
        console.log("Post Api", log);
        setUserName("");
        setPassword("");
      } else {
        alert(log.context + "!");
      }
    } catch {
      alert("Please check your internet connection!");
    }
  };

  return (
    <div className={classes.info}>
      <div className={classes.get}>
        <from className={classes.searchbar}>
          <input
            type="text"
            placeholder="Enter Github UserName"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleClick}>
            Search
          </button>
        </from>
        <div className={classes.getInfo}>
          <div className={classes.img}>
            <img src={detail.avatar_url} alt="" />
          </div>
          <div className={classes.details}>
            <p>
              <span>Name: </span> {detail.name}
            </p>
            <p>
              <span>USer Name: </span> {detail.login}
            </p>
            <p>
              <span>Company name:</span> {detail.company}
            </p>
            <p>
              <span>location:</span> {detail.location}
            </p>
            <p>
              <span>Following:</span> {detail.following}
            </p>
            <p>
              <span>Followers:</span> {detail.followers}
            </p>
            <p>
              <span>Public Repo:</span> {detail.public_repos}
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}

      <div className={classes.post}>
        <h4>Post API</h4>
        <from className={classes.postInput}>
          <input
            type="text"
            placeholder="name"
            value={useName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
          <small>(Check console)</small>
        </from>
      </div>
    </div>
  );
}
