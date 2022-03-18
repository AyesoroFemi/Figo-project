import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import GetLoan from "./pages/getLoans"
import PayLater from "./pages/payLater";
import TransferMoney from "./pages/transferMoney";
import SaveMoney from "./pages/saveMoney";
import Wallet from "./pages/wallet";

import './App.css';


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="get-loan" element={<GetLoan />} />
            <Route path="pay-later" element={<PayLater />} />
            <Route path="transfer-money" element={<TransferMoney />} />
            <Route path="save-money" element={<SaveMoney />} />
            <Route path="wallet" element={<Wallet />} />
          </Routes>
        </Router>
  );
}

export default App;
