import React, { useEffect, useState } from "react";
import "./App.css";
import CovidData from "./components/CovidData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalMap from './components/GlobalMap'
import Info from './components/Info'
import Dropdown from 'react-dropdown'

import 'react-dropdown/style.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      datas: null,
      selected: '',
      localData: [],
      countryData: null
    }
    this.fetchAPI()
    this.update = setInterval(() => { }, 0);
  }

  async fetchAPI() {
    const res = await fetch(url);
    const localres = await fetch(url);
    const data = await res.json();
    const localData = await localres.json();
    this.setState({ datas: data, countryData: localData })
  }
  componentDidUpdate(prevState) {
    if (this.state.datas === prevState.datas)
      if (this.state.datas.cases === prevState.datas.cases &&
        this.state.datas.deaths === prevState.datas.deaths &&
        this.state.datas.recovered === prevState.datas.recovered
      ) return;
    this.fetchAPI()

  }

  _onSelect(option) {

    let obj = this.state.countryData.find(o => o.country === option.value);
    this.setState({ selected: option, localData: obj })

  }
  render() {
    const options = this.state.datas ? this.state.datas.country : []
    return (
      <div style={{overflow:'scroll'}}>
        <Header />
        <hr />
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark" >
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-md-center" id="navbars">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#info">Info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#stat">Statictis</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#map">Map</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

            </ul>
          </div>
        </nav>
        <main className="my-4 container-fluid">
          <div id="info">
            <Info />
          </div>
          <br />
          <br />
          <br />
          <p className="h2">Global Statistics</p>
          <div className="p-3 row" id="stat">
            <CovidData>
              Confirmed {this.state.datas ? this.state.datas.cases : "fetching..."}
            </CovidData>
            <CovidData>
              Deaths {this.state.datas ? this.state.datas.deaths : "fetching..."}
            </CovidData>
            <CovidData>
              Recovered {this.state.datas ? this.state.datas.recovered : "fetching..."}
            </CovidData>
          </div>
          {/* <button
            className="p-2 mt-4 btn btn-primary btn-sm"
            onClick={() => actualiser()}
          >
            Actualiser
            <i className="fa fa-refresh ml-2"></i>
          </button> */}
          <header className="p-3">
            <p className="h2">Country Based Statistics</p>
            <p className="my-1">Select a country from dropdown</p>
          </header>
          <Dropdown options={Array.from(options).sort()} onChange={(option) => this._onSelect(option)} value={this.state.selected} placeholder="Select a country" />
          <div className="p-3 row">


            <CovidData>
              Confirmed {this.state.localData.totalCases ? this.state.localData.totalCases : "0"}
            </CovidData>
            <CovidData>
              Deaths {this.state.localData.totalDeaths ? this.state.localData.totalDeaths : "0"}
            </CovidData>
            <CovidData>
              Recovered {this.state.localData.totalRecovered ? this.state.localData.totalRecovered : "0"}
            </CovidData>
          </div>
          <div id="map">
            <header className="p-3">
              <p className="h2">Covid-19 on Map</p>
              <p className="my-1">Deeper color means more severe!</p>
            </header>
            <GlobalMap />
            <p className="my-1">For more info visit : <a href="https://www.worldometers.info/coronavirus/">https://www.worldometers.info/coronavirus/</a></p>
          </div>
          <br />
          <br />
          <br />
          <div id="contact">
          <header className="p-3">
              <p className="h2">Contact</p>
             
            </header>
          <img style={{width:"90vw"}}  src="coronassf2.png" />
          </div>
        </main>
        <Footer id="footer" />
      </div>
    )
  };

}

export default App;
