let input = document.querySelector("input");
let btn = document.getElementById("btn");

async function fetchMovieData() {
  try {
    let input = document.querySelector("input");
    let movie = input.value;
    let url = `https://www.omdbapi.com/?t=${movie}&apikey=abb0934`;
    let request = await fetch(url);
    let response = await request.json();
    let display = document.getElementById("display");
    display.classList.remove("displaynone");
    display.classList.add("displaydiv");
    display.classList.add("col-xl-12");
    let movieNamep = document.getElementById("moviename");
    movieNamep.innerHTML = `<b>${response.Title.toUpperCase()}</b>`;
    movieNamep.style.textAlign = "center";
    let image = document.querySelector(".image");
    image.src = response.Poster;
    let directorp = document.getElementById("director");
    directorp.innerHTML = `Director: ${response.Director}`;
    let movieCastp = document.getElementById("cast");
    movieCastp.innerHTML = `Cast : ${response.Actors}`;
    let leanguagep = document.getElementById("language");
    leanguagep.innerHTML = `Language : ${response.Language}`;
    let runtime = document.getElementById("runtime");
    runtime.innerHTML = `Runtime: ${response.Runtime}`;
    let release = document.getElementById("release");
    release.innerHTML = `Release Date : ${response.Released}`;
    let imdb = document.getElementById("Imdb");
    imdb.innerHTML = `IMDB Rating : ${response.imdbRating}`;
    let headingOne = document.querySelector("h1");
    headingOne.classList.add("displaynone");
  } catch {
    if (response.Title == null || response.Title == undefined) {
      display.classList.add("displaynone");

      let h1 = document.querySelector("h1");
      h1.classList.remove("displaynone");
    }
  }
}

input.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    fetchMovieData();
  }
});
btn.addEventListener("click", () => {
  fetchMovieData();
});