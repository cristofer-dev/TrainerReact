import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';

import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'


const Profile = () => (
  <div>
    <h2>Profile</h2>
  </div>
)

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
          <Route
            exact path="/"
            render={() => (
              <Main user={this.state.user}/>
            )}
          />
          <Route path="/profile" component={Profile}/>
          <Route path="/products" component={Products}/>
      </div>
      )
  }
}

export default App 
