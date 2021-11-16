import React, { Component } from "react";

class Book extends Component {
    state = {
        book: this.props.book,
        bookThumnail: "url(" + this.props.book.imageLinks.thumbnail + ")",
    }
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.state.bookThumnail, }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.state.book.title}</div>
                <div className="book-authors">{this.state.book.authors.map(author =>
                    <p key={this.state.book.authors.indexOf(author)}> {author} </p>)} </div>
            </div>
        )
    }
}

export default Book;