import React from 'react';
import { Col, Nav, Row, Image } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { ICartItem } from '../../../Types';
// import paginationFactory from 'react-bootstrap-table2-paginator';
import {products} from "../Checkout-item-data";
import { columns } from './Checkout-table-column-data';
import paginationFactory from 'react-bootstrap-table2-paginator';
import DeliveryCharge from '../deliveryCharge/DiliveryCharge';
import EstTotalPrice from '../estToalPrice/EstTotal';
import AlreadyHaveACoount from '../alreadyHaveacoount/AlreadyHaveAccount';


const customTotal = (from:number, to:number, size:number) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing { from } to { to } of { size } Results
    </span>
  );


const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    alwaysShowAllBtns: true,
    withFirstAndLast: false, 
    hideSizePerPage: false, 
    hidePageListOnlyOnePage: true, 
    firstPageText: 'First',
    prePageText: 'Back',
    nextPageText: 'Next',
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: 'All', value: products.length
    }]
  };
  
const CheckoutPageTable: React.FC = () => {
    return (
        <React.Fragment>
            <Col xs={12} className="prooduct-table-container ">
            
            <Row>
                <Col>
                    <div className="table-title"> Shopping Cart</div>
                    <BootstrapTable keyField='id' 
                        bootstrap4 
                        data={ products } 
                        columns={ columns } 
                        hover
                        condensed
                        bordered={ false }
                        headerClasses="table-head-text"
                        defaultSorted={ [{ dataField: 'name', order: 'desc'}] }
                        pagination={paginationFactory(options)}
                        />
                    <DeliveryCharge/>
                    <EstTotalPrice/>   
                </Col>
            </Row>
            
        </Col>
        
        </React.Fragment>
    )
}
export default CheckoutPageTable;