const musicPlaylist = [
    "Tom Sawyer",
    "Sabotage",
    "I Wanna Dance With Somebody",
    "Don't Speak",
    "Bulls On Parade",
    "Thriller",
    "The Breaks",
    "Brick",
    "Aeroplane Over the Sea",
    "Tubthumping"
];

// Removing the first and last element
musicPlaylist.shift();
musicPlaylist.pop();
console.log("Removing the first element");
console.log(musicPlaylist);

// Adding new element at the end of the array
musicPlaylist.push(musicPlaylist[0]);
console.log("Adding one element at the end");
console.log(musicPlaylist);

// Adding two elements at the beginning of the array
console.log("Adding two elements at the beginning");
musicPlaylist.unshift(musicPlaylist[0], musicPlaylist[1]);
console.log(musicPlaylist);