import React, { Component } from 'react'
import PureComponantent from './PureComponantent'
import Regulercompo from './Regulercompo'

export class ParantComp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"sikandar"
        }
    }
    render() {
        return (
            <div>
                <Regulercompo name={this.state.name}/>
                <PureComponantent name={this.state.name} />
            </div>
        )
    }
}

export default ParantComp
