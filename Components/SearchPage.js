import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI'
import Book from './Book';

class SearchPage extends Component {

    state = {
        query: '',
        result: [],
        shelfBooks: [],
        statesDone: false,
    }

    componentDidMount() {
        let shelfBooks = []
        BooksAPI.getAll().then(books => shelfBooks = [...books]).then(e => this.setState({ shelfBooks }))
    }

    updateQuery = (query) => {
        this.setState({
            query: query,
        }, () => {
            this.search(this.state.query)
        })
    }

    updateShelf = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(e => BooksAPI.getAll()).then(shelfBooks => this.setState({ shelfBooks }))
    }

    search = (query) => {
        (query.trim().length > 0) ? (
            BooksAPI.search(query).then(result => {
                this.setState({ result })
                return result
            }).then((result) => {
                for (let i = 0; i < result.length; i++) {
                    result[i].shelf = 'none';
                    for (let x = 0; x < this.state.shelfBooks.length; x++) {
                        if (result[i].id === this.state.shelfBooks[x].id) {
                            result[i].shelf = this.state.shelfBooks[x].shelf
                        }
                    }
                }
            })).then(e => this.setState({ statesDone: true })) : (this.setState({ result: '' }));
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                      NOTES: The search from BooksAPI is limited to a particular set of search terms.
                      You can find these search terms here:
                      https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
    
                      However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                      you don't find a specific author or title. Every search is limited by search terms.
                    */}
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(this.state.statesDone) && (this.state.result.map(book => (
                            <Book key={book.id} book={book} shelf={book.shelf} onShelfChange={this.updateShelf} />
                        )
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage;