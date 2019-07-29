import Deadpool from "./deadpool.jpg"


// Add an image to the document.
function addImage(){
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.alt = "deadpool";
    img.width = 300;
    img.src = Deadpool;
    const body = document.querySelector("body");
    div.appendChild(img)
    body.appendChild(div);
}


export default addImage;