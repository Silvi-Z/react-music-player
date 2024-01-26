import React from 'react';
import SongRow from './SongRow';
import {Table} from "../styled";

function SongList({songs}) {
    return (
            <Table>
                <thead>
                <tr>
                    <th></th>
                    <th>Song List</th>
                    <th>Artist Name</th>
                    <th>Track</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {songs.map((song, index) => (
                        <SongRow key={index} song={song}/>
                    ))}
                </tbody>
            </Table>
    );
}

export default SongList;