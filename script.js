let title = document.getElementById("title");
title.addEventListener("mouseover",function(){
	title.style.color = "pink";
});
title.addEventListener("mouseout",function(){
	title.style.color = "white";
});

let centralImg = document.getElementById('central_img');

centralImg.addEventListener("mouseover", function(){ 
    centralImg.classList.add("img_hover");
});

let triggers = document.querySelectorAll('.nav_div > li');
let background  = document.querySelector('.dropdownBackground');
let nav  = document.querySelector('.top');

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    let dropdown = this.querySelector('.dropdown');
    let dropdownCoords = dropdown.getBoundingClientRect();
    let navCoords = nav.getBoundingClientRect();

    let coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));