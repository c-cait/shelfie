import React from 'react';
import './Dashboard.css';
import Product from '../Product/Product';

function Dashboard(props) {
    console.log(props.inventory)
    return(
        <div className='dashboard-container'>
            {props.inventory.map(item => (
                <Product key={item.id} item={item} updateProduct={props.updateProduct} deleteProduct={props.deleteProduct}/>
            ))}
        </div>

    )
}


export default Dashboard;