import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";
import Butler from "./Butler";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <div className="container">
          <Butler />
        </div>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center App-footer">
          <small>
            Coded by
            <a
              href="https://www.linkedin.com/in/angela-dumas-443391197/"
              target="_blank"
              rel="noreferrer"
            >
              Angela Dumas
            </a>
            . It is open-sourced on
            <a
              href="https://github.com/adumas555/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            and is hosted on
            <a
              href="https://gracious-sammet-8f5fa7.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
