import React, { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import { IOrderItem } from '../../../Types';
import {products} from "../Checkout-item-data";
import paginationFactory from 'react-bootstrap-table2-paginator';
import DeliveryCharge from '../deliveryCharge/DiliveryCharge';
import EstTotalPrice from '../estToalPrice/EstTotal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers/rootReducers';
import { Trash } from 'react-feather';
import { deleteOrderItem } from '../../../store/actions/CheckoutActions';


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
    const [itemNumber, setItemNumber] = useState<number>(0);
    const checkoutList:IOrderItem [] = useSelector((state: RootState) => state.checkoutReducer.checkoutList);  
    const dispatch = useDispatch(); 
    console.log(checkoutList)
    const priceFormatter = (cell:string, row:any) =>  {
        return (
        <Image src={cell} style={ { width: '60px', height:"60px" } } className="checkout-image"></Image>
        );
    }

    const textFormatter = (cell:string, row:any) =>  {
    return (
        <span className="table-text" >{cell}</span>
    );
    }

    const indexFormatter = (cell:string, row:any) =>  {
        setItemNumber(itemNumber+1);
        return (
            <span className="table-text" >{itemNumber}</span>
        );
    }

    const headerTextFormatter = (cell:string, row:any) =>  {
    return (
        <span className="table-head-text" >{cell}</span>
    );
    }

    const action = (cell:number, row:any) =>  {
        return (
            <div className="action-icon" onClick={()=>{
                HandelOnOderItemDelete(cell)
            }}><Trash size={18} color={"#808080"} /></div>
        );  
    }

    const HandelOnOderItemDelete = (index: number) => {
        dispatch(deleteOrderItem(index));
    }

    const columns = [{
    dataField: '_id',
    text: '#',
    formatter: indexFormatter,
    },
    {
    dataField: 'image',
    text: 'Image',
    formatter: priceFormatter
    }, 
    {
    dataField: 'name',
    text: 'Name',
    formatter: textFormatter,
    sort: true
    },
    {
    dataField: 'qty',
    text: 'Qty',
    formatter: textFormatter
    },
    {
    dataField: 'offer_price',
    text: 'Unit Price',
    formatter: textFormatter
    },
    {
    dataField: 'amount',
    text: 'Amount',
    formatter: textFormatter
    },
    {
    dataField: '_id',
    text: 'action',
    formatter: action
    }];
    return (
        <React.Fragment>
            <Col xs={12} className="prooduct-table-container ">  
            <Row>
                <Col>
                    <div className="table-title"> Shopping Cart</div>
                    <BootstrapTable keyField='id' 
                        bootstrap4 
                        data={ checkoutList } 
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