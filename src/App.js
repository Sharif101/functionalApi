import { Route, Routes } from "react-router-dom";
import {
  Landingpage,
  WelcomeR,
  Myhealth,
  Totalapp,
  Doctorpage,
  Createapp,
  Dashboardd,
} from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/welcome" element={<WelcomeR />} />
        <Route path="/totalapp" element={<Totalapp />} />
        <Route path="/myhealth" element={<Myhealth />} />
        <Route path="/doctor" element={<Doctorpage />} />
        <Route path="/create-appoinment" element={<Createapp />} />
        <Route path="/dashboard" element={<Dashboardd />} />
      </Routes>
    </div>
  );
}

export default App;
