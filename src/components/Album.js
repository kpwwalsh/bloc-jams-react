
import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

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
        isPaused: true,
        hover: false
      };

      this.audioElement = document.createElement('audio');
      this.audioElement.src = album.songs[0].audioSrc;
      }

      play(song) {
      this.audioElement.play();
      this.setState({ isPlaying: song });
      }

      pause(song) {
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
        this.pause(song);
      } else {
        if (!isSameSong) { this.setSong(song); }  
        this.play(song);
      }
     }

     handlePrevClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex - 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const newIndex = Math.max(0, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play();
    }

     onMouseEnter(song){
     this.setState({hover: song});
     }

     onMouseLeave(song){
     this.setState({hover: false});   
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
                    //if a song is playing display the pause button in place of number
                    if(this.state.hover===song && this.state.isPlaying!==song){
                      return (
                      <span className="icon ion-md-play"></span>
                      );
                      }

                     //if I mouse over a song that is paused 
                     // display play button
                     else if(this.state.isPlaying===song){
                      return (<span className="icon ion-md-pause"></span>
                       );
                      }

                      else { return (index + 1)};
                  })()}
                  </td>
                  <td className= "songs-title">{song.title}</td>
                  <td className= "songs-duration">{song.duration}</td> 
                </tr>)
            })}
           </tbody> 
          </table>
         <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
         />
         </section>
      );
    }
}

export default Album;
