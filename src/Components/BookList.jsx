import { NavLink } from "react-router-dom";

const BookList = ({ book }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl lg:mx-20 mx-3 mt-5 border-2 lg:h-72 p-3">
        <figure>
          <img className="lg:w-40 w-20 rounded-2xl" src={book.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.book_name}</h2>
          <p><span className="font-bold">By: </span>  {book.author}</p>

          <div className="flex items-center gap-2">
          <span className="font-bold">Tags: </span> 
            <p className="p-1 text-sm">
              {book.tags.map((tag) => (
                <span
                  key={book.id}
                  className="text-green-500 bg-slate-100 rounded-lg p-1 mr-1 my-1"
                >
                  {" "}
                  #{tag}{" "}
                </span>
              ))}
            </p>
          </div>

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
