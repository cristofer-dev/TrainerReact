import React from 'react'
import styles from './input-text.css'


function InputText(props) {
  return (
    <form className={styles.form} onSubmit={props.onSendText}>
      <textarea className={styles.text} name='text'>
        {(props.userNameToReply) ? `@${props.userNameToReply}` : ''}
      </textarea>
      <div className={styles.buttons}>
        <button className={styles.close} onClick={props.onCloseText}>Cerrar</button>
        <button className={styles.send} type='submit'>Enviar</button>
      </div>

    </form>
  )
}

export default InputText
