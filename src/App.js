import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard, GetLoan } from "./pages";
import { WorkInfo } from "./pages/getLoans/nav/WorkInfo";
import { BvnInfo } from "./pages/getLoans/nav/Bvn";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/get-loan" element={<GetLoan />} />
        <Route path="/work" element={<WorkInfo />} />
        <Route path="/bvn" element={<BvnInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
