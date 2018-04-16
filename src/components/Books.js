import React, { Component } from 'react';
import BookList from '../DefaultBooks';

class Books extends Component {

    constructor() {
        super();
        this.addBook = this.addBook.bind(this);
        this.state = {
            books: JSON.parse(localStorage.getItem('books')) || { ...BookList }
        }
    }

    addBook(e) {
        e.preventDefault();
        const books = { ...this.state.books };
        const newBook = {
            name: this.title.value,
            author: this.author.value
        };
        books['book_' + Date.now()] = newBook;

        console.log('new book added');
        this.setState({ books });
        localStorage.setItem('books', JSON.stringify(this.state.books));
        this.bookForm.reset();
    }

    modifyBook(e){
        e.preventDefault();
        

    }


    render() {
        return (
            <div>
                <h4>Available books</h4>
                <ul className="book-list">
                    {
                        Object
                            .keys(this.state.books)
                            .map(key =>
                                <li key={this.state.books[key].name}>
                                    <label > Book Name</label>   {this.state.books[key].name}
                                    <br />
                                    <label > Book Author</label>   {this.state.books[key].auth}
                                </li>
                            )
                    }
                </ul>

                <h4>Add a new book</h4>
                <div>
                    <form ref={input => this.bookForm = (input)} onSubmit={e => this.addBook(e)}>
                        <label htmlFor="">Book title</label>
                        <input type="text" ref={(input) => this.title = (input)} />
                        <label htmlFor="">Author</label>
                        <input type="text" ref={(input) => this.author = (input)} />
                        <button type='submit' > + Add new book</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Books;