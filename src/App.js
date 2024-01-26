import React, {useEffect, useState} from 'react'
import SongList from "./components/Songlist";
import {Button, ButtonsRow, PlayIcon, Search, Icon, Wrapper} from "./styled";
import PlayAllButton from "./components/PlayAllButton";
import AddAllButton from "./components/AddAllButton";
import MusicUploadForm from "./components/MusicUploadForm";

function App() {
    const [songs, setSongs] = useState([
        {
            songName: 'Halo',
            artistName: 'Blackbird Blackbird',
            trackNumber: 1,
            file: null // This will hold the uploaded file data
        },
        {
            songName: 'Blind',
            artistName: 'Blackbird Blackbird',
            trackNumber: 2,
            file: null // This will hold the uploaded file data
        },
        {
            songName: 'Twin Flames',
            artistName: 'Blackbird Blackbird',
            trackNumber: 4,
            file: null // This will hold the uploaded file data
        }
    ]);   // Fetch the songs from API when the component mounts

    const uploadFile = (file) => {
        let lastSong = songs[songs.length-1]
        setSongs(song=>[...songs, {
            songName: file.name,
            artistName: 'Blackbird Blackbird',
            trackNumber: lastSong.trackNumber +1,
            file: file
        }])
    }

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        const filteredSongs = songs.filter((song) =>
            song.songName.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        searchTerm.length > 0 ? setSongs(filteredSongs) : setSongs([
            {
                songName: 'Halo',
                artistName: 'Blackbird Blackbird',
                trackNumber: 1,
                file: null // This will hold the uploaded file data
            },
            {
                songName: 'Blind',
                artistName: 'Blackbird Blackbird',
                trackNumber: 2,
                file: null // This will hold the uploaded file data
            },
            {
                songName: 'Twin Flames',
                artistName: 'Blackbird Blackbird',
                trackNumber: 4,
                file: null // This will hold the uploaded file data
            }
        ])
    }, [searchTerm]);



    // search(re, testString);
    return (
        <Wrapper>
            <h1>Music Player</h1>
            <ButtonsRow>
                <div>
                    <PlayAllButton onClick={() => console.log('Play All clicked')}/>
                    <AddAllButton onClick={() => console.log('Add All clicked')}/>
                </div>
                <div>
                    <Button>
                        <Icon src="/sort.svg"/>
                        Track Number
                        <PlayIcon down src="/play.png" alt=""/>
                    </Button>
                    <Search onChange={handleSearch}>
                        <input placeholder={'Filter'}/>
                    </Search>
                </div>
            </ButtonsRow>
            <SongList songs={songs}/>
            <MusicUploadForm
                onUpload={(file) => uploadFile(file)}
            />
        </Wrapper>
    );
}

export default App;
