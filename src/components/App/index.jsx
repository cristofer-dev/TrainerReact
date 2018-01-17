import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

class App extends Component {
	constructor (){
		super()

		this.state = {
			user: {
				photoURL: 'https://randomuser.me/api/portraits/women/17.jpg',
				email: 'lia@tomson.com',
				onOpenText: false
			}
		}
	}

  render() {
    return (
      <div>
        <Header/>

        <Main user={this.state.user}/>

        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>

          </ul>
        </nav>

        <Route path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <Route path="/products" component={Products}/>
      </div>
      )
  }
}

export default App 
