'use strict';

// An array of objects representing song details
const songDetails = [
    {
        title: 'Song 1',
        artist: 'Upin Ipin',
        genre: 'rock',
        duration: 1220,
    },
    {
        title: 'Song 2',
        artist: 'Upin Ipin',
        genre: 'rock',
        duration: 220,
    },
    {
        title: 'Song 3',
        artist: 'Upin Ipin',
        genre: 'rock',
        duration: 220,
    },
    {
        title: 'Song 4',
        artist: 'SpongeBob',
        genre: 'pop',
        duration: 350,
    },
    {
        title: 'Song 5',
        artist: 'SpongeBob',
        genre: 'pop',
        duration: 450,
    },
    {
        title: 'Song 6',
        artist: 'SpongeBob',
        genre: 'rock',
        duration: 1000,
    },
    {
        title: 'Song 7',
        artist: 'Upin Ipin',
        genre: 'pop',
        duration: 320,
    },
    {
        title: 'Song 8',
        artist: 'Upin Ipin',
        genre: 'hiphop',
        duration: 420,
    },
    {
        title: 'Song 9',
        artist: 'SpongeBob',
        genre: 'hiphop',
        duration: 520,
    },
    {
        title: 'Song 10',
        artist: 'Upin Ipin',
        genre: 'hiphop',
        duration: 550,
    },
];

// Function to filter songs by genre
function FilterByGenre() {
    // Set is a array function for unique data
    //from all song details, just need genre
    // Item is array per data
    const genreSong = new Set (songDetails.map(item => item.genre))
    const genreGroup = Array.from(genreSong).map(item =>{

            return {
                groupName: item,
                groupData: songDetails.filter(song => song.genre === item),
            }

    })
    return genreGroup
}

console.log(JSON.stringify(FilterByGenre(),null,2));

function FilterByArtist() {
    // Create a Set of unique artist names using the map() function on songDetails array
    const artistSong = new Set(songDetails.map(item => item.artist));

    // Convert the Set of artist names to an array and create an array of grouped artist data
    const artistGroup = Array.from(artistSong).map(item => {
        return {
            groupName: item, // The artist's name
            groupData: songDetails.filter(song => song.artist === item), // Array of songs by the artist
        };
    });

    // Return the array containing grouped artist data
    return artistGroup;
}


// Console cannot nested, 
console.log(JSON.stringify(FilterByArtist(),null,2));


// // Maximum duration for selecting random songs (1 hour = 3600 seconds)
const durationInSecond = 60 * 60; // 3600 sec

// // Function to get random songs within a given maximum duration
function GetRandomSongs(maxDurationNeeded) {
    // Filtering songs that fit within the specified maximum duration
    const eligibleSongs = songDetails.filter(song => song.duration < maxDurationNeeded);
    
    // Creating an empty array to store random songs
    const randomSongs = [];

    // Keeping track of the total duration of selected songs
    let currentDuration = 0;

    // Looping as long as the total duration of selected songs hasn't reached the maximum required duration,
    // and there are still eligible songs to choose from
    while (currentDuration < maxDurationNeeded && eligibleSongs.length > 0) {
        // Selecting a random index from the list of eligible songs
        const randomIndex = Math.floor(Math.random() * eligibleSongs.length);
        
        // Getting a song using the randomly selected index from the list of eligible songs
        const randomSong = eligibleSongs[randomIndex];

        // Checking if adding this song's duration won't exceed the maximum required duration
        if (currentDuration + randomSong.duration <= maxDurationNeeded) {
            // Adding the song to the list of random songs
            randomSongs.push(randomSong);
            
            // Adding the song's duration to the total duration of selected songs
            currentDuration += randomSong.duration;
        }

        // Removing the selected song from the list of eligible songs
        eligibleSongs.splice(randomIndex, 1);
    }

    // Returning the list of randomly selected songs
    return randomSongs;
}
function GetRandomSongs(maxDurationNeeded) {
    // Filtering songs that fit within the specified maximum duration
    const eligibleSongs = songDetails.filter(song => song.duration < maxDurationNeeded);
    
    // Creating an empty array to store random songs
    const randomSongs = [];

    // Keeping track of the total duration of selected songs
    let currentDuration = 0;

    // Looping as long as the total duration of selected songs hasn't reached the maximum required duration,
    // and there are still eligible songs to choose from
    while (currentDuration < maxDurationNeeded && eligibleSongs.length > 0) {
        // Selecting a random index from the list of eligible songs
        const randomIndex = Math.floor(Math.random() * eligibleSongs.length);
        
        // Getting a song using the randomly selected index from the list of eligible songs
        const randomSong = eligibleSongs[randomIndex];

        // Checking if adding this song's duration won't exceed the maximum required duration
        if (currentDuration + randomSong.duration <= maxDurationNeeded) {
            // Adding the song to the list of random songs
            randomSongs.push(randomSong);
            
            // Adding the song's duration to the total duration of selected songs
            currentDuration += randomSong.duration;
        }

        // Removing the selected song from the list of eligible songs
        eligibleSongs.splice(randomIndex, 1);
    }

    // Returning the list of randomly selected songs
    return randomSongs;
}


// Get random songs within the specified duration
const randomSongs = GetRandomSongs(durationInSecond);
console.log('Random Songs:', randomSongs);
