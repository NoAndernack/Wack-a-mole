document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector(".cursor");
    const holes = [...document.querySelectorAll('.hole')];
const scoreElement = document.querySelector(".score span");
let score = 0;
const sound = new Audio("img/assets_smash.mp3");



window.addEventListener("mousemove", e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});
window.addEventListener("mouseup", e => {
cursor.classList.remove("active");
});

function run() {
    let timer = null;
    const i = Math.floor(Math.random()* holes.length)
    const hole = holes[i];
    const img = document.createElement("img");
    img.classList.add("mole");
    img.src= "img/macron.png";

    img.addEventListener('click',() => {
        score+= 10;
        sound.play();
        scoreElement.textContent = score;
        img.src = "img/macron-smash.png";
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img);
            run();
        },500)

    })
    hole.appendChild(img)
    timer = setTimeout(() => {
        hole.removeChild(img);
        run();
    },1500)
}
run()

})