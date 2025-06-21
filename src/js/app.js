import { videoGift } from "./videoLoop";



document.addEventListener('DOMContentLoaded', videoGift);

window.addEventListener('pageshow',  (event) => {
    console.log("se ejecuta");
    
    if (event.persisted) {
        videoGift()
    }
})