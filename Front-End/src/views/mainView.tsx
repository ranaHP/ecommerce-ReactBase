import React from "react";
import { Container } from "react-bootstrap";
import HeroBanner from "../components/heroBanner/HeroBanner";
import MainNavBar from "../components/mainNavBar/MainNavBar";
import SubNavBar from "../components/subNavBar/SubNavBar";
import TopNavbar from "../components/topNavBar/TopNavbar";

const MainView : React.FC = () => {
    return (
       <Container fluid={true}  className="p-0" >
           <TopNavbar/>
           <MainNavBar/>
           <SubNavBar/>
           <HeroBanner/>
       </Container>
    );
}

export default MainView;