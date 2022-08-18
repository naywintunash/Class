// UI 
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

checkboxes();

window.addEventListener('scroll',checkboxes);

function checkboxes(){

    let innerheight = window.innerHeight / 2;

    // console.log(innerheight);

    boxes.forEach(box=>{
        // console.log(box);

        const boxtop = box.getBoundingClientRect().top;

        // console.log(boxtop);

        if(boxtop < innerheight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });

}