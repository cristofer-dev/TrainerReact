import React, { Component } from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: Object.assign({}, this.props.user, {retweets:[]},{favorites:[]}),
            OpenText : false,
            userNameToReply: '',
            messages: [
                { 
                    id: uuid.v4(),
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/17.jpg',
                    displayName : 'May Lao',
                    username : 'maylao',
                    date : Date.now(),
                    retweets: 0,
                    favorites: 0

                },
                {
                    id: uuid.v4(),
                    text: 'Mensaje 01',
                    picture: 'https://randomuser.me/api/portraits/women/72.jpg',
                    displayName: 'Lia Tomson',
                    username: 'Liatom',
                    date: Date.now(),
                    retweets: 0,
                    favorites: 0
                }
            ]
        }
        this.handleSendText = this.handleSendText.bind(this)
        this.handleCloseText = this.handleCloseText.bind(this)
        this.handleOpenText = this.handleOpenText.bind(this)
        this.handleRetweet = this.handleRetweet.bind(this)
        this.handleFavorite = this.handleFavorite.bind(this)
        this.handleReplyTweet = this.handleReplyTweet.bind(this)
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


    handleRetweet (msgId) {        
        let alreadyRetweeted = this.state.user.retweets.filter( rt => rt === msgId)

        if(alreadyRetweeted.length === 0){            
            let messages = this.state.messages.map(msg => {
                if(msg.id === msgId){
                    msg.retweets++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.retweets.push(msgId)

            this.setState({
                messages: messages,
                user: user
            })
        }

    }

    handleFavorite (msgId) {
        let alreadyFavorited = this.state.user.favorites.filter( fav => fav === msgId)
    
        if(alreadyFavorited.length === 0){
            let messages = this.state.messages.map(msg =>{
                if(msg.id === msgId){
                    msg.favorites++
                }
                return msg
            })

            let user = Object.assign({}, this.state.user)
            user.favorites.push(msgId)

            this.setState({
                messages: messages,
                user: user
            })
        }
    }

    handleReplyTweet (msgId, userNameToReply){
        this.setState({
            OpenText: true,
            userNameToReply
        })
    }

    renderOpenText (){

        if ( this.state.OpenText ) {
            return (
                <InputText 
                    onSendText={this.handleSendText}
                    onCloseText={this.handleCloseText}
                    userNameToReply={this.state.userNameToReply}
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
                <MessageList 
                    messages={this.state.messages} 
                    onRetweet={this.handleRetweet}
                    onFavorite={this.handleFavorite}
                    onReplyTweet={this.handleReplyTweet}
                />
            </div>
        )
    }
}

export default Main