
import "./hello-button.css";

//button component
class HelloButton {
   render() {
       const button = document.createElement("button");
       button.innerHTML = "Hello button";
       button.classList.add("hello-button");
       const body = document.querySelector("body");
       button.onclick = function(){
           const p = document.createElement("p");
           p.innerHTML = "Hello button";
           p.classList.add("hello-button-text")
           body.appendChild(p);
       };
       body.appendChild(button);
   }
}

export default HelloButton;
