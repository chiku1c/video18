import React ,{useContext}from 'react'

function ComponetE() {
    const user = useContext(userValue)
    const chanle = useContext(chanleValue)
    return (
        <div>
            {user}-{chanle}
        </div>
    )
}

export default ComponetE
