import React from 'react';
import  ReactDOM  from 'react-dom';

const ALERT_STYLES ={
    position: 'fixed',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex:1000
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top:0,
    left:0,
    right:0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}
function Alert ({ open, children, onClose, message }) {
    if (!open) return null
    return ReactDOM.createPortal (
        <>
        <div style={OVERLAY_STYLES} />
        <div style={ALERT_STYLES}>
            Message: {message.info} <br />       
            Status: {children} <br />  
            <button onClick={onClose}>close</button> <br />
        </div>
        
        </>,
        document.getElementById('portal')
    )
}
export default Alert