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

makeGrid(16);
