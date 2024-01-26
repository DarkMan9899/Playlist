import React from "react";

const Track = ({ track, selected, onClick }) => (
    <div
        className={`track ${selected ? 'selected' : ''}`}
        onClick={() => onClick(track)}
    >
        <span>{track.name}</span>
        <span>{track.artist}</span>
    </div>
);
export default Track