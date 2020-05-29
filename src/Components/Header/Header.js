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

        </div>
    )
}

export default Header;