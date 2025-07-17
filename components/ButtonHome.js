import React from 'react'
import Link from 'next/link'

const ButtonHome = () => {
  return (
    <div>
      <Link rel="stylesheet" href="/"><button className='btn btn-secondary mt-5'>
        Go Back To The Home Page
      </button></Link>
    </div>
  )
}

export default ButtonHome
