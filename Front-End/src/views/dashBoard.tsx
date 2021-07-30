import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import AddProducts from "../components/admin/addProducts/AddProducts";
import SideNavBar from "../components/admin/sideNavBar/SIdeNavBar";
import UpdateProducts from "../components/admin/updateProducts/UpdateProducts";
import ViewProducts from "../components/admin/viewProducts/ViewProducts";

const Dashboard : React.FC = () => {
    return (
        <Router>
            <Container fluid={true} className="admin-layout">
                <Row className="admin-container">
                    <SideNavBar/>
                    <Col xs={12} sm={12} md={12} lg={9} xl={9} className="content-container">
                        <Switch>
                            <Route exact path="/admin/add-product">
                                <AddProducts/>
                            </Route>
                            <Route path="/admin/view-product">
                                <ViewProducts/>
                            </Route>
                            <Route path="/admin/update-product">
                                <UpdateProducts/>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
}

export default Dashboard;