import React, { Component } from 'react'

 class shop extends Component {
    constructor(props)
    {
        super(props)
        
    }
    
    render() {
        //this.props.match.params
        return (
            <div>
                <h1>{this.props.match.params}</h1>
                
            </div>
        )
    }
}

export default shop;
