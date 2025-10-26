import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import PictureNav from "./pages/PictureNav";
import Loading from "./components/Loading";
import Ar from "./pages/Ar"
import MainBuilding from "./pages/MainBuilding";
import RTS from "./pages/RTS"
import ScienceBuilding from "./pages/ScienceBuilding";
import Options from "./pages/Options ";
import Navigate from "./pages/Navigate";
import ScienceBuilding3d from "./pages/ScienceBuilding3d";
import MainPictureNav from "./pages/MainPictureNav";
import RTSPictureNav from "./pages/RTSPictureNav";
import SBPictureNav from "./pages/SBPictureNav";

function Layout() {
  const location = useLocation();
  const hideNavbarOn = [ "/how-to-use","/about","/navigate","/picnav","/ar","/sb3d"];
  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/ar" element={<Ar/>} />
        <Route path="/main" element={<MainBuilding/>}/>
        <Route path="/rts" element={<RTS/>}/>
        <Route path="/science-building" element={<ScienceBuilding/>}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/navigate" element={<Navigate/>}/>
        <Route path="/sb3d" element={<ScienceBuilding3d />} />
         <Route path="/mainpicturenav" element={<MainPictureNav />} />
          <Route path="/rtspicturenav" element={<RTSPictureNav />} />
           <Route path="/sbpicturenav" element={<SBPictureNav/>} />
            <Route path="/picnav" element={<PictureNav />} />
      </Routes>
    </>
  );
}

function LoadingScreen(){
  const [loading, setLoading] = useState(true);

  // Show loader only once when app loads
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }
}

export default function App() {
  /*useEffect(() => {
    const getMaps = async () => {
      const res = await fetch("/api/mapa");
      const maps = await res.json();

      console.log(maps);
    };
    getMaps();
  }, [])*/

  return (
    <Router>
      <LoadingScreen />
      <Layout />
    </Router>
  );
}
