"use client"
import React from 'react'
import { useState } from 'react'

const FormNewBoard = () => {

  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    

    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/board', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Board created:', data);
        setName(''); // Clear the form
      } else {
        console.error('Failed to create board');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
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
        value={name}
        onChange={(event) => setName(event.target.value)}
        />
      </fieldset>

      {/* Button */}
      <button className='btn btn-primary btn-block' type='submit'>
        {isLoading && <span className="loading loading-spinner text-success"></span>}
        Create Board
      </button>
    </form>
  )
}

export default FormNewBoard;