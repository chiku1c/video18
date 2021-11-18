import React, { Component } from 'react'

export default class ChuldLife extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"sikandar"
        }
        
        console.log("Lifecycle")
    }
    static getDerivedStateFrom(props,state){
    console.log('lifeb')
    return null
    }
    componentDidMount(){
        console.log("life")
    }
    render() {
        console.log("lifed")
        return (
            <div>
              lifemethod   child
            </div>
        )
        }
}
