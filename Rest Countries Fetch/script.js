var countries = fetch("https://restcountries.eu/rest/v2/all");
var containerDiv=document.createElement('div');
containerDiv.setAttribute('class','container justify-content-xl-center');
countries.then((response) => {
    return response.json();
}).then((value) => {
    var len = value.length;
    for (let i = 0; i < Math.ceil(len / 4); i++) {
        var div = document.createElement("div");
        div.setAttribute("class", "row mb-5");
        for (let j = i * 4; j < i * 4 + 4; j++) {
            if (j < 250) {
                var card = document.createElement("div");
                card.setAttribute("class", "card");
                card.classList.add("col-xl-2");
                card.classList.add("col-lg-2");
                card.classList.add("col-md-2");
                card.classList.add("offset-xl-1");
                card.classList.add("offset-lg-1");
                card.classList.add("offset-md-1");
                card.classList.add("col-sm-12");
                card.classList.add("mb-sm-5");
                card.classList.add("col-xs-12");
                card.classList.add("mb-xs-5");
                card.classList.add("col-12");
                card.classList.add("mb-5");

                var countryPara = document.createElement("p");
                countryPara.innerHTML = `${j + 1}.)${value[j].name}`;
                card.appendChild(countryPara);
                var imgDiv = document.createElement("div");
                imgDiv.setAttribute("class", "image");
                imgDiv.classList.add("mb-xl-5");
                imgDiv.classList.add("mb-lg-5");
                imgDiv.classList.add("mb-md-5");
                imgDiv.classList.add("mb-sm-5");
                imgDiv.classList.add("mb-xs-5");
                var img = document.createElement("img");
                img.setAttribute("class", "flag");
                img.src = `${value[j].flag}`;
                imgDiv.appendChild(img);
                card.appendChild(imgDiv);
                var capitalPara = document.createElement("p");
                capitalPara.innerHTML = `Capital :${value[j].capital}`;
                card.appendChild(capitalPara);
                var currencyPara = document.createElement("p");
                if (value[j].currencies.length > 1) {
                    currencyPara.innerHTML = `Currency: ${value[j].currencies[0].name} ,${value[j].currencies[1].name} etc..`;
                } else {
                    currencyPara.innerHTML = `Currency: ${value[j].currencies[0].name}`;
                }
                card.appendChild(currencyPara);
                var populationp = document.createElement("p");
                populationp.innerHTML = `Population: ${value[j].population}`;
                card.appendChild(populationp);
                div.appendChild(card);
            }
        }
        containerDiv.appendChild(div);        
        document.body.append(containerDiv);
    }
}).catch((error) => console.log(error));