import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Feature from "./pages/Feature";
// import Ebmr from "./pages/Ebmr"
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SoftwareDevelopement from "./pages/SoftwareDevelopement";
import ElogBook from "./pages/services/ElogBook";
import LMS from "./pages/services/LMS";
import EBMR1 from "./pages/services/EBMR1";
import MES from "./pages/services/MES";
import EDMS from "./pages/services/EDMS";
import EQMS from "./pages/services/EQMS";
import QMS from "./pages/services/QRM";
import RootcauseAnalysis from "./pages/services/RootcauseAnalysis";
import PharmaAudit from "./pages/services/pharmaAudit";
import WarehouseMS from "./pages/services/WarehouseMS";
import PaperlessM from "./pages/services/PaperlessM";
import UsfdaW from "./pages/services/UsfdaW";
import MergerAndAcquisition from "./pages/services/MergerAndAcquisition";
import AiAssistedPharma from "./pages/services/AiAssistedPharma";
import AiAssistedCultureOfQuality from "./pages/services/AiAssistedCultureOfQuality";
import GxpSystems from "./pages/services/GxpSystems";
import IntelligentPharma from "./pages/services/IntelligentPharma";
import GxpTrainig from "./pages/services/GxpTraining";
import Rpa from "./pages/services/Rpa";
import Industries from "./pages/Industries";
import { useEffect } from "react";

function App() {
      useEffect(() => {
        const preventRightClick = (e) => {
          e.preventDefault();
        };

        document.addEventListener("contextmenu", preventRightClick);

        return () => {
          document.removeEventListener("contextmenu", preventRightClick);
        };
      }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Feature />} />
          <Route path="/services" element={<Services />} />
          <Route path="/software-development" element={<SoftwareDevelopement />} />
          <Route path="/elogbook" element={<ElogBook />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/mes" element={<MES />} />
          <Route path="/ebmr" element={<EBMR1 />} />
          <Route path="/edms" element={<EDMS />} />
          <Route path="/eqms" element={<EQMS />} />
          <Route path="/quality-risk-management" element={<QMS />} />
          <Route path="/root-cause-analysis" element={<RootcauseAnalysis />} />
          <Route path="/pharma-audit" element={<PharmaAudit />} />
          <Route path="/warehouse-management" element={<WarehouseMS />} />
          <Route path="/paperless-microbiology" element={<PaperlessM />} />
          <Route path="/usfda-warning-letter-management" element={<UsfdaW />} />
          <Route path="/merger-and-acquisition" element={<MergerAndAcquisition />} />
          <Route path="/ai-assited-pharma" element={<AiAssistedPharma />} />
          <Route path="/ai-assited-culture-of-quality" element={<AiAssistedCultureOfQuality />} />
          <Route path="/connected-and-integrated-gxp-systems" element={<GxpSystems />} />
          <Route path="/intelligent-pharma" element={<IntelligentPharma />} />
          <Route path="/gxp-training" element={<GxpTrainig />} />
          <Route path="/rpa" element={<Rpa />} />
          <Route path='/industries' element={<Industries />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
