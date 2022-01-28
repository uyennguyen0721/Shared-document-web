import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useAlert } from 'react-alert'
import { Button, Card, CardHeader, CardBody, CardFooter, FormGroup, Form, Input, Row, Col, CardText } from "reactstrap";
import API, { endpoints } from "../../../API";
import { useState } from "react";
import cookies from 'react-cookies'
import { loginUser } from '../../../LoginUser';
export default function UserProfile() {
    const admin = useSelector(state => {return state.admin.admin })
    const history = useHistory()
    const alert = useAlert()
    const [address, setAddress] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [idCard, setIdCard] = useState()
    const [year, setYear] = useState()
    const [about, setAbout] = useState()
    let avatar = admin.avatar.slice(0, admin.avatar.indexOf("/avatar")) + "/static" + admin.avatar.slice(admin.avatar.indexOf("/avatar"), admin.avatar.lenght)
    const newAvatar = useRef()
    const dispatch = useDispatch()
    const update = (event) => {
        event.preventDefault()
        let update_user = async () => {
            const formData = new FormData()
            if (firstName)
                formData.append("first_name", firstName)
            if (lastName)
                formData.append("last_name", lastName)
            if (phone)
                formData.append("phone", phone)
            if (address)
                formData.append("address", address)
            if (idCard)
                formData.append("id_card", idCard)
            if (year)
                formData.append("date_of_birth", year)
            if (about)
                formData.append("about", about)
            try {
                let res = await API.patch(endpoints['User-info'](admin.id), formData, {
                    headers: {
                        'Authorization': `Bearer ${cookies.load("access_token")}`,
                        "Content-Type": "multipart/form-data"
                    }
                })
                let user = await API.get(endpoints['current-user'], {
                    headers: {
                        'Authorization': `Bearer ${cookies.load("access_token")}`
                    }
                })
            } catch (err) {
                console.log(err)
            }
        }
        let status = '';
        if (!/[^a-zA-Z]/.test(phone) || !/[^a-zA-Z]/.test(year)) {
            status = 'CONTAINS_WORD'
            alert.show('Năm sinh và số điện thoại chỉ bao gồm số', { type: 'error' })
            return;
        }
        if (year > new Date().getFullYear() || year < (new Date().getFullYear() - 150)) {
            status = 'WRONG_YEAR'
            alert.show('Mời nhập đúng năm sinh', { type: 'error' })
            return;
        }
        else {
            update_user()
            alert.show('Sửa thông tin thành công', { type: 'success' })
            cookies.save("admin", admin.data)
            history.push("/admin")
        }
    }
    return (

        <>
            <div className="content">
                <Row>
                    <Col md="8">
                        <Form onSubmit={update}>
                            <Card class="card-border">
                                <CardHeader>
                                    <h4 className="title">Chỉnh sửa thông tin</h4>
                                </CardHeader>
                                <CardBody class="">

                                    <Row>
                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label>Phân loại</label>
                                                <Input defaultValue="Khách hàng" disabled type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="3">
                                            <FormGroup>
                                                <label>Username</label>
                                                <Input defaultValue={admin.username} placeholder="Tên đăng nhập" type="text" disabled
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Địa chỉ email</label>
                                                <Input defaultValue={admin.email} type="email" disabled />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Họ</label>
                                                <Input
                                                    defaultValue={admin.last_name}
                                                    value={lastName}
                                                    onChange={(event) => setLastName(event.target.value)}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="6">
                                            <FormGroup>
                                                <label> Tên </label>
                                                <Input
                                                    defaultValue={admin.first_name}
                                                    value={firstName}
                                                    onChange={(event) => setFirstName(event.target.value)}
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input class="control"
                                                    defaultValue={admin.address}
                                                    value={address}
                                                    onChange={(event) => setAddress(event.target.value)}
                                                    placeholder="Địa chỉ"
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Số điện thoại</label>

                                                <Input defaultValue={admin.phone} type="text" value={phone}
                                                    onChange={(event) => setPhone(event.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>CMND</label>
                                                <Input defaultValue={admin.id_card} type="text" value={idCard}
                                                    onChange={(event) => setIdCard(event.target.value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Năm sinh</label>
                                                <Input type="" defaulValue={admin.date_of_birth} value={year} defaultValue={admin.year}
                                                    onChange={(event) => setYear(event.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Tự giới thiệu</label>
                                                <Input
                                                    cols="80"
                                                    rows="4"
                                                    type="textarea"
                                                    defaultValue={admin.about}
                                                    value={about}
                                                    onChange={(event) => setAbout(event.target.value)}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>


                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill" color="primary" type="submit">Thay đổi</Button>
                                </CardFooter>
                            </Card>
                        </Form>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={avatar}
                                        />

                                    </a>
                                    <h5 className="title">{admin.last_name} {admin.first_name}</h5>
                                    <p className="description">Khách hàng/ Costumer</p>
                                </div>
                                <div className="card-description">
                                    Chào mừng đến với nhà hàng hạnh phúc. Với nhiều năm kinh nghiệm trong ngành, với phương châm "Hạnh phúc của các bạn là niềm vui của chúng tôi", nhà hàng đã tổ chức thành công hơn 10,000 lễ cưới mang những phong cách riêng, độc đáo chỉ thuộc về chủ nhân của nó. Rất hân hạnh được phục vụ quý khách.,
                </div>
                            </CardBody>
                            <CardFooter>
                           
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}