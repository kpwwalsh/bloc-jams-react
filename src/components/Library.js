import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component { 
    constructor(props) {
        super(props);
        this.state = { albums: albumData }; 
      }

      formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        if (seconds < 10 ) {
        return minutes + ':0' + seconds;
      }  else {
        return minutes + ':' + seconds;
      }
    }

    render() {
     return ( 
       <section className='library'>
        <div className="container"> 
         <div className="row">         
        {
          this.state.albums.map( (album, index) => 
          <Link to={`/album/${album.slug}`} key={index}>
              <img className= "album-cover-art" src={album.albumCover} alt={album.title} />
               <div className="card">
              <div className="card-body">
               <div>{album.title}</div>
               <div>{album.artist}</div>
               <div>{album.songs.time} songs</div>
               </div>
              </div>
         </Link>
          )
        }
       </div>
       </div>
       </section>
      );
    }
  }

export default Library;