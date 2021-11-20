import React, { Component } from 'react';

class shelfChanger extends Component {
    state = {
        shelf: this.props.shelf,
    }

    changeShelf = (newShelf) => {
        this.props.onShelfChange(newShelf.target.value);
        this.setState({ shelf: newShelf.target.value })
    }

    render() {
        return (
            <div className="book-shelf-changer">

                <select value={this.state.shelf} onChange={(event) => this.changeShelf(event)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default shelfChanger;