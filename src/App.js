import { Route, Routes } from "react-router-dom";
import { Landingpage, WelcomeR, Myhealth, Totalapp } from "./pages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/welcome" element={<WelcomeR />} />
        <Route path="/totalapp" element={<Totalapp />} />
        <Route path="/myhealth" element={<Myhealth />} />
      </Routes>
    </div>
  );
}

export default App;
