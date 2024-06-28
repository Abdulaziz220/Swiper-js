// const slider = document.getElementById('cardslider')
// const cards = slider.querySelectorAll('.slider-card')
// const prevbtn = document.getElementById('prevbtn')
// const nextBtn = document.getElementById('nextBtn')

// let currentSlide = 0;

// function showSlide(n) {
//     cards.forEach((card, index) => {
//         console.log(index);
//         if (index === n) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     });
//     currentSlide = n;
// }

// showSlide(currentSlide)

// nextBtn.addEventListener('click', () => {
//     currentSlide++
//     if (currentSlide >= cards.length) {
//         currentSlide = 0
//     }
//     showSlide(currentSlide)
// });

// prevbtn.addEventListener('click', () => {
//     currentSlide--
//     if (currentSlide < 0) {
//         currentSlide = cards.length - 1
//     }
//     showSlide(currentSlide)
// });

// const slider = document.getElementById('cardSlider');
// const cards = slider.querySelectorAll('.slider-card');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// let currentSlide = 0;

// function showSlide(n) {
//     cards.forEach((card, index) => {
//         console.log(index);
//         if (index === n) {
//             card.style.display = 'block';

//         } else {
//             card.style.display = 'none';

//         }
//     });
//     currentSlide = n;
// }

// showSlide(currentSlide);

// nextBtn.addEventListener('click', () => {
//     currentSlide++;
//     if (currentSlide >= cards.length) {
//         currentSlide = 0;
//     }
//     showSlide(currentSlide);
// });

// prevBtn.addEventListener('click', () => {
//     currentSlide--;
//     if (currentSlide < 0) {
//         currentSlide = cards.length - 1; 
//     }
//     showSlide(currentSlide);
// });