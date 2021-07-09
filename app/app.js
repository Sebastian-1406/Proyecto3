let botonAtras = document.querySelector(".prev");
let botonSiguiente = document.querySelector(".next");
let seccion1 = document.querySelector(".section__1-img");
let seccionParrafo = document.querySelector(".section__texto-parrafo");
let nombre = document.querySelector(".section__info-nombre");
let empleo = document.querySelector(".section__info-empleo");




botonAtras.addEventListener("click", () => {
	seccion1.src = "./images/image-tanya.jpg";
	seccionParrafo.innerHTML = `
		“ I’ve been interested in coding for a while but never taken the jump, until now. 
		I couldn’t recommend this course enough. 
		I’m now in the job of my   dreams and so excited about the future. ”`
	nombre.innerHTML = `Tanya Sinclair`
	empleo.innerHTML = `UX Engineer`

	
})
botonSiguiente.addEventListener("click", () => {


	seccion1.src = "./images/image-john.jpg";

	seccionParrafo.innerHTML = `
		“ If you want to lay the best foundation possible 
		I’d recommend taking this course. 
		The depth the instructors go into is incredible. 
		I now feel so confident about starting up as a professional developer. ”`
		
		nombre.innerHTML = `John Tarkpor`
		empleo.innerHTML = `Junior Front-end Developer`
})