import React from 'react';


export function MyHeader() {
    const headerStyle =
        { border: 'solid black 2px', backgroundColor: 'white', color: 'black', padding: '35px', margin: '5px', fontFamily: 'cursive' }
        
    return (<div style={headerStyle}>
        <a href="http://puppiesdubai.ae/">welcome to my best puppies website ever!</a>
    </div>)
}