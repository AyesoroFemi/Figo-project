import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, GetLoan } from "./pages";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/get-loan" element={<GetLoan />} />
      </Routes>
    </Router>
  );
}

export default App;
