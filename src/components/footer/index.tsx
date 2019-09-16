import React from 'react'

export function MyFooter() {
    const footerStyle = {
        border: '2px solid black', backgroundColor:'white', color: "lightBlue", padding: "10px",margin:'5px',fontFamily: 'cursive'
    }
    return (
        <div style={footerStyle}>All Rights Reserved(c)</div>
    )
}