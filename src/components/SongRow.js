import React from 'react';
import {Icon, PlayIcon} from "../styled";

function SongRow({ song }) {
    return (
        <tr>
            <td><PlayIcon src={'/play.png'}/></td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.trackNumber}</td>
            <td>
                <Icon src="/heart.svg" alt=""/>
                <Icon src="/check.svg" alt=""/>
                <Icon src="/forward.svg" alt=""/>
                <Icon src="/play.png" alt=""/>
            </td>
        </tr>
)
    ;
}

export default SongRow;