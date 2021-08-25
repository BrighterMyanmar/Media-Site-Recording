const scrWidth = document.getElementById("screenWidth");

let onresize = () => {
   width = document.body.clientWidth;
   height = document.body.clientHeight;
   scrWidth.innerHTML = width + " px";
}

window.addEventListener('resize',onresize);
window.onload = onresize;