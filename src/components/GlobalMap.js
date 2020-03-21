import React, { useState, useEffect, Fragment } from "react";
import ReactMapGL, { Marker, Popup} from "react-map-gl";
import useStats from "../hooks/useStats";
import "../assets/index.css";
import InnerPopup from "./InnerPopup";

const GlobalMap = () => {
  const URL = "https://covid19.mathdro.id/api/confirmed";

  const { stats, loading } = useStats(URL);
  const [showPopup, setShowPopup] = useState(null);

  useEffect(() => {});

  const [viewport, setViewport] = useState(
    {
      width: "100%",
      height: "80vh",
      latitude: 23,
      longitude: 27,
      zoom: 1
    },
    []
  );

  const determineSeverity = confirmed => {
    const color =
      confirmed > 2500
        ? "red"
        : confirmed < 2500 && confirmed > 500
        ? "yellow"
        : "green";
    return color;
  };

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={setViewport}
      mapboxApiAccessToken={
        "pk.eyJ1IjoiZXZhbmNvbGV3cmlnaHQiLCJhIjoiY2s3cjAwejVsMDBuZzNucHVhNXh5OG51ZyJ9.voezeofw0SxLbqn2r1z8QA"
      }
      mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
      style={{display:"inline-block"}}
    >
      
      {stats.map((country, index) => (
        <Fragment key={index}>
          {showPopup === null ? (
            <div>
              <Marker latitude={country.lat} longitude={country.long}>
                <div
                  onClick={() => {
                    setShowPopup(index);
                  }}
                >
                  <svg
                    className={"marker " + determineSeverity(country.confirmed)}
                    style={{
                      height: `${5 * viewport.zoom}px`,
                      width: `${5 * viewport.zoom}px`
                    }}
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Marker>
            </div>
          ) : null}

          {showPopup === index ? (
            <Popup
              latitude={country.lat}
              longitude={country.long}
              closeButton={true}
              style={{padding:"0.5em"}}
              onClose={() => setShowPopup(null)}
              dynamicPosition={true}
            >
              <InnerPopup entry={country} />
            </Popup>
          ) : null}
        </Fragment>
      ))}
    </ReactMapGL>
  );
};

export default GlobalMap;
