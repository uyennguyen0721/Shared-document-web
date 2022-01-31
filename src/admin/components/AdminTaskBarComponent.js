import { useLocation } from 'react-router-dom'
import React from 'react'
import "../assets/scss/black-dashboard-react.scss";
import "../assets/demo/demo.css";
import "../assets/css/nucleo-icons.css";
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
                    
                    <a className="simple-text logo-normal" href="">QUẢN LÝ</a>
                </div>
                <ul className="nav">
                    <li>
                        <a className="nav-link active" href="/admin/dashboard" aria-current="page">
                            <i className="tim-icons icon-chart-pie-36"></i>
                            <p>Biểu đồ</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/waiting-document">
                            <i className="tim-icons icon-book-bookmark"></i>
                            <p>Duyệt bài đăng</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/report-document">
                            <i className="tim-icons icon-basket-simple"></i>
                            <p>Xóa tài liệu report</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/icons">
                            <i className="tim-icons icon-laptop"></i>
                            <p>Tạo tài khoản Admin</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="admin/profile">
                            <i className="tim-icons icon-badge"></i>
                            <p>Thông tin tài khoản</p>
                        </a>
                    </li>
                 
                    <li>
                        <a className="nav-link" href="/admin/report-user">
                            <i className="tim-icons icon-basket-simple"></i>
                            <p>Xóa tài khoản vi phạm</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    }