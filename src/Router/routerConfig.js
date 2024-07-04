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
import CertificationTest from '../pages/CertificationTest/CertificationTest';
import CommingSoon from '../pages/CommingSoon/CommingSoon';
import { PATH_NAME } from "../constant/pathname";
import TestResult from "../pages/TestResult/TestResult";
import Message from "../pages/Message/Message";
import CoursesDetailView from "../pages/CoursesDetailView/CoursesDetailView";
import Previews from "../pages/Previews/Previews";

const publicRoutes = [
  { path: PATH_NAME.LOGIN, element: <Login /> },
  { path: PATH_NAME.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATH_NAME.SIGN_UP, element: <SignUp /> },
  { path: PATH_NAME.SIGN_UP_STEP, element: <StepSignUp /> },
  { path: PATH_NAME.THANKS, element: <Thanks /> },
  { path: PATH_NAME.ERROR_404, element: <Error404 /> },
  { path: PATH_NAME.INVOICE, element: <Invoice /> },
  { path: PATH_NAME.PRESS, element: <PressReleasePage /> },
  { path: PATH_NAME.SEARCH_RESULT, element: <SearchResult /> },
  { path: PATH_NAME.PAID_MEMBERSHIP, element: <PaidMembership /> },
  { path: PATH_NAME.ABOUT_US, element: <About /> },
  { path: PATH_NAME.OUR_BLOG, element: <Blog /> },
  { path: PATH_NAME.BLOG_SINGLE_VIEW, element: <BlogDetail /> },
  { path: PATH_NAME.CHECKOUT, element: <Checkout /> },
  { path: PATH_NAME.SHOPPING_CART, element: <ShoppingCart /> },
  { path: PATH_NAME.HELP_VIEW_1, element: <HelpView1 /> },
  { path: PATH_NAME.HELP_VIEW_2, element: <HelpView2 /> },
  { path: PATH_NAME.COMPANY_DETAILS, element: <Company /> },
  { path: PATH_NAME.CAREER, element: <Career /> },
  { path: PATH_NAME.APPLY_JOB, element: <ApplyJob /> },
  { path: PATH_NAME.CONTACT_US, element: <ContactUs /> },
  { path: PATH_NAME.TERMS_OF_USE, element: <TermsOfUse /> },
  { path: PATH_NAME.CERTIFICATION_FILL_FORM, element: <CertificationFillForm /> },
  { path: PATH_NAME.CERTIFICATION_TEST, element: <CertificationTest /> },
  { path: PATH_NAME.COMING_SOON, element: <CommingSoon /> },
  { path: PATH_NAME.TEST_RESULT, element: <TestResult /> },
];

const privateRoutes = [
  { path: PATH_NAME.HOME, element: <Home /> },
  { path: PATH_NAME.EXPLORE, element: <Explore /> },
  { path: PATH_NAME.LIVE_OUTPUT, element: <LiveOutput /> },
  { path: PATH_NAME.ADD_LIVE_STREAM, element: <AddLiveStream /> },
  { path: PATH_NAME.ALL_LIVE_STREAM, element: <AllLiveStream /> },
  { path: PATH_NAME.ALL_INSTRUCTOR_LIST, element: <AllInstructor1 /> },
  { path: PATH_NAME.HELP, element: <Help /> },
  { path: PATH_NAME.REPORT_HISTORY, element: <ReportHistory /> },
  { path: PATH_NAME.SEND_FEEDBACK, element: <SendFeedback /> },
  { path: PATH_NAME.OTHER_INSTRUCTOR_VIEW, element: <OtherInstructorView /> },
  { path: PATH_NAME.MY_INSTRUCTOR_PROFILE, element: <MyInstructorProfile /> },
  { path: PATH_NAME.SAVE_COURSES, element: <SaveCourses /> },
  { path: PATH_NAME.SETTING, element: <Setting /> },
  { path: PATH_NAME.MY_COURSE, element: <MyCourse /> },
  { path: PATH_NAME.MESSAGE, element: <Message /> },
  { path: PATH_NAME.COURSES_DETAIL_VIEW, element: <CoursesDetailView /> },
  { path: PATH_NAME.PREVIEWS, element: <Previews /> }
];

const routes = { publicRoutes, privateRoutes };

export default routes;