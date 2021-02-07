//movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const thor = document.querySelector('.thor img');
const explore = document.querySelector('.explore');
const power = document.querySelector('.power');

//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 17;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 17;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';

//pop out effect
    title.style.transform = "translateZ(150px)";
    thor.style.transform = "translateZ(200px) rotateZ(12deg)";
    explore.style.transform = "translateZ(75px)";
    power.style.transform = "translateZ(100px)";

})

//animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`

    //pop back
    title.style.transform = "translateZ(0px)"
    thor.style.transform = "translateZ(0px) rotateZ(0deg)"
    explore.style.transform = "translateZ(0px)"
    power.style.transform = "translateZ(0px)"
});