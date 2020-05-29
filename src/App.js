import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';
import axios from 'axios';


class App extends Component {
  constructor(){
    super();
    this.state = {
      inventory: []
    }

  }

  componentDidMount(){
    axios.get('http://localhost:4000/api/products')
    .then(res => {
      this.setState({inventory: res.data})
      console.log('updated state')
    })
    .catch(err => console.log(err))
  }

  createProduct(name, price, img){
    const body = {name, price, img}
    axios.post('http://localhost:4000/api/products', body)
    .then(res => {
      this.setState({products: res.data})
    })
    .catch(err => console.log(err))
  }
  
    render() {
        return (
          <div className="App">
            < Header />
            < Dashboard inventory={this.state.inventory} />
            < Form createProduct={this.createProduct}/>
          </div>
        );
    }

}

export default App;
