//1. Написать функцию, которая принимает массив из чисел, строку с одним из значений “Asc”, “Desc”, “None” и возвращает массив тех же чисел, но отсортированный по следующим правилам:
//- Если отправить “Asc” - возвращает отсортированный массив в возрастающем порядке
//- Если отправить “Desc” - возвращает отсортированный массив в убывающем порядке
//- Если отправить “None” - возвращает массив без каких-либо модификаций

const numbers = [52, 143, 5, 16, 42, 22, 8, 500]
const asc = numbers.sort((a, b) => a - b);
console.log(numbers);

const numbers2 = [32, 523, 5, 687, , 93, 1, 89, 345, 75]
const desc = numbers2.sort((a, b) => b-a);

console.log(numbers2);

const numbers3 = [23, 45, 32, 1, 4, 6, 7, 13, 66, 43]
const none = numbers3.sort((a, b) => a=b);
console.log(numbers3);   





