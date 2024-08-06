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
import Checkout from "../pages/Checkout/Checkout";
import ShoppingCart from "../pages/ShopingCart/ShoppingCart";
import HelpView1 from "../pages/HelpView1/HelpView1";
import HelpView2 from "../pages/HelpView2/HelpView2";
import Company from "../pages/Company/Company";
import Career from "../pages/Career/Career";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import ContactUs from "../pages/ContactUs/ContactUs";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import CertificationFillForm from "../pages/CertificationFillForm/CertificationFillForm";
import MyCourse from "../pages/MyCourse/MyCourse";
import CertificationTest from "../pages/CertificationTest/CertificationTest";
import CommingSoon from "../pages/CommingSoon/CommingSoon";
import { PATH_NAME } from "../constant/pathname";
import TestResult from "../pages/TestResult/TestResult";
import Message from "../pages/Message/Message";
import CoursesDetailView from "../pages/CoursesDetailView/CoursesDetailView";
import Previews from "../pages/Previews/Previews";
import InsDashboard from "../pages/InsDashboard/InsDashboard";
import Sitemap from "../pages/Sitemap/Sitemap";
import Earning from "../pages/Earning/Earning";
import Vertification from "../pages/Vertification/Vertification";
import PurchaseCourse from "../pages/PurchaseCourse/PurchaseCourse";
import Notification from "../pages/Notification/Notification";
import DowloadCourse from "../pages/PurchaseCourse/DowloadCourse/DowloadCourse";
import CertificationCenter from "../pages/CertificationCenter/CertificationCenter";
import MyCertifications from "../pages/MyCertifications/MyCertifications";
import Payout from "../pages/Payout/Payout";
import Analytics from "../pages/Analytics/Analytics";
import CreateNewCourse from "../pages/CreateNewCourse/CreateNewCourse";
import StdDashboard from "../pages/StdDashboard/StdDashboard";
import Credit from "../pages/Credit/Credit";
import StatementIS from "../pages/Statements/StatementIS/StatementIS";
import StatementST from "../pages/Statements/StatementST/StatementST";
import NotificationStudent from "../pages/Notification/NotificationStudent";
import NewestCoursesDetailView from "../pages/CoursesDetailView/NewestCoursesDetailView";
import OtherPopularInstructorView from "../pages/OtherInstructorView/OtherPopularInstructorView";

export const publicRoutes = [
  { path: PATH_NAME.LOGIN, element: <Login /> },
  { path: PATH_NAME.FORGOT_PASSWORD, element: <ForgotPassword /> },
  { path: PATH_NAME.SIGN_UP, element: <SignUp /> },
  { path: PATH_NAME.SIGN_UP_STEP, element: <StepSignUp /> },
  { path: PATH_NAME.THANKS, element: <Thanks /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.ERROR_404, element: <Error404 /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.INVOICE, element: <Invoice /> , roles: ['instructor', 'student']},
  { path: PATH_NAME.PRESS, element: <PressReleasePage /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.SEARCH_RESULT, element: <SearchResult /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.PAID_MEMBERSHIP, element: <PaidMembership /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.ABOUT_US, element: <About /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.OUR_BLOG, element: <Blog /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.BLOG_SINGLE_VIEW, element: <BlogDetail /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CHECKOUT, element: <Checkout /> , roles: ['instructor', 'student']},
  { path: PATH_NAME.SHOPPING_CART, element: <ShoppingCart /> , roles: ['instructor', 'student']},
  { path: PATH_NAME.HELP_VIEW_1, element: <HelpView1 /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.HELP_VIEW_2, element: <HelpView2 /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.COMPANY_DETAILS, element: <Company /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CAREER, element: <Career /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.APPLY_JOB, element: <ApplyJob /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CONTACT_US, element: <ContactUs /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.TERMS_OF_USE, element: <TermsOfUse /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CERTIFICATION_FILL_FORM, element: <CertificationFillForm /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CERTIFICATION_TEST, element: <CertificationTest /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.COMING_SOON, element: <CommingSoon /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.DOWLOADCOURSE, element: <DowloadCourse /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.CERTIFICATION_CENTER, element: <CertificationCenter /> , roles: ['user', 'instructor', 'student']},
  { path: PATH_NAME.TEST_RESULT, element: <TestResult /> , roles: ['user', 'instructor', 'student']},
];

export const privateRoutes = [
  { path: PATH_NAME.HOME, element: <Home />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.EXPLORE, element: <Explore />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.LIVE_OUTPUT, element: <LiveOutput />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.ADD_LIVE_STREAM, element: <AddLiveStream />, roles: ['instructor'] },
  { path: PATH_NAME.ALL_LIVE_STREAM, element: <AllLiveStream />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.ALL_INSTRUCTOR_LIST, element: <AllInstructor1 />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.HELP, element: <Help />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.REPORT_HISTORY, element: <ReportHistory />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.SEND_FEEDBACK, element: <SendFeedback />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.OTHER_INSTRUCTOR_VIEW, element: <OtherInstructorView />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.OTHER_POPULAR_INSTRUCTOR_VIEW, element: <OtherPopularInstructorView />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.MY_INSTRUCTOR_PROFILE, element: <MyInstructorProfile />, roles: ['instructor'] },
  { path: PATH_NAME.SAVE_COURSES, element: <SaveCourses />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.SETTING, element: <Setting />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.MY_COURSE, element: <MyCourse />, roles: ['instructor'] },
  { path: PATH_NAME.INS_DASHBOARD, element: <InsDashboard />, roles: ['instructor'] },
  { path: PATH_NAME.SITEMAP, element: <Sitemap />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.EARNING, element: <Earning />, roles: ['instructor'] },
  { path: PATH_NAME.PURCHASE_COURSE, element: <PurchaseCourse />, roles: ['student'] },
  { path: PATH_NAME.NOTIFICATON, element: <Notification />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.VERTIFICATION, element: <Vertification />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.PAYOUT, element: <Payout />, roles: ['instructor'] },
  { path: PATH_NAME.MESSAGE, element: <Message />, roles: ['instructor', 'student'] },
  { path: PATH_NAME.COURSES_DETAIL_VIEW, element: <CoursesDetailView />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.NEWEST_COURSES_DETAIL_VIEW, element: <NewestCoursesDetailView />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.PREVIEWS, element: <Previews />, roles: ['instructor', 'student'] },
  { path: PATH_NAME.ANALYTICS, element: <Analytics />, roles: ['instructor'] },
  { path: PATH_NAME.CREATE_NEW_COURSE, element: <CreateNewCourse />, roles: ['instructor'] },
  { path: PATH_NAME.STD_DASHBOARD, element: <StdDashboard />, roles: ['student'] },
  { path: PATH_NAME.MYCERTIFICATIONS, element: <MyCertifications />, roles: ['instructor', 'student'] },
  { path: PATH_NAME.CREDIT, element: <Credit />, roles: ['student'] },
  { path: PATH_NAME.STATEMENTIS, element: <StatementIS />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.STATEMENTST, element: <StatementST />, roles: ['user', 'instructor', 'student'] },
  { path: PATH_NAME.NOTIFICATIONSTUDENT, element: <NotificationStudent />, roles: ['student'] },
];
