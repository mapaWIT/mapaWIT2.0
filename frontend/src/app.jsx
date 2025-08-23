import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import About from "./pages/About";
import HowToUse from "./pages/HowToUse";
import Combined from "./pages/Combined";
import Loading from "./components/Loading";
import Ar from "./pages/Ar"
import MainBuilding from "./pages/MainBuilding";
import RTS from "./pages/RTS"
import ScienceBuilding from "./pages/ScienceBuilding";
import Options from "./pages/Options ";
import Navigate from "./pages/Navigate";

function Layout() {
  const location = useLocation();
  const hideNavbarOn = [ "/how-to-use","/about"];

  return (
    <>
      {!hideNavbarOn.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-to-use" element={<HowToUse />} />
        <Route path="/combined" element={<Combined />} />
        <Route path="/ar" element={<Ar/>} />
        <Route path="/main" element={<MainBuilding/>}/>
        <Route path="/rts" element={<RTS/>}/>
        <Route path="/science-building" element={<ScienceBuilding/>}/>
        <Route path="/options" element={<Options/>}/>
        <Route path="/navigate" element={<Navigate/>}/>
      </Routes>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  // Show loader only once when app loads
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Layout />
    </Router>
  );
}
