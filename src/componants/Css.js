import React from 'react'
import './Style.css'

function Css(props) {
    let className=props.primary ? 'primary':''

    return ( 
        <div>
            <h1 className={className}>Style Css </h1>
        </div>
    )
}

export default Css
