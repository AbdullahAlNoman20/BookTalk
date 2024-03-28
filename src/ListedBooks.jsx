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

{/* Shorting Button */}
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


{/* Experiment */}
          <div className=" md:mx-20 ">
          <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Listed Book's" checked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            


          Listed Book's : {bookListed.length}
          <div className="  md:mx-12">
        {displayBooks.map((book) => (
          <BookList key={book.id} book={book}></BookList>
        ))}
      </div>
            
            
            
            </div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wish List"  />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            



            
            No Wish List Selected Yet
            
            
            
            
            </div>

          </div>
          </div>



    </div>
  );
};

export default ListedBooks;
