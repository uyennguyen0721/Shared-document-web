
import React, { useEffect } from "react";
import { Button, Modal, Space, Typography, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { checkDocument } from '../../redux/action/DocumentAction';

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
function ListDocument() {

    const dispatch = useDispatch();
    const [documents, setDocuments] = React.useState([]);
    useEffect(() => {

        let getDocumnets = async() => {
            try {
                let res = await documentApi.getAllDocument()
                setDocuments(res.data)
            }
            catch(err) {
                console.error(err);
            }
        }

        getDocumnets();
    }, []);
    const handleDocument = () => {
        let results = documents.filter(d => d.isCheck === false);
        return results
    }

    console.log(handleDocument());

    const modalComfimAccept = (id) => {
        return Modal.confirm({
            content: "Phê duyệt tài liệu ?",
            okText: "Đồng ý",
            cancelText: "Từ chối",
            onOk() {
                dispatch(checkDocument(id));
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
                        <Button type='link' onClick={() => modalComfimAccept(record.documentId)}><Text type='danger' strong>Duyệt tài liệu</Text> </Button>
                    </Space>
                )
            }
        },
    ];

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
                                <Table columns={columns} dataSource={handleDocument()} bordered={true} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>

        </>
    )

}

export default ListDocument;

