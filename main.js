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
        activeMole.src = 'seneli.jpeg';  // Change to mole image

        let images = document.querySelectorAll('tr td img');

        for(let i=0; i < images.length; i++){
            let image = images[i];

            if(image !== activeMole){
                image.src = '';
            }
        }

    }, 1000);
}

function whackMole(event) {
    if (event.target.src.includes('seneli.jpeg')) {
        score++;
        event.target.src = 'seneli.jpeg';
        document.getElementById('score').textContent = `Score: ${score}`;
    }

    if(score >= 10) {
        clearInterval(gameInterval);
        document.getElementById('pop-up-container').classList.remove('hidden');
    }
}

for (let i = 1; i <= 9; i++) {
    document.getElementById(`img${i}`).addEventListener('click', whackMole);
}