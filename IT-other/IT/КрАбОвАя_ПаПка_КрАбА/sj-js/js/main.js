// let name;
// for(let i=0; i<1; i++){
//     name = prompt("Введите имя");
//     if(name == ""){
//         i--
//     }
// }
// let age = +prompt("Сколько вам лет")
// while(age =="" || isNaN(age)){
//     age = +prompt("Не верю")
// }
// const person = {
//     personName:name,
//     personAge:age
// }
// let a = +prompt("n1");
// let b = +prompt("n2");
// let result;
// function add(n1,n2){
//     return n1+n2
// }
// result = add(a,b);
// document.write(a+" + " + b + "=" + result)
// document.write(`${a} + ${b} = ${result} <br/> `)
// document.write(person.personName +"<br/>")
// document.write(person.personAge +"<br/>")
// let n = +prompt("n1");
// const person = {
//     value:n 
// }
// while(isNaN(n) ){
//     n = +prompt("n1")
// }
// if(person.value >0){
//     person.value = 1;
// }else if(person.value <0){
//     person.value = -1;
// }else if(person.value =0){
//     person.value = 0;
// }
// document.write(person.value)

// let age = +prompt("Введите число, больше 100")
// while(age<100 || isNaN(age)){
//     age = +prompt("Неправильно, введите число, больше  100")
// }

let menu = +prompt ("1) сложение, 2) вычитание, 3) умножение, 4) деление");
while(menu == "" || menu<1 || menu>4 || isNaN(menu)){
    menu = +prompt ("1) сложение, 2) вычитание, 3) умножение, 4) деление");
} 
let a = +prompt("n1");
let b = +prompt("n2");
let result;
function add1(n1,n2){
    return n1+n2
}
    function add2(n1,n2){
        return n1-n2
    }
        function add3(n1,n2){
            return n1*n2
        }
            function add4(n1,n2){
                return n1/n2
            }
    
    

if(menu == 1){
    result = add1(a,b)
}else if(menu == 2){
    result = add2(a,b)
}else if(menu == 3){
    result = add3(a,b)
}else if(menu == 4){
    result = add4(a,b)
}   
document.write(result)             
