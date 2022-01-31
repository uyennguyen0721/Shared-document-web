
import React, { useEffect } from "react";
import { Button, Modal, Space, Typography, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDocument, getListDocument } from '../../redux/action/DocumentAction';

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";
import documentApi from "../../API/DocumentAPI";

const { Text } = Typography;
function ReportDocument() {
    
    const dispatch = useDispatch();
    const [data, setData] = React.useState(false);
    useEffect(() => {
        documentApi.getAllDocument().then((rs) => {
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
                dispatch(deleteDocument(id));
                window.location.reload();
            },
            onCancel() {
            },
        })
    }
    const columns = [
        {
            title: 'Tài khoản đăng tải',
            dataIndex: 'userId',
            width: "20px"
        },
        {
            title: 'Tên tài liệu',
            dataIndex: 'documentName',
            align: "left",
            
        },
        {
            title: 'Ngày update',
            dataIndex: 'uploadDate',
            align: "left",
            
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            align: "left",
           
        },
        {
            title: 'Kiểu tài liệu',
            dataIndex: 'documentType',
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
                        <Button type='link' onClick={() => modalComfimDelete(record.documentId)}><Text type='danger' strong>Delete</Text> </Button>
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
                                <CardTitle tag="h4">Danh sách các bài đăng </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table columns={columns} dataSource={data} bordered={true}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            
        </>
    )
    
}

export default ReportDocument;

