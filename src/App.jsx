import Hourly from "./Hourly.jsx"
import FiveDay from "./FiveDay.jsx"

function App() {
  return (
    <main>
      <h1>Weather</h1>
      <div>
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <h2>Ankara</h2>
        <p>22 C</p>
        <p>Partly cloudy</p>
        <div>
          <p>Highest: 16C</p>
          <p>Lowest: 16C</p>
        </div>
        <div>
          <p>60%</p>
        </div>
        <div>
          <p>5 m/s</p>
        </div>
      </div>
      <Hourly />
      <FiveDay />
    </main>
  );
}

export default App;
