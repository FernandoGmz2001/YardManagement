import Home from "./components/Home/Home"
import {
  Route,
  Routes
} from "react-router-dom";
import './index.css'
import Vehicles from "./components/Vehicles/Vehicles";
import SelectedVehicle from "./components/Information/SelectedVehicle";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/vehicle/1" element={<SelectedVehicle />} />
      </Routes>
    </>
  )
}

export default App
