import React from 'react';

const Home = ({ item }) => {
  return (
    <div className='border-[2px] border-gray-300 mb-10 m-auto p-8 items-center w-[70%] bg-white' style={{ backgroundImage: `url(/assets/background2.jpeg)` }}>
      <div className='text-[25px] text-start pb-1 font-bold font-serif text-blue-600'>
        <h1>{item.title}</h1>
      </div>
      <div className=' flex justify-start text-start pb-3'>
        <p className='pr-8'><span className='font-bold font-serif'>Published:</span> {item.published_at}</p>
        <p><span className='font-bold font-serif'>Updated: </span>{item.updated_at}</p>
      </div>

      <div className='w-full'>
        <img src={item.image_url} className='w-full object-cover h-screen object-center ' alt={item.title} />
      </div>
      <div className='p-4 text-2xl text-start font-extralight text-gray-800 max-h-32 overflow-hidden overflow-y-scroll'>
        <p>{item.summary}</p>
      </div>

      <div className='pt-5'>
        <button  
          className='bg-blue-700 text-white py-2 rounded-md text-[20px] px-3 font-light'
          onClick={() => {
            window.open(item.url, '_blank');
          }}
        >
          Click here to read the Full Article
        </button>
      </div>
    </div>
  );
}

export default Home;
