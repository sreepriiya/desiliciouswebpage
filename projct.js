//........................... navbar..................//

let navbar = document.querySelector('.navbar');

menubar.onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

//........................... contact..................//

// Get the contact link element
const contactLink = document.getElementById('contact-link');

// Get the contact details element
const contactDetails = document.getElementById('contact-details');

// Function to close the contact details
function closeContactDetails() {
    contactDetails.classList.remove('show');
}

// Add a click event listener to the contact link
contactLink.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior
    
    // Toggle the "show" class on the contact details to show/hide it
    contactDetails.classList.toggle('show');
    
    // Prevent the click event from propagating to the document
    e.stopPropagation();
});


//........................... navlink..................//

// Add a click event listener to the entire document
document.addEventListener('click', closeContactDetails);

// Add a scroll event listener to the window
window.addEventListener('scroll', closeContactDetails);

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
  
    function setActiveNavLink() {
      const scrollPosition = window.scrollY;
  
      navLinks.forEach((link) => {
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
  
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
          });
          link.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', setActiveNavLink);
  
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  //........................... for navbar mobile approch..................//



  // Add an event listener to toggle the navigation menu
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the navigation menu when a menu item is clicked
document.querySelectorAll('.navbar a').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.navbar').classList.remove('active');
    });
});


//..................

document.addEventListener('DOMContentLoaded', function() {
    // Your Swiper initialization code here

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay:3000,
        disableOnInteraction: false,

    },
   
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

});


//........

document.addEventListener("DOMContentLoaded", function () {

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 2,
      },
      1024: {
          slidesPerView: 3,
      },
  },
});
});