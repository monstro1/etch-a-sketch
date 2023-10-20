const gridContainer = document.querySelector("#grid-container");

function makeGrid(size) {
	for (let i = 0; i < size; i++) {
		let rowDiv = document.createElement("div");
		rowDiv.classList.add("row");
		gridContainer.appendChild(rowDiv);
		for (let j = 0; j < size; j++) {
			let gridBox = document.createElement("div");
			rowDiv.appendChild(gridBox);
			gridBox.addEventListener("mouseover", function() {
				gridBox.classList.add("filled");
			});
		}
	}
}

const gridButton = document.querySelector("#grid-btn");

gridButton.addEventListener("click", function() {
	let userNum = +prompt("How big do you want your grid to be?", 16);
	if (userNum < 4 || userNum > 100 || isNaN(userNum)) {
		alert("Invalid response\nChoose a number between 4 and 100");
		return;
	} else {
		console.log("received valid input");
	}
});

makeGrid(16);
