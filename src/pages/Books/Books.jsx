import React, { Suspense, useState } from 'react';
import Book from '../Book/book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([])
    
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // },[])
    return (
        <div>
            <h1>hi ami Books</h1>
            <Suspense fallback={<span>Loading....</span>}>
                {
                    data.map((singleBook=>))
            }
            
            </Suspense>
        </div>
    );
};

export default Books;