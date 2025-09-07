import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utiliy/addToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const allBooks = useLoaderData();
  const [bookList, setBookList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    console.log(storedReadList, storedReadListInt);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setBookList(readBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "No of Pages") {
      const sortedReadList = [...bookList].sort(
        (a, b) => a.totalPages - b.totalPages
      );

      setBookList(sortedReadList);
    }

    if (sortType === "Ratings") {
      const sortedReadList = [...bookList].sort((a, b) => a.rating - b.rating);
      setBookList(sortedReadList);
    }
  };

  return (
    <>
      <div className="mx-20">
        <h1 className="text-3xl my-20 ">Listed Books</h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            {sort ? `Sort by: ${sort}` : "Sort By"}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("No of Pages")}>No of Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" m-20  tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read List"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Read List Total : {bookList.length}
          {bookList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="My wish List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
