// Importing necessary modules and components from React and styled components
import React, {useRef, useState} from 'react';
import {Button, FileUpload, FileUploadForm, ProcessLine} from "../styled";

function MusicUploadForm({onFileChange, onUpload}) {
    const [file, setFile] = useState(null); // State for the selected file
    const [error, setError] = useState(null); // State for error handling
    const myBar = useRef() // Reference to the progress bar

    // Function to handle file selection
    const handleFileChange = (e) => {
        setError(null)
        setFile(null)
        let width = 0;
        let id = setInterval(frame, 10); // Setting an interval to update progress bar

        function frame() {
            if (width >= 100) { // If progress is 100%, clear interval and set file state
                clearInterval(id);
                const selectedFile = e.target.files[0];
                if (!selectedFile) {
                    setError('No file selected');
                    return;
                }
                if (!selectedFile.name.match(/\.(mp3|wav)$/)) {
                    setError('Invalid file format. Please select a .mp3 or .wav file.');
                    return;
                }
                setFile(selectedFile);
                onFileChange(selectedFile);
            } else { // Else, increase width and update progress bar
                width++;
                myBar.current.style.width = width + '%';
            }
        }
    };

    // Function to handle file upload
    const handleUpload = () => {
        // Simulating upload process with timeout
        if (!file) {
            setError('No file to upload');
            return;
        }
        console.log('Uploading...', file.name);
        setTimeout(() => {
            console.log('Upload complete');
            onUpload(file);
        }, 2000);
    };

    return (
        <FileUploadForm>
            <h2 id="formTitle">Upload Music</h2>
            <div>
                <p id="fileSupportInfo">Files Supported: .MP3, .WAV</p>
                <FileUpload>
                    <input
                        type="file"
                        accept=".mp3, .wav"
                        onChange={handleFileChange}
                        aria-labelledby="fileSupportInfo formTitle"
                        aria-required="true"
                    />
                    Choose file
                </FileUpload>
                <ProcessLine>
                    <div ref={myBar} style={{height: "24px", width: "0", background: '#e4e4e4'}}></div>
                </ProcessLine>
                {file && <p>Selected File: {file.name}</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                <Button disabled={!file} onClick={handleUpload}>
                    Upload
                </Button>
            </div>
        </FileUploadForm>
    );
}

export default MusicUploadForm;