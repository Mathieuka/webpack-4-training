import "./hello-button.scss";


const helloButton = () => {
    
    const button = document.createElement("button");
    button.innerHTML = "Hello button";
    button.classList.add("hello-button");
    const body = document.querySelector("body");

    button.onclick = () => {
        const p = document.createElement("p");
        p.innerHTML = "Hello button";
        p.classList.add("hello-button-text");
        body.appendChild(p);
    };
    
    body.appendChild(button);

    return button
 }

export default helloButton;
