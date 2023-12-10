import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [doctor, setDoctor] = useState({});
  const [picture, setPicture] = useState([]);
  console.log(doctor);
  console.log(picture);
  // ---------------doctor data fetch----------------
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(
        "https://ec.healthxbd.com/api/v1/doctors/detail/31780",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "GET",
        }
      );
      let data = await response.json();
      if (response.ok) {
        setDoctor(data);
      } else {
        console.log("data not fetching");
      }
    };

    const fetchPicture = async () => {
      let response = await fetch(
        "https://ec.healthxbd.com/api/v1/profile-pic/31780",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let data = await response.json();
      if (response.ok) {
        setPicture(data);
      }
    };
    try {
      fetchData();
      fetchPicture();
    } catch (error) {
      setDoctor([]);
      fetchPicture({ image_string: null });
    }
  }, []);

  return (
    <div>
      <img src={picture?.image_url} alt="" />
      <p>{doctor?.user?.name}</p>
    </div>
  );
}
