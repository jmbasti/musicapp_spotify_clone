import React from 'react';
const SongDetailRightMenu = () => {
  return (
    <ul
      id="menu"
      className="list-group"
      style={{
        backgroundColor: '#23232c',
        zIndex: 1,
        position: 'absolute',
        right: 95,
        top: 20
      }}
    >
      <li
        className="list-group-item"
        style={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        Start Radio
      </li>
      <li
        className="list-group-item"
        style={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        Save to your Library
      </li>
      <li
        className="list-group-item"
        style={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        Add to Queue
      </li>
      <li
        className="list-group-item"
        style={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        Add to Playlist
      </li>
      <li
        className="list-group-item"
        style={{ backgroundColor: 'transparent', color: '#fff' }}
      >
        Copy Song Link
      </li>
    </ul>
  );
};

export default SongDetailRightMenu;
