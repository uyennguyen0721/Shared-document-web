import AdminHomePage from "./page/AdminHomePage.js";
import DashBoard from "./page/DashBoard.js";
import DocumentReview from "./page/DocumentReview.js";
import TableList from "./page/TableList.js";

var routes = [
    {
        path: "/AdminHomePage",
        name: "Biểu đồ",
        icon: "tim-icons icon-chart-pie-36",
        component: AdminHomePage,
        layout: "/admin",
    },
    {
        path: "/DocumentReview",
        name: "Thông báo",
        icon: "tim-icons icon-bell-55",
        component: DocumentReview,
        layout: "/admin",
    },
    {
        path: "/DashBoard",
        name: "Bản đồ",
        icon: "tim-icons icon-pin",
        component: DashBoard,
        layout: "/admin",
    },
    {
        path: "/tables",
        name: "Table List",
        icon: "tim-icons icon-puzzle-10",
        component: TableList,
        layout: "/admin",
    },
];
export default routes;
