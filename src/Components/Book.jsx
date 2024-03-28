import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const {id, image, book_name, author, rating, category,tags } = book;

  return (
    <div className="mx-3 p-5 rounded-xl border-2 border-orange-100 flex justify-center">


      <NavLink to={`/book/${id}`}>
        <div className="p-3 card lg:w-80 h-[500px]">
          <figure className="rounded-2xl h-96">
            <img src={book.image} alt="Shoes" />
          </figure>



          <p className="my-3 grid grid-cols-2 p-1 text-sm">
              {book.tags.map((tag) => (
                <span key={book.id} className="text-green-500 bg-slate-100 rounded-lg p-1 mr-1 my-1"> #{tag} </span>
              ))}
            </p>


          <div className="card-body p-2">
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
