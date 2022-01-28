import { useLocation } from 'react-router-dom'
import React from 'react'
import './AdminTaskBar.css'
import "../../assets/scss/black-dashboard-react.scss";
import "../../assets/demo/demo.css";
import "../../assets/css/nucleo-icons.css";
import 'font-awesome/css/font-awesome.min.css';
export default function AdminTaskBar() {
    let location = useLocation();
    if (location.pathname.match(/admin/) == null) {
        return null;
    }
        
    else {
    return (
        <div className="sidebar" data="pink">
            <div className="sidebar-wrapper ps">
                <div className="logo">
                    <a className="simple-text logo-mini" href="">
                        <div className="logo-img">
                            <img src="/static/media/logo.29970856.png" alt="react-logo"/>
                        </div>
                    </a>
                    <a className="simple-text logo-normal" href="">ADMIN</a>
                </div>
                <ul className="nav">
                    <li>
                        <a className="nav-link active" href="/admin/dashboard" aria-current="page">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Biểu đồ</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/notifications">
                            <i className="tim-icons icon-book-bookmark"></i>
                            <p>Duyệt bài đăng</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/user-profile">
                            <i className="tim-icons icon-basket-simple"></i>
                            <p>Xóa tài khoản vi phạm</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/icons">
                            <i className="tim-icons icon-laptop"></i>
                            <p>Tạo tài khoản Admin</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/map">
                            <i className="tim-icons icon-badge"></i>
                            <p>Thông tin tài khoản</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/tables">
                            <i className="tim-icons icon-lock-circle"></i>
                            <p>Thêm tài khoản Admin</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    }