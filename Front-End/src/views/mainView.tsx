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
import Login from "./loginPage";
import Register from "./registerPage";
import Dashboard from "./dashBoard";

const MainView : React.FC = () => {
    return (
       <Container fluid={true}  className="p-0" >
            <Router>
                <Switch> 
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <TopNavbar/>
                        <MainNavBar/>
                        <SubNavBar/>
                        <Switch>
                            <Route path="/checkout">
                                <CheckoutPage />
                            </Route>
                            <Route path="/login">
                                <Login/>
                            </Route>
                            <Route path="/register">
                                <Register/>
                            </Route>  
                            <Route path="/">
                                <HomePage />
                            </Route>
                        </Switch>
                        <Footer/>
                    </Route>
                </Switch>   
            </Router>
       </Container>
    );
}

export default MainView;