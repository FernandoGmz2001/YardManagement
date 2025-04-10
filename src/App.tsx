import Home from "./components/Home/Home"
import {
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import './index.css'
import Vehicles from "./components/Vehicles/Vehicles";
import SelectedVehicle from "./components/Information/SelectedVehicle";
import BottomBar from "./components/BottomBar";
import Configuration from "./components/Configuration/Configuration";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      <main className="flex-1 pb-20"> {/* Padding para el BottomBar */}
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <BottomBar />
    </div>
  );
};


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicle/1" element={<SelectedVehicle />} />
          <Route path="/settings" element={<Configuration />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
