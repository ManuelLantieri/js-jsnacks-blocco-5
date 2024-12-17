const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//prendo solo i nomi di people e li salvo in una const

const names = people.map(person => person.name);

//stampo il risultato

console.log(names.join(', '));