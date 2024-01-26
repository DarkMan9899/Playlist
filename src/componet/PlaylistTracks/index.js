import React from "react";
import Track from "../Track";

const PlaylistTracks = ({ tracks, onTrackClick }) => (
    <div className="playlist-tracks">
        {tracks.map((track, index) => (
            <Track
                key={index}
                track={track}
                selected={index === 0}
                onClick={onTrackClick}
            />
        ))}
    </div>
);
export default PlaylistTracks
