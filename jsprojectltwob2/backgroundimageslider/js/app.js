// UI 
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let activeslice = 0;

function setbgbody(){
    body.style.backgroundImage = slides[activeslice].style.backgroundImage;
}

setbgbody();


// remove active slice 
function setactiveslide(){
    // remove active from all slide 
    slides.forEach(slide => slide.classList.remove('active'));

    // add active to current slide 
    slides[activeslice].classList.add('active');
}

rightbtn.addEventListener('click',()=>{
    // console.log('i am right ');

    activeslice++;

    if(activeslice > slides.length - 1){
        activeslice = 0;
    }

    // console.log(activeslice);

    setbgbody();
    setactiveslide();


});

leftbtn.addEventListener('click',()=>{
    // console.log('i am left ');

    activeslice--;

    if(activeslice < 0){
        activeslice = slides.length - 1;
    }

    // console.log(activeslice);

    setbgbody();
    setactiveslide();

});