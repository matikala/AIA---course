import React, { Component } from 'react'
import RatingComponent from './../RatingComponent/RatingComponent'
import './AddItemComponent.css'

class AddItemComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            image: '',
            rating: 5
        }
    }

    onAddClick = () => {
        if (this.state.title !== '' && this.state.author !== '' && this.state.image !== '') {
            this.props.onAddItem(this.state.title, this.state.author, this.state.image, this.state.rating)
        } else {
            alert("Title, author and image can't be empty!")
        }
        this.setState({
            title: '',
            author: '',
            image: '',
            rating: 5
        })

    }


    render() {
        return (
            <div className="add-item-div">
                <div className="text-box-div">
                    <label htmlFor="title-input">Title</label>
                    <input className="title-input" type="text" value={this.state.title} onChange={e => this.setState({ title: e.target.value })} placeholder="Type title..." />
                    <label htmlFor="author-input">Author</label>
                    <input className="author-input" type="text" value={this.state.author} onChange={e => this.setState({ author: e.target.value })} placeholder="Type author..." />
                    <label htmlFor="image-input">Image</label>
                    <input className="author-input" type="text" value={this.state.image} onChange={e => this.setState({ image: e.target.value })} placeholder="Type image link..." />
                </div>
                <div className="buttons-div">
                    <div className="rating-div">
                        <label htmlFor="rating-component">Rating</label>
                        <div className="rating-component">
                            <RatingComponent className rating={this.state.rating} rangeMax={5} onChange={e => this.setState({ rating: e })} />
                        </div>
                    </div>
                    <button
                        className="add-button"
                        onClick={this.onAddClick}>Add</button>
                </div>
            </div>
        )
    }
}

export default AddItemComponent