import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import History from "../pages/about-aub/AUB/History/History";
import VisionMission from "../pages/about-aub/AUB/Vision&Mission/VisionMission";
import Founder from "../pages/about-aub/AUB/Founder/Founder";
import Syndicate from "../pages/about-aub/AUB/Syndicate/Syndicate";
import AcademicCouncil from "../pages/about-aub/AUB/AcademicCouncil/AcademicCouncil";
import RulesRegulations from "../pages/about-aub/AUB/Rules&Regulations/RulesRegulations";
import BoardOfTrustees from "../pages/about-aub/AUB-Authorities/BoardOfTrustees/BoardOfTrustees";
import Chairman from "../pages/about-aub/AUB-Authorities/Chairman/Chairman";
import ViceChancellor from "../pages/about-aub/AUB-Authorities/ViceChancellor/ViceChancellor";
import Treasurer from "../pages/about-aub/AUB-Authorities/Treasurer/Treasurer";
import Proctor from "../pages/about-aub/AUB-Authorities/Proctor/Proctor";
import Registrar from "../pages/about-aub/AUB-Authorities/Registrar/Registrar";
import Events from "../pages/events&notices/events/Events";
import ViceChancellorOffice from "../pages/administration/ViceChancellorOffice";
import TreasurerOffice from "../pages/administration/TreasurerOffice";
import RegistrarOffice from "../pages/administration/RegistrarOffice";
import LibraryOffice from "../pages/administration/LibraryOffice";
import AdmissionAndRecords from "../pages/administration/AdmissionAndRecords";
import ControllerOfExaminationOffice from "../pages/administration/ControllerOfExaminationOffice";
import ItDivision from "../pages/administration/ItDivision";
import PublicRelationsDivision from "../pages/administration/PublicRelationsDivision";
import CampusLife from "../pages/campus-life/CampusLife";
import Contact from "../pages/contact/Contact";
import Admission from "../pages/admission/Admission";
import Notices from "../pages/events&notices/notices/Notices";
import Bengali from "../pages/departments/SchoolOfArts/Bengali";
import English from "../pages/departments/SchoolOfArts/English";
import IslamicHistoryAndCivilization from "../pages/departments/SchoolOfArts/IslamicHistoryAndCivilization";
import IslamicStudies from "../pages/departments/SchoolOfArts/IslamicStudies";
import BusinessAdministration from "../pages/departments/SchoolOfBusiness/BusinessAdministration";
import Economics from "../pages/departments/SchoolOfSocialScinces/Economics";
import GovernmentAndPolitics from "../pages/departments/SchoolOfSocialScinces/GovernmentAndPolitics";
import InformationAndLibraryManag from "../pages/departments/SchoolOfSocialScinces/InformationAndLibraryManag";
import SocialWork from "../pages/departments/SchoolOfSocialScinces/SocialWork";
import SocilolgyAndAnthropology from "../pages/departments/SchoolOfSocialScinces/SocilolgyAndAnthropology";
import CSE from "../pages/departments/Science&Engineering/CSE/CSE";
import EducationAndTraining from "../pages/departments/theSchoolOfEducationAndTraining/EducationAndTraining";
// প্রয়োজনীয় সব পেজ কম্পোনেন্ট ইম্পোর্ট করে নিন

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      
      // --- 1. ABOUT AUB SUB-MENUS ---
      { path: "history", element: <History></History>},
      { path: "vision-mission", element:<VisionMission></VisionMission>},
      { path: "founder", element: <Founder></Founder>},
      { path: "syndicate", element: <Syndicate></Syndicate> },
      { path: "academic-council", element: <AcademicCouncil></AcademicCouncil> },
      { path: "rules-regulations", element: <RulesRegulations></RulesRegulations> },
      { path: "board-of-trustees", element: <BoardOfTrustees></BoardOfTrustees> },
      { path: "chairman", element: <Chairman></Chairman> },
      { path: "vice-chancellor", element: <ViceChancellor></ViceChancellor> },
      { path: "treasurer", element: <Treasurer></Treasurer> },
      { path: "proctor", element: <Proctor></Proctor> },
      { path: "registrar", element: <Registrar></Registrar> },

      // --- 2. ADMISSION  
      { path: "admission", element: <Admission></Admission> },
      // DEPARTMENTS ---
        // SchoolOfArts
      { path: "bengali", element: <Bengali></Bengali> },
      { path: "english", element: <English></English> },
      { path: "islamicHistoryAndCivilization", element: <IslamicHistoryAndCivilization></IslamicHistoryAndCivilization> },
      { path: "departmeIslamicStudiesnts", element: <IslamicStudies></IslamicStudies> },

        // SchoolOfBusiness
      { path: "businessAdministration", element: <BusinessAdministration></BusinessAdministration> },

        // BusinessAdministration
      { path: "economics", element: <Economics></Economics> },
      { path: "governmentAndPolitics", element: <GovernmentAndPolitics></GovernmentAndPolitics> },
      { path: "informationAndLibraryManag", element: <InformationAndLibraryManag></InformationAndLibraryManag> },
      { path: "socialWork", element: <SocialWork></SocialWork> },
      { path: "socilolgyAndAnthropology", element: <SocilolgyAndAnthropology></SocilolgyAndAnthropology> },

        // Science&Engineering
      { path: "cse", element: <CSE></CSE> },  
      
        // theSchoolOfEducationAndTraining
        { path: "educationAndTraining", element: <EducationAndTraining></EducationAndTraining> },



      // --- 3. EVENTS & NOTICES SUB-MENUS ---
      { path: "events", element: <Events></Events> },
      { path: "notices", element: <Notices></Notices> },

      // --- 4. ADMINISTRATION SUB-MENUS ---
      { path: "vc-office", element: <ViceChancellorOffice></ViceChancellorOffice> },
      { path: "treasurer-office", element: <TreasurerOffice></TreasurerOffice> },
      { path: "registrar-office", element: <RegistrarOffice></RegistrarOffice> },
      { path: "library-office", element: <LibraryOffice></LibraryOffice> },
      { path: "controller-office", element: <ControllerOfExaminationOffice></ControllerOfExaminationOffice> },
      { path: "admission-records", element: <AdmissionAndRecords></AdmissionAndRecords> },
      { path: "it-division", element: <ItDivision></ItDivision> },
      { path: "public-relations", element: <PublicRelationsDivision></PublicRelationsDivision> },

      // --- 5. OTHERS ---
      { path: "campus-life", element: <CampusLife></CampusLife> },
      { path: "contact", element: <Contact></Contact> },
      // { path: "search-result", element: <div>Search Result Page</div> },
    ],
  },
]);