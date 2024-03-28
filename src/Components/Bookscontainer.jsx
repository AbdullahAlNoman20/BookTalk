import { useEffect, useState } from "react";
import Book from "./Book";

const Bookscontainer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mt-20 md:mx-20">
      <div className=" flex flex-col items-center  mx-4 text-justify">
        <h1 className="text-3xl font-bold">All Books</h1>
        <p>
          Welcome to the All Books section of BookTalk, your ultimate literary
          haven! Here, you'll find a treasure trove of titles spanning every
          genre imaginable, from pulse-pounding thrillers to heartwarming
          romances, thought-provoking classics to cutting-edge contemporary
          fiction.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mt-16">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Bookscontainer;
