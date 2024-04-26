import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import lifeofthecandle from "../assets/life-of-the-candle.jpg"

export default function BookDetail() {
    let {id} = useParams();
    let {data : book, loading, error} = useFetch(`http://localhost:3001/books/${id}`);
  return (
    <>
        {error && <p>{error}</p>}
        {loading && <p>loading ...</p>}
        {book && (
            <div className='grid grid-cols-2 gap-2'>
                <div>
                    <img src={lifeofthecandle} alt="" className='w-[80%]' />
                </div>
                <div className='space-y-3'>
                    <h1 className='text-3xl font-bold'>{book.title}</h1>
                    <div className="flex flex-wrap gap-3">
                        {book.categories.map(genre =>(
                            <span key={genre} className="my-1 text-white rounded-full px-2 py-1 text-xs bg-blue-500">{genre}</span>
                        ))}
                    </div>
                    <p>{book.description}</p>
                </div>
            </div>
        )}
    </>
  )
}
