const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Variables del juego
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    // Reiniciar variables del juego y la interfaz
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
}

const getRandomWord = () => {
    // Seleccionar una palabra y pista aleatoria
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const gameOver = (isVictory) => {
    // Mostrar ventana emergente cuando el juego termina
    const modalText = isVictory ? `¡Encontraste la palabra!` : 'La palabra correcta era:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? '¡Felicidades!' : '¡Juego terminado!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    // Verificar si la letra seleccionada está en la palabra
    if(currentWord.includes(clickedLetter)) {
        // Mostrar letras correctas en la interfaz
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        // Si la letra no está, aumentar el conteo de errores y actualizar la imagen
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true; // Deshabilitar el botón después de ser usado
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Verificar si el juego ha terminado
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Crear botones del teclado y agregar eventos
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
