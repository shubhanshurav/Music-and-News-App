import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
         <div className='text-gray-300 sticky top-0 bg-green-700'>
          <div className='flex gap-10 text-md font-semibold justify-center p-5'>
            <Link to='/'>
              <h1 className='bg-green-500 px-2 py-1 text-white rounded-sm uppercase'>Spotify Playlists</h1>
            </Link>

            <Link to='/News'>
              <h1 className='bg-green-500 px-2 py-1 text-white rounded-sm uppercase'>Read Space News</h1>
            </Link>
          </div>
    </div>
    </div>
  )
}

export default Navbar;