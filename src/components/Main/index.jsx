import React, { Component } from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor () {
        super()
        this.state = {
            OpenText : false,
            messages: [
                { 
                    id: uuid.v4(),
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/17.jpg',
                    displayName : 'May Lao',
                    username : 'maylao',
                    date : Date.now()
                },
                {
                    id: uuid.v4(),
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/72.jpg',
                    displayName: 'Lia Tomson',
                    username: 'Liatom',
                    date: Date.now()
                }
            ]
        }
        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
    }

    handleSendText (event) {
        event.preventDefault()
        let newMessage = {
            id : uuid.v4(),
            userName: this.props.user.email.split('@')[0],
            picture: this.props.user.photoURL,
            displayName: this.props.user.displayName,
            date: Date.now(),
            text: event.target.text.value
        }

        this.setState({
            messages : this.state.messages.concat([newMessage]),
            OpenText : false
        })
    }
    handleCloseText (event) {
        event.preventDefault()
        this.setState({ OpenText: false })
    }
    handleOpenText (event){
        event.preventDefault()
        this.setState({ OpenText : true })
    }

    renderOpenText (){

        if ( this.state.OpenText ) {
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                />
            )
        }
    }

    render() {
        return (
            <div>
                <ProfileBar 
                    picture={this.props.user.photoURL}
                    username={this.props.user.email.split('@')[0]}
                    onOpenText={this.handleOpenText}
                />
                {this.renderOpenText()}
                <MessageList messages={this.state.messages} />
            </div>
        )
    }
}

export default Main