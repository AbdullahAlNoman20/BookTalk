import { NavLink } from "react-router-dom";

const BookList = ({ book }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl lg:mx-20 mx-3 mt-5 border-2 lg:h-72 h-96 p-3">
        <figure>
          <img className="lg:w-40 w-20 rounded-2xl" src={book.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.book_name}</h2>
          <p>By: {book.author}</p>
          <p>
            <span>
              <i class="fa-solid fa-user"></i> Publisher: {book.publisher}
            </span>{" "}
            <span>
              <i class="fa-regular fa-copy ml-5"></i> Total Pages:{" "}
              {book.total_pages}
            </span>
          </p>
          <hr />
          <div className="flex lg:flex-row flex-col gap-3">
            <button className="btn btn-sm bg-purple-300">
              Category: {book.category}
            </button>
            <button className="btn btn-sm bg-green-200">
              Rating: {book.rating} <i class="fa-regular fa-star"></i>
            </button>
            <NavLink to={`/book/${book.id}`}>
              <button className="btn btn-sm text-orange-400 ">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
