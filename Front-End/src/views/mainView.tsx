import React from "react";
import { Container } from "react-bootstrap";
import MainNavBar from "../components/mainNavBar/MainNavBar";
import TopNavbar from "../components/topNavBar/TopNavbar";

const MainView : React.FC = () => {
    return (
       <Container fluid={true}  className="p-0" >
           <TopNavbar/>
           <MainNavBar/>
       </Container>
    );
}

export default MainView;