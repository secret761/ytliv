function generateLink() {
    const userInput = document.getElementById('userInput').value;
    const baseURL = 'https://secret761.github.io/ytliv/play/?max=';
    const fullURL = baseURL + userInput;

    window.location.href = fullURL; // Open the generated URL in the current tab
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        generateLink();
    }
}
