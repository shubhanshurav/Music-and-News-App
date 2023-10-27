import React, { useState, useEffect } from 'react';
import Spinner from '../Loading/Spinner';
import FetchNews from './FetchNews';

const News = () => {

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
      <div className='text-center py-10'>
        <div className='bg-white'>
        </div>
         {
          loading ? <Spinner /> :
          newsList.length > 0 ?
         (
           <div className='grid grid-cols-1 gap-3'>
            {
              newsList.map( (item) => (
                  <FetchNews key={item.id} item={item} />
              ))
            }
            </div>
         ):
         <div>
            <p>No Data Found</p>
         </div>
        }
      </div>
  </div>
  )
}

export default News;