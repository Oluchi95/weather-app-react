import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is coded by{" "}
          <a
            href="https://www.shecodesfoundation.org/candidates/priscilla-ikeri-nigerian"
            target="_blank"
            rel="noreferrer"
          >
            Priscilla Ikeri
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Oluchi95/weather-app-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
