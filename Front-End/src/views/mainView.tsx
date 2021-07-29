import React from "react";
import {Container} from "react-bootstrap";
import MainNavBar from "../components/mainNavBar/MainNavBar";
import SubNavBar from "../components/subNavBar/SubNavBar";
import TopNavbar from "../components/topNavBar/TopNavbar";

const MainView: React.FC = () => {
    return (
        <Container fluid={true} className="p-0">
            <TopNavbar/>
            <MainNavBar/>
            <SubNavBar/>
        </Container>
    );
}

export default MainView;