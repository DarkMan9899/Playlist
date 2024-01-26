import React from "react";

const PlaylistHeader = ({ songs, currentTrack }) => (
    <div className="playlist-header">
        <span>{songs.join(', ')}</span>
        <span>{currentTrack.name}</span>
        <span>{currentTrack.artist}</span>
        <button>Play All</button>
    </div>
);
export default PlaylistHeader