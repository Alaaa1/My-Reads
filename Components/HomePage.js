import React, { Component } from 'react'
import BookShelf from './BookShelf';
import * as BooksAPI from '../BooksAPI'

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
            .then(d => console.log(...allBooks))
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
            .then(d => console.log(...allBooks))
            .then(e => allBooks.forEach(book => newState[book.shelf].push(book)))
            .then(e => this.setState(newState)).then(e => console.log(newShelf))
    }

    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        fetchedData: false,
    }

    render() {
        return (
            this.state.showSearchPage ? (
                <div className="search-books">
                    <div className="search-books-bar">
                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
                        <div className="search-books-input-wrapper">
                            {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                            <input type="text" placeholder="Search by title or author" />

                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid"></ol>
                    </div>
                </div>
            ) : (
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
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </div>
                </div>
            )
        )
    }
}

export default HomePage;