
console.log("app.js - Script cargado.")

export function videoGift () {

const proyectosLink = document.querySelector("#proyectLink");
const videoLink = document.createElement("video");
const newLink= document.createElement("a");


videoLink.src = "/public/bg-video.mp4"
videoLink.autoplay = true;
videoLink.loop = true;
videoLink.muted = true;



newLink.href = "/portafolio-John-Berroa/proyectos";

newLink.appendChild(videoLink)
proyectosLink.appendChild(newLink)
    
}


