import React from 'react'
import Persion from './Persion'

function NameList() {
    const persions=[{
        id:1,
        name:"Sikandar",
        age:"30",
        Skill:"php"
    },
    {
        id:2,
        name:"Sikandar",
        age:"30",
        Skill:"react"
    },
    {
        id:3,
        name:"Sikandar",
        age:"30",
        Skill:"java "
    }
]
    const persionList= persions.map((persions=><Persion  persions={persions}></Persion>))
    return <div>{persionList}</div>
}

export default NameList
