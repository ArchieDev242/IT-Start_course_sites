// //обьявляем переменные
// let Name,
//     age,
//     gender;
//     //prisvaevaem znachenie Name function promt
//     Name = prompt("Ваше имья",);
//     while(Name == ""){
//         if(Name == ""){
//             alert("! ОБНАРУЖЕНА ПУСТАЯ СТРОКА !")
//         }
//         Name = prompt("Ваше имья");
//     }
//     age = +prompt("Ваш возраст");
//     while(age == "" || isNaN(age)){
//         if(age == ""){
//             alert("! ОБНАРУЖЕНА ПУСТАЯ СТРОКА !")
//         }
//         age = +prompt("Введите ваше возраст");
//     }
//     gender = prompt("Введите ваш пол","мальчик девочка")
//     while(gender == ""){
//         if(gender == ""){
//             alert("! ОБНАРУЖЕНА ПУСТАЯ СТРОКА !")
//         }        
//         gender = +prompt("Ваш потолок");
//     }

// // определяем константы с играми
// const type1="MineCraft",
//       type2="GTA",
//       type3="Need for speed",
//       type4="Sims",
//       type5="HayDay";
// // объявляем обьект персонажа
// const person = {
//     personName:Name,//свойству personName присвоили зачания переменной Name
//     personAge:age,//свойству  personName присвоили зачания переменной age
//     personGender:gender,//свойству  personGender присвоили  зачания переменной gender
//     experience:{},
//     gamber:{}// новичек, средний, профи
// }

// let result;// результат игры которую нам рекомендую

// //проверяем возраст персонажа и рекомендуем ему игру
// if(person.personAge <=12){
//     result = `Вам стоит поиграть в ${type1}`;
//    // person.experience = 1;
// }
// //проверяем возраст персонажа и рекомендуем ему игру
// else if(person.personAge>12 && person.personAge<18 && person.personGender == "девочка"){
//     result = `Вам стоит поиграть в ${type5}`;
//  //   person.experience = 2;
// }
// //проверяем возраст персонажа и рекомендуем ему игру
// else if(person.personAge>12 && person.personAge<18 && person.personGender == "мальчик"){
//     result = `Вам стоит поиграть в ${type3}`;
//   // person.experience = 3;
// }
// //проверяем возраст персонажа и рекомендуем ему игру
// else if(person.personAge>=18 && person.personAge<=25 && person.personGender == "девочка"){
//     result = `Вам стоит поиграть в ${type4}`;
//   // person.experience = 4;
// }
// //проверяем возраст персонажа и рекомендуем ему игру
// else if(person.personAge>=18 && person.personAge<=25 && person.personGender == "мальчик"){
//     result = `Вам стоит поиграть в ${type2}`;
//   //  person.experience = 5;
// }
// else {
//     result = `ВЫ НЕ ДОСТОЙНЫ ИГАТЬ`;
// }
// let gameTime;// количество игровых часов
// let gameDay;// количество игровых дней в неделю

//     gameTime = +prompt("сколько часов в день вы игарите ?");
//     while(gameTime == "" || gameTime >24 || isNaN(gameTime)){
//         if(isNaN(gameTime)){
//             alert("ВВОДИ ЦЫФРИ А НЕ БУКВЫ")
//         }
//         if(gameTime >24){
//             alert("В СУТКАХ 24 ЧАСА  А ТЫ ИГРАЕШЬ НЕ ПО ДЕТСКИ" + gameTime + " КАК ЭТО ВОЗМОЖНО ВООБЩЕ O_o")
//         }
//         gameTime = +prompt("сколько часов в день вы  игарите ?");
//     }
//     gameDay = +prompt("сколько ДНЕЙ В НЕДЕЛЮ ВЫ ИГРАЕТЕ?");
//     while(gameDay == "" || gameDay >7 || isNaN(gameDay)){
//         if(isNaN(gameDay)){
//             alert("ВВОДИ ЦИФРЫ А НЕ БУКВЫ")
//         }
//         if(gameDay >24){
//             alert("В НЕДЕЛЕ 7 ДНЕЙ " + gameDay + " ЭТО ЖЕ НЕВОЗМОЖНО O_o")
//         }
//         gameDay = +prompt("дНЕЙ В НЕДЕЛЮ ?");
//     }
//     //обьявили функцию которая считает количесво игровых часов в неделю
//     function calc(day,time){
//         return day * time;
//     }
//     // константе присволи результат вычесления функции
//     const resultHourWeek = calc(gameDay,gameTime);
//     if(resultHourWeek <5){
//         person.experience = 1;
//     }else if(resultHourWeek >=5 && resultHourWeek <=15){
//         person.experience = 2;
//     }else if(resultHourWeek >15 && resultHourWeek <=25){
//         person.experience = 3;
//     }else if(resultHourWeek >25 && resultHourWeek <=35){
//         person.experience = 4;
//     }else if(resultHourWeek >35 && resultHourWeek <=45){
//         person.experience = 5;
//     }else {
//         person.experience = 0;
//     }



// document.write("Наиграных часов в неделю = " + resultHourWeek + "<br>")
// document.write("Ваше имя: " + person.personName +"<br/>");
// document.write(`${person.personName}, ваш возраст ${person.personAge} <br> `);
// document.write(`Ваш пол : ${person.personGender} <br>`);

// //let arr = [];
// //arr.push("last element")// добавления в конец масива
// //arr.unshift("add first")//добавления в начало
// //arr.pop()//удаления последнего елемента
// //arr.shift()//удаления первого елемента

// // let n = +prompt("Введите количество елементов");
// // while(n == "" || isNaN(n)){
// //     n = +prompt("Введите количество елементов"); 
// // }
// // for(let i=0; i<n; i++){
// //     arr[i] = Math.round(Math.random()*100);
// // }
// // for(let i=0; i<arr.length; i++){
// //     document.write(i+1 + " ЕЛЕМЕНТ МАССИВА = "+arr[i]+ "<br/>");
// // }

// // document.write("ДЛИНА МАССИВА = " + arr.length + "<br/>")

 const recomendation = {
    games:{
        NEWgames:[],
        SALAGAgames:[],
        BASYAgames:[],
        OBSTRELgames:[],
        AAAAAgames:[],
        TOPgame:[]
    }
 }

const person = {
    experience: Math.floor(Math.random() * 5) + 1
};

recomendation.games.NEWgames = ["GHOSTRUNNER","TRANSIENT","RESIDENT EVIL 3"];
recomendation.games.SALAGAgames = ["Line Puzzle","Bubble Shooter","Ludo Legend"];
recomendation.games.BASYAgames = ["GTA","Need for spedd","DOTA2"];
recomendation.games.OBSTRELgames = ["APEX Legends", "SoulWorker", "Unturned"];
recomendation.games.AAAAAgames = ["Tetris", "DINO 3D", "Noodles instead of hands"];
recomendation.games.TOPgame = ["Minecraft"];

let random1 = recomendation.games.NEWgames[Math.round(Math.random()*2)];
let random2 = recomendation.games.SALAGAgames[Math.round(Math.random()*2)];
let random3 = recomendation.games.BASYAgames[Math.round(Math.random()*2)];
let random4 = recomendation.games.OBSTRELgames[Math.round(Math.random()*2)];
let random5 = recomendation.games.AAAAAgames[Math.round(Math.random()*2)];
let random6 = recomendation.games.TOPgame[Math.round(Math.random()*2)];

let rezultRandomGame = "";
if(person.experience == 1){
    rezultRandomGame = `<strong>МЫ РЕКОМЕНДУЕМ ВАМ ПОИГРАТЬ В ${random1} </strong> <br/>`;
}else if(person.experience ==2){
    rezultRandomGame = `<strong>МЫ РЕКОМЕНДУЕМ ВАМ ПОИГРАТЬ В ${random2} </strong> <br/>`;
}else if(person.experience ==3){
    rezultRandomGame = `<strong>МЫ РЕКОМЕНДУЕМ ВАМ ПОИГРАТЬ В ${random3} </strong> <br/>`;
}else if(person.experience ==4){
    rezultRandomGame = `<strong>МЫ РЕКОМЕНДУЕМ ВАМ ПОИГРАТЬ В ${random4} </strong> <br/>`;
}else{
    rezultRandomGame = `<strong>МЫ РЕКОМЕНДУЕМ ВАМ ПОИГРАТЬ В ${random5} </strong> <br/>`;
}
document.write(rezultRandomGame);
document.write("РАДНОМНАЯ НОВИНКА: " + random1 + "<br/>");
document.write("РАДНОМНАЯ ИГРА САЛАГИ : " + random2 + "<br/>");
document.write("РАДНОМНАЯ ИГРЫ ОТ БАСЬКИ : " + random3 + "<br/>");
document.write("РАДНОМНАЯ ТИПА ШУТАК : " + random4 + "<br/>");
document.write("РАДНОМНАЯ ДА КАК ТАК ТО А?!?!?! : " + random5 + "<br/>");



