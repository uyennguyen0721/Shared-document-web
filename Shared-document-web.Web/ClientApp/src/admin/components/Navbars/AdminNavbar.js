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
import cookies from "react-cookies"
import { logoutAdmin } from "../../../../LoginUser";

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
    const admin = useSelector(state => { return state.admin.admin })
    console.log(admin)
    const logout = (event) => {
        event.preventDefault()
        cookies.remove("access_token")
        cookies.remove("admin")
        dispatch(logoutAdmin())
        alert.show('Đăng xuất thành công', { type: 'success' })
        history.push('/')
    }
    const avatar = admin.avatar.slice(0, admin.avatar.indexOf("/avatar")) + "/static" + admin.avatar.slice(admin.avatar.indexOf("/avatar"), admin.avatar.lenght)
  return (
      <>
          <Navbar className={classNames("navbar-absolute", color)} expand="lg">
              <Container fluid>
                  <div className="navbar-wrapper">
                      <div className={classNames("navbar-toggle d-inline", {toggled: props.sidebarOpened,})}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              {props.brandText}
            </NavbarBrand>
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
                      Mike John responded to your email
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      You have 5 more tasks
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Your friend Michael is in town
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another notification
                    </DropdownItem>
                  </NavLink>
                  <NavLink tag="li">
                    <DropdownItem className="nav-item">
                      Another one
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

export default AdminNavbar;
