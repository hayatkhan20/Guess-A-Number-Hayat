let target = generateRandomTarget(); // Initial random target number
let attempts = 0; // Variable to track the number of attempts

function submitNumber() {
    let inputNumber = parseInt(document.getElementById('inputN').value);

    var outputDiv = document.getElementById('results');
    var scoreDiv = document.getElementById('score');

    if (isNaN(inputNumber)) {
        outputDiv.textContent = 'Please enter a valid number.';
    } else {
        attempts++;

        if (inputNumber === target) {
            outputDiv.textContent = 'Congratulations! You guessed the correct number!';
            outputDiv.classList.remove('oops'); // Remove 'oops' class if present
            outputDiv.classList.add('congratulations');
            scoreDiv.textContent = 'Score: ' + attempts;
        } else if (inputNumber < target) {
            outputDiv.textContent = 'Oops! Try again. The correct number is greater than ' + inputNumber;
            outputDiv.classList.remove('congratulations');
            outputDiv.classList.remove('oops'); // Remove 'oops' class if present
            outputDiv.style.color = 'red';
            scoreDiv.textContent = 'Score: ' + attempts;
        } else {
            outputDiv.textContent = 'Oops! Try again. The correct number is less than ' + inputNumber;
            outputDiv.classList.remove('congratulations');
            outputDiv.classList.remove('oops'); // Remove 'oops' class if present
            outputDiv.style.color = 'red';
            scoreDiv.textContent = 'Score: ' + attempts;
        }
    }
}


function refreshGame() {
    target = generateRandomTarget(); // Generate a new random target number
    attempts = 0; // Reset the number of attempts
    document.getElementById('results').textContent = ''; // Clear previous results
    document.getElementById('score').textContent = 'Score: 0'; // Reset the score
}

function generateRandomTarget() {
    return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
}
