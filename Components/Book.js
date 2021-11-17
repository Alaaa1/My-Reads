import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
    state = {
        book: this.props.book,
        bookThumnail: "url(" + this.props.book.imageLinks.thumbnail + ")",
    }

    changeShelf = (newShelf) => {
        const book = this.state.book;
        this.props.onShelfChange(book, newShelf);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.state.bookThumnail, }}></div>
                    <ShelfChanger onShelfChange={this.changeShelf} key={this.state.book.id} shelf={this.state.book.shelf} />
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.authors.map(author =>
                    <div key={this.state.book.authors.indexOf(author)}><span > {author} </span><br /></div>)} </div>
            </div>
        )
    }
}

export default Book;