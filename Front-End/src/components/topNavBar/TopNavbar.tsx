import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StoreType } from "../../store/reducers/LoginReducer";
import { RootState } from "../../store/reducers/rootReducers";
import Dashboard from "../../views/dashBoard";
import AccountBTN from "./accountBTN/AccountBTN";
import ContactBTN from "./contactBTN/ContactBNT";
import DashBoardBTN from "./dashboardBTN/DashboardBTN";
import DiliveryBTN from "./diliveryBTN/DiliveryBTN";
import LoginBNT from "./loginBTN/LoginBTN";
import LogoutBTN from "./logoutBTN/LogoutBTN";
import RegisterBTN from "./registreBTN/RegisterBTN";

const TopNavbar : React.FC = () => {
    const loginDetails:StoreType = useSelector((state: RootState) => state.loginReducer);  
    return (

            <Navbar  expand="lg"  className=" navbar-container px-4" >
            <Navbar.Toggle aria-controls="responsive-navbar-nav "  />
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav>
                <ContactBTN/>
                <DiliveryBTN/>
                <AccountBTN/>
                <DashBoardBTN/>
                {!loginDetails.loginDetails[0] &&
                    <>
                        <RegisterBTN/>
                        <LoginBNT/>
                    </>
                }
                {loginDetails.loginDetails[0] &&
                    <LogoutBTN/>
                }
            </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}
export default TopNavbar;