import React, { Component } from 'react'
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom';

class HomePage extends Component {
    componentDidMount() {
        let allBooks = [];
        const newState = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            fetchedData: true,
        }
        BooksAPI.getAll().then(Books => allBooks = [...Books])
            .then(e => allBooks.forEach(book => newState[book.shelf].push(book)))
            .then(e => this.setState(newState));
    }


    updateDatabase = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => this.changeShelf(newShelf)).then(e => this.setState({ fetchedData: false }));
    }

    changeShelf = (newShelf) => {
        let allBooks = [];
        const newState = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            fetchedData: true,
        }
        BooksAPI.getAll().then(Books => allBooks = [...Books])
            .then(e => allBooks.forEach(book => newState[book.shelf].push(book)))
            .then(e => this.setState(newState))
    }

    state = {
        fetchedData: false,
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {(this.state.fetchedData) && (<div>
                        <BookShelf onShelfChange={this.updateDatabase} name={'Currently Reading'} books={this.state.currentlyReading} />
                        <BookShelf onShelfChange={this.updateDatabase} name={'Want to Read'} books={this.state.wantToRead} />
                        <BookShelf onShelfChange={this.updateDatabase} name={'Read'} books={this.state.read} /></div>)}
                </div>
                <div className="open-search">
                    <Link to='/search'>
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default HomePage;