import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project is coded by{" "}
          <a
            href="https://www.shecodesfoundation.org/candidates/priscilla-ikeri-nigerian"
            target="_blank"
          >
            Priscilla Ikeri
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/Oluchi95/weather-app-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
