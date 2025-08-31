import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, tags, bookName, author, image } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="bg-purple-300 py-6 rounded-2xl">
                    <img className="h-[166px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex">
                        {
                            tags.map((tag,i) => <button key={i} className="btn btn-xs bg-indigo-400 mr-2 ">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <p>{author}</p>
                    <div className="border-b-1 border-dashed"></div>
                    <div className="flex justify-between">
                        <div className="justify-start">
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;