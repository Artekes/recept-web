const main = document.getElementById(`main`);
let localStorage = [{
		imageURL: "https://picsum.photos/300/300",
		titleStr: "Test Recept",
		descriptionStr: "Just test recept",
		raitingInt: 8,
		timeInt: 5
	}];

function addRecept(imageURL, titleStr, descriptionStr, raitingInt, timeInt) { // function to add recepts to localStorage
	let recipeInfo = {
		imageURL: imageURL,
		titleStr: titleStr,
		descriptionStr: descriptionStr,
		raitingInt: raitingInt,
		timeInt: timeInt
	};
	localStorage.push(recipeInfo);
	console.log(localStorage);
}

function loadRecepts() {
	let innerHTML = "";
	localStorage.forEach(element => {
		innerHTML += `<section>
						   <img src="${element.imageURL}">
						   <h2 class="title">${element.titleStr}</h2>
						   <p class="description">${element.descriptionStr}</p>
						   <div> 
						   	   <button onclick="addRecept('https://picsum.photos/300/300', 'Test Recept', 'Just test recept', 8, 50);">Дивитись рецепт</button>
						   	   <span class="raiting"><i class="fa-regular fa-star"></i>${element.raitingInt}/10</span>
						   	   <span class="time"><i class="fa-regular fa-clock"></i>${element.timeInt}хв</span>
						   </div>
					   </section>`;}); // CHANGE ONCLICK PARAMETR IN BUUTON
	main.innerHTML = innerHTML;
}

setInterval(loadRecepts, 1000);