// UI 
const labels = document.querySelectorAll('.form-group label'); 
// console.log(labels);

labels.forEach(label=>{
    // console.log(label);
    // console.log(label.innerText);
    // console.log(label.innerText.split());        //result --> ["Email"]
    // console.log(label.innerText.split(''));     //single quote htai lite yin, ta lone chin c khwe pay lite mr  result --> ["E", "m", "a", "i", "l"]

    label.innerHTML = label.innerText
                .split('')
                .map((letter,index)=>
                `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
                .join('');
});