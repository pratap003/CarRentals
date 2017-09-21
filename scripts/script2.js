let carModels = document.querySelector('.car-models');
let allCars = document.querySelector('.all-cars');
let standardCars = document.querySelector('.standard-cars');
let luxuryCars = document.querySelector('.luxury-cars');
let suvCars = document.querySelector('.suv-cars');
let btn = document.querySelectorAll('.btn');
let img = document.querySelectorAll('.img');


carModels.addEventListener('change', (event) => {
    let selectedOption = event.target.value;
    if (selectedOption == "luxury") {
        allCars.style.display = 'none';
        standardCars.style.display = 'none';
        suvCars.style.display = 'none';
        luxuryCars.style.display = 'flex';
    } else if (selectedOption == "standard") {
        allCars.style.display = 'none';
        suvCars.style.display = 'none';
        luxuryCars.style.display = 'none';
        standardCars.style.display = 'flex';
    } else if (selectedOption == "suv") {
        allCars.style.display = 'none';
        luxuryCars.style.display = 'none';
        standardCars.style.display = 'none';
        suvCars.style.display = 'flex';
    } else if (selectedOption == "alltypes") {
        luxuryCars.style.display = 'none';
        standardCars.style.display = 'none';
        suvCars.style.display = 'none';
        allCars.style.display = 'flex';

    }
})


let userDetails2 = JSON.parse(localStorage.getItem('user'))
console.log(userDetails2);


for (var i = 0; i < img.length; i++) {
    img.forEach(function (each) {
        each.addEventListener("click", function (event) {
            if (event.target.classList[0] === "btn") {
                userDetails2[3] = event.target.parentNode.childNodes[3].innerHTML;
                userDetails2[4] = event.target.parentNode.childNodes[5].getAttribute('src');
            }
            localStorage.setItem('user1', JSON.stringify(userDetails2));
        })

    })
}


for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (event) => {
        window.location.href = "page3.html";
    })
}



//
//allCars.addEventListener('click', (event) => {
//    if (event.target.classList[0] === "btn") {
//        userDetails2[3] = event.target.parentNode.childNodes[3].innerHTML;
//        userDetails2[4] = event.target.parentNode.childNodes[5].getAttribute('src');
//    }
//
//    localStorage.setItem('user1', JSON.stringify(userDetails2));
//})
////
////
//standardCars.addEventListener('click', (event) => {
//    if (event.target.classList[0] === "btn") {
//        userDetails2[3] = event.target.parentNode.childNodes[3].innerHTML;
//        userDetails2[4] = event.target.parentNode.childNodes[5].getAttribute('src');
//    }
//
//    localStorage.setItem('user1', JSON.stringify(userDetails2));
//})
//
//
//luxuryCars.addEventListener('click', (event) => {
//    if (event.target.classList[0] === "btn") {
//        userDetails2[3] = event.target.parentNode.childNodes[3].innerHTML;
//        userDetails2[4] = event.target.parentNode.childNodes[5].getAttribute('src');
//    }
//
//    localStorage.setItem('user1', JSON.stringify(userDetails2));
//})
//
//suvCars.addEventListener('click', (event) => {
//    if (event.target.classList[0] === "btn") {
//        userDetails2[3] = event.target.parentNode.childNodes[3].innerHTML;
//        userDetails2[4] = event.target.parentNode.childNodes[5].getAttribute('src');
//    }
//    localStorage.setItem('user1', JSON.stringify(userDetails2));
//})
