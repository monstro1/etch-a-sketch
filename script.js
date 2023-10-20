const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
	let rowDiv = document.createElement("div");
	rowDiv.classList.add("row");
	gridContainer.appendChild(rowDiv);
}
