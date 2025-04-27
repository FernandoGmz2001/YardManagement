import Home from "./components/Home/Home";
import { Outlet, Route, Routes } from "react-router-dom";
import "./index.css";
import SelectedVehicle from "./components/Information/SelectedVehicle";
import BottomBar from "./components/BottomBar";
import Configuration from "./components/Configuration/Configuration";
import Yards from "./components/Configuration/Yards/Yards";
import Users from "./components/Configuration/Users/Users";
import Drivers from "./components/Configuration/Drivers/Drivers";
import Vehicles from "./components/Configuration/Vehicles/Vehicles";
import Vehicle from "./components/Vehicles/Vehicles";
import Register from "./components/Home/Register";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-full">
      <main className="">
        <Outlet />
      </main>
      <BottomBar />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register/new" element={<Register />} />
          <Route path="/vehicles" element={<Vehicle />} />
          <Route path="/vehicle/1" element={<SelectedVehicle />} />
          <Route path="/settings" element={<Configuration />} />
          <Route path="/settings/yards" element={<Yards />} />
          <Route path="/settings/users" element={<Users />} />
          <Route path="/settings/drivers" element={<Drivers />} />
          <Route path="/settings/vehicles" element={<Vehicles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
