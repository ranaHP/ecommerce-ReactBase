import { Image } from 'react-bootstrap';
import { Trash } from 'react-feather';
import garlic from '../../../assets/images/product-items/garlic.png';

const priceFormatter = (cell:string, row:any) =>  {
    return (
      <Image src={garlic} style={ { width: '60px' } } className="checkout-image"></Image>
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

const action = (cell:string, row:any) =>  {
  return (
    <div className="action-icon"><Trash size={18} color={"#808080"} /></div>
  );
}

export const columns = [{
  dataField: 'item_no',
  text: '#',
  formatter: textFormatter,
},
{
  dataField: 'item',
  text: 'Item',
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
  dataField: 'unite_price',
  text: 'Unit Price',
  formatter: textFormatter
},
{
  dataField: 'amount',
  text: 'Amount',
  formatter: textFormatter
},
{
  dataField: 'action',
  text: '',
  formatter: action
}];