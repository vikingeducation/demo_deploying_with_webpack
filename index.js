require('./styles.css');
const imgSrc = require('./image.jpg');
const greeting = 'Hello, Webpack!';
(() => {
  console.log(greeting);
  const d = document.createElement('div');
  d.classList.add('myDiv');
  d.innerText = greeting;
  document.body.appendChild(d);

  // Create the image
  const image = document.createElement('img');
  image.src = imgSrc;
  image.height = 400;
  document.body.appendChild(image);
})();
