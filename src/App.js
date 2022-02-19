import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <div className="App-purpose text-center">Dictionary</div>
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="text-center App-footer">
          <small>Coded by Angela Dumas</small>
        </footer>
      </div>
    </div>
  );
}
