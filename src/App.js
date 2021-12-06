import "./App.css";
import Evaluation from "./scenes/Evaluation";
import Home from "./scenes/Home";
import SignPage from "./scenes/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/signin" element={<SignPage />} />
      </Routes>
    </Router>
  );
}

export default App;
