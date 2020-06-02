import React, {Component} from 'react';
import './Form.css'


class Form extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            price: '',
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
            price: '',
            imgurl: ''
        })
    }


    render() {
        return(
            <div className='product-form-section'>
                <div className='product-form'>

                    <input className='form-input' type='text' value={this.state.name} placeholder='Product Name'
                    onChange={(e) => this.handleName(e.target.value)}></input>

                    <input className='form-input' type='number' value={this.state.price} placeholder='Price'
                    onChange={(e) => this.handlePrice(e.target.value)}></input>

                    <input className='form-input' type='text' value={this.state.imgurl} placeholder='Image URL'
                    onChange={(e) => this.handleImgUrl(e.target.value)}></input>
                    
                    <div className='form-button-section'>
                        <button onClick={() => {this.handleCancel()}} className='cancel btn'>Cancel</button>

                        <button className='add btn'
                            onClick={() => {this.props.createProduct(this.state.name, this.state.price, this.state.imgurl); this.handleCancel()}}
                        >Add Inventory</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;