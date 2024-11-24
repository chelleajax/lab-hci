const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    if (burger && navLists) {
        burger.addEventListener("click", () => {
            navLists.classList.toggle("nav-active");
            burger.classList.toggle("toggle-burger");
        });
    } else {
        console.error('Element with class "burger" or "nav" not found.');
    }
};

navSlide();

document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            navLinks.classList.toggle("active");
        });
});

document.getElementById('form-contact').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;
    const promotion = document.getElementById('promotion').checked;
    const validation = document.getElementById('validation').checked;
    console.log(name, email, phonenumber, gender, message, phonenumber, promotion, validation);
    if(!name){
        alert('Name should be filled');
        return;
    }

    if(!email){
        alert('Email should be filled');
        return;
    }

    if(!email.endsWith('@gmail.com')){
        alert('Email must ends with @gmail.com');
        return
    }

    if(!phonenumber){
        alert('phonenumber number should be filled');
        return;
    }

    if(!phonenumber.startsWith('08')){
        alert('phonenumber number must starts with 08');
        return;
    }
    
    if(!validation){
        alert("Please check the 'I'm sure the data is correct' checkbox");
        return
    }

    alert('Thank you for submitting!!');
    window.location.href = 'contactus.html';

});