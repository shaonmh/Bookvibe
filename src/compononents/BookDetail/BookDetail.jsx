import { useLoaderData, useParams } from "react-router-dom";
import { addToReadList } from "../../utiliy/addToDb";

const BookDetail = () => {
    const { bookId } = useParams()
    const data = useLoaderData();

    const id = parseInt(bookId)
    const book = data.find(book => book.bookId === id)

    console.log(book);

    const { bookId: currentBookId,publisher, totalPages, category,  author, review, image, bookName, yearOfPublishing , rating } = book

    const handleMarkAsRead = (id) =>{

        addToReadList(id)
            
    }
    return (
        <div className="flex w-7xl mx-auto">
            {/* <p>{currentBookId}</p>
            <figure className="w-30"><img src={image} alt="" /></figure>
            <p>Author: {author}</p>
            <p>Review : {review}</p> */}

            <div className="flex bg-base-100 shadow-sm">
                <figure className="w-[40%] bg-gray-300 flex justify-center items-center">
                    <img className="w-[70%] h-[80%] "
                        src={image}
                        alt="Album" />
                </figure>
                <div className="w-3xl p-3 flex flex-col m-10 gap-3 justify-around">
                    <h1 className="text-3xl">{bookName}</h1>
                    <h2 className="card-title"> By : {author}</h2>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p> <span className="font-bold">Review:</span>  {review}</p>
                    <p><span className="font-bold">Publisher : </span>{publisher}</p>
                    <p><span className="font-bold">No of Pages : </span>{totalPages}</p>
                    
                    <p><span className="font-bold">Year Of Publishing: </span>{yearOfPublishing}</p>
                    <p><span className="font-bold">Rating: </span>{rating}</p>
                    <div className="card-actions justify-center">
                        <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-primary btn-outline">Mark as Read</button>
                        <button className="btn btn-primary">Add to WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;