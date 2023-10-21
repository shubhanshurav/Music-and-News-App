import React, { useState, useEffect } from 'react';
import Home from './Component/Home';
import Spinner from './Loading/Spinner';
import Footer from './Component/Footer';

const App = () => {
  
  const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/?limit=100";
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchhNewsData(){
    setLoading(true);
     try{
       const res  = await fetch(API_URL);
       const data = await res.json();
       setNewsList(data.results);
     }
     catch(error){
       console.error("There is something wrong, please try again");
       setNewsList([]);
     }
     setLoading(false);
  }

  useEffect(() => {
     fetchhNewsData();
  }, []);

  return (
    <div className="bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(/assets/background.jpeg)`}}>
      <div className='text-center text-4xl font-extrabold p-6 text-gray-300 sticky top-0 bg-red-700'>
            <h1 className=''>Space News</h1>
      </div>
        <div className='text-center py-10'>
           {
            loading ? <Spinner /> :
            newsList.length > 0 ?
           (
             <div className='grid grid-cols-1 gap-3'>
              {
                newsList.map( (item) => (
                    <Home key={item.id} item={item} />
                ))
              }
              </div>
           ):
           <div>
              <p>No Data Found</p>
           </div>
          }
        </div>
        <Footer />
    </div>
  );
}

export default App;
