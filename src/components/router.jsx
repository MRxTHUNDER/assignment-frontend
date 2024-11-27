import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Sidebar from "./Sidebar";
import DashboardLayout from "./Layout";
import EmailForm from "./SpoofEmailer";
import SpoofChecker from "./SpoofChecker";
import Sendouts from "./Sendouts";
import EmailLogs from "./EmailLogs";
import ApiManagement from "./ApiManagement";
import UserSettings from "./UserSettings";
import UserManagement from "./UserManagement";

const router = createBrowserRouter([
  {
    path: "/Signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
    //   { path: "get-started", element: <GetStarted /> },
    // { path: "progress", element: <Progress /> },
    // { path: "feedback", element: <Feedback /> },
      {
        path: "sidebar",
        element: <Sidebar />,
      },
      {
        path: "emailform", 
        element: <EmailForm />, 
      },
      {
        path: "spoofchecker", 
        element: <SpoofChecker/>, 
      },
      {
        path: "sendouts", 
        element: <Sendouts/>, 
      },
      {
        path: "emaillogs", 
        element: <EmailLogs/>, 
      },
      {
        path: "apimanagement", 
        element: <ApiManagement/>, 
      },
      {
        path: "usersettings", 
        element: <UserSettings/>, 
      },
      {
        path: "usermanagement", 
        element: <UserManagement/>, 
      },
      // Add other dashboard children here
    ],
  },
]);

export default router;
