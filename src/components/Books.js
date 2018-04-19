import React, { Component } from 'react';
import BookList from '../DefaultBooks';
import { CSVLink } from 'react-csv';
import Dropzone from 'react-dropzone';
import csv from 'csv';

class Books extends Component {

    constructor() {
        super();
        this.addBook = this.addBook.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.dataStringify = this.dataStringify.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.deleteBook = this.deleteBook.bind(this);



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


    }

    dataStringify() {
        let data = this.state.books;
        let arr = [];

        Object
            .values(data)
            .map(key => {
                 arr.push(key);
                 return (key);
             });
        return (arr);
    }

    deleteBook(key) {
        const books = { ...this.state.books };
        delete books[key];
        this.setState({ books },
            () =>
                localStorage.setItem('books', JSON.stringify(this.state.books)))
    };

    onDrop(e) {
        //There's definately a better way to do this
        const reader = new FileReader();
        reader.onload = () => {
            csv.parse(reader.result, (err, data) => {
                //seperating headers
                var headers = data[0];
                //get rid of headers from array
                delete data[0];
                //put values into respective keys
                var result = data.map((a) => {
                    let obj = {};
                    headers.forEach((k, i) => {
                        obj[k] = a[i];
                    })
                    return (obj);
                });
                //map each row as an object into the state
                const resultArray = result;
                let importedBooks = { ...this.state.books };
                Object
                    .values(resultArray)
                    .map(key => {
                        console.log(key);
                        // because multiple timestamps are in the same iteration, some books won't add from csv 
                        importedBooks['book_' + Date.now()] = key;
                    })
                console.log(importedBooks);
                this.setState({ books: importedBooks }, () =>
                    localStorage.setItem('books', JSON.stringify(this.state.books)));

                return data;
            });
        };

        reader.readAsText(e[0]);
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

                                        <button onClick={($key) => this.deleteBook(key)}>Delete Book</button>
                                    </li>
                                    {/* <button onClick={e => this.changeHandler(e, key)}>Modify</button> */}
                                </div>
                            )
                    }

                    <hr />
                    <CSVLink data={(this.dataStringify())} headers={[{ label: 'name', key: 'name' },
                    { label: 'auth', key: 'auth' }]} > Download here </CSVLink>
                    <Dropzone name='dzone' onDrop={(e) => this.onDrop(e)} />


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
            </div>
        )
    }
}
export default Books;