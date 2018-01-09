import React from 'react'
import Message from '../Message'
import styles from './message-list.css'

function MessageList(props) {
  return (
    <div className={styles.root}>
      {props.messages.map( msg => {
        return (
          <Message
            key={msg.id}
            text={msg.text}
            picture={msg.picture}
            displayName = { msg.displayName}
            username = { msg.username }
            date = { msg.date }
            numRetweets={msg.retweets}
            numFavorite={msg.favorites}
            onRetweet={ () => props.onRetweet(msg.id) }
            onFavorite={ () => props.onFavorite(msg.id) }
            onReplyTweet={ () => props.onReplyTweet(msg.id,msg.username) }
          />
          )
      } ).reverse()}
    </div>
  )
}

export default MessageList
