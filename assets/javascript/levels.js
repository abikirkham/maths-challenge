function startGame(level) {
    localStorage.setItem('mathGameLevel', level);
    window.location.href = 'game.html';
}