import React from "react";
import { Container } from "react-bootstrap";
import TopNavbar from "../components/topNavBar/TopNavbar";

const MainView : React.FC = () => {
    return (
       <Container fluid={true}  className="p-0" >
           <TopNavbar/>
       </Container>
    );
}

export default MainView;