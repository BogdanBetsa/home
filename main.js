/* Задание №1 */

function isPalindrome(str) {
    var strLen = str.length,
        strReverse = str.split('').reverse().join('');
    if (strReverse == str) {
        return 'Палиндром';
    } else {
        return 'Не палиндром';
    }
}

test = isPalindrome('123321');

console.log(test);

/* Задание №2 */

var car = {
    size: {
        spec: "Характериститки",
        metric: "Eдиница измерения - mm",
        length: "Длина 4886",
        width: "Ширина 1938",
        height: "Высота 1762",
        weight: "Вес 2100",

    },
    general:{
        gen: "Описание",
        brand: "Марка BMW",
        model: "Модель X5",
        color: "Цвет black",
    },

};
console.log(car.general.gen);
console.log(car.general.brand);
console.log(car.general.model);
console.log(car.general.color);
console.log(car.size.spec);
console.log(car.size.metric);
console.log(car.size.length);
console.log(car.size.width);
console.log(car.size.height);
console.log(car.size.weight);
