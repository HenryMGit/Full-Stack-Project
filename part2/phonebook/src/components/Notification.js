import React from 'react'
import '../index.css'

const Notification = ({message, msgType}) => {
    if(message === null){
        return null
    }
    return(
        <div className={`${msgType === 'success'? 'success' : 'fail'}`}>
            {message}
        </div>
    )
}

export default Notification