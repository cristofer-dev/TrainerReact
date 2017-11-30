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
    }

    handleOpenText (event){
        event.preventDefault()
        this.setState({ OpenText : true })
    }

    renderOpenText (){
        if ( this.state.OpenText ) {
            return <InputText />
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