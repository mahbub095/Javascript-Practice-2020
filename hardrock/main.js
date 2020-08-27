
document.getElementById('search').addEventListener("click", function(){
    const songName = document.getElementById("song-name").value;
    if (songName === "") {
        alert("Please Enter song Name");
    }
    else {
        fetch(`https://api.lyrics.ovh/suggest/${songName}`)
        .then(response => response.json())
        .then(data => {
            const song_title = data.data.map(song_title => song_title.title);
            const song_name = data.data.map(song_name => song_name.artist.name);
            var template = " ";
            for (let i = 0; i < 10; i++){
                const title = song_title[i];
                const name = song_name[i];
                const parentItem = `<div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 >${title}</h3>
                    <p class="author lead"> Album by <span>${name}</span></p>
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick="getLyrics('${name}', '${title}')" class="btn btn-success">Get Lyrics</button>
                </div>
            </div>`
                template += parentItem;
            }
            document.getElementById("parent").innerHTML = template;
        })
        .catch(error => console.log(error));
    }
})

// Lyrics API
function getLyrics(artist, songTitle){
    fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)
    .then(res => res.json())
    .then(lyricsData => {
        const lyrics = lyricsData.lyrics;
        const lyricesDisplay = document.getElementById('lyricsArea');
        if (lyrics === undefined){
            lyricesDisplay.innerHTML = `<h2 class="text-success mb-4">${artist} - ${songTitle}</h2>
                                        <pre class="lyric text-white">Sorry, Lyrics are unavailable</pre>`
        } else {
            lyricesDisplay.innerHTML = `<h2 class="text-success mb-4">${artist} - ${songTitle}</h2>
                                    <pre class="lyric text-white">${lyrics}</pre>`
        }
    })
}





 