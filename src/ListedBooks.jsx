import { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getStoredBook } from "./localstorage";
import BookList from "./Components/BookList";

const ListedBooks = () => {
  const books = useLoaderData();

  const [bookListed, setBookListed] = useState([]);
  const [displayBooks, setDisplayBooks] = useState([]);

  useEffect(() => {
    const storedBookId = getStoredBook();

    if (books.length > 0) {
      const listedBooks = books.filter((book) =>
        storedBookId.includes(book.id)
      );

      //    console.log (books,listedBooks,storedBookId)
      setBookListed(listedBooks);
      setDisplayBooks(listedBooks);
      // console.log(bookListed)
    }
  }, [books]);

  return (
    <div>
      <div className="text-center text-5xl font-extrabold bg-slate-200 p-10 mx-20 rounded-xl">
        |Books|
      </div>

      <div className="flex justify-center mt-10">
        <div className="dropdown bg-orange-400 rounded-xl">
          <div tabIndex={0} role="button" className="btn m-1">
            Click
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Published year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-start mt-10">
        <NavLink>
          <h1 className="ml-5 md:ml-20 font-bold border-t-2 rounded-xl border-x-2 border-orange-400 p-2 md:p-4">
            Listed Book's : {bookListed.length}
          </h1>
        </NavLink>
      </div>
      <div className=" border-t-2 border-green-600 rounded-3xl md:mx-12">
        {displayBooks.map((book) => (
          <BookList key={book.id} book={book}></BookList>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
