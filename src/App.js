import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Landing/Login/Login";
import ForgotPassword from "./pages/Landing/ForgotPassword/ForgotPassword";
import Layout from "./components/Layout/Layout";
import LiveOutput from "./pages/LiveOutput/LiveOutput";
import AddLiveStream from "./pages/AddLiveStream/AddLiveStream";
import AllLiveStream from "./pages/AllLiveStream/AllLiveStream";
import SignUp from "./pages/Landing/SignUp1/SignUp";
import StepSignUp from "./pages/Landing/StepSignUp/StepSignUp";
import { Thanks } from "./pages/Thanks/Thanks";
import Error404 from "./pages/Error1/Error404";
import Invoice from "./pages/Invoice/Invoice";
import PressReleasePage from "./pages/Press Release Page/PressReleasePage";
import SearchResult from "./pages/SearchResult/SearchResult";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import AllInstructor1 from "./pages/AllInstructorList/AllInstructor1";
import Help1 from "./pages/Help/Help1";
import PaidMembership from "./pages/PaidMembership/PaidMembership";
import ReportHistory from "./pages/ReportHistory/ReportHistory";
import SendFeedback from "./pages/SendFeedback/SendFeedback";
import { OtherInstructorView } from "./pages/OtherInstructorView/OtherInstructorView";
import { MyInstructorProfile } from "./pages/MyInstructorProfile/MyInstructorProfile";
import { SaveCourses } from "./pages/SaveCourses/SaveCourses";



function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignUpStep" element={<StepSignUp />} />
        <Route path="thanks" element={<Thanks />} />
        <Route path="error404" element={<Error404 />} />
        <Route path="invoice" element={<Invoice />} />
        <Route path="press" element={<PressReleasePage />} />
        <Route path="search_result" element={<SearchResult />} />

        <Route path="paidmembership" element={<PaidMembership />} />
        <Route path="about-us" element={<About />} />
        <Route path="our-blog" element={<Blog />} />
        <Route
          path="/"
          element={<Layout sidebar={sidebar} setSidebar={setSidebar} />}
        >
          <Route path="home" element={<Home />} />
          <Route path="live_output" element={<LiveOutput />} />
          <Route path="add_livestream" element={<AddLiveStream />} />
          <Route path="all_livestream" element={<AllLiveStream />} />
          <Route path="allinstructorlist" element={<AllInstructor1 />} />
          <Route path="help" element={<Help1 />} />
          <Route path="reporthistory" element={<ReportHistory />} />
          <Route path="sendfeedback" element={<SendFeedback />} />
          <Route path="/other-instructor-view" element={<OtherInstructorView />} />
          <Route path='/my-instructor-profile' element={<MyInstructorProfile />} />
          <Route path="save-courses" element={<SaveCourses />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
