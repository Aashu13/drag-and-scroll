var slider = document.querySelector('.wrapper');
console.log(slider);
var startX;
var isDown = false;
var scrollLeft;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX);
});


slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove('active');

});


slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove('active');
});


slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
});