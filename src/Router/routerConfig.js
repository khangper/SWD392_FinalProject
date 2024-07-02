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
import BlogDetail from "../pages/BlogDetail/BlogDetail";
import Checkout from '../pages/Checkout/Checkout';
import ShoppingCart from '../pages/ShopingCart/ShoppingCart';
import HelpView1 from '../pages/HelpView1/HelpView1';
import HelpView2 from '../pages/HelpView2/HelpView2';
import Company from '../pages/Company/Company';
import Career from '../pages/Career/Career';
import ApplyJob from '../pages/ApplyJob/ApplyJob';
import ContactUs from '../pages/ContactUs/ContactUs';
import TermsOfUse from '../pages/TermsOfUse/TermsOfUse';
import CertificationFillForm from '../pages/CertificationFillForm/CertificationFillForm';
import MyCourse from '../pages/MyCourse/MyCourse';

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
    { path: "/our-blog", element: <Blog /> },
    { path: "/blog-single-view", element: <BlogDetail /> },
    { path: "/checkout", element: <Checkout /> },
    { path: "/shoppingcart", element: <ShoppingCart /> },
    { path: "/helpview1", element: <HelpView1 /> },
    { path: "/helpview2", element: <HelpView2 /> },
    { path: "/company-details", element: <Company /> },
    { path: "/career", element: <Career /> },
    { path: "/apply-job", element: <ApplyJob /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/termofuse", element: <TermsOfUse /> },
    { path: "/certificationfillform", element: <CertificationFillForm /> },
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
    { path: "/setting", element: <Setting /> },
    { path: "/mycourse", element: <MyCourse /> },
];

const routes = { publicRoutes, privateRoutes };

export default routes;
