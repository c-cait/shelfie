import React, {Component} from 'react';
import './Form.css'


class Form extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }

    handleName(val) {
        this.setState({
            name: val
        })
    }

    handlePrice(val) {
        this.setState({
            price: val
        })
    }

    handleImgUrl(val) {
        this.setState({
            imgurl: val
        })
    }

    handleCancel(){
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }


    render() {
        return(
            <div className='product-form-section'>
                <form className='product-form'>

                    <input className='form-input' type='text' placeholder='product name'
                    onChange={(e) => this.handleName(e.target.value)}></input>

                    <input className='form-input' type='number' placeholder='price'
                    onChange={(e) => this.handlePrice(e.target.value)}></input>

                    <input className='form-input' type='text' placeholder='product image'
                    onChange={(e) => this.handleImgUrl(e.target.value)}></input>
                    
                    <div className='form-button-section'>
                        <button onClick={() => {this.handleCancel()}} className='cancel btn'>Cancel</button>

                        <button className='add btn'
                            onClick={() => {this.props.createProduct(this.state.name, this.state.price, this.state.imgurl)}}
                        >Add Inventory</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;