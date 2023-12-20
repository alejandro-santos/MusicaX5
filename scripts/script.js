document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio();
    const playlists = {
        playlist1: {
            folder: "/Music/",
            songs: [
                "The First Layer.mp3", "Tomorrow.mp3", "TOMORROWLAND.mp3",
                "Transcendance and Hanezeve.mp3", "Underground River.mp3", "VOH.mp3",
                "You talk too much.mp3", "BELAF LULLABY.mp3", "CAPITAL OF THE UNRETURNED.mp3",
                "EYES OF IRUMYUUI.mp3", "Faith.mp3", "GRAVITY.mp3", "Hanezeve Caradhina.mp3",
                "OLD STORIES.mp3", "OUNI.mp3", "reBirth.mp3"
              ]
        },
        playlist2: {
            folder: "/Tainy/",
            songs: [
                "LA BABY.mp3", "Lo Siento BB.mp3", "mañana.mp3", "me jodi....mp3",
                "MOJABI GHOST.mp3", "obstáculo.mp3", "PARANORMAL.mp3", "PASIEMPRE.mp3",
                "SACRIFICIO.mp3", "Sci-Fi.mp3", "si preguntas por mi.mp3", "Todavía.mp3",
                "VOLVER.mp3", "11 Y ONCE.mp3", "BUENOS AIRES.mp3", "COLMILLO.mp3",
                "CORLEONE INTERLUDE.mp3", "desde las 10 (KANY’S INTERLUDE).mp3", "EN VISTO.mp3",
                "FANTASMA AVC.mp3"
              ]
        }
        // Add more playlists as needed
    };
    
    let currentPlaylist = playlists.playlist1.songs; // Default playlist songs
    let currentFolder = playlists.playlist1.folder; // Default playlist folder
    let currentSong = 0;
    let isPlaying = false;
    let isShuffle = false;
    let isRepeat = false;

    // Load selected playlist
    function loadPlaylist(playlistName) {
        currentFolder = playlists[playlistName].folder;
        currentPlaylist = playlists[playlistName].songs;
        currentSong = 0;
        populatePlaylistUI();
    }

    // Populate playlist UI
    function populatePlaylistUI() {
        const songList = document.getElementById('song-list');
        songList.innerHTML = ''; // Clear existing list
        currentPlaylist.forEach((song, index) => {
            let li = document.createElement('li');
            li.textContent = song;
            li.onclick = () => playSong(index);
            songList.appendChild(li);
        });
    }

    // Handle playlist selection
    document.getElementById('playlist-selector').addEventListener('change', function() {
        loadPlaylist(this.value);
    });

    // ... existing event listeners and functions ...

    // Call loadPlaylist initially to load the default playlist
    loadPlaylist('playlist1');



    function updateCurrentSongUI() {
        const songListItems = document.querySelectorAll('#song-list li');
        songListItems.forEach((item, index) => {
            if (index === currentSong) {
                item.classList.add('current-song');
            } else {
                item.classList.remove('current-song');
            }
        });
    }

// Play a specific song
function playSong(index) {
    currentSong = index;
    audio.src = `${currentFolder}${currentPlaylist[currentSong]}`;
    audio.play();
    isPlaying = true;
    updateCurrentSongUI();
}


// Function to toggle play/pause
function togglePlayPause() {
    if (audio.paused || audio.ended) {
        audio.play();
    } else {
        audio.pause();
    }
}

// Event listener for keypresses
document.addEventListener('keydown', function(event) {
    if (event.shiftKey) { // Check if the Shift key is held down
        switch(event.code) {
            case 'ArrowLeft': // Shift + Left Arrow
                playPreviousSong();
                break;
            case 'ArrowRight': // Shift + Right Arrow
                playNextSong();
                break;
        }
    } else { // Regular keypresses without the Shift key
        switch(event.code) {
            case 'Space': // Spacebar
                togglePlayPause();
                break;
            case 'ArrowLeft': // Left Arrow
                audio.currentTime = Math.max(0, audio.currentTime - 10);
                break;
            case 'ArrowRight': // Right Arrow
                audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
                break;
            case 'ArrowUp': // Up Arrow
                audio.volume = Math.min(1, audio.volume + 0.05);
                updateVolumeSlider();
                break;
            case 'ArrowDown': // Down Arrow
                audio.volume = Math.max(0, audio.volume - 0.05);
                updateVolumeSlider();
                break;
            // ... other key controls ...
        }
    }
});


// ... existing code ...

// Populate playlist UI
function populatePlaylistUI() {
    const songList = document.getElementById('song-list');
    songList.innerHTML = ''; // Clear existing list
    currentPlaylist.forEach((song, index) => {
        let li = document.createElement('li');
        li.textContent = song.replace('.mp3', ''); // Remove the '.mp3' extension
        li.onclick = () => playSong(index);
        songList.appendChild(li);
    });
}

// ... existing code ...


// Update the volume slider to reflect the current volume
function updateVolumeSlider() {
    const volumeSlider = document.getElementById('volume-slider');
    volumeSlider.value = audio.volume;
}

// Play the next song in the playlist
function playNextSong() {
    currentSong = (currentSong + 1) % currentPlaylist.length;
    playSong(currentSong);
}

// Play the previous song in the playlist
function playPreviousSong() {
    currentSong = (currentSong - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentSong);
}

// Next song button event
document.getElementById('next').addEventListener('click', function() {
    playNextSong();
});

// Previous song button event
document.getElementById('prev').addEventListener('click', function() {
    playPreviousSong();
});














    const progressBar = document.getElementById('progress-bar');

    // Update progress bar as the song plays
    audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    });

    // Seek functionality
    progressBar.addEventListener('input', function() {
    const time = (progressBar.value * audio.duration) / 100;
    audio.currentTime = time;
    });

        

    const volumeSlider = document.getElementById('volume-slider');

    // Update volume as the slider is moved
    volumeSlider.addEventListener('input', function() {
        audio.volume = volumeSlider.value;
    });






















    // Shuffle button
    const shuffleButton = document.getElementById('shuffle');
    shuffleButton.addEventListener('click', function() {
        isShuffle = !isShuffle;
        shuffleButton.classList.toggle('button-active', isShuffle);
    });

    // Repeat button
    const repeatButton = document.getElementById('repeat');
    repeatButton.addEventListener('click', function() {
        isRepeat = !isRepeat;
        audio.loop = isRepeat;
        repeatButton.classList.toggle('button-active', isRepeat);
    });


    // Rewind function
    document.getElementById('rewind').addEventListener('click', function() {
        audio.currentTime = Math.max(0, audio.currentTime - 10);
    });

    // Play/Pause function
    document.getElementById('play').addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
        } else {
            audio.play();
            isPlaying = true;
        }
    });

    

    // Handle end of song
    audio.addEventListener('ended', function() {
        if (isShuffle) {
            playSong(Math.floor(Math.random() * playlist.length));
        } else if (!isRepeat) {
            currentSong = (currentSong + 1) % playlist.length;
            playSong(currentSong);
        }
    });



    
});





