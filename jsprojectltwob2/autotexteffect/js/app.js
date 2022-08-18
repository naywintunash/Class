// UI 
const textel =document.getElementById('text');
const speedel = document.getElementById('speed');
const pgh = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
console.log(pgh.length);

let idx = 1;
let speed = 1000;

function autotext(){
    // console.log('hay');

    textel.innerText = pgh.slice(0,idx); //0 =index number,idx ka variable idx = 1

    // idx += 1;
    idx++;

    if(idx > pgh.length){
        idx = 1;
    }

    setTimeout(autotext,speed);


}

autotext();


// Event Listener 
speedel.addEventListener('input',()=>{
    // console.log('hay');
    // console.log(speedel.value);

    speed = 100 / speedel.value;

});