
import Index from "views/Index.jsx";
import Profile from "views/examples/Profile.jsx";
import Documentation from "views/examples/Documentation.jsx";
import Maps from "views/examples/Maps.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
 import Aboutus from "views/examples/Aboutus.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
 
 
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  
  {
    path: "/aboutme",
    name: "About Us",
    icon: "ni ni-single-02 text-green",
    component: Aboutus,
    layout: "/about"
  },
  {
    path: "/documentation",
    name: "Documentation",
    icon: "ni ni-planet text-blue",
    component: Documentation,
    layout: "/admin"
  }
];
export default routes;
