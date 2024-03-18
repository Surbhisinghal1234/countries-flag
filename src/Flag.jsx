import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Flag.css";

function Flag() {
  const [country, setCountry] = useState("");
  const [codes, setCodes] = useState({});
  const [flag, setFlag] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://flagcdn.com/en/codes.json");
      // const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      setCodes(response.data);
      setCountry(
        country.charAt(0).toUpperCase() + country.slice(1)
      );
    }
    fetchData();
  }, [country]);

  // function modifyCountryName(name) {
  //   const temp = name.split("");
  //   const firstLetter = temp[0].toUpperCase();
  //   temp.splice(0, 1, firstLetter);
  //   setCountry(temp.join(""));
  // }

  function getFlag() {
    for (let x in codes) {
      if (codes[x] === country) {
        setFlag(x);
      }
    }
    // setFlag(country);
  }

  return (
    <>
      <div className="main">
        <div className="input-main">
          <input
            type="text"
            placeholder="Enter a country name"
            value={country}
            onChange={
              (e) => 
              // modifyCountryName(e.target.value)
              // setCountry(
              //   e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
              // )
              setCountry(e.target.value)
            }
          />
          <button onClick={getFlag}> Get Flag</button>
        </div>
        <div className="result">
          {flag ? (
            flag !== "noflag" ? (
              <img src={`https://flagcdn.com/256x192/${flag}.png`} alt={flag} />
            ) : (
              <h3>No Flag Found</h3>
            )
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Flag;
