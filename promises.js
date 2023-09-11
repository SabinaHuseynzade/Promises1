// 1)
// //обьясни своими словами, что значит callback функция

//Это те функции которые вызываются внутри других функций

// 2)
// //выведи в консоли 'Привет я Alex и мне 19 лет' с помощью функций ниже и callback
// function alertInfo(name, age) {
//     console.log(`Привет, я ${name} и мне ${age} лет`);
// }

// function userInfo(callback) {
//     let name = 'Alex';
//     let age = 19;
//     callback(name, age);
// }

// userInfo(alertInfo);

// 3)
// //какая из функций является функцией обратного вызова?
// setTimeout(showMessage, timeout);

// function showMessage() {
//     console.log('Сообшение');
//     startProgram();
// }

// function startProgram() {
//     console.log('Запуск');
// }

//showMessage()

// 4)
// //передайте функции ниже функцию showMessage  в качестве параметра и вызовите ее

// function startProgram(callback) {
//     console.log('Запуск');
//     callback();
// }

// function showMessage() {
//     console.log('показСообщения');
// }

// startProgram(showMessage);


// 10)
// //что значит асинхронный?
//это функция которая выполняется паралельно с другими функциями