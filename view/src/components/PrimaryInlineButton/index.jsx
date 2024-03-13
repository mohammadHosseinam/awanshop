import React from 'react'

function PrimaryInlineButton({className , click , text}) {
  return (
    <button style={{ border:"1px solid rgba(75, 225, 163, 0.88)" , color:"rgba(75, 225, 163, 0.88)"}} className={`py-2 px-6 shadow-sm rounded-md font-vazirmatn text-sm ${className}`} onClick={click}>{text}</button>
  )
}

export default PrimaryInlineButton