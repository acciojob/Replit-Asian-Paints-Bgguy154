//your JS code here. If required.
const changeBtn=document.querySelector("#change_button");
const resetBtn=document.querySelector("#Reset");

changeBtn.addEventListener('click',()=>{
	let color=document.querySelector("#colour_id").value;
	let id=document.querySelector("#block_id").value;

	const grid=document.querySelectorAll(".grid-item");
	grid.forEach((item)=>item.style.backgroundColor="transparent");

	if(id>=1 && id<=9){
		document.getElementById(id).style.backgroundColor=color;
	}
})

resetBtn.addEventListener('click',()=>{
	const grid=document.querySelectorAll(".grid-item");
	grid.forEach((item)=>item.style.backgroundColor="transparent");
})