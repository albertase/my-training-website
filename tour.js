const clone = document.getElementsByClassName("toggle")[0];
const source = document.getElementsByClassName("navbar-links");

let changeIcon = function(icons) {
    icons.classList.toggle('fa-times');
}

clone.addEventListener('click', function () {
    for(var i = 0; i < source.length; i++) {
        source[i].classList.toggle('active')
    }
})
