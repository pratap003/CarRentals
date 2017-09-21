import userDetails4 from './scripts/script4.js';
console.log(userDetails4);

let result1;
let result2;

class User {
    constructor(
        userLocation,
        userPickup,
        userReturn,
        userCar,
        userCarimg,
        userFirstname,
        userLastname
    ) {
        userLocation == "" ? this.userLocation = 'Hoffman Etates' : this.userLocation = userLocation;
        userPickup == "" ? this.userPickup = '09/20/2017' : this.userPickup = userPickup;
        userReturn == "" ? this.userReturn = '09/25/2017' : this.userReturn = userReturn;
        userCar == "" ? this.userCar = 'Hyundai Elantra' : this.userCar = userCar;
        userCarimg == "" ? this.userCarimg = 'Images/HyundaiElantra.png' : this.userCarimg = userCarimg;
        this.userFirstname = userFirstname;
        this.userLastname = userLastname;
        this.userfullname = userFirstname + " " + userLastname;
    }

    get USERFULLNAME() {
        return (this.userfullname == " " ? this.userfullname = 'prathap naga' : this.userfullname = this.userfullname);
    }

    get USERLOCATION() {
        return this.userLocation.toUpperCase();
    }

    get USERPICKUP() {
        return this.userPickup;
    }
    get USERRETURN() {
        return this.userReturn;
    }
    get USERCAR() {
        return this.userCar;
    }
    get USERCARIMG() {
        return this.userCarimg;
    }
};

let user1 = new User(...userDetails4);
//console.log("User 1: ", user1);
//console.log("Full UserName: ", user1["USERFULLNAME"]);
console.log(userDetails4);


let userproxy = new Proxy(user1, {
    get(target, property) {
        return target[property].toUpperCase();
    }
})
//console.log("proxy user: ", userproxy.userfullname);

result1 = `<p>UserName:<span id="userfname">${userproxy.USERFULLNAME}</span></p><p>Location:<span>${user1.USERLOCATION}</span></p><p>Pickup Date:<span>${user1.USERPICKUP}</span></p><p>Return Date:<span>${user1.USERRETURN}</span></p>`

result2 = `<p>Car Model:<span>${user1.USERCAR}</span></p><div><img src="${user1.USERCARIMG}"></div>`

document.querySelector('.result1').innerHTML = result1;
document.querySelector('.result2').innerHTML = result2;
