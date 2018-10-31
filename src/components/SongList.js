import React from 'react';
import Song from './Song';

const SongList = (props) => {
  const songNodes = props.songs.map(song =>{
    return (
      <li>{song.title.label}</li>
    )
  })

  return (
    <div className="song-list">
    <h1>Current Top 20 Songs in the UK</h1>
    <ol>
    {songNodes}
    </ol>
    </div>
  );
}

export default SongList;
