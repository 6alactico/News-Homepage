const menuButtons = document.querySelectorAll('button');
const overlay = document.querySelector(".container");

menuButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector("nav").classList.toggle('active');
        document.querySelector(".container").classList.toggle('dimmed');
    });
});