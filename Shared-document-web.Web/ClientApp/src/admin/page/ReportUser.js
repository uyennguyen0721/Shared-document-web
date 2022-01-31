
import React, { useEffect } from "react";
import { Button, Modal, Space, Typography, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getListUser } from '../../redux/action/UserAction';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";
import userApi from "../../API/UserAPI";

const { Text } = Typography;
function ReportUser() {

    const dispatch = useDispatch();
    const [data, setData] = React.useState(false);
    useEffect(() => {
        userApi.postAllUser().then((rs) => {
            setData(rs.data);
        }).catch((err) => {
            console.log(err)
        })
    }, []);
    const modalComfimDelete = (id) => {
        return Modal.confirm({
            content: "Confirm delete ?",
            okText: "Confim",
            onOk() {
                dispatch(deleteUser(id));
                window.location.reload();
            },
            onCancel() {
            },
        })
    }
    const columns = [
        {
            title: 'Tên',
            dataIndex: 'name',
            width: "20px"
        },
        {
            title: 'Username',
            dataIndex: 'userName',
            align: "left",

        },
        {
            title: 'Ngày join',
            dataIndex: 'joinDate',
            align: "left",

        },
        {
            title: 'Email',
            dataIndex: 'email',
            align: "left",

        },
        {
            title: 'Action',
            key: 'Action',
            align: "center",
            width: "100px",
            render: (text, record) => {
                return (
                    <Space size="middle">
                        <Button type='link' onClick={() => modalComfimDelete(record.userId)}><Text type='danger' strong>Delete</Text> </Button>
                    </Space>
                )
            }
        },
    ];
    //const data = [
    //    {
    //        username: '1ngoclan@1',
    //        documentname: 'John Brown John Brown John Brown John Brown ',
    //        uploaddate: 32,
    //        documenttype: 'New York No. 1 Lake Park',
    //    },]

    return (
        <>
            <div className="content fix-2" id="admin">
                <Row className="fix-2">
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h4">Danh sách các tài khoản </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table columns={columns} dataSource={data} bordered={true} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )

}

export default ReportUser;

