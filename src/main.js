const jobs = ['Back-End developer', 'Software Tester'];
const jobDom = document.querySelector('#Jobs');
const itJob = document.querySelector('#itJob');
const btnUp = document.querySelector('#scrollerToHead');
const Projects = document.querySelector('#Projects');
const section2 = document.querySelector('.section2');
const navbar = document.querySelector('header');
const logo = navbar.querySelector('.logo');
const navBtns = navbar.querySelectorAll('a');

let jobIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentJob = jobs[jobIndex];

  if (isDeleting) {
    itJob.innerHTML = currentJob.substring(0, charIndex--);
  } else {
    itJob.innerHTML = currentJob.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentJob.length + 1) {
    typingSpeed = 1500; // Pause before erasing
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    jobIndex = (jobIndex + 1) % jobs.length; // Move to the next job
    typingSpeed = 500; // Pause before typing next job
  }

  setTimeout(typeEffect, typingSpeed);
}

setTimeout(typeEffect, 1200);

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    btnUp.style.opacity = '1';
  } else {
    btnUp.style.opacity = '0';
  }
});
btnUp.addEventListener('click', function () {
  window.scrollTo(0, 0);
});
