// Function to make text bigger
function makeTextBigger() {
    var textArea = document.getElementById("userText");
    textArea.style.fontSize = "24pt";
}

// Function to toggle styles based on the selected radio button
function toggleStyles() {
    var textArea = document.getElementById("userText");
    var fancyRadio = document.getElementById("fancy");

    if (fancyRadio.checked) {
        // Apply "FancyShmancy" styles
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        // Remove "FancyShmancy" styles ("BoringBetty")
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to transform text to uppercase and add "-Moo" to each sentence
function mooifyText() {
    var textArea = document.getElementById("userText");
    var text = textArea.value.toUpperCase();

    // Split sentences by period and add "-Moo"
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim()) {
            sentences[i] = sentences[i].trim() + "-Moo";
        }
    }

    // Join the sentences back together
    textArea.value = sentences.join(". ");
}
