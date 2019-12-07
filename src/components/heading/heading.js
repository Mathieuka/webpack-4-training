import "./heading.scss";

const heading = (pageName) => {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = `This is ${pageName} page`;
    body.appendChild(h1);
}

export default heading;