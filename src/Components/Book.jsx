import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const {id, image, book_name, author, rating, category } = book;

  return (
    <div className="my-5">


      <NavLink to={`/book/${id}`}>
        <div className="card mx-4 lg:w-80 shadow-xl border-2 p-5 border-orange-100 h-[450px]">
          <figure className="rounded-2xl">
            <img src={book.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book.book_name}</h2>
            <p>By: {book.author}</p>
            <hr />
            <div className="card-actions justify-between">
              <div className=" ">{book.category} </div>
              <div className=" ">
                {book.rating} <i class="fa-regular fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </NavLink>



    </div>
  );
};

export default Book;
