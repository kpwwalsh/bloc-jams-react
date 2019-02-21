import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component { 
    constructor(props) {
        super(props);
        this.state = { albums: albumData }; 
      }

    render() {
     return ( 
       <section className='library'>
        <div className="container"> 
         <div className="row">
         
        {
          this.state.albums.map( (album, index) => 
          <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover}  className="mx-auto"  alt={album.title} />
               <div className="card">
              <div className="card-body">
               <div>{album.title}</div>
               <div>{album.artist}</div>
               <div>{album.songs.length} songs</div>
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