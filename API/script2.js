async function getWeather() {
    let countries = "https://restcountries.eu/rest/v2/all";
    let contRequest = await fetch(countries);
    let data = await contRequest.json();
    let len = data.length;
    let cont = document.createElement("div");
    cont.setAttribute("class", "container justify-content-xl-center");
    for (let i = 0; i < Math.ceil(len / 3); i++) {
      let div = document.createElement("div");
      div.setAttribute("class", "row mb-2");
      for (let j = i * 3; j < i * 3 + 3; j++) {
        if (j < 250) {
          let card = document.createElement("div");
          card.setAttribute("class", "card");
          card.classList.add("col-xl-3");
          card.classList.add("col-lg-3");
          card.classList.add("col-md-3");
          card.classList.add("offset-xl-1");
          card.classList.add("offset-lg-1");
          card.classList.add("offset-md-1");
          card.classList.add("col-sm-12");
          card.classList.add("mb-sm-5");
          card.classList.add("col-xs-12");
          card.classList.add("mb-xs-5");
          card.classList.add("col-12");
          card.classList.add("mb-5");
          let divincard = document.createElement("div");
          divincard.setAttribute("class", "container mt-xl-3");
          let countrynamep = document.createElement("p");
          countrynamep.innerHTML = `${j + 1}.)${data[j].name}`;
          divincard.appendChild(countrynamep);
          let imgDiv = document.createElement("div");
          imgDiv.setAttribute("class", "image");
          imgDiv.classList.add("mb-xl-5");
          imgDiv.classList.add("mb-lg-5");
          imgDiv.classList.add("mb-md-5");
          imgDiv.classList.add("mb-sm-5");
          imgDiv.classList.add("mb-xs-5");
          let img = document.createElement("img");
          img.setAttribute("class", "flag");
          img.src = `${data[j].flag}`;
          imgDiv.appendChild(img);
          divincard.appendChild(imgDiv);
          let capitalp = document.createElement("p");
          capitalp.innerHTML = `Capital :${data[j].capital}`;
          divincard.appendChild(capitalp);
          let currencyp = document.createElement("p");
          currencyp.innerHTML = `Currency: ${data[j].currencies[0].name}`;
  
          divincard.appendChild(currencyp);
          let populationp = document.createElement("p");
          populationp.innerHTML = `Population: ${data[j].population}`;
          divincard.appendChild(populationp);
          let btn = document.createElement("button");
          btn.setAttribute("class", "btn-success mt-1");
          btn.innerHTML = "Get Weather";
          btn.style.borderRadius = "5px";
          //   btn.style.width = "100px";
          btn.addEventListener("click", () => {
            getWeatherData(data[j]);
          });
          divincard.appendChild(btn);
          card.appendChild(divincard);
          div.appendChild(card);
        }
      }
      cont.appendChild(div);
      document.body.append(cont);
    }
  }
  
  async function getWeatherData(data) {
    try {
      let latlong = data.latlng;
      let lat = latlong[0];
      let long = latlong[1];
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=30d996763cb9f92ee58b98edb8959c7b`;
      let weatherRequest = await fetch(url);
      let data1 = await weatherRequest.json();
      if (data1.weather[0].main == "Clouds")
        alert(
          `The Weather is cloudy with ${
            data1.weather[0].description
          } and the Current Temprature is ${Math.ceil(
            data1.main.temp - 273
          )}Deg C`
        );
      else {
        alert(
          `The Weather is ${data1.weather[0].main} with ${
            data1.weather[0].description
          } and the Current Temprature is ${Math.ceil(
            data1.main.temp - 273
          )}Deg C`
        );
      }
    } catch {
      alert("The site cannot be reached");
    }
  }
  getWeather();