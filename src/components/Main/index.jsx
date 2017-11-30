import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            messages: [
                { 
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/17.jpg',
                    displayName : 'May Lao',
                    username : 'maylao',
                    date : Date.now()
                },
                {
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/72.jpg',
                    displayName: 'Lia Tomson',
                    username: 'Liatom',
                    date: Date.now()
                }
            ]
        }
    }
    render() {
        return (
            <MessageList messages={this.state.messages} />
        )
    }
}

export default Main