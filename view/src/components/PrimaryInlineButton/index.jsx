import React from 'react'

function PrimaryInlineButton({ className="py-2 px-6 text-sm border border-primary text-primary", click, text }) {
  return (
    <button
      className={`shadow-sm rounded-md font-vazirmatn ${className}`}
      onClick={click}
    >
      {text}
    </button>
  )
}

export default PrimaryInlineButton;