const canvas = document.getElementById("pixel_canvas");
const height = document.getElementById("input_height");
const width = document.getElementById("input_width");
const sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");


function makeGrid() {
    for (let r=0; r<height.value; r++){
        const row = canvas.insertRow(r);
        for (let c=0; c<width.value; c++){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}


function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}


//fill the cell by color
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});
