let userDetails = [];

let continueBtn = document.querySelector('.continue');
let userlocation = document.querySelector('.location-text');
let pickup = document.querySelector('.pickup-date');
let dropoff = document.querySelector('.return-date');

continueBtn.addEventListener('click', (event) => {
    userDetails[0] = userlocation.value;
    userDetails[1] = pickup.value;
    userDetails[2] = dropoff.value;
    localStorage.setItem('user', JSON.stringify(userDetails));
    window.location = 'page2.html';
});


$('.datepick').each(function () {
    $(this).datepicker();
});
