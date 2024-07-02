import About from "../pages/About/About";
import AddLiveStream from "../pages/AddLiveStream/AddLiveStream";
import AllInstructor1 from "../pages/AllInstructorList/AllInstructor1";
import AllLiveStream from "../pages/AllLiveStream/AllLiveStream";
import Blog from "../pages/Blog/Blog";
import Error404 from "../pages/Error1/Error404";
import Explore from "../pages/Explore/Explore";
import Help from "../pages/Help/Help1";
import Home from "../pages/Home/Home";
import Invoice from "../pages/Invoice/Invoice";
import ForgotPassword from "../pages/Landing/ForgotPassword/ForgotPassword";
import Login from "../pages/Landing/Login/Login";
import SignUp from "../pages/Landing/SignUp1/SignUp";
import StepSignUp from "../pages/Landing/StepSignUp/StepSignUp";
import LiveOutput from "../pages/LiveOutput/LiveOutput";
import MyInstructorProfile from "../pages/MyInstructorProfile/MyInstructorProfile";
import OtherInstructorView from "../pages/OtherInstructorView/OtherInstructorView";
import PaidMembership from "../pages/PaidMembership/PaidMembership";
import PressReleasePage from "../pages/Press Release Page/PressReleasePage";
import ReportHistory from "../pages/ReportHistory/ReportHistory";
import SaveCourses from "../pages/SaveCourses/SaveCourses";
import SearchResult from "../pages/SearchResult/SearchResult";
import SendFeedback from "../pages/SendFeedback/SendFeedback";
import Setting from "../pages/Setting/Setting";
import Thanks from "../pages/Thanks/Thanks";

const publicRoutes = [
    { path: "/login", element: <Login /> },
    { path: "/forgot-password", element: <ForgotPassword /> },
    { path: "/SignUp", element: <SignUp /> },
    { path: "/SignUpStep", element: <StepSignUp /> },
    { path: "/thanks", element: <Thanks /> },
    { path: "/error404", element: <Error404 /> },
    { path: "/invoice", element: <Invoice /> },
    { path: "/press", element: <PressReleasePage /> },
    { path: "/search_result", element: <SearchResult /> },
    { path: "/paidmembership", element: <PaidMembership /> },
    { path: "/about-us", element: <About /> },
    { path: "/our-blog", element: <Blog /> }
];

const privateRoutes = [
    { path: "/home", element: <Home /> },
    { path: "/explore", element: <Explore /> },
    { path: "/live_output", element: <LiveOutput /> },
    { path: "/add_livestream", element: <AddLiveStream /> },
    { path: "/all_livestream", element: <AllLiveStream /> },
    { path: "/allinstructorlist", element: <AllInstructor1 /> },
    { path: "/help", element: <Help /> },
    { path: "/reporthistory", element: <ReportHistory /> },
    { path: "/sendfeedback", element: <SendFeedback /> },
    { path: "/other-instructor-view", element: <OtherInstructorView /> },
    { path: "/my-instructor-profile", element: <MyInstructorProfile /> },
    { path: "/save-courses", element: <SaveCourses /> },
    { path: "/setting", element: <Setting /> }
];

const routes = { publicRoutes, privateRoutes };

export default routes;
