// Task 2
const mario = document.getElementById('mario');
const imgMario = mario.querySelector('img');
imgMario.src = 'assets/mario-stand.gif';

// Task 3
function stopMario() {
    imgMario.src = 'assets/mario-stand.gif';
}

// Tasks 4, 5, 6, 7
function moveMario(event) {
    // Check if Mario is already walking
    if (!imgMario.src.includes('mario-walk.gif')) {
        imgMario.src = 'assets/mario-walk.gif';
    }

    // Get the current position of Mario
    let left = parseInt(getComputedStyle(mario).left) || 0;

    // Move Mario left or right based on the key pressed
    if (event.key === 'ArrowLeft') {
        mario.style.left = `${left - 10}px`;
        imgMario.style.transform = 'rotateY(-180deg)'; // Face left
    } else if (event.key === 'ArrowRight') {
        mario.style.left = `${left + 10}px`;
        imgMario.style.transform = 'rotateY(0deg)'; // Face right
    }
}

// Task 8
document.addEventListener('keydown', moveMario);
document.addEventListener('keyup', stopMario);

