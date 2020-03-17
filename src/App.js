import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [covidDatas, setCovidDatas] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(
        "https://pomber.github.io/covid19/timeseries.json"
      );
      const data = await res.json();
      await setCountriesList(Object.keys(data));
      await setCovidDatas(Object.values(data));
    }

    fetchAPI();
  }, []);
  return (
    <div className="container-fluid">
      <header className="my-3" style={{ textAlign: "center" }}>
        <h1 className="display-4">
          CoViD-19 <br />
          Live Figures
        </h1>
      </header>
      <main className="container-fluid">
        <div className="card card-body">
          <ul className="list-group card-title">
            {countriesList.map(country => {
              return (
                <li
                  className="list-group-item"
                  onMouseEnter={() => console.log("entered")}
                  onMouseLeave={() => console.log("left")}
                >
                  {country}
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
