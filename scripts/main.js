document.getElementById('form-contact').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const promotion = document.getElementById('promotion').checked;
    console.log(name, email, phone, gender, message, promotion);

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

    if(!phone){
        alert('Phone number should be filled');
        return;
    }

    if(!phone.startsWith('08')){
        alert('Phone number must starts with 08');
        return;
    }

    alert('Thank you for submitting!!');
    window.location.href = 'contactus.html';

})

const navSlide = () => {
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")

    burger.addEventListener("click", () =>{
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
};

navSlide();

document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
});