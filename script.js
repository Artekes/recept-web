const main = document.getElementById(`main`);
let localStorage = [];

function addRecept(imageURL, titleStr, descriptionStr, raitingInt, timeInt) { // function to add recepts to localStorage
	localStorage.push({
		imageURL: imageURL,
		titleStr: titleStr
		descriptionStr: descriptionStr,
		raitingInt: raitingInt,
		timeInt: timeInt});
}

function loadRecepts() {
	let innerHTML = "";
	localStorage.foreach(element => {
		innerHTML += `<section>
						   <img src="${element.imageURL}">
						   <h2 class="title">${element.titleStr}</h2>
						   <p class="description">${element.descriptionStr}</p>
						   <div>
						   	   <a href=""><button>Дивитись рецепт</button></a>
						   	   <span class="raiting"><i class="fa-regular fa-star"></i>${element.raitingInt}/10</span>
						   	   <span class="time"><i class="fa-regular fa-clock"></i>${element.timeInt}хв</span>
						   </div>
					   </section>`;});
	main.innerHTML = innerHTML;
}