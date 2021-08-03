import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

class HomeData extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path}>
                <Button variant="outline-light" className="rounded-pill">
                    {this.props.backLink.name}
                </Button>
            </Link>;
        }
        return(        
            <Container fluid className={"p-0 d-flex h-100 "+this.props.classExt}>
                <Row className="w-100 pt-5 mx-0">
                    <Col sm={6} className="d-none d-sm-block">
                    </Col>
                    <Col xs={12} sm={6} className="text-center text-white d-flex align-items-center">
                        <div className="p-5 mx-auto text-shadow text-center text-md-end">
                            <h1 className="display-5 font-logo">
                                Professional <span className="fw-bold">Healthcare</span>
                            </h1>
                            <p className="initialism">
                                See our schedule to check the nearest term for your appointment.
                            </p>
                            {linking}
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default HomeData;