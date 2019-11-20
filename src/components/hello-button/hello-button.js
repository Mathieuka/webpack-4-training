
import "./hello-button.scss";

//button component
class HelloButton {
   buttonCssClass = "hello-button-text";

   render() {
       const button = document.createElement("button");
       button.innerHTML = "Hello button";
       button.classList.add("hello-button");
       const body = document.querySelector("body");
       button.onclick = () => {
           const p = document.createElement("p");
           p.innerHTML = "Hello button";
           p.classList.add(this.buttonCssClass);
           body.appendChild(p);
       };
       body.appendChild(button);
   }
}

export default HelloButton;
