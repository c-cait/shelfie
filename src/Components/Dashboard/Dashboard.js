import React from 'react';
import './Dashboard.css';
import Product from '../Product/Product';

function Dashboard(props) {
    return(
        <div className='dashboard-container'>
            {props.inventory.map(item => (
                <Product key={item.id} item={item}/>
            ))}
        </div>

    )
}


export default Dashboard;