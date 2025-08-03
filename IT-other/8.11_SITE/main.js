// Создаём массив и помещаем туда обьекты с отзывами !
let reviewList = [
    {
        id: 1,
        img: "img/2.jpg",
        author: " MAYNII ",
        job: " Майни / Ютабчик ",
        comment: " Дайти на пакушат "
    },
    {
        id: 2,
        img: "img/1.jpg",
        author: " BABABOOI ",
        job: " PROGRAMMER ",
        comment: " ABVABABABABABABABABABABBAABBABAABBABABABABABABABABABA "
    },
    {
        id: 3,
        img: "img/3.jpg",
        author: " George ",
        job: " Ametist ",
        comment: " HJGJHHJGVJF BH VHJFBHJFVHb gdfjkgbjkhjdfhbjkgh "
    },
    {
        id: 4,
        img: "img/5.jpg",
        author: " DREAM ",
        job: " Тупо ЧиТоР ",
        comment: " SHUT UP AND TAKE MY MONEY !! "
    }
]

// Записываем HTML теги в переменные
// document.getElementById() - ищет HTML тег по ID

let sliderImg = document.getElementById("person-img");
let sliderAuthor = document.getElementById("author");
let sliderJob = document.getElementById("job");
let sliderComment = document.getElementById("info");

let nextBtn = document.querySelector(".prev-btn");
let prevBtn = document.querySelector(".next-btn")

// Индекс массива

let currentItem = 3;
window.addEventListener("DOMContentLoaded", function(){
    const item = reviewList[currentItem]; // Записываем в переменную обьект с массива
    sliderImg.src = item.img;
    sliderJob.textContent = item.job;
    sliderAuthor.textContent = item.author;
    sliderComment.textContent = item.comment;
})

nextBtn.addEventListener("click", () => {
    currentItem++
    if(currentItem > 3){
        currentItem = 0
    }
    const item = reviewList[currentItem]; // Записываем в переменную обьект с массива
    sliderImg.src = item.img;
    sliderJob.textContent = item.job;
    sliderAuthor.textContent = item.author;
    sliderComment.textContent = item.comment;
})
prevBtn.addEventListener("click", () => {
    currentItem--
    if(currentItem < 0){
        currentItem = 3
    }
    const item = reviewList[currentItem]; // Записываем в переменную обьект с массива
    sliderImg.src = item.img;
    sliderJob.textContent = item.job;
    sliderAuthor.textContent = item.author;
    sliderComment.textContent = item.comment;
})

setInterval(() => {
  currentItem++
  if(currentItem > 3){
    currentItem = 0
}
  const item = reviewList[currentItem]; // Записываем в переменную обьект с массива
  sliderImg.src = item.img;
  sliderJob.textContent = item.job;
  sliderAuthor.textContent = item.author;
  sliderComment.textContent = item.comment;
},5000)
