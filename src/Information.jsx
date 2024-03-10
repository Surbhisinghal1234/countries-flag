// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Information() {
//   const [country, setCountry] = useState([]);

//   useEffect(() => {
//     axios.get("https://restcountries.com/v3.1/region/europe").then((result) => {
//       console.log(result.data[0].name);
//       setCountry(result.data[0].name);
//     });
//   }, []);
//   return (
//     <>
//       <p>{country}</p>
//     </>
//   );
// }

// export default Information;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Information() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     axios.get("https://restcountries.com/v3.1/region/europe").then((result) => {
//       console.log(result.data);
//       setCountries(result.data);
//     });
//   }, []);

//   return (
//     <>
//       <ul>
//         {countries.map((country, index) => (
//           <li key={index}>{country}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Information;
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Information() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     axios.get("https://restcountries.com/v3.1/region/europe").then((result) => {
//       console.log(result.data);
//       // setCountries(result.data.map((country) => country.name.common));
//       setCountries(result.data[0].languages);
//     });
//   }, []);

//   return (
//     <>
//       <p>{countries}</p>
//     </>
//   );
// }

// export default Information;
//..............

import React, { useEffect, useState } from "react";

function Information() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}

export default Information;

