import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import JournalsS1 from "../components/journals-s1";
import JournalsS2 from "../components/journals-s2";
import JournalsS3 from "../components/journals-s3";
import JournalsS4 from "../components/journals-s4";

class Journals extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <JournalsS1/>
                <JournalsS2/>
                <JournalsS3/>
                <JournalsS4/>
            </Container>    
        );
    }
}

export default Journals;