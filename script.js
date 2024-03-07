// // My attempt of background color change

// // const colors = ["green", "red", "rgba(133,122,200)", "yellow"];

// // const color = document.querySelector(".color");

// // const btn = document.querySelector(".btn");

// // btn.addEventListener("click", function() {

// //     const randomNumber = getRandomNumber();

// //     document.body.style.backgroundColor = colors[randomNumber];

// // color.textContent = colors[randomNumber];

// // });

// // function getRandomNumber() {

// //     return Math.floor (Math.random() * colors.length);
// // }

// // number 2

// // My first attempt of increment counter

// // const btns = document.querySelectorAll(".btn");

// // // const number = document.querySelector(".number");

// // let count = 0;

// // btns.addEventListener("click", function() {

// // count++;

// // number.textContent = count;

// // });

// // })

// // increase.addEventListener("click", function() {

// // let count =0;

// // for(let i = 0; i < 10; i++) {

// //     // setTimeout(function() {
// //     //     number.textContent = i;
// //     // }, i * 1000);

// //     count++

// // }

// // })

// // A better attempt of increment counter

// // const btns = document.querySelectorAll(".btn");

// // const number = document.querySelector(".number");

// // let currentNumber = 0;

// // btns.forEach(function (btn) {
// //   btn.addEventListener("click", function (e) {
// //     const styles = e.currentTarget.classList;

// //     if (styles.contains("decrease")) {
// //       currentNumber--;
// //     }

// //     else if (styles.contains("increase")){

// //         currentNumber++;
// //     }

// //     else {
// //         currentNumber =0;
// //     }

// //     number.textContent = currentNumber;

// //   });
// // });

// // Review Project

// // const reviews = [

// // {

// //     id: 1,
// //     name: "susan debris",
// //     job: "web developer",

// //     text: "No grand proclamations were exchanged, no elaborate remedies prescribed, yet everything transforms into okayness. It's a testament to the silent eloquence of love, where the embrace becomes a language, and the shared silence speaks louder than any words could. In the arms of this.",

// // },

// // {

// //     id: 2,
// //     name: "john benson",
// //     job: "data analyst",

// //     text: "As we grip tighter, refusing to release the lifeline they've become, an alchemy unfolds. The world outside dissipates, and in this cocoon of understanding, we find a respite. The numbness begins to thaw, and an elusive tranquility settles in. It's a metamorphosis, an unspoken miracle where the weight of the unspoken is carried away by the shared heartbeat of two souls in synchrony",

// // },

// // {

// //     id: 3,
// //     name: "mark bank",
// //     job: "software developer",

// //     text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis ipsum neque impedit blanditiis eaque dolores aperiam corporis facilis in quas similique, recusandae illum non culpa laborum. Velit accusantium quo doloribus maiores! Quae quidem maxime dolorem, quam quia nulla laboriosam delectus",

// // },

// // ]

// // const author = document.querySelector(".author");

// // const job = document.querySelector(".job");

// // const info = document.querySelector(".info");

// // const prevBtn = document.querySelector(".prev-btn");

// // const nextBtn = document.querySelector(".next-btn");

// // const randomBtn = document.querySelector(".random-btn");

// // let currentItem = 0;

// // window.addEventListener("DOMContentLoaded", function () {

// //     showPerson(currentItem);

// // })

// // function showPerson () {

// //     const item = reviews[currentItem];

// //     author.textContent = item.name;

// //     job.textContent = item.job;

// //     info.textContent = item.text;

// // }

// // nextBtn.addEventListener("click", function() {{

// // currentItem++;

// // if (currentItem > reviews.length - 1) {

// //     currentItem = 0;
// // }
// // showPerson(currentItem);

// // }})

// // prevBtn.addEventListener("click", function() {{

// //     currentItem--;

// //     if (currentItem < 0) {

// //         currentItem = reviews.length -1 ;
// //     }
// //     showPerson(currentItem);

// //     }})

// // randomBtn.addEventListener("click", function (){

// // showPerson();

// //     })

// // Modal project

// const modalBtn =document.querySelector(".modal-btn");

// const modalOverlay =document.querySelector(".modal-overlay");

// const closeBtn =document.querySelector(".close-btn")

// modalBtn.addEventListener("click",function(){

//     modalOverlay.classList.add(".open-modal")
// })

// genera;l questions project

// const btns = document.querySelectorAll(".btns");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.nextElementSibling;

//     question.classList.toggle("show-text");
//   question.classList.toggle("close-btn");

//   });
// });


// const menu = [

// {


//   id: 1 ,
//   title: "Pancake",
//   category: "breakfast",
//   price: 23.00,
//   img: "./images/chad-montano-eeqbbemH9-c-unsplash.jpg",
//   desc: "Fueling the day ahead with a delightful breakfast spread – a symphony of flavors to kickstart the morning on a delicious note. ☀️🍳 #BreakfastGoals #MorningDelights"



// },



// {


//   id: 2,
//   title: "American pie",
//   category: "lunch",
//   price: 13.00,
//   img: "./images/casey-lee-awj7sRviVXo-unsplash.jpg",
//   desc: "Savoring a scrumptious lunchtime feast, where every bite is a burst of flavor and a moment to recharge. 🍲🥗 #LunchtimeIndulgence #FoodieAdventures"








// },


// {


//   id: 3 ,
//   title: "Spanish tea",
//   category: "All",
//   price: 4.99,
//   img: "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
//   desc: "Taking a pause for a moment of tranquility with a warm cup of tea – the perfect companion to unwind and savor the simple joys. ☕✨ #TeaTimeMagic #SipSipHooray"


// },



// {


//   id: 3 ,
//   title: "Spanish tea",
//   category: "All",
//   price: 4.99,
//   img: "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
//   desc: "Taking a pause for a moment of tranquility with a warm cup of tea – the perfect companion to unwind and savor the simple joys. ☕✨ #TeaTimeMagic #SipSipHooray"



// },



// {


//   id: 3 ,
//   title: "Spanish tea",
//   category: "All",
//   price: 4.99,
//   img: "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg",
//   desc: "Taking a pause for a moment of tranquility with a warm cup of tea – the perfect companion to unwind and savor the simple joys. ☕✨ #TeaTimeMagic #SipSipHooray"


// },




// ]

// const container = document.querySelector(".container");

// window.addEventListener('DOMContentLoaded',function() {

  
//   let displayMenu = menu.map(function(item){

//     return `
    
//       <div class="content-text">
    
        
//       <div class="img">
    
        
//         <img src="${item.img}" alt="menu">
//       </div>
    
    
//       <div class="dish-1">
    
        
//       <h4>${item.title}</h4>
       
//     <p>${item.price}</p>
//       <p class="text">
      
//       ${item.desc}
//       </p>
    
//       </div>` ;


//   });

//   displayMenu = displayMenu.join("");

//   container.innerHTML = displayMenu;
//   // console.log(displayMenu);
// });



const btns = document.querySelectorAll(".btn");


const mainTexts = document.querySelectorAll(".main-text")

mainTexts.forEach(function(text){

const btn = text.querySelector(".btn")


btn.addEventListener("click", function(){


mainTexts.forEach(function(item){

if(item !==text){

item.classList.remove("show")

}

})


text.classList.toggle("show");

})

})

















// toggle functionality (traversing the dom)

// btns.forEach(function(btn){

//   btn.addEventListener("click",function(e){

// const question = e.currentTarget.parentElement.parentElement;

// question.classList.toggle("show")


// })


  // })



