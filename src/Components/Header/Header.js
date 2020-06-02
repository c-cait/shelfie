import React from 'react';
import './Header.css';
import {AiFillDownCircle} from 'react-icons/ai';


function Header() {
    return(
        <div className='header-section'>
            
            <div className='header-title'>
                <AiFillDownCircle className='header-icon'/>
                Shelfie
            </div>

            <div>
                <button className='header-btn'>Dashboard</button>
                <button className='header-btn'>Add Inventory</button>
            </div>

        </div>
    )
}

export default Header;