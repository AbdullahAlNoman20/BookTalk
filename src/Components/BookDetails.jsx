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
      toast.warn("Already Added in Read list");
    }
  };

  const handleWishList = () => {
    if (!clickBtn) {
      toast.success("Added in Wish-List");
      setClickBtn(true);
    } else {
      toast.warn("Already Added Or Exist on Read list");
    }
  };

  return (
    <div className="mx-3 md:mx-20 rounded-2xl border">
      <div className="hero rounded-2xl">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className=" p-8 bg-base-200 rounded-xl">
            <img src={book.image} className="w-[600px] h-full rounded-lg " />
          </div>

          <div>
            <h1 className="text-5xl font-bold"> {book.book_name}</h1>
            <p className="py-6"><span className="font-bold">Author: </span>{book.author}</p>
            <hr />
            <p className="py-6"><span className="font-bold">Category: </span>{book.category}</p>
            <hr />
            <p><span className="font-bold">Review: </span>  {book.review}</p>
            <div className=" flex items-center gap-2 my-5">
            <span className="font-bold">Tags: </span>
            <p className="flex gap-1">
                {book.tags.map((tag) => (
                  <span
                    key={book.id}
                    className="bg-base-200 rounded-full p-1 text-orange-300"
                  >
                    #{tag}{" "}
                  </span>
                ))}
              </p>
            </div>
            <hr />
            <div className=" flex flex-col gap-4 my-7">
              <p>
              <span className="font-bold">Total Pages: </span>
                {book.total_pages}
              </p>
              <p>
              <span className="font-bold">Publisher: </span>
                {book.publisher}
              </p>
              <p>
              <span className="font-bold">Year Of Publishing: </span>
                {book.yearOfPublishing}
              </p>
              <p>
              <span className="font-bold">Rating: </span> 
                {book.rating} <i class="fa-regular fa-star"></i> </p>
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
                className="btn btn-warning"
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
