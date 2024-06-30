function toggleNav() {
    var menu = document.querySelector('.navbar-button-container-mobile');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

var typed = new Typed(".dynamic",{
    strings: ["Debanik Dutta", "a Web Developer", "a Programmer", "a Photographer", "a Writer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

var tablinks= document.getElementsByClassName('tab-link');
var tabcontents= document.getElementsByClassName('tag-content');

function opentab(event, tagname){
    console.log("Function Called");
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tag');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tagname).classList.add('active-tag');
}

document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.category-progress');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.getPropertyValue('--progress-width');
                progressBar.style.width = targetWidth;
                observer.unobserve(progressBar);
            }
        });
    }, {
        threshold: 0.1
    });

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});