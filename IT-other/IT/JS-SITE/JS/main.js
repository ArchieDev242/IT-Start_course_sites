let Name = prompt("Внимание вопрос Ваше имя"), 
age = +prompt(`${Name}, ваш возраст`), 
gender = prompt("Ваш пол","мальчик, девочка");

const type1="Minecraft",
      type2="GTA",
      type3="Need for speed",
      type4="Sims",
      type5="Hayday";
      
      let person ={
          personName:Name,
          personAge:age,
          personGender:gender,
          experience:0,
          gambler:"",
      }

      //Вводим имя
      if(person.personName ==""){
          Name = prompt("Внимание вопрос Ваше имя");
          person.personName = Name;
      }

      //Вводим возраст
      if(person.personAge ==""){
        age = prompt("ваш возраст");
        person.personAge = age;
    }

    //Вводим пол
    if(person.personGender ==""){
        gender = prompt("Ваш пол мальчик, девочка");
        person.personGender = gender;
    }

    let result = "";
    
    //Проверяем возраст и рекомендуем игру
    if(person.personAge<=12){
        result= `${person.personName}, вам стоит поиграть в ${type1}`;
        person.experience = 1;
    }

    //Проверяем возраст персонажа и рекомендуем игру
    else if(person.personAge >12 && person.personAge <18 && person.personGender =="девочка"){
    result= `${person.personName}, вам стоит поиграть в ${type5}`;
    person.experience = 2;
    }
    
    //Проверяем возраст персонажа и рекомендуем игру
    else if(person.personAge >12 && person.personAge <18 && person.personGender =="мальчик"){
        result= `${person.personName}, вам стоит поиграть в ${type3}`;
        person.experience = 3;
        }
    
        //Проверяем возраст персонажа и рекомендуем игру
        else if(person.personAge >=18 && person.personAge <=25 && person.personGender =="девочка"){
            result= `${person.personName}, вам стоит поиграть в ${type4}`;
            person.experience = 4;
            }
    
            //Проверяем возраст персонажа и рекомендуем игру
            else if(person.personAge >=18 && person.personAge <=25 && person.personGender =="мальчик"){
                result= `${person.personName}, вам стоит поиграть в ${type2}`;
            person.experience = 5;
                }

                

let gameTime;//игровые часы в день
let gameWeek;//игровые дни в неделю
    gameTime = +prompt("Сколько часов в день вы играите ?")
    while(gameTime == "" || gameTime>24 || isNaN(gameTime)){
           if(isNaN(gameTime)){      
            alert("НЕ ПИШИ БУКВАМИ! ЦИФРАМИ ПИШИ !")
            }
            
            if(gameTime>24){
             alert("В СУТКАХ 24 А ТЫ ИГАЕШЬ " + gameTime +" КАК ЭТО ВОЗМОЖНО ?!? ")
         }        
        gameTime = +prompt("Сколько часов в день вы играите ?")
    }

    gameWeek = +prompt("Сколько дней вы игаите ?")//дни недели
    while(gameWeek == "" || gameWeek>7 || isNaN(gameWeek)){
        if(isNaN(gameWeek)){
            alert("НЕ ПИШИ БУКВАМИ! ЦИФРАМИ ПИШИ !!!")
        }

        if(gameWeek>7){
            alert("В НЕДЕЛЕ 7 ДНЕЙ А ТЫ ИГРАЕШЬ " + gameWeek + " ")
       }
       gameWeek = +prompt("Сколько дней вы игаите ?")//дни недели
    }
                                
    function calc(day,time){
        return day * time
    }
    const resultHourWeek = calc(gameWeek,gameTime);
    if(resultHourWeek<5){
        person.experience = 1;
    }else if(resultHourWeek >=5 && resultHourWeek <=10){
        person.experience = 2;
        
    }else if(resultHourWeek >10 && resultHourWeek <=15){
        person.experience = 3;
        
    }else if(resultHourWeek >15 && resultHourWeek <=20){
        person.experience = 4;
        
    }else if(resultHourWeek >20 && resultHourWeek <=25){
        person.experience = 5;
    }else{
        person.experience = "ERROR"
    }

    if(person.experience == 1 || person.experience ==2){
        person.gambler = "Noob"//нуб
    }else if(person.experience == 3 || person.experience ==4){
        person.gambler = "Middle"//средний
    }else if (person.experience == 5){
        person.gambler = "Pro"//про
    }else if (person.experience == "ERROR"){
        alert("ERROR")//ошибка
        person.gambler = undefined;
    }

    document.write("Количество наиграных часов в неделю = " + resultHourWeek + "<br>");//сколько часов играл персонаж в неделе
    document.write("Ваше имя: " + person.personName + "<br>");
    document.write(`${person.personName}, ваш возраст: ${person.personAge} <br>`);
    document.write(`Ваш пол: ${person.personGender} <br>`);
    document.write(result + "<br>");
    document.write("Ваш уровень игры: " + person.gambler + "<br>") 