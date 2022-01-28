import { useLocation } from 'react-router-dom'
import React from 'react'
import './AdminTaskBar.css'
export default function AdminTaskBar() {
    let location = useLocation();
    if (location.pathname.match(/admin/) == null) {
        return null;
    }
        
    else {
    return (
        <div className="sidebar" data="blue">
            <div className="sidebar-wrapper ps">
                <div className="logo">
                    <a className="simple-text logo-mini" href="">
                        <div className="logo-img">
                            <img src="/static/media/logo.29970856.png" alt="react-logo"/>
                        </div>
                    </a>
                    <a className="simple-text logo-normal" href="">HẠNH PHÚC</a>
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
                            <i className="tim-icons icon-bell-55"></i>
                            <p>Thông báo</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/user-profile">
                            <i className="tim-icons icon-single-02"></i>
                            <p>Thông tin tài khoản</p>
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
                            <i className="tim-icons icon-pin"></i>
                            <p>Bản đồ</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/tables">
                            <i className="tim-icons icon-puzzle-10"></i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="/admin/typography">
                            <i className="tim-icons icon-align-center">
                            </i><p>Typography</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
    }
    }