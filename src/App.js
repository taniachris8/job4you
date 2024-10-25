import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs/Jobs.js";
import ScrollToTop from "./components/ScrollToTop.js";
import TermsOfUse from "./pages/TermsOfUse.js";
import AboutCompany from "./pages/AboutCompany.js";
import Article1 from "./pages/Articles/Article1.js";
import Article2 from "./pages/Articles/Article2.js";
import Article3 from "./pages/Articles/Article3.js";
import Article4 from "./pages/Articles/Article4.js";
import JobPage from "./pages/Jobs/JobPage.js";
import SignUp from "./pages/SignUp.js";
import { useAuth } from "./services/AuthContext"; 
import LoginPage from "./pages/LoginPage.js";
import UserSettings from "./components/user/UserSettings.js";
import UserSavedJobs from "./components/user/UserSavedJobs.js";
import UserCV from "./components/user/UserCV.js";
import TipsPage from "./components/Tips/TipsPage.js";
import EmployeesRights from "./pages/EmployeesRights.js";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage.js";

function App() {
  const { user } = useAuth(); 
 
  return (
    <Router>
        <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jobs" element={<Jobs />} />
        <Route exact path="/terms-of-use" element={<TermsOfUse />} />
        <Route exact path="/about-company" element={<AboutCompany />} />
        <Route exact path="/article_1" element={<Article1 />} />
        <Route exact path="/article_2" element={<Article2 />} />
        <Route exact path="/article_3" element={<Article3 />} />
        <Route exact path="/article_4" element={<Article4 />} />
        <Route exact path="/jobs/:id" element={<JobPage />} />
        <Route exact path="/registration" element={<SignUp />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/users-settings" element={<UserSettings />} />
        <Route exact path="/users-savedJobs" element={<UserSavedJobs />} />
        <Route exact path="/users-CV" element={<UserCV />} />
        <Route exact path="/tips" element={<TipsPage />} />
        <Route exact path="/rights" element={<EmployeesRights />} />
        <Route exact path="/password-recovery" element={<PasswordRecoveryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
