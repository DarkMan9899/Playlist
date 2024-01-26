import React from "react";

const PlaylistFilter = ({ onFilterChange }) => (
    <div className="playlist-filter">
        <input
            type="text"
            placeholder="Q Filter"
            onChange={(e) => onFilterChange(e.target.value)}
        />
    </div>
);
export default PlaylistFilter