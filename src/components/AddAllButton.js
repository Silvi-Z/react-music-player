import React from 'react';
import {Button, PlayIcon} from "../styled";

function AddAllButton() {
    return (
        <Button onClick={() => console.log('Add all songs to queue')}>
            <PlayIcon src={"/add.png"}/>
            Add All
            <PlayIcon down src="/play.png" alt=""/>
        </Button>
    );
}

export default AddAllButton;