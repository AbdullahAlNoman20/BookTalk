import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);

//   console.log(book);

  return (
    <div className="mx-3 md:mx-20 rounded-2xl">
      <div className="hero min-h-screen bg-base-200 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <img
            src={book.image}
            className="w-[500px] h-full rounded-lg shadow-2xl"
          />
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
                <p><span>Total Pages:</span>{book.total_pages}</p>
                <p><span>publisher: </span>{book.publisher}</p>
                <p><span>year Of Publishing: </span>{book.yearOfPublishing}</p>
                <p><span>rating: </span>{book.rating}</p>
            </div>
            <div className=" flex gap-4">
            <button className="btn btn-outline btn-success">Read</button>
            <button className="btn btn-outline btn-warning">Wishlist</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
