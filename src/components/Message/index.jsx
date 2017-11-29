import React, { Component } from 'react'
import moment from 'moment'
import styles from './message.css'

class Message extends Component {
    constructor (props) {
        super(props)
    }

    render () {

        let dateFormat = moment(this.props.date).fromNow()

        return (
            <div className={styles.root}>
                <div className={styles.user}>
                    <figure>
                        <img className={styles.avatar} src={this.props.picture} />
                    </figure>
                    <span className={styles.displayName}>{this.props.displayName}</span>
                    <span className={styles.username}>{this.props.username}</span>
                    <span className={styles.date}>{dateFormat}</span>
                </div>
                
                <h3>{this.props.text}</h3>

                <div className={styles.buttons}>
                    <span className={styles.icon}><span className="fa fa-reply"></span></span>
                    <span className={styles.icon}><span className="fa fa-retweet"></span></span>
                    <span className={styles.icon}><span className="fa fa-star"></span></span>
                </div>

            </div>
        )
    }
}

export default Message