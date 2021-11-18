import React, { Component } from 'react'


class UserGreeting extends Component {
    constructor(props){
        super(props)

        this.state={
            isLoggedIn:false
        }
    }
    render() {
        return this.state.isLoggedIn && <div>Welocme Sikandar</div> //<componants/>

    }




    //    return this.state.isLoggedIn ?(
    //     <div>Welcome Sikandar</div>):(<div>Welcome Chauhan</div>)

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welocme Sikandar</div>
        // }else{
        //     message=<div>Welocme Chauhan</div>
        // }
        // return<div>{message}</div>
    






        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             welcom sikandar
        //         </div>
        //     )
        //     }else{
        //         return <div>welcom Guset</div>
        //     }

            
        
        // return (
        //     <div>
        //     <h1>Welcome Sikandar</h1> 
        //     <div>Welcome Guest</div>
        //     </div>
        // )
    
}

export default UserGreeting
