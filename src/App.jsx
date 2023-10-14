import React from "react";
import Home from "./pages/Home.jsx";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  var exacts = true;
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<SignIn />} /> */}
          <Route path="/" element={<Home />} exact={`${exacts}`} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
