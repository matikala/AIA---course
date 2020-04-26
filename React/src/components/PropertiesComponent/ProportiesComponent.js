import React, { Component } from 'react'
import './ProportiesComponent.css'

class ProportiesComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="proporties-div">
                <input className="filter-input" type="text" onChange={e => this.props.onFilterChange(e.target.value)} placeholder="Search item..." />
                <button className="sort-button" onClick={e => {
                    e.preventDefault()
                    this.props.onSortChange()
                }}>{this.props.sortText}</button>
            </div>
        )
    }
}

export default ProportiesComponent