import React, { useEffect, useState } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [datas, setDatas] = useState();
  async function fetchAPI() {
    const res = await fetch("https://covid19.mathdro.id/api");
    const data = await res.json();
    return await setDatas(data);
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  function actualiser() {
    setDatas("");
    fetchAPI();
  }
  return (
    <div>
      <Header />
      <hr />
      <main className="my-4 container-fluid">
        <div className="p-3 row">
          <CovidData>
            Confirmed {datas ? datas.confirmed.value : "fetching..."}
          </CovidData>
          <CovidData>
            Deaths {datas ? datas.deaths.value : "fetching..."}
          </CovidData>
          <CovidData>
            Recovered {datas ? datas.recovered.value : "fetching..."}
          </CovidData>
        </div>
        <button
          className="p-2 mt-4 btn btn-primary btn-sm"
          onClick={() => actualiser()}
        >
          Actualiser
          <i class="fa fa-refresh ml-2"></i>
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
