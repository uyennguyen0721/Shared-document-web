
import React from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";

function ListDocument() {
    return (
        <>
            <div className="content fix-2" id="admin">
                <Row className = "fix-2">
                    <Col md="12">
                        <Card className="card-plain">
                            <CardHeader>
                                <CardTitle tag="h4">Danh sách các bài đăng chờ duyệt</CardTitle>
                                <p className="category">Duyệt bài cẩn thận vì một thế giới không tăng ca</p>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Tài khoản đăng tải</th>
                                            <th>Tựa đề bài đăng</th>
                                            <th>Ngày update</th>
                                            <th className="text-center">Kiểu tài liệu</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                        <tr>
                                            <td>taylorswift9898</td>
                                            <td>1000 cách để sống tốt trên sao Hỏa</td>
                                            <td>28/01/2022</td>
                                            <td className="text-center">Đoán xem</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default ListDocument;
