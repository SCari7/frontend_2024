
let ages = [22, 31, 45, 53]
let names = ["Мария", "Алексей", "Елена", "Дмитрий"]

let formateArray = []


for(let i = 0; i < names.length; i++) {
    let ageText = ages[i] % 10 === 1 && ages[i] !== 11
        ? "год"
        : ages[i] % 10 >= 2 && ages[i] % 10 <= 4 && (ages[i] < 10 || ages[i] > 20)
        ? "года"
        : "лет";
    formateArray.push(`${names[i]} ${ages[i]} ${ageText}`)
    }

    console.log(formateArray)


    //Task 2 

    let reversedAges = [...ages].reverse();
    let reversedNames = [...names].reverse();

    console.log(reversedAges)
    console.log(reversedNames)



// Создаем пустой массив
let people = [];

// Сколько записей добавить
let count = 3;

for (let i = 0; i < count; i++) {
    let name = prompt("Введите имя:");
    let age = parseInt(prompt("Введите возраст:"), 10);
    let ready = confirm("Готов? (OK - Да, Отмена - Нет)");

    // Добавляем в массив
    people.push({ name, age, ready });
}

// Выводим массив
console.log(people);


//Task 3


let countries = [];

countries.push("Франция", "Германия", "Италия");
console.log(countries)
let lastCountry = countries.pop();

 console.log(countries)

countries.unshift(lastCountry);

console.log(countries);


// Task 4

let numbers = [1, 2, 3, 4, 5];

let doubled = [];

let squared = [];


for(let i = 0; i < numbers.length; i++) {

    doubled.push(numbers[i] * 2);

    squared.push(numbers[i] ** 2);
}

console.log("Исходный массив:", numbers);  
console.log("Массив с умноженными на 2:", doubled);  
console.log("Массив с квадратами элементов:", squared);