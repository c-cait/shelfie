import React, {useState} from 'react';
import './Product.css';


function Product(props) {
    const [editMode, setEditMode] = useState(false);
    const [updatedProduct, setUpdatedProduct] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState('');

    const handleEditMode = (mode) => {
        setEditMode(mode)
    }

    const handleProductInput = (val) => {
        setUpdatedProduct(val)
    }

    const handlePriceInput = (val) => {
        setUpdatedPrice(val)
    }

    const handleSave = () => {
        props.updateProduct(updatedProduct, updatedPrice, props.item.id)
        setUpdatedPrice('')
        setUpdatedProduct('')
        setEditMode(false)
    }

    const handleDelete = () => {
        props.deleteProduct(props.item.id)
    }

    return(
        <div className='product-container'>
            <img src={props.item.img} className='product-img'></img>

            <div className='product-info'>
                {editMode ? 
                <input className='product-edit-input first' placeholder='product name'
                onChange={(e)=>{handleProductInput(e.target.value)}}
                ></input> 
                : <div className='product-name'>{props.item.name}</div> }
                {editMode ? 
                <input className='product-edit-input' placeholder='price'
                onChange={(e)=>{handlePriceInput(e.target.value)}}
                ></input> 
                : <div className='product-price'>${props.item.price}</div> }
                
                <div className='product-btns'>
                {editMode ? 
                <button onClick={()=>{handleEditMode(false)}}className='control-btn'>Back</button> 
                : 
                <button onClick={()=>{handleEditMode(true)}}className='control-btn'>Edit</button>}
                
                {editMode ? 
                <button className='control-btn' onClick={() => {handleSave()}}>Save</button> 
                : 
                <button className='control-btn' onClick={() => {handleDelete()}}>Delete</button>}
                </div>

            </div>

 

        </div>
    )
}

export default Product;