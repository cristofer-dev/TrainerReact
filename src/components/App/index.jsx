import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

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
            </div>
        )
    }
}

export default App 