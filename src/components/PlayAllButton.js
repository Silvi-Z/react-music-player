import React from 'react';
import {Button, PlayIcon} from "../styled";

function PlayAllButton() {
    return (
        <Button onClick={() => console.log('Play all songs')}>
            <PlayIcon src="/play.png" alt=""/>
            Play All
            <PlayIcon down src="/play.png" alt=""/>
        </Button>
    );
}

export default PlayAllButton;