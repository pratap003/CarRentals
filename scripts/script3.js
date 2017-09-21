let firstName = document.querySelector('.first');
let lastName = document.querySelector('.last');
let emailId = document.querySelector('.email-address');
let phoneNum = document.querySelector('.phonenum');
let reserveBtn = document.querySelector('.reserve-btn');
let displayData;


let userDetails3 = JSON.parse(localStorage.getItem('user1'));
console.log(userDetails3);

reserveBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let phone = phoneNum.value;
    let email = emailId.value;
    let regexp1 = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;
    let regexp2 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    userDetails3[5] = firstName.value;
    userDetails3[6] = lastName.value;


    function validPhone(phone) {
        if (regexp1.test(phone)) {
            console.log(phone);
        } else {
            alert('You have entered an invalid phone number');
        }
    }
    validPhone(phone);

    function validEmail(email) {
        if (regexp2.test(email)) {
            console.log(email);
        } else {
            alert('You have entered an invalid email address');
        }
    }
    validEmail(email);


    if ((regexp1.test(phone)) && (regexp2.test(email))) {
        localStorage.setItem('user2', JSON.stringify(userDetails3));
        window.location = 'page4.html';
    }
})
