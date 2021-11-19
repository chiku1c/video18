import React, { Component } from 'react'
import ParantComp from './ParantComp'

 class PureComponantent extends Component {
    render() {
        return (
            <div>
                pure componante
                <ParantComp/>
            </div>
        )
    }
}
export default PureComponantent