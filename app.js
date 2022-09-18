// ScrollReveal().reveal('.icons');
// ScrollReveal().reveal('.icons', { delay: 500 });
// ScrollReveal().reveal('.icons', { delay: 2000 });

// const texts = ['Welcome', 'To', 'My Website'];
// let count = 0;
// let index = 0;
// let currentText = '';
// let letter = '';

// (function type(){

//     if(count === texts.length){
//         count = 0
//     }
//     currentText = texts[count];
//     letter =currentText.slice(0, ++index);

//     document.querySelector('.typing').textContent = letter;
//     if(letter.length === currentText.length){
//         count++;
//         index = 0;
//     }
//     setTimeout(type,50);
// })();

// let i = 0;
// let textContent = 'About Myself';
// let speed =  50; 

// function aboutMyself(){
//     if(i < textContent.length){
//         document.getElementsByClassName('.intro').innerHTML += textContent.charAt(i);
//         i++;
//         setTimeout(type, speed);
//     }
// }

AOS.init({
    offset: 70,
    duration: 2000,
});