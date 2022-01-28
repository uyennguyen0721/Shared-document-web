
import Dashboard from "./views/Dashboard.js";
import Icons from "./views/Icons.js";
import Map from "./views/Map.js";
import Notifications from "./views/Notifications.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import UserProfile from "./views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Biểu đồ",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Thông báo",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Thông tin tài khoản",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin",
    },
    {
        path: "/icons",
        name: "Tạo tài khoản Admin",
        icon: "tim-icons icon-laptop",
        component: Icons,
        layout: "/admin",
    },
    {
        path: "/map",
        name: "Bản đồ",
        icon: "tim-icons icon-pin",
        component: Map,
        layout: "/admin",
    },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: Typography,
    layout: "/admin",
  },
];
export default routes;
