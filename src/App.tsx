import "./app.scss";
import Header from "./components/Header";
import Rates from "./components/Rates";
import Exchange from "./components/Exchange";

function App() {
  return (
    <div className="main">
      <Header />
      <Rates />
      <Exchange />
    </div>
  );
}

export default App;
