import React from 'react';
import SongList from '../components/SongList';
import Song from '../components/Song';

class SongBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    };
    //TODO bind things here
  }

  //TODO load API on componentDidMount

  //TODO fill render
  render(){
    return (
      <h1>HELLO I AM A SONG BOX</h1>
    )
  }
}

export default SongBox;
