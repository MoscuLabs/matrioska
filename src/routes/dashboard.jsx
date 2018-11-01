// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import Book from "@material-ui/icons/Book";
import AttachMoney from "@material-ui/icons/AttachMoney";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import HowToVote from "@material-ui/icons/HowToVote";
import SentimentDissatisfied from "@material-ui/icons/SentimentDissatisfied";
import Unarchive from "@material-ui/icons/Unarchive";
import Done from "@material-ui/icons/Done";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
import Votar from "views/Votar/Votar.jsx";


const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    //navbarName: "Dashboard",
    navbarName: "",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Reglamento",
    //navbarName: "Profile",
    navbarName: "",
    icon: Book,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Ver Propuestas",
    navbarName: "",
    //navbarName: "Table List",
    icon: "content_paste",
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Rendición de Cuentas",
    //navbarName: "Typography",
    navbarName: "",
    icon: AttachMoney,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Representantes",
    //navbarName: "Icons",
    navbarName: "",
    icon: SupervisorAccount,
    component: Icons
  },/*,
  {
    path: "/maps",
    sidebarName: "Crear Iniciativa",
    navbarName: "",
    //navbarName: "Map",
    icon: HowToVote,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Buzón de Quejas",
    navbarName: "",
    //navbarName: "Notifications",
    icon: SentimentDissatisfied,
    component: NotificationsPage
  },*//*
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },*//*
  {
    path: "/Votar",
    sidebarName: "Votar",
    navbarName: "",
    //navbarName: "Votar",
    icon: Done,
    component: Votar
  },*/
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
  
];

export default dashboardRoutes;
