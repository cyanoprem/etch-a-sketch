const container = document.querySelector('.container');

for(let i = 0; i < 256; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}

const square = document.querySelectorAll('.square');

square.forEach(hover => hover.addEventListener('mouseover', function hover(e) {
    e.target.classList.add('hover');
}));


