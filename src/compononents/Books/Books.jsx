import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center my-6 font-bold'>Books</h1>
            <div className="grid grid-cols-3">{
                books.map((book, i) => <Book key={i} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;