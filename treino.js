const btn = document.getElementById("btn");
const color = document.querySelector(".color")
btn.addEventListener("click", function() {
    let r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    color.textContent = 'rgb('+r+', '+g+', '+b+')';
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
});