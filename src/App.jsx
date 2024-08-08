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
// import PharmaAudit from "./pages/services/pharmaAudit";
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
import PharmaAudit from "../src/pages/services/PharmaAudit";
import Feasibility from "./pages/services/Engineering/Feasibility";
import SiteSelection from "./pages/services/Engineering/SiteSelection";
import FacilityDesign from "./pages/services/Engineering/FacilityDesign";
import DesignRisk from "./pages/services/Engineering/Design-Risk";
import DetailedEngineering from "./pages/services/Engineering/Detailed-Engineering";
import RegulatoryCompliance from "./pages/services/Engineering/Regulatory-Compliance";
import ProjectManagement from "./pages/services/Engineering/Project-Management";
import TechnologyEquipment from "./pages/services/Engineering/Technology-Equipment";
import CommissioningQualification from "./pages/services/Engineering/CommissioningQualification";
import QualityAssurance from "./pages/services/Engineering/QualityAssurance";
import TrainingCapacityBuilding from "./pages/services/Engineering/TrainingCapacityBuilding";
import ContractualCloseout from "./pages/services/Engineering/ContractualCloseout";
import PostProjectReview from "./pages/services/Engineering/PostProjectReview";
import SupplyChainManagement from "./pages/services/Engineering/SupplyChainManagement";
import FinancialAnalysis from "./pages/services/Engineering/FinancialAnalysis";
import UserRequirementsSpecification from "./pages/services/QualificationValidation/UserRequirementsSpecification";
import DesignQualification from "./pages/services/QualificationValidation/DesignQualification";
import FactorySiteAcceptance from "./pages/services/QualificationValidation/FactorySiteAcceptance";
import InstallationQualification from "./pages/services/QualificationValidation/InstallationQualification";
import OperationQualification from "./pages/services/QualificationValidation/OperationQualification";
import StandardOperatingProcedure from "./pages/services/QualificationValidation/StandardOperatingProcedure";
import PerformanceQualification from "./pages/services/QualificationValidation/PerformanceQualification";
import ProcessCleaningValidation from "./pages/services/QualificationValidation/ProcessCleaningValidation";
import RiskAssessment from "./pages/services/QualificationValidation/RiskAssessment";
import DevelopingProceduresQms from "./pages/services/DropQM Implementation/DevelopingProceduresQms";
import TrainingAwareness from "./pages/services/DropQM Implementation/TrainingAwareness";
import GapAnalysis from "./pages/services/DropQM Implementation/GapAnalysis";
import InvestigationSupport from "./pages/services/DropQM Implementation/InvestigationSupport";
import RootCauseAnalysis from "./pages/services/DropQM Implementation/RootCauseAnalysis";
import QmsMonitoringMeasurement from "./pages/services/DropQM Implementation/QmsMonitoringMeasurement";
import AssessmentFeasibil from "./pages/services/TechnologyTransferProductDevelopmentSupport/AssessmentFeasibil";
import ProcessOptimization from "./pages/services/TechnologyTransferProductDevelopmentSupport/ProcessOptimization";
import RegulatoryCompliances from "./pages/services/TechnologyTransferProductDevelopmentSupport/RegulatoryCompliances";


function App() {
      // useEffect(() => {
      //   const preventRightClick = (e) => {
      //     e.preventDefault();
      //   };

      //   document.addEventListener("contextmenu", preventRightClick);

      //   return () => {
      //     document.removeEventListener("contextmenu", preventRightClick);
      //   };
      // }, []);
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
          <Route path='/parma-audit' element={<PharmaAudit />} />
          <Route path="/engineer/feasibility-studies" element={<Feasibility />} />
          <Route path="/engineer/site-selection" element={<SiteSelection />} />
          <Route path="/engineer/facility-design" element={<FacilityDesign />} />
          <Route path="/engineer/design-risk" element={<DesignRisk />} />
          <Route path="/engineer/detailed-engineering" element={<DetailedEngineering />} />
          <Route path="/engineer/regulatory-compliance" element={<RegulatoryCompliance />} />
          <Route path="/engineer/project-management" element={<ProjectManagement />} />
          <Route path="/engineer/technology-equipment" element={<TechnologyEquipment />} />
          <Route path="/engineer/commissioning-qualification" element={<CommissioningQualification />} />
          <Route path="/engineer/quality-assurance" element={<QualityAssurance />} />
          <Route path="/engineer/training-capacity-building" element={<TrainingCapacityBuilding />} />
          <Route path="/engineer/contractual-closeout" element={<ContractualCloseout />} />
          <Route path="/engineer/post-project-review" element={<PostProjectReview />} />
          <Route path="/engineer/supply-chain-management" element={<SupplyChainManagement />} />
          <Route path="/engineer/financial-analysis" element={<FinancialAnalysis />} />
          <Route path="/qualificationvalidation/user-requirements-specification" element={<UserRequirementsSpecification />} />
          <Route path="/qualificationvalidation/design-qualification" element={<DesignQualification />} />
          <Route path="/qualificationvalidation/factory-site-acceptance" element={<FactorySiteAcceptance />} />
          <Route path="/qualificationvalidation/installation-qualification" element={<InstallationQualification />} />
          <Route path="/qualificationvalidation/operation-qualification" element={<OperationQualification />} />
          <Route path="/qualificationvalidation/standard-operating-procedure" element={<StandardOperatingProcedure />} />
          <Route path="/qualificationvalidation/performance-qualification" element={<PerformanceQualification />} />
          <Route path="/qualificationvalidation/process-cleaning-validation" element={<ProcessCleaningValidation />} />
          <Route path="/qualificationvalidation/risk-assessment" element={<RiskAssessment />} />
          <Route path="/dropqmsimplementation/developing-procedures-qms" element={<DevelopingProceduresQms />} />
          <Route path="/dropqmsimplementation/training-awareness" element={<TrainingAwareness />} />
          <Route path="/dropqmsimplementation/gap-analysis" element={<GapAnalysis />} />
          <Route path="/dropqmsimplementation/investigation-support" element={<InvestigationSupport />} />
          <Route path="/dropqmsimplementation/root-cause-analysis" element={<RootCauseAnalysis />} />
          <Route path="/dropqmsimplementation/qms-monitoring-measurement" element={<QmsMonitoringMeasurement />} />
          <Route path="/technologytransferproductdevelopmentsupport/assessment-feasibil" element={<AssessmentFeasibil />} />
          <Route path="/technologytransferproductdevelopmentsupport/process-optimization" element={<ProcessOptimization />} />
          <Route path="/technologytransferproductdevelopmentsupport/regulatory-compliances" element={<RegulatoryCompliances />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
