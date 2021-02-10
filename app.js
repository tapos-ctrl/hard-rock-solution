const hordRock = () => {
    const songSearch = document.getElementById('search-song').value;
    const url = `https://api.lyrics.ovh/suggest/:${songSearch}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayHord(data.data))
        .catch(error => display(error));
}

const display = error => {
    const errorDiv = document.getElementById('error');
    errorDiv.innerText = error;
}

// const hordRock = async () => {
//     const songSearch = document.getElementById('search-song').value;
//     const url = `https://api.lyrics.ovh/suggest/:${songSearch}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayHord(data.data);
// }

const displayHord = data => {
    const songBox = document.getElementById('display-song');
    songBox.innerHTML = '';
    data.forEach(song => {
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button onclick="getLyric('${song.artist.name}', '${song.title}')" class="btn btn-success">Get Lyrics</button>
        </div>
        
        <audio controls>
            <source src="${song.preview}" type="audio/mpeg">
        </audio>
        `
        songBox.appendChild(songDiv);
    });
}
// then use 
const getLyric = (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayLyric(data.lyrics));

}
// const getLyric = async (artist, title) => {
//     const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

//     // try {


//     // }
//     // catch (error) {
//     //     display('Sorry!')
//     // }
//     const res = await (url);
//     const data = await res.json();
//     displayLyric(data.lyrics);



// }


const displayLyric = lyrics => {
    const lyricsDiv = document.getElementById('song-lyrics');
    lyricsDiv.innerText = lyrics;
}