import React, { Component } from 'react'

class RatingComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="rating-div">
                <select value={this.props.rating} onChange={(e) => this.props.onChange(parseInt(e.target.value))}>
                    {[...Array(this.props.rangeMax).keys()].map(val => { return <option key={val + 1}>{val + 1}</option> })}
                </select>
            </div>
        )
    }
}

export default RatingComponent