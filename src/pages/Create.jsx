import React, { useState } from 'react'

export default function Create() {
    let [title, setTitle] = useState('');
    let [description, setDescription] = useState('');
    let [newCategory, setNewCategory] = useState('');
    let [categories, setCategories] = useState([]);
    let addCategory = (e) =>{
        setCategories(prev => [newCategory, ...prev]);
        setNewCategory('');
    }
  return (
    <>
        <form className="w-full max-w-lg mx-auto mt-4">
            
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Book Title 
                </label>
                <input value={title} onChange={e => setTitle(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Enter Book Title" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Book Description 
                </label>
                <textarea value={description} onChange={e => setDescription(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Enter Book Description" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Book Categories 
                    </label>
                    <div className='flex items-center space-x-2'>
                        <input value={newCategory} onChange={e => setNewCategory(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  type="text" placeholder="Enter Book Category" />
                        <button onClick={addCategory} type='button' className='bg-primary p-2 rounded mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {categories.map(genre =>(
                            <span key={genre} className="my-1 text-white rounded-full px-2 py-1 text-xs bg-primary">{genre}</span>
                        ))}
                    </div>
                </div>
            </div>

            <button  className='flex items-center gap-1 w-full text-white bg-primary px-3 py-2 rounded justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

                    <span className='hidden md:block'>Create Book</span>
                </button>
            
        </form>
    </>
  )
}
