import React, { Component } from 'react'
import './HeaderComponent.css'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }
}

export default HeaderComponent