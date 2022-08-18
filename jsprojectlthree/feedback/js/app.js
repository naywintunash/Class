// UI 
const panel = document.querySelector('#panel');
const ratingcontainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendbtn = document.querySelector('#send');


let selecetedrating = "Satisfied";


ratingcontainer.addEventListener('click',(e)=>{
    // console.log('hay');
    // console.log(e.target);

    // if(e.target.classList.contains('rating')){
    //     // console.log(e.target);
    // }

    if(e.target.parentNode.classList.contains("rating")){
        // console.log(e.target);
        removeactive();

        e.target.parentNode.classList.add('active');

        // selecetedrating = e.target.nextElementSibling.textContent;

        selecetedrating = e.target.parentNode.lastElementChild.textContent;
        // console.log(selecetedrating);
    }else if(e.target.classList.contains('rating')){
        removeactive();
        e.target.classList.add('active');
        selecetedrating = e.target.lastElementChild.textContent;
    }

});

function removeactive(){
    for(let i = 0; i < ratings.length ; i++){
        ratings[i].classList.remove('active');
    }
}

sendbtn.addEventListener('click',()=>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <strong>Feedback : ${selecetedrating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});
