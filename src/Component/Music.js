import React, { Component } from 'react';
import Spotify from './Spotify';

class Music extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
    };
  }

  componentDidMount() {
    // Your Spotify API credentials
    const clientId = 'd873bfe54a81428eb94635ff43a4aff7';
    const clientSecret = '1160958c16d340f382d236cff55fc726';
    const base64Credentials = btoa(`${clientId}:${clientSecret}`);
    
    // Spotify API endpoints
    const authEndpoint = 'https://accounts.spotify.com/api/token';
    const categoryId = 'party'; // Replace with the ID of your playlist
    const apiEndpoint = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?country=in&limit=50`;

    // Request body
    const body = 'grant_type=client_credentials';

    // Fetch access token
    fetch(authEndpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;

        // Fetch the playlist using the access token
        fetch(apiEndpoint, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data.playlists.items); // Logging the tracks of the playlist
            this.setState({ playlists: data.playlists.items });
          });
      })
      .catch((error) => console.error('Error:', error));
  }

  render() {
    const { playlists } = this.state;

    return (
      <div className='text-center'>
        <h1 className='font-bold text-4xl text-green-600 py-5 uppercase border-b-4 border-green-600 lg:w-[30%] md:w-[40%] sm:w-[40%] m-auto'>Spotify Playlist</h1>
        <div className='text-center py-10'>
          {playlists && playlists.length > 0 ? (
            <div className='flex flex-wrap gap-3 py-2'>
              {playlists.map((track) => (
                <Spotify key={track.id} track={track} />
              ))}
            </div>
          ) : (
            <div>
              <p>No Data Found</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Music;
