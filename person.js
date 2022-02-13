console.log(__dirname, __filename); // pour avoir la sortie directory avec le nom de fichier
const person = {
  name: "AbLy ",
  age: 36,
};
console.log(`My name is ${person.name} and Iam ${person.age}`);
module.exports = person; // exporter le module
