// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter Vanilla .js</h1>`;
console.log('This is a test');
let newProjectVariable = 'newProjectVariable = Hello there!';
appDiv.innerHTML = `<h2>Added to appDiv</h2>` + newProjectVariable;
console.log(newProjectVariable);
newProjectVariable;
