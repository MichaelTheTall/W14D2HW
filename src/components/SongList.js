import React from 'react';
import Song from './Song';

const SongList = (props) => {
  // const songNodes = this.props.data.map()

  return (
    <div className="song-list">
    <ul>
    <Song />
    </ul>
    </div>
  );
}

export default SongList;
