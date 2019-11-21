import "./heading.scss";

const heading = () => {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack is yataaa !';
    body.appendChild(h1);
    return h1;
}

export default heading;