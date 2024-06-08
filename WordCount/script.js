const inputData = document.getElementById("input");

function count(type) {
    let data = inputData.value.trim();
    if (data === '') {
        alert("Please enter some text");
    } 
    else { 
        if (type === 'word') {
            const wordCount = countWords(data);
            document.getElementById("wordDisplay").textContent = "Word Count: " + wordCount;
            document.getElementById("wordDisplay").style.display = "inline";
        } 
        else if (type === 'letter') {
            const letterCount = countLetters(data);
            document.getElementById("letterDisplay").textContent = "Letter Count: " + letterCount; 
            document.getElementById("letterDisplay").style.display = "inline";
        }
         
    }
}

function countWords(str) {
    const words = str.split(/\s+/);
    return words.length;
}

function countLetters(str) {
    let letterCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            letterCount++;
        }
    }
    return letterCount;
} 
