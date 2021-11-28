import "./App.css";
import { useState, useEffect } from "react";
function App() {
  let [weatherinfo, setweatherinfo] = useState(null);
  let [place, setplace] = useState("Tamilnadu");
  useEffect(() => {
    getweatherinfo();
  }, []);

  function Readplace(value) {
    setplace(value);
  }

  function getweatherinfo() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=c163eb1be07df8285e030f15ee203082`;
    fetch(url)
      .then((response) => response.json())
      .then((weather) => {
        setweatherinfo(weather);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="head">Weather Finder</h1>
        <br />
        <br />
        <div className="input-group">
          <input
            type="text"
            className="searchbox"
            onChange={(event) => {
              Readplace(event.target.value);
            }}
          />
          <button type="button" className="btn" onClick={getweatherinfo}>
            search
          </button>
        </div>

        {weatherinfo?.Error === undefined ? (
          <center>
            <div className="details">
              <div className="padd">
                <h1 className="title">
                  <span>
                    {weatherinfo?.name}-{weatherinfo?.sys.country}
                  </span>
                </h1>
                <br />
                <br />
                <div className="weather">
                  {weatherinfo?.weather.map((weather, index) => (
                    <div key={index}>
                      <table className="table1">
                        <tr>
                          <td>
                            <span>Main</span>
                          </td>
                          <td className="td1">
                            <p className="td1">{weather.main}</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>Description</span>
                          </td>
                          <td>
                            <p className="td1">{weather.description}</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  ))}
                </div>

                <table className="table2">
                  <tr>
                    <td>
                      <span>Visibility</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.visibility}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Temperature</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.main.temp}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Temperature-Min</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.main.temp_min}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Temperature-Max</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.main.temp_max}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Pressure</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.main.pressure}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Humidity</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.main.humidity}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Wind Speed</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.wind.speed}</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Wind Degree</span>
                    </td>
                    <td>
                      <p>{weatherinfo?.wind.deg}</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </center>
        ) : (
          <h1>Place not found...please retry</h1>
        )}
      </div>
    </div>
  );
}

export default App;
