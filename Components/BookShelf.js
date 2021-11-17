import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
    state = {
        books: this.props.books,
        name: this.props.name,
    }

    changeShelf = (book, newShelf) => {
        this.props.onShelfChange(book, newShelf);
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.state.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.state.books.map(book => {
                            return (
                                <li key={book.id}>
                                    <Book onShelfChange={this.changeShelf} book={book} />
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