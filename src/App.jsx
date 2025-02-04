import Hourly from "./Hourly.jsx";
import FiveDay from "./FiveDay.jsx";

function App() {
  const dummyWeatherData = {
    location: "Ankara",
    country: "TR",
    temperature: "23",
    description: "partly cloudy",
    humidity: 60,
    windspeed: 5,
  };

  

  return (
    <div className="container-sm custom-bg-gradient py-3 px-4">
      <div className="row gap-3">
        <h1 className="col-12 text-center display-6 fw-medium">Weather</h1>
        <div className="col-12 d-flex gap-2 p-0">
          <input
            type="text"
            placeholder="Enter city name"
            className="form-control px-2"
          />
          <button className="col-3 d-flex justify-content-center gap-3 py-2 rounded-2 border bg-white">
            <i className="bi bi-search"></i>
            <span>Search</span>
          </button>
        </div>
        <div className="col-12 d-flex flex-column align-items-center text-white border border-primary-subtle weather-card rounded p-4">
          <h4 className="h5 mb-0 fw-normal">
            {dummyWeatherData.location},{dummyWeatherData.country}
          </h4>
          <p className="display-1 fw-bold m-0">
            {dummyWeatherData.temperature}℃
          </p>
          <p className="fs-5 fw-normal">{dummyWeatherData.description}</p>
          <div className="d-flex gap-3 text-white">
            <p className="fs-6 m-0">Highest: {dummyWeatherData.temperature}℃</p>
            <p className="fs-6 m-0">Lowest: {dummyWeatherData.temperature}℃</p>
            <div className="d-flex gap-1 fs-6">
              <i className="bi bi-droplet"></i>
              <p className="fs-6 m-0">{dummyWeatherData.humidity}</p>
            </div>
            <div className="d-flex gap-1">
              <i className="bi bi-wind"></i>
              <p className="fs-6 m-0">{dummyWeatherData.windspeed}</p>
            </div>
          </div>
        </div>
        <Hourly />
        <FiveDay />
      </div>
    </div>
  );
}

export default App;
