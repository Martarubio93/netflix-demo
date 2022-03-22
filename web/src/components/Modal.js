import React from 'react'
import '../styles/layout/Modal.scss'


export default function Modal({open, children, onClose}){
if (!open) {
    return null
}else 
  return (
      <>
      <div className="overlystyle">
      <div className="modalContainer">
        <button onClick={onClose}>Close</button>
        {children}
        </div>

      </div>
    
      </>
        
    )
}