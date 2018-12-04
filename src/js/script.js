let photography = document.getElementById('photography');

photography.addEventListener('click', function (event) {

    let container = document.querySelector('.pic-container');
    container.style.display = 'inline';

    let right = document.querySelectorAll('.right');
    right.forEach(function (right) {
        right.classList.add("wow");
        right.classList.add("bounceInRight");
    })

    let middle = document.querySelectorAll('.middle');
    middle.forEach(function (middle) {
        middle.classList.add("wow");
        middle.classList.add("bounceInUp");
    })

    let left = document.querySelectorAll('.left');
    left.forEach(function (left) {
        left.classList.add("wow");
        left.classList.add("bounceInLeft");
    })

    let footer = document.querySelector('.footer');
    footer.style.display = 'inline';


    new WOW().init();
});
