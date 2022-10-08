import "./style.scss";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./route";
function App() {
  return (
    <div className="App">
      <Router>
        <AppRoute />
      </Router>
    </div>
  );
}

export default App;
