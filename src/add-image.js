import Deadpool from "./deadpool.jpg"


// Add an image to the document.
function addImage(){
    const img = document.createElement("img");
    img.alt = "deadpool";
    img.width = 300;
    img.src = Deadpool;

    const body = document.querySelector("body");
    body.appendChild(img);
}


export default addImage;