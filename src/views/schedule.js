import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ScheduleS1 from "../components/schedule-s1";
import ScheduleS2 from "../components/schedule-s2";
import ScheduleS3 from "../components/schedule-s3";

class Schedule extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ScheduleS1/>
                <ScheduleS2/>
                <ScheduleS3/>
            </Container>    
        );
    }
}

export default Schedule;