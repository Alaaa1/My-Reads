import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
    state = {
        books: this.props.books,
        name: this.props.name
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.forEach(book => {
                            return (
                                <li>
                                    <Book book={book} />
                                </li>
                            )
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;