import React, { Component } from "react";
import ShelfChanger from "./ShelfChanger";

class Book extends Component {
    state = {
        book: this.props.book,
        shelf: this.props.shelf,
    }

    changeShelf = (newShelf) => {
        const book = this.state.book;
        this.props.onShelfChange(book, newShelf);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    {(typeof this.state.book.imageLinks === 'undefined') && (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: '', }}></div>)}
                    {(typeof this.state.book.imageLinks !== 'undefined') && (<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url(" + this.props.book.imageLinks.thumbnail + ")", }}></div>)}
                    <ShelfChanger onShelfChange={this.changeShelf} key={this.state.book.id} shelf={this.state.shelf} />
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{(this.state.book.hasOwnProperty('authors')) && (this.state.book.authors.map(author =>
                    <div key={this.state.book.authors.indexOf(author)}><span > {author} </span><br /></div>))} </div>
            </div>
        )
    }
}

export default Book;