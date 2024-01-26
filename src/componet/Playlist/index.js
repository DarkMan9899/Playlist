import React from "react";
import PlaylistHeader from "../PlaylistHeader";
import PlaylistFilter from "../PlaylistFilter";
import PlaylistTracks from "../PlaylistTracks";

const Playlist = () => {
    const [filter, setFilter] = React.useState('');
    const [currentTrack, setCurrentTrack] = React.useState(tracks[0]);

    const songs = ['Halo', 'Blind', 'Twin Flames', 'Left to Hurt'];
    const tracks = [
        { name: 'Halo', artist: 'Blackbird Blackbird' },
        { name: 'Blind', artist: 'Blackbird Blackbird' },
        { name: 'Twin Flames', artist: 'Blackbird Blackbird' },
        { name: 'Left to Hurt', artist: 'Blackbird Blackbird' },
        { name: 'Starlight', artist: 'Blackbird Blackbird' },
        { name: 'Modern Disbelief', artist: 'Blackbird Blackbird' },
    ];

    const filteredTracks = tracks.filter((track) =>
        track.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleTrackClick = (track) => {
        setCurrentTrack(track);
    };

    const handleFilterChange = (value) => {
        setFilter(value);
    };

    return (
        <div className="playlist">
            <PlaylistHeader songs={songs} currentTrack={currentTrack} />
            <PlaylistFilter onFilterChange={handleFilterChange} />
            <PlaylistTracks tracks={filteredTracks} onTrackClick={handleTrackClick} />
        </div>
    );
};

export default Playlist;