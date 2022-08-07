const names = ["Felipe", "João", "Julia", 10, false];

const joao = names[1];

names.push("Pedro");
names.unshift("Fernanda");

names.pop();
names.pop();
names.pop();

names[3] = "Marechal Deodoro da Fonseca";

const indexOfFelipe = names.indexOf("Felipe");

const sortedNames = names.sort();

const namesIsArray = Array.isArray(names);

console.log(names);
console.log(sortedNames);
console.log(namesIsArray)