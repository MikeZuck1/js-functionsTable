// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

// Use method `.pop();` in a function 
const seasons = ['Automn', 'Winter', 'Spring', 'Summer'];

function useMethodToDelete (arr) {
    arr.pop(); // delete 'summer' 
}

useMethodToDelete(seasons);  
console.log(seasons);  

// Create a table 
const team = ['RM', 'Chel', 'ManC', 'ManU', 'Barça', 'ATM'];

function newTeam (arrTeam) {
  arrTeam.push('RSCA', 'PSG', 'Sev'); // add elements 
}

newTeam(team); 
console.log(team); 