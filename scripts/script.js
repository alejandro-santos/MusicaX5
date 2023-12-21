document.addEventListener('DOMContentLoaded', function() {
    const audio = new Audio();
    const playlists = {
        playlist1: {
            folder: "/MusicaX5/Music/",
            songs: [
                "The First Layer.mp3", "Tomorrow.mp3", "TOMORROWLAND.mp3",
                "Transcendance and Hanezeve.mp3", "Underground River.mp3", "VOH.mp3",
                "You talk too much.mp3", "BELAF LULLABY.mp3", "CAPITAL OF THE UNRETURNED.mp3",
                "EYES OF IRUMYUUI.mp3", "Faith.mp3", "GRAVITY.mp3", "Hanezeve Caradhina.mp3",
                "OLD STORIES.mp3", "OUNI.mp3", "reBirth.mp3"
              ],
              albumCover: "/MusicaX5/AlbumCover/MAB3.jpg"
            
        },
        playlist2: {
            folder: "/MusicaX5/Tainy/",
            songs: [
                "LA BABY.mp3", "Lo Siento BB.mp3", "mañana.mp3", "me jodi....mp3",
                "MOJABI GHOST.mp3", "obstáculo.mp3", "PARANORMAL.mp3", "PASIEMPRE.mp3",
                "SACRIFICIO.mp3", "Sci-Fi.mp3", "si preguntas por mi.mp3", "Todavía.mp3",
                "VOLVER.mp3", "11 Y ONCE.mp3", "BUENOS AIRES.mp3", "COLMILLO.mp3",
                "CORLEONE INTERLUDE.mp3", "desde las 10 (KANY’S INTERLUDE).mp3", "EN VISTO.mp3",
                "FANTASMA AVC.mp3"
              ],
              albumCover: "/MusicaX5/AlbumCover/DATA.jpg"
        },
        playlist3: {
            folder: "/MusicaX5/Unreal Unearth/",
            songs: [
                "I, Carrion (Icarian).mp3", "Son of Nyx.mp3",
                "To Someone From A Warm Climate (Uiscefhuaraithe).mp3", "Unknown Nth.mp3",
                "Who We Are.mp3", "Abstract (Psychopomp).mp3", "All Things End.mp3",
                "Anything But.mp3", "Butchered Tongue.mp3", "Damage Gets Done.mp3",
                "De Selby (Part 1).mp3", "De Selby (Part 2).mp3", "Eat Your Young.mp3",
                "First Light.mp3", "First Time.mp3", "Francesca.mp3", "In The Woods Somewhere.mp3"
              ]
              ,albumCover: "/MusicaX5/AlbumCover/UnrealUnearth.jpg"
        },
        playlist4: {
            folder: "/MusicaX5/Noah Kahan/",
            songs: [
                "Come Over.mp3", "Dial Drunk.mp3", "Everywhere, Everything.mp3",
                "Growing Sideways.mp3", "Halloween.mp3", "Homesick.mp3",
                "New Perspective.mp3", "No Complaints.mp3", "Northern Attitude.mp3",
                "Orange Juice.mp3", "Paul Revere.mp3", "She Calls Me Back.mp3",
                "Stick Season.mp3", "Still.mp3", "Strawberry Wine.mp3",
                "The View Between Villages - Extended.mp3", "The View Between Villages.mp3",
                "You’re Gonna Go Far.mp3", "Your Needs, My Needs.mp3", "All My Love.mp3",
                "Call Your Mom.mp3"
              ],
              albumCover: "/MusicaX5/AlbumCover/StickSeason.jpg"
        },
        playlist5: {
            folder: "/MusicaX5/Cry/",
            songs: [
                "Heavenly.mp3", "Hentai.mp3", "Kiss It Off Me.mp3", "Pure.mp3",
                "Touch.mp3", "You're the Only Good Thing In My Life.mp3",
                "Cry.mp3", "Don't Let Me Go.mp3", "Falling In Love.mp3", "Sunsetz.mp3", 
                "Sweet.mp3", "Truly.mp3", "Young & Dumb.mp3",
                "Apocalypse.mp3", "Each Time You Fall in Love.mp3", "Flash.mp3",
                "John Wayne.mp3", "K..mp3", "Opera House.mp3"
              ],
              albumCover: "/MusicaX5/AlbumCover/CAS.jpg"
        },

        playlist6: {
            folder: "/MusicaX5/17/",
            songs: ["The Explanation.mp3", "Jocelyn Flores.mp3", 
            "Depression & Obsession.mp3", "Everybody Dies in Their Nightmares.mp3", "Revenge.mp3", "Save Me.mp3", "Dead Inside (Interlude).mp3", 
            "Fuck Love.mp3", "Carry On.mp3", "Orlando.mp3", 
            "Ayala (Outro).mp3"]
            ,
              albumCover: "/MusicaX5/AlbumCover/17.png"
        },

        playlist7: {
            folder: "/MusicaX5/XXXTENTACION/",
            songs: ["Introduction (instructions).mp3", "ALONE, PART 3.mp3", "Moonlight.mp3", "SAD!.mp3", 
            "the remedy for a broken heart (why am I so in love).mp3", "Floor 555.mp3", "NUMB.mp3", "infinity (888) - feat. Joey Bada$$.mp3", "going down!.mp3", 
            "Pain = BESTFRIEND (feat. Travis Barker).mp3", "$$$.mp3", "love yourself (interlude).mp3", "SMASH! - feat. PnB Rock.mp3",
             "I dont even speak spanish lol.mp3", "changes.mp3", 
            "Hope.mp3", "schizophrenia.mp3", "before I close my eyes.mp3"]

            ,
              albumCover: "/MusicaX5/AlbumCover/XXXTENTACION.png"
        },

        playlist8: {
            folder: "/MusicaX5/Sleep/",
            songs: [
                "Present.mp3", "Remnants of Departed Days.mp3", "Reverence.mp3", 
                "She Passed Away Alone At Sea.mp3", "Stjärna.mp3", "The Highlands Walk.mp3", 
                "The Illusion of Motion.mp3", "The Light Dances Around Our Feet.mp3", 
                "To the Child Drifting Out At Sea.mp3", "When I Look Down on Your Grave.mp3", 
                "You Are Quietly Disappearing Before Me.mp3", 
                "A Cold Memory of You That's Beginning To Freeze Over.mp3", "After The Rain.mp3", 
                "Aftonland.mp3", "April.mp3", "As We Lose Sight of the Place We Once Longed For.mp3", 
                "At 25,000 Miles Per Hour.mp3", "Broken Air.mp3", "Coalesce.mp3", 
                "I Am Beyond Sorry (For Everything).mp3", "I Could Almost Feel You.mp3", 
                "Jacob and the Stone.mp3", "Lullaby.mp3", "Memories Are All That I Have Left.mp3", 
                "Part Of Me, Apart From Me.mp3"
              ],
              albumCover: "/MusicaX5/AlbumCover/owsey.jpg"
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



    // Load selected playlist and update album cover
function loadPlaylist(playlistName) {
    currentFolder = playlists[playlistName].folder;
    currentPlaylist = playlists[playlistName].songs;
    currentSong = 0;
    populatePlaylistUI();
    updateAlbumCover(playlists[playlistName].albumCover);
}

// Update the album cover
function updateAlbumCover(coverPath) {
    const albumCover = document.getElementById('album-cover');
    albumCover.src = coverPath;
}

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





