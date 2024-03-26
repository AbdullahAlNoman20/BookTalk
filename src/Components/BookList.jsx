

const BookList = ({ book }) => {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl mx-20 mt-5 border-2 h-52 p-3">
        <figure>
          <img
            className="w-40 rounded-2xl"
            src={book.image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book.book_name}</h2>
          <p>By: {book.author}</p>
          <p><span><i class="fa-solid fa-user"></i> Publisher: {book.publisher}</span> <span><i class="fa-regular fa-copy ml-5"></i> Total Pages: {book.total_pages}</span></p>
          <hr />
          <div className="flex gap-3">
          <button className="btn btn-sm bg-purple-300">{book.category}</button>
          <button className="btn btn-sm bg-green-200">{book.rating}</button>
          <button className="btn btn-sm text-orange-400 ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
