
console.log("app.js - Script cargado.")

export function videoGift () {

	const BASE = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
	const proyectosLink = document.querySelector("#proyectLink");
	const videoLink = document.createElement("video");
	const newLink= document.createElement("a");

	videoLink.src = BASE + 'bg-video.mp4';
	videoLink.autoplay = true;
	videoLink.loop = true;
	videoLink.muted = true;

	newLink.href = BASE + 'proyectos';

	newLink.appendChild(videoLink)
	proyectosLink.appendChild(newLink)
    
}


