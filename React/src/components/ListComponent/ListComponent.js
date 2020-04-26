import React, { Component } from 'react'
import ListItemComponent from './../ListItemComponent/ListItemComponent'
import ProportiesComponent from './../PropertiesComponent/ProportiesComponent'
import AddItemComponent from './../AddItemComponent/AddItemComponent'
import dataJson from './../../data/data.json'
import './ListComponent.css'

class ListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItems: dataJson.map((item) => item),
            sort: false,
            sortText: "Ascending",
            filter: ''
        }
    }


    onRatingChange = (id, rating) => {
        this.setState(state => {
            return {
                listItems: state.listItems.map(item => item.id === id ? Object.assign(item, { rating }) : item)
            }
        })
    }

    onDeleteItem = id => {
        this.setState(state => {
            return {
                listItems: state.listItems.filter(item => item.id !== id)
            }
        })
    }

    onSortChange = () => {
        this.setState(state => {
            return ({
                sort: !this.state.sort,
                sortText: !this.state.sort ? "Ascending" : "Descending"
            })
        })
    }

    onFilterChange = (filter) => {
        this.setState(state => {
            return ({ filter: filter })
        })
    }

    onAddItem = (title, author, image, rating) => {
        const id = this.state.listItems[this.state.listItems.length - 1].id + 1
        this.setState({
            listItems: [...this.state.listItems, { id, title, author, image, rating }]
        })
    }

    render() {
        const listItems = this.state.listItems.filter(item =>
            this.state.filter === '' || item.title.toLowerCase().includes(this.state.filter.toLowerCase()) || item.author.toLowerCase().includes(this.state.filter.toLowerCase())
        ).sort((item1, item2) => {
            return this.state.sort ? item2.title.localeCompare(item1.title) : item1.title.localeCompare(item2.title)
        }
        ).map((item) => {
            return (<ListItemComponent id={item.id} key={item.id.toString()} rating={item.rating} author={item.author} title={item.title} image={item.image} onRatingChange={this.onRatingChange} onDeleteItem={this.onDeleteItem} />)
        })
        return (
            <div className="list-div">
                <AddItemComponent onAddItem={this.onAddItem} />
                <ProportiesComponent sortText={this.state.sortText} onFilterChange={this.onFilterChange} onSortChange={this.onSortChange} />
                <ul className="ul-list">
                    {listItems}
                </ul>
            </div>
        )
    }
}

export default ListComponent