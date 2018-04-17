import React, { Component } from 'react';
import BookList from '../DefaultBooks';
import { CSVLink } from 'react-csv';

class Books extends Component {

    constructor() {
        super();
        this.addBook = this.addBook.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.dataStringify = this.dataStringify.bind(this);

        this.state = {
            books: JSON.parse(localStorage.getItem('books')) || { ...BookList }
        }
    }

    addBook(e) {
        e.preventDefault();
        const books = { ...this.state.books };
        const newBook = {
            name: this.title.value,
            auth: this.author.value
        };
        books['book_' + Date.now()] = newBook;

        console.log('new book added');
        this.setState({ books },
            () =>
                localStorage.setItem('books', JSON.stringify(this.state.books)));
        this.bookAddForm.reset();

    }

    changeHandler(e, key) {
        e.preventDefault();

        const book = { ...this.state.books[key] };
        const updatedBook = {
            ...book,
            [e.target.name]: e.target.value
        };
        const books = { ...this.state.books };
        books[key] = updatedBook;
        this.setState({ books },
            () =>
                localStorage.setItem('books', JSON.stringify(this.state.books)));
        // books[key].e.target.name = e.target.value;
        // console.log(books);

    }


    dataStringify() {
        let data = this.state.books;
        let arr = [];

        Object
            .values(data)
            .map(key => { arr.push(key); });
        console.log(JSON.stringify(arr));

        /* try {
            JSON.parse(JSON.stringify(arr))
        }
        catch (e) {
            console.error(e);
        } */
        return (arr);

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
                                <div key={key}>
                                    <li key={this.state.books[key].name}>
                                        <label > Book Name</label>
                                        <input type="text" defaultValue={this.state.books[key].name}
                                            name='name' onChange={e => this.changeHandler(e, key)} />

                                        <br />
                                        <label > Book Author</label>
                                        <input type="text" defaultValue={this.state.books[key].auth}
                                            name='auth' onChange={e => this.changeHandler(e, key)} />
                                    </li>
                                    {/* <button onClick={e => this.changeHandler(e, key)}>Modify</button> */}
                                </div>
                            )
                    }
                    <button onClick={() => this.dataStringify()} >Click me</button>
                    <br />
                    <CSVLink data={(this.dataStringify())} headers={[{label : 'title', key: 'name'},
                     {label: 'author', key: 'auth'}]} > Download here </CSVLink>

                </ul>

            <h4>Add a new book</h4>
            <div>
                <form ref={input => this.bookAddForm = (input)} onSubmit={e => this.addBook(e)}>
                    <label htmlFor="">Book title</label>
                    <input type="text" ref={(input) => this.title = (input)} />
                    <label htmlFor="">Author</label>
                    <input type="text" ref={(input) => this.author = (input)} />
                    <button type='submit' > + Add new book</button>
                </form>
            </div>
            </div >
        )
    }
}
export default Books;