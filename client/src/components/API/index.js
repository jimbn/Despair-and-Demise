import React, { useState, useEffect } from "react";

export default function Api () {
  const refApi = 'http://www.dnd5eapi.co/swagger/openapi.json';
  const [api, setApi] = useState([]);

  const fetchApi = async () => {
     const res = await fetch(refApi);
     const data = await res.json();
     setApi(data);
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return(
    <div>
      <p>{api.value}</p>
        <button onClick={fetchApi}>Generate</button>
    </div>
  );
}