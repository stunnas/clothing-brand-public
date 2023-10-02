const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginBtnPopup = document.querySelector('.login-btn-popup');
const iconClose = document.querySelector('.icon-close');
const inputs = document.querySelectorAll('.input-box input');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add("active");
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove("active");
});
loginBtnPopup.addEventListener('click', ()=> {
    wrapper.classList.add("active-popup");
});
iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove("active-popup");
});

// Loop through each input element (for login/registration popup)
inputs.forEach(input => {
    // Add event listener for 'blur' event
    input.addEventListener('blur', function() {
        const label = this.nextElementSibling; // Assuming label is the next element after input
        if (this.value) {
            // If input has text, add 'up' class to label
            label.classList.add('up');
        } else {
            // If input is empty, remove 'up' class from label
            label.classList.remove('up');
        }
    });
});

document.querySelector('.theme-cb').addEventListener('change', function() {
    // const themeToggle = document.querySelector('.theme-toggle');
    if (this.checked) {
        document.body.classList.add('dark-mode');
        // Photo by <a href="https://unsplash.com/@alexander_ant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Ant</a> on <a href="https://unsplash.com/photos/kvMZ-xXFrA4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        document.body.style.backgroundImage = 'url(/stunnaWeb/images/non-svg/dark-background.jpg)';
        // themeToggle.style.backgroundColor = '#fff';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundImage = 'url(/stunnaWeb/images/non-svg/light-background.jpg)';
        // themeToggle.style.backgroundColor = '#373737';
    }
});

const cardContainers = document.querySelectorAll('.card-container-box');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, {
    threshold: 0.17,
    rootMargin: "-125px"
})

cardContainers.forEach(cc => {
    observer.observe(cc);
})

console.log(cardContainers);
console.log(observer);






  
  
  
  
  
  