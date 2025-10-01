import React, { useEffect, useState } from 'react';

const Books = () => {

    const [allBooks, setallBooks] = useState([])
    
    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    },[])
    return (
        <div>
            <h1>hi ami Books</h1>
        </div>
    );
};

export default Books;