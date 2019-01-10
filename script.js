window.onload = function (){
	initColorPicker ();
};

function initColorPicker (){
	let colorBox = document.getElementById("color-box");
	let rgb= {
		red: document.getElementByID("red"),
		green: document.getElementByID("green"),
		blue: document.getElementByID("blue")
	};
	{
		function setColorPickerEventListeners(colorbox, rgb){
			rgb.red.addEventListener('change', () => {
				console.log("Red value: ", rgb.red.value);
			})
		}
	}
}