// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        if(link.hash !== "") {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Typing animation for hero name
const nameElement = document.getElementById("typed-name");
const text = "Olowa Mosope Oluwapelumi (VECTOR)";
let idx = 0;

function type() {
    if(idx < text.length){
        nameElement.innerHTML += text.charAt(idx);
        idx++;
        setTimeout(type, 100);
    }
}
type();

// Particle background
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*3+1;
        this.speedX = Math.random()*1-0.5;
        this.speedY = Math.random()*1-0.5;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x > canvas.width) this.x = 0;
        if(this.x < 0) this.x = canvas.width;
        if(this.y > canvas.height) this.y = 0;
        if(this.y < 0) this.y = canvas.height;
    }
    draw() {
        ctx.fillStyle = "#ffd700";
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
        ctx.fill();
    }
}

function init() {
    particlesArray = [];
    for(let i=0; i<particleCount; i++){
        particlesArray.push(new Particle());
    }
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particlesArray.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
