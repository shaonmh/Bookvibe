import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utiliy/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
    const allBooks = useLoaderData()
    const [bookList, setBookList] = useState([])

    useEffect( ()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        console.log(storedReadList, storedReadListInt);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))
        setBookList(readBookList)
    }, [])

    return (
        <div className="tabs tabs-lift">
            <input type="radio" name="my_tabs_3" className="tab" aria-label="Read List" />
            <div className="tab-content bg-base-100 border-base-300 p-6">Read List Total : {bookList.length}

                {
                    bookList.map(book => <Book key={book.bookId} book={book}></Book>)
                }


            </div>

            <input type="radio" name="my_tabs_3" className="tab" aria-label="My wish List" defaultChecked />
            <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

        </div>
    );
};

export default ListedBooks;