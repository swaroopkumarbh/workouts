import { Songs } from './Songs';

var tableBody = <HTMLAnchorElement>document.getElementById("table-body");
var playListTableBody = <HTMLAnchorElement>document.getElementById("playlist-body");
var goToPlayList = <HTMLButtonElement>document.getElementById("playlist");
var table = <HTMLTableElement>document.querySelector(".table");
var playListTable = <HTMLTableElement>document.querySelector(".playlist-table");
var playList = [];
let songs;

/*Function to fetch the songs from API*/
async function getSongs() {
    try {
        playListTable.style.display = 'none';
        const result = await fetch('https://api.napster.com/v2.2/tracks/top?apikey=MzA1NmMyNDEtNDg4ZS00NTU4LWFmNWItNzIzM2U1ZDQ4N2I2');
        const data = await result.json();
        var response = data.tracks;
        response.forEach(value => {

            var row = <HTMLTableRowElement>document.createElement('tr');
            var song = <HTMLAnchorElement>document.createElement('a');
            song.innerHTML = value.name;
            song.href = value.previewURL;
            var td1 = <HTMLTableDataCellElement>document.createElement('td');
            td1.appendChild(song);
            var td2 = <HTMLTableDataCellElement>document.createElement('td');
            td2.innerHTML = value.artistName;
            var td3 = <HTMLTableDataCellElement>document.createElement('td');
            td3.innerHTML = value.albumName;
            var addToPlaylist = <HTMLButtonElement>document.createElement('button');
            addToPlaylist.setAttribute('id',  value.name + '-' +  value.previewURL);
            addToPlaylist.innerHTML = 'Add to playlist';
            addToPlaylist.setAttribute('class','btn btn-outline-primary');
            addToPlaylist.addEventListener('click', () => {
                playList.push( value.name + '-' +  value.previewURL);
            })
            var td4 = <HTMLTableDataCellElement>document.createElement('td');
            var play = <HTMLButtonElement>document.createElement('button');
                play.innerHTML = 'Play';
                play.setAttribute('class','btn btn-outline-primary');
                play.addEventListener('click',()=>{
                    location.href=value.previewURL;
                });
                td4.appendChild(play);
            var td5 = <HTMLTableDataCellElement>document.createElement('td');
            td5.appendChild(addToPlaylist);
            row.append(td1, td2, td3, td4,td5);
            tableBody.appendChild(row);
        });
        goToPlayList.addEventListener('click', () => {
            table.style.display = 'none';
            playListTable.style.display = 'table';
            goToPlayList.style.display = 'none';
            playList.forEach((value) => {
                var name=value.split('-')[0];
                var link=value.split('-')[1];
                var row = <HTMLTableRowElement>document.createElement('tr');
                let td1 = <HTMLTableDataCellElement>document.createElement('td');
                td1.innerHTML=name;
                let td2 = <HTMLTableDataCellElement>document.createElement('td');
                var play = <HTMLButtonElement>document.createElement('button');
                play.innerHTML = 'Play';
                play.setAttribute('class','btn btn-outline-primary');
                play.addEventListener('click',()=>{
                    location.href=link;
                });
                td2.appendChild(play);
                row.append(td1, td2);
                playListTableBody.appendChild(row);
            });
        });
    }
    catch{
        alert('Try after sometime');
    }
}

window.addEventListener("load", () => {
    getSongs();
});
