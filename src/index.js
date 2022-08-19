// import '.src/styles/main.scss';
import './styles/main.scss';
// import winners from './assets/winners.svg';

console.log('hello world')

const suma=(num1, num2)=>num1+num2;

const result=suma(3,5);
console.log(result);
// //Para ejecutar este archivo, en la terminal: node src/index.js

// // Para que la f se ejecute enseguida
const renderApp=((idRoot)=>{
// ((idRoot)=>{
    document.getElementById(idRoot).innerHTML=`
    <button class='button is-primary'>
        Click me
    </button>
    <div class='field'>
        <label class='label'>Nombre</label>
        <input type='text' class='input is-primary'/>
    </div>
    `
});

renderApp('root-app')