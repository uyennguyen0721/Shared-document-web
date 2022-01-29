import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { useAlert } from 'react-alert'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  NavbarToggler,
  ModalHeader,
} from "reactstrap";
import "../assets/scss/black-dashboard-react.scss";
import "../assets/demo/demo.css";
import "../assets/css/nucleo-icons.css";
import 'font-awesome/css/font-awesome.min.css';
import { useLocation } from 'react-router-dom'
import avatar from "../../assets/images/avatar.jpg"
function AdminNavbar(props) {
    const alert = useAlert()
    const history = useHistory()
    const [collapseOpen, setcollapseOpen] = React.useState(false)
    const [modalSearch, setmodalSearch] = React.useState(false)
    const [color, setcolor] = React.useState("navbar-transparent")
    const dispatch = useDispatch()
    const toggleCollapse = () => {
        if (collapseOpen) {
            setcolor("navbar-transparent")
        } else {
            setcolor("bg-white")
        }
        setcollapseOpen(!collapseOpen);
    }
    const toggleModalSearch = () => {
        setmodalSearch(!modalSearch);
    }

    const logout = (event) => {
        event.preventDefault()
        alert.show('Đăng xuất thành công', { type: 'success' })
        history.push('/')
    }
    const avatar = "/"
    let location = useLocation();
    if (location.pathname.match(/admin/) == null) {
        return null;
    }

    else {
        return (
            <>
                <Navbar className={classNames("navbar-absolute", color)} expand="lg">
                    <Container fluid>
                        <div className="navbar-wrapper">
                            <div className={classNames("navbar-toggle d-inline", { toggled: props.sidebarOpened, })}
                            >
                            </div>
                            
                        </div>
                        <NavbarToggler onClick={toggleCollapse}>
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                            <span className="navbar-toggler-bar navbar-kebab" />
                        </NavbarToggler>
                        <Collapse navbar isOpen={collapseOpen}>
                            <Nav className="ml-auto" navbar>
                                <InputGroup className="search-bar">
                                    <Button color="link" onClick={toggleModalSearch}>
                                        <i className="tim-icons icon-zoom-split" />
                                        <span className="d-lg-none d-md-block">Tìm kiếm</span>
                                    </Button>
                                </InputGroup>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle
                                        caret
                                        color="default"
                                        data-toggle="dropdown"
                                        nav
                                    >
                                        <div className="notification d-none d-lg-block d-xl-block" />
                                        <i className="tim-icons icon-sound-wave" />
                                        <p className="d-lg-none">Thông báo</p>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item">
                                                Đã có 1256 bình luận bị báo cáo, đến xem ngay
                    </DropdownItem>
                                        </NavLink>
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item">
                                                Đã có 198 bài mới đăng tải chờ xét duyệt
                    </DropdownItem>
                                        </NavLink>
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item">
                                                Đã có 34 tài khoản bị báo cáo vi phạm
                    </DropdownItem>
                                        </NavLink>
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item">
                                                Bạn chưa cập nhập đầy đủ thông tin tài khoản
                    </DropdownItem>
                                        </NavLink>
                                        
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav>
                                    <DropdownToggle caret color="default" nav onClick={(e) => e.preventDefault()}>
                                        <div className="photo">
                                            <img src={avatar} />
                                        </div>
                                        <b className="caret d-none d-lg-block d-xl-block" />
                                        <p className="d-lg-none">Đăng xuất</p>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-navbar" right tag="ul">
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item" href="/admin/user-profile">Tài khoản</DropdownItem>
                                        </NavLink>
                                        <DropdownItem divider tag="li" />
                                        <NavLink tag="li">
                                            <DropdownItem className="nav-item" onClick={logout}>Đăng xuất</DropdownItem>
                                        </NavLink>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <li className="separator d-lg-none" />
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Modal
                    modalClassName="modal-search"
                    isOpen={modalSearch}
                    toggle={toggleModalSearch}
                >
                    <ModalHeader>
                        <Input placeholder="SEARCH" type="text" />
                        <button
                            aria-label="Close"
                            className="close"
                            onClick={toggleModalSearch}
                        >
                            <i className="tim-icons icon-simple-remove" />
                        </button>
                    </ModalHeader>
                </Modal>
            </>
        );
    }
}

export default AdminNavbar;
