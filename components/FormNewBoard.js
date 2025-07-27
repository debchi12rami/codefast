"use client"
import React from 'react'
import { useState } from 'react'

const FormNewBoard = () => {

  const [boardName, setBoardName] = useState('');
  const [isLoading , setIsLoading] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isLoading){
      return;
    }

    setIsLoading(true);

    try {

    }catch(error){
      setIsLoading(false);
    }
  }

  return (
    <form className='bg-base-100 p-8 rounded-3xl space-y-8'
    onSubmit={handleSubmit}
    >

      {/* Title */}
      <p className='font-bold text-lg'>Create A New Feedback Board</p>

      {/* Form */}

      <fieldset className="fieldset">

        <legend className="fieldset-legend float-start">What is your board name?</legend>
        <input
        required 
        type="text" 
        className="input w-full" 
        placeholder="Type here"
        value={boardName}
        onChange={(event) => setBoardName(event.target.value)}
        />
        
 
      </fieldset>

      <button className='btn btn-primary btn-block' type='submit'>
        {isLoading && <span className="loading loading-spinner text-success"></span>
}
        Create Board
        </button>

      {/* Button */}
    </form>
  )
}

export default FormNewBoard;