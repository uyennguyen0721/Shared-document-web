import React from "react";
import { BrowserRouter, Route, Switch, Redirect, useHistory } from "react-router-dom";
import AdminLayout from "./layouts/Admin/Admin.js";
import "./assets/scss/black-dashboard-react.scss";
import "./assets/demo/demo.css";
import "./assets/css/nucleo-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { useSelector } from "react-redux";
export default function Admin() {
        const admin = useSelector(state => state.admin.admin)
        const history = useHistory()
        if (admin !== null && admin !== undefined) {
            return (
                <ThemeContextWrapper>
                    <BackgroundColorWrapper>
                        <BrowserRouter>
                            <Switch>
                                <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
                            </Switch>
                        </BrowserRouter>
                    </BackgroundColorWrapper>
                </ThemeContextWrapper>
            )
        }
        else {
            history.push("/dangnhap")
            return null;
        }
    }