import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
    constructor(props) {
        super(props);
        this.state= {
        }

       const album = albumData.find( album => {
        return album.slug === this.props.match.params.slug
      });
  
       this.state = {
        album: album,
        currentSong: album.songs[0],
        isPlaying: false,
        hover: song
      };

      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;
      }

      play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
      }

      pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
     }   

      setSong(song) {
      this.audioElement.src = song.audioSrc;
      this.setState({ currentSong: song });
     } 
     
     handleSongClick(song) {
      const isSameSong = this.state.currentSong === song;
      if (this.state.isPlaying && isSameSong) {
        this.pause();
      } else {
        if (!isSameSong) { this.setSong(song); }  
        this.play();
      }
     }

     onMouseEnter(song){
     this.setState({hover: song});
     }

     onMouseLeave(song){
     this.setState({hover: song});   
     }


     render() {
       return (
        <section className="album">       
        <section id="album-info">
        <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
           <div className="album-details">
             <h1 id="album-title">{this.state.album.title}</h1>
             <h2 className="artist">{this.state.album.artist}</h2>
             <div id="release-info">{this.state.album.releaseInfo}</div>
           </div>
        </section>
        <table id="song-list">
           <colgroup>
             <col id="song-number-column" />
             <col id="song-title-column" />
             <col id="song-duration-column" />
           </colgroup>  
           <tbody>
           {this.state.album.songs.map( (song, index) => {
              return (
                <tr className="song" key={index} onClick={() => this.handleSongClick(song)} 
                  onMouseEnter={()=> this.onMouseEnter(song, index)}
                  onMouseLeave={()=> this.onMouseLeave(song, index)}>
                  <td className= "songs-number">
                  {(()=> {
                    //if I mouse over a song that is currently playing 
                    //display pause button 
                    if(this.state.hover && this.state.isPlaying===song){
                      return (
                      <span className="icon ion-md-pause"></span>
                      );
                      }
                     //if I mouse over a song that is paused 
                     // display play button
                      else if(this.state.hover && this.state.setSong){
                      return (<span className="icon ion-md-play"></span>
                       );
                      }
    
                      else {
                        return 
                    <span>(index +1)</span>
                  }})()}
                  </td>
                  <td className= "songs-title">{song.title}</td>
                  <td className= "songs-duration">{song.duration}</td> 
             </tr>)
            })}
           </tbody> 
          </table>
         </section>
      );
    }
}

export default Album;
