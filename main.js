let score = 0;
let activeMole = null;
let gameInterval = null;

function startGame() {
    score = 0;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    if (gameInterval) {
        clearInterval(gameInterval);
    }

    gameInterval = setInterval(() => {
        if (activeMole) {
            activeMole.src = 'seneli.jpeg';
        }
        
        const moleIndex = Math.floor(Math.random() * 9) + 1;
        activeMole = document.getElementById(`img${moleIndex}`);
        activeMole.src = 'mole.jpeg';  // Change to mole image
    }, 1000);
}

function whackMole(event) {
    if (event.target.src.includes('mole.jpeg')) {
        score++;
        event.target.src = 'seneli.jpeg';
        document.getElementById('score').textContent = `Score: ${score}`;
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(`img${i}`).addEventListener('click', whackMole);
}