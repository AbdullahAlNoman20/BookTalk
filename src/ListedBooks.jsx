import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "./localstorage";

const ListedBooks = () => {
  const books = useLoaderData();

  const [bookListed, setBookListed] = useState([]);

  useEffect(() => {
    const storedBookId = getStoredBook();

    if (books.length > 0) {
      const listedBooks = books.filter((book) =>
        storedBookId.includes(book.id)
      );

      //    console.log (books,listedBooks,storedBookId)
      setBookListed(listedBooks);
      // console.log(bookListed)
    }
  },[books]);

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

      <h1>Listed Book: {bookListed.length}</h1>
      <div className="">
        {bookListed.map((book) => (
          <li key={book.id}>
            {" "}
            <span>{book.book_name}</span>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
