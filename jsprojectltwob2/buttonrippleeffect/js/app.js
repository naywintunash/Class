// UI 
const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);
buttons.forEach(button=>{
    // console.log(button);

    button.addEventListener('click',(e)=>{
        // console.log(e);
        // console.log('i am working');

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btnleft);

        const xinside = cx-btnleft;
        const yinside = cy-btntop;
        // console.log(xinside,yinside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top=yinside+"px";
        circle.style.left=xinside+"px";
        // console.log(circle);

        // console.log(e.target);
        // this.target.appendChild(circle);  regular function mr pl ya mr,arrow function mr maya bu this ka
        e.target.appendChild(circle);

        setTimeout(()=>{
            circle.remove();
        },600);

    });
});