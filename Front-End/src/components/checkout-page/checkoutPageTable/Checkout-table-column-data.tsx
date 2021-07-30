import { Image } from 'react-bootstrap';
import { Trash } from 'react-feather';
import { useDispatch } from 'react-redux';
import garlic from '../../../assets/images/product-items/garlic.png';
import { deleteOrderItem } from '../../../store/actions/CheckoutActions';

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

const headerTextFormatter = (cell:string, row:any) =>  {
  return (
    <span className="table-head-text" >{cell}</span>
  );
}

const action = (cell:number, row:any) =>  {
  return (
    <div className="action-icon" onClick={()=>{
      alert();
      HandelOnOderItemDelete(cell)
    }}><Trash size={18} color={"#808080"} /></div>
  );  
}

const HandelOnOderItemDelete = (index: number) => {
  
  const dispatch = useDispatch(); 
  dispatch(deleteOrderItem(index))
  
  return;
}

export const columns = [{
  dataField: '_id',
  text: '#',
  formatter: textFormatter,
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