import React from 'react';

const Books = ({ bookList }) => (
    <ul className="book-list">
        {
            Object
            .keys(bookList)
            .map(key =>
                <li key={bookList[key].name}>
                    <label > Book Name</label>   {bookList[key].name}
                    <br/>
                    <label > Book Author</label>   {bookList[key].auth}
                </li>
            )
        }
    </ul>
)
export default Books;