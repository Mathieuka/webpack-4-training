import Kiwi from './kiwi.jpg';
import './kiwi-image.scss';

const KiwiImage = () => {
  const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';
        img.classList.add('kiwi-image');
        const bodyDomElement = document.querySelector('body');
        bodyDomElement.appendChild(img);
}

export default KiwiImage;