import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class ScheduleS3 extends Component{
    render(){
        return(    
            <Container fluid className="schedule-s3 d-flex minh-50vh bg-light align-items-center py-5">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={5} className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start text-shadow">
                            <h2 className="dispaly-6 fw-bold text-white">
                                Lorem ipsum dolor
                            </h2>
                            <p className="text-white">
                                Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            </p>
                            <Table hover striped>
                                <thead>
                                    <tr className="text-white">
                                        <th className="w-25">Name</th>
                                        <th className="w-50">Description</th>
                                        <th className="w-25">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                            <div className="w-100 text-center py-3">
                                <Link to="#" className="btn btn-sm btn-outline-light rounded-pill">
                                    Lorem ipsum <span className="fw-bold mx-1">dolor</span>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ScheduleS3;