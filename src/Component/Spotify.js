import React from 'react';

const Spotify = ({ track }) => {
  const audioRef = React.createRef();

  return (
    <div className="m-auto py-5 border border-gray-400 shadow-lg px-3 w-56 h-68">
      <div className=" ">
        <img src={track.images[0].url} alt="Playlist Cover" className="m-auto" />
      </div>
      <div className="text-start p-3">
        <p><span className='font-bold text-green-700 text-md'>Playlist Name:</span> {track.name}</p>
        <p><span className='font-bold text-green-700 text-md'>Owner:</span> {track.owner.display_name}</p>
        <p><span className='font-bold text-green-700 text-md'>Number of Tracks:</span> {track.tracks.total}</p>
        {/* <p>Description: {track.description}</p> */}
        <div className='pt-5'>
          <button className='bg-green-600 py-1 px-3 text-sm font-bold rounded-md text-white'>
          <a href={track.external_urls.spotify} target="_blank" >
            Listen on Spotify
          </a>
          </button>
        </div>
      </div>
      <audio ref={audioRef}>
        <source src={track.external_urls.spotify} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Spotify;
