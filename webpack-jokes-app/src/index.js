import generateJoke from './generateJoke';
import './styles/main.scss';
import SimleyImage from './assets/smiley.svg'

let LaughImageTag = document.getElementById("laughImg");
LaughImageTag.src = SimleyImage;

let jokeButton = document.getElementById('jokeBtn');
jokeButton.addEventListener('click', generateJoke);

generateJoke();