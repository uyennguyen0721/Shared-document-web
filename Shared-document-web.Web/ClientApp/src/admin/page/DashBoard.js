
import React from "react";
import classNames from "classnames";
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

// core components
import {
    chartExample1,
    chartExample2,
    chartExample3,
    chartExample4,
} from "../variables/charts.js";

function DashBoard() {
    const [bigChartData, setbigChartData] = React.useState("data1");
    const setBgChartData = (name) => {
        setbigChartData(name);
    };
    return (
        <>
            <div className="content" id="admin">
                <Row className ="fix-2">
                    <Col xs="12">
                        <Card className="card-chart">
                            <CardHeader>
                                <Row>
                                    <Col className="text-left" sm="6">
                                        <h5 className="card-category">Theo năm</h5>
                                        <CardTitle tag="h2">Tổng lượt truy cập</CardTitle>
                                    </Col>
                                    <Col sm="6">
                                        <ButtonGroup
                                            className="btn-group-toggle float-right"
                                            data-toggle="buttons"
                                        >
                                            <Button
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data1",
                                                })}
                                                color="info"
                                                id="0"
                                                size="sm"
                                                onClick={() => setBgChartData("data1")}
                                            >
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Năm 2021
                        </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-single-02" />
                                                </span>
                                            </Button>
                                            <Button
                                                color="info"
                                                id="1"
                                                size="sm"
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data2",
                                                })}
                                                onClick={() => setBgChartData("data2")}
                                            >
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Năm 2020
                        </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-gift-2" />
                                                </span>
                                            </Button>
                                            <Button
                                                color="info"
                                                id="2"
                                                size="sm"
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data3",
                                                })}
                                                onClick={() => setBgChartData("data3")}
                                            >
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Năm 2019
                        </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-tap-02" />
                                                </span>
                                            </Button>
                                            <Button
                                                color="info"
                                                id="2"
                                                size="sm"
                                                tag="label"
                                                className={classNames("btn-simple", {
                                                    active: bigChartData === "data4",
                                                })}
                                                onClick={() => setBgChartData("data4")}
                                            >
                                                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                                                    Năm 2018
                        </span>
                                                <span className="d-block d-sm-none">
                                                    <i className="tim-icons icon-tap-02" />
                                                </span>
                                            </Button>
                                        </ButtonGroup>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample1[bigChartData]}
                                        options={chartExample1.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="fix-2">
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Doanh thu thực đơn</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-bell-55 text-info" /> Thực đơn
                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample2.data}
                                        options={chartExample2.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Doanh thu thuê sảnh cưới</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-delivery-fast text-primary" />{" "}
                  Sảnh cưới
                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Bar
                                        data={chartExample3.data}
                                        options={chartExample3.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="card-chart">
                            <CardHeader>
                                <h5 className="card-category">Doanh thu thuê dịch vụ</h5>
                                <CardTitle tag="h3">
                                    <i className="tim-icons icon-send text-success" /> Dịch vụ
                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <div className="chart-area">
                                    <Line
                                        data={chartExample4.data}
                                        options={chartExample4.options}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default DashBoard;
