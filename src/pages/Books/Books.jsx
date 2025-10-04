import React, { Suspense } from 'react';
import Book from '../Book/book';

const Books = ({data}) => {

    // const [allBooks, setAllBooks] = useState([])
    
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // },[])
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Suspense fallback={<span>Loading....</span>}>
            {data.map((singleBook) => (
              <Book key={singleBook.bookId} singleBook={singleBook}></Book>
            ))}
                </Suspense>
                
        </div>
      </div>
    );
};

export default Books;