import React, { Component } from 'react'
import RatingComponent from './../RatingComponent/RatingComponent'
import './ListItemComponent.css'

class ListItemComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li className="list-item">
                <div className="image-div">
                    <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="item-data">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.author}</h3>
                    <h3>Rating: {this.props.rating}</h3>
                </div>
                <div className="item-buttons">
                    <label htmlFor="rating-component">Rating</label>
                    <div className="rating-component">
                        <RatingComponent rating={this.props.rating} rangeMax={5} onChange={e => this.props.onRatingChange(this.props.id, e)} />
                    </div>
                    <button className="item-delete" onClick={() => this.props.onDeleteItem(this.props.id)}>
                        Delete
                        </button>
                </div>

            </li>
        )
    }
}

export default ListItemComponent