import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Table from "../../node_modules/react-bootstrap/Table";

class ScheduleS2 extends Component{
    render(){
        return(    
            <Container fluid className="d-flex minh-50vh bg-secondary align-items-center py-5">
                <Row className="mx-0 w-100">
                    <Col xs={12} md={{span:6,offset:6}} lg={{span:5,offset:7}} 
                        className="minh-50vh d-flex align-items-center">
                        <div className="w-100 text-center text-md-start">
                            <h2 className="dispaly-6 fw-bold text-white text-shadow">
                                Lorem ipsum
                            </h2>
                            <p className="text-white">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
                                ipsam voluptatem quia voluptas
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

export default ScheduleS2;