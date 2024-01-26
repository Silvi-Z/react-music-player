# React Music Player Interface with Music Upload Form

## Overview of Component Structure

Components:

1. *SongList*: Displays the list of songs.
2. *SongRow*: Renders individual song details within SongList.
3. *PlayAllButton*: Initiates playing all songs.
4. *AddAllButton*: Adds all songs to a queue.
5. *MusicUploadForm*: Allows users to upload music files.

## State Management Approach

We are using the **React Context API** for state management in this application. The state is stored in a central store and is manipulated using actions and reducers.

## Instructions to Run the Application Locally

1. Clone the repository to your local machine using `git clone https://github.com/Silvi-Z/react-music-player.git`.
2. Navigate to the project directory using `cd react-music-player`.
3. Install the necessary dependencies using `npm install`.
4. Start the application using `npm start`.
5. The application should now be running at `http://localhost:3000`.

## Additional Features

1. The UI is responsive.
2. The application handles file selection and button state changes as if it were a real feature.
3. Visual feedback is provided for the user during the "upload" process, such as a progress bar.
4. Error handling is included in the form to simulate and display upload errors.
