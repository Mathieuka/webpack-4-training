
import HelloButton from "./components/hello-button/hello-button";
import addImage from "./add-image";
import Heading from "./components/heading/heading";

if(process.env.NODE_ENV === 'production'){
    console.log('*** production mode ***');
}else if(process.env.NODE_ENV === 'development'){
    console.log('*** development mode ***');
}

Heading();
HelloButton();
addImage(); 
