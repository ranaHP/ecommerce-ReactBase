import React from "react";
import { Container } from "react-bootstrap";
import MainNavBar from "../components/mainNavBar/MainNavBar";
import SubNavBar from "../components/subNavBar/SubNavBar";
import TopNavbar from "../components/topNavBar/TopNavbar";
import Footer from "../components/footer/Footer";
import HomePage from "./homePage";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import CheckoutPage from "../components/checkout-page/CheckoutPage";

const MainView : React.FC = () => {
    return (
       <Container fluid={true}  className="p-0" >
           <Router>
                <TopNavbar/>
                <MainNavBar/>
                <SubNavBar/>
                <Switch>
                    <Route path="/checkout">
                        <CheckoutPage />
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>   
                <Footer/>
           </Router>
       </Container>
    );
}

export default MainView;