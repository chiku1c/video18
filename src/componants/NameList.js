import React from 'react'

function NameList() {
    const name=["sikandar","chauhan","yogita","chauhan"]
    const nameList= name.map((name=><h2>{name}</h2>))
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
