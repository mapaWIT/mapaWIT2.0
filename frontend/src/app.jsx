import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import Navigate from "./pages/Navigate";
import MainCampus from "./pages/MainCampus";
import RTSCampus from "./pages/RTSCampus";
import ScienceBuilding from "./pages/ScienceBuilding";

function Layout(){
  const location = useLocation();
  const hideNavbarOn = ["/about","/how-to-use","/main","/rts","/science-building"];
  

  return(
    <>
    {!hideNavbarOn.includes(location.pathname)&& <Navbar/>}
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-use" element={<HowToUse/>}/>
        <Route path="/navigate" element={<Navigate/>}/>
        <Route path="/main" element={<MainCampus/>}/>
        <Route path="/rts" element={<RTSCampus/>}/>
        <Route path="/science-building" element={<ScienceBuilding/>}/>
      </Routes>
      </>
  );
}

export default function App() {
  return (
    <Router>
      
     <Layout/>
      
    </Router>
  );
}

