import React from 'react'
import lifeofthecandle from "../assets/life-of-the-candle.jpg"
import useFetch from '../hooks/useFetch'

export default function BookList() {
    let url = 'http://localhost:3001/books';
    let {data : books, loading, error} = useFetch(url);
    if(error){
        return <p>{error}</p>
    }
  return (
    <>
    {loading && <p>loading....</p>}
    {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-3">
        {books.map((book)=>(
            <div className=" p-4 border border-1" key={book.id}>
            <img src={lifeofthecandle} alt="" />
            <div className="text-center space-y-2 mt-3">
                <h1 className="">{book.title}</h1>
                <p className="">{book.description}</p>
                <div className="flex flex-wrap">
                {book.categories.map(genre =>(
                    <span key={genre} className="mx-1 my-1 text-white rounded-full px-2 py-1 text-sm bg-blue-500">{genre}</span>
                ))}
                </div>
            </div>
            
            </div>
        ))}
        </div>
    )}
        
    </>
  )
}
