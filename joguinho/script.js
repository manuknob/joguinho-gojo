const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOverScreen = document.getElementById('gameOverScreen');

const jump = () => {
    // Impede de pular caso o jogo já tenha acabado
    if (gameOverScreen.style.display === 'block') return;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Ajuste da colisão considerando o chão verde (15px)
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 95) {
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'midia/gojomorto.png';
        mario.style.width = '150px';
        mario.style.marginLeft = '0px';

        // Mostra a tela de Game Over
        gameOverScreen.style.display = 'block';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

// Função do botão de recomeçar
function recomecar() {
    window.location.reload();
}