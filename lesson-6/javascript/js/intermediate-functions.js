const person = {
  isStudent: true
};

person.otro = 1;

// spread operator
const colombianPerson = {
  ...person,
  age: 25,
  name: "Ingrid",
  country: "Colombia"
};

const mexicanPerson = {
  ...person,
  name: "Cristina",
  country: "Mexico"
};

const newObject = Object.assign(mexicanPerson, {c: 3});

// console.log(colombianPerson);
// console.log(newObject, mexicanPerson);

const numbersList = [1, 2, 3, 4];
const otherNumbersList = [8, 9, 10];

const newNumbersList = [...numbersList, 5, 6, 7, ...otherNumbersList];

const numberList2 = [...numbersList];

/**
 * TODO LIST
 */

const data = [
  {
    finished: false,
    task: "limpiar casa"
  },
  {
    finished: true,
    task: "poner gasolina"
  },
  {
    finished: false,
    task: "trabajar en quiz"
  }
];

const numbersToFilterList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 6, 6];

// callback function
const numbersMatch = numbersToFilterList.filter((number) => number === 6);
const finishedTasks = data.filter((task) => task.finished);
const unFinishedTasks = data.filt;

// console.log(unFinishedTasks);

// Array.map(); // itera y regresa un array

// Array.forEach(); // itera pero no regresa nada

const hardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 6, 6];

let matches = [];

for (let i = 0; i < hardList.length; i++) {
  if (hardList[i] == 6) {
    matches.push(hardList[i]);
  }
}

// console.log(matches);
// Callback function
function forEachHelper(item) {
  console.log("desde el helper: ", item);
}

// callback function
const functionFlecha = (number) => console.log("desde flecha: ", number);

// For each
// const valor = hardList.forEach((number) => console.log("desde flecha: ", number * 2));

// Array.map
const mapList = ["one", "two", "three", "four", "five", 235, "😀"];

/**
 * <table>
 * <tbody>
 *  <tr>
 *    <td>one</td>
 *    <td>two</td>
 *    <td>three</td>
 *  </tr>
 * </tbody>
 * </table>
 */

const startTable = "<table><tbody><tr>";

const exponentaialList = mapList.map((number, idx) => {
  return `<td>${number}</td>`;
});

const endTable = "</tr></tbody></table>";

// console.log(startTable + exponentaialList + endTable);

const unicos = [1, 2, 3, 4, 5, 6, 7, 8.9, 10];

const repetidosList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 6, 6];

// repetidosList.forEach((item) => {
//   // checar si item no esta en unicos
//   //    ![] === 1
//   if (!unicos.includes(item)) {
//     // true push item a unicos
//     unicos.push(item);
//   }
// });

const uniqueValues = [...new Set(repetidosList)];

// console.log(uniqueValues);

const studentName = "Graciela de la Cruz";

const studentWords = studentName.split(" ");
// console.log(studentWords);

// console.log("union ", studentWords.join(" "));

// console.log(studentWords.includes("Trevino"));

// console.log(studentName.indexOf("de") !== -1);

const time3Secs = setTimeout(() => {
  console.log("3 seconds have passed");
}, 3000);

let ctr = 0;

const timeInterval = setInterval(() => {
  console.log("Alarma de setInterval");
  ctr++;

  if (ctr >= 3) {
    clearInterval(timeInterval);
  }
}, 3000);
