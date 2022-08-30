import React, { useState, useEffect } from "react";

export default function Api () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      await fetch('https:www.dnd5eapi.co/api/classes/')
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchApi();
  }, []);

  return(
    <div>
      {console.log(data.results[3])}
      {/* <p>{data}</p> */}
        {/* <button onClick={useEffect}>Generate</button> */}
    </div>
  );
}