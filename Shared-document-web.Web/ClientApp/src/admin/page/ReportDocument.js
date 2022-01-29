
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
                <Row className="fix-2">
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <CardTitle tag="h4">Danh sách các bài đăng bị báo cáo vi phạm</CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Table className="tablesorter" responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Tài khoản đăng tải</th>
                                            <th>Tựa đề bài đăng</th>
                                            <th>Ngày update</th>
                                            <th className="text-center">Số lượt xem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
                                        </tr>
                                        <tr>
                                            <td>thuyloan9898</td>
                                            <td>Làm thế nào để di cư từ sao Hỏa sang sao Thổ</td>
                                            <td>25/12/2021</td>
                                            <td className="text-center">8.5555.999.5596</td>
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

