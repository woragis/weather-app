import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const getWeather = async () => {
  interface RequestInterface {
    key: string;
    // lang: "pt";
    q: string;
    // location: {
    //   name: "",
    //   country: "brazil"
    // }
  }
  const body: RequestInterface = {
    key: "d929cdfdef4e41958ca173450251601",
    q: "joao pessoa",
  };
  let baseURL = "http://api.weatherapi.com/v1";
  const axiosInstance = axios.create({ baseURL });
  const response = await axiosInstance.post("/current.json", body);
  const data = response.data;
  console.log("Response data:", data);
  return data;
};

function App() {
  const [count, setCount] = useState(0);
  const [weatherData, setWeatherData] = useState<any>(undefined);
  useEffect(() => {
    getWeather();
  }, [count]);

  return (
    <>
      <h1>Your weather:</h1>
      <p>Cloudy</p>
      {/* <p>{weatherData && weatherData}</p> */}
      <br />
      <p>Couter: {count}</p>
      <p>
        <button
          onClick={() => {
            setCount((prev) => prev - 1);
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increase
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Return to 0
        </button>
      </p>
    </>
  );
}

export default App;
