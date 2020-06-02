import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import axios from 'axios';
// import {HashRouter} from 'react-router-dom';
// import routes from './router';


class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }

    this.updateProduct = this.updateProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.createProduct = this.createProduct.bind(this)

  }

  componentDidMount(){
    this.getProducts()
  }

  getProducts(){
    axios.get('http://localhost:4000/api/products')
    .then(res => {
      this.setState({inventory: res.data})
    })
    .catch(err => console.log(err))
  }   

  createProduct(name, price, img){
    const body = {name, price, img}
    console.log('made it to post')
    axios.post('http://localhost:4000/api/products', body)
    .then(res => {
      this.getProducts()
    })
    .catch(err => console.log(err))
  }

  updateProduct(name, price, id){
    const body = {name, price}
    axios.put(`http://localhost:4000/api/products/${id}`, body)
    .then(res => {
      this.getProducts()
    })
    .catch(err => console.log(err))
  }

  deleteProduct(id){
    axios.delete(`http://localhost:4000/api/products/${id}`)
    .then(res => {
      this.getProducts()
    })
    .catch(err => console.log(err))
  }
  
    render() {
        return (
          // <HashRouter>
            <div className="App">
              < Header />
              {/* {routes} */}
              < Dashboard inventory={this.state.inventory} updateProduct={this.updateProduct} deleteProduct={this.deleteProduct} />
              < Form createProduct={this.createProduct}/>
            </div>
          // </HashRouter>
          
        );
    }

}

export default App;
