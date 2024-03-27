import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBook } from "../localstorage";
import { useState } from "react";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

  //   console.log(book);

  const [clickReadBtn, setClickReadBtn] = useState(false);
  const [clickBtn, setClickBtn] = useState(false);

  const handleRead = () => {
    if (!clickReadBtn) {
      toast.success("Added in Read List");
      saveBook(idInt);
      setClickReadBtn(true);
      setClickBtn(true);
    } else {
      toast.warn("Already Added in Read");
    }
  };

  const handleWishList = () => {
    if (!clickBtn) {
      toast.success("Added in Wish-List");
      setClickBtn(true);
    } 

    else {
      toast.warn("Already Added");
    }
  };

  return (
    <div className="mx-3 md:mx-20 rounded-2xl">
      <div className="hero rounded-2xl">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className=" p-8 bg-base-200 rounded-xl">
            <img src={book.image} className="w-[600px] h-full rounded-lg " />
          </div>

          <div>
            <h1 className="text-5xl font-bold">{book.book_name}</h1>
            <p className="py-6">Author: {book.author}</p>
            <hr />
            <p className="py-6">Category: {book.category}</p>
            <hr />
            <p>Review: {book.review}</p>
            <p>Tags: {book.tags}</p>
            <hr />
            <div className="">
              <p>
                <span>Total Pages:</span>
                {book.total_pages}
              </p>
              <p>
                <span>publisher: </span>
                {book.publisher}
              </p>
              <p>
                <span>year Of Publishing: </span>
                {book.yearOfPublishing}
              </p>
              <p>
                <span>rating: </span>
                {book.rating}
              </p>
            </div>
            <div className=" flex gap-4">
              <button
                onClick={handleRead}
                className="btn btn-outline btn-success"
              >
                Read
              </button>
              <button
                onClick={handleWishList}
                className="btn btn-outline btn-warning"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
